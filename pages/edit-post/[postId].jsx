import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(
  () => import("jodit-react").then((mod) => mod.default),
  { ssr: false }
);
import { toast } from "react-toastify";
import { db, storage } from "@/configuration/firebase-config";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { nanoid } from "nanoid";
import Cropper from "react-easy-crop";
import { useRouter } from "next/router";
import useAuth from "@/Hooks/UseAuth";

import Loading from "@/components/Loading";

export default function EditPost() {
  const { user, isAdmin, loading } = useAuth();
  const router = useRouter();
  const { postId } = router.query;
  const [postData, setPostData] = useState({
    heading: "",
    content: "",
    img: "",
    timestamp: "",
  });
  const [imgUrl, setImgUrl] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setcroppedAreaPixels] = useState(null);
  const [localImg, setLocalImg] = useState({ file: null, url: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImgSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const img = new Image();
      img.src = URL.createObjectURL(selectedFile);
      img.onload = () => {
        setImgUrl(URL.createObjectURL(selectedFile));
        event.target.value = "";
        document.getElementById("openModal").click();
      };
    }
  };

  const handleSaveImage = () => {
    const tempCanvas = document.createElement("canvas");
    const ctx = tempCanvas.getContext("2d");

    const x = croppedAreaPixels.x;
    const y = croppedAreaPixels.y;
    const width = croppedAreaPixels.width;
    const height = croppedAreaPixels.height;

    tempCanvas.width = width;
    tempCanvas.height = height;

    const img = new Image();
    img.src = imgUrl;
    ctx.drawImage(img, x, y, width, height, 0, 0, width, height);

    const croppedDataURL = tempCanvas.toDataURL("image/jpeg");
    fetch(croppedDataURL)
      .then((res) => res.blob())
      .then((blob) => {
        const croppedImageFile = new File([blob], "post-image", {
          type: "image/jpeg",
        });
        setLocalImg({
          url: croppedDataURL,
          file: croppedImageFile,
        });
      });
    document.getElementById("closeModal").click();
  };

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    if (name === "heading") {
      if (value.includes("-")) {
        setError("Hyphens are not allowed in the heading.");
        return;
      } else {
        setError("");
      }
    }
    setPostData({ ...postData, [name]: value });
  };

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      let imageURL = postData.img;
      if (localImg.file) {
        const imgRef = ref(storage, postData.img);
        await uploadBytes(imgRef, localImg.file);
        imageURL = await getDownloadURL(imgRef);
      }

      const postsRef = doc(db, "posts", postId);
      await updateDoc(postsRef, {
        img: imageURL,
        ...postData,
      });

      toast.success("Post updated successfully.");
      router.push("/dashboard");
      setLocalImg({ file: null, url: "" });
    } catch (error) {
      console.log("Failed to update post", error);
      toast.error("Failed to update post");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      if (postId) {
        try {
          const postRef = doc(db, "posts", postId);
          const postSnap = await getDoc(postRef);
          if (postSnap.exists()) {
            const post = postSnap.data();
            setPostData({
              heading: post.heading,
              content: post.content,
              img: post.img || "",
              timestamp: post.timestamp,
            });
            setLocalImg({ url: post.img || "", file: null });
          } else {
            toast.error("Post not found");
          }
        } catch (error) {
          console.error("Failed to fetch post data:", error);
          toast.error("Failed to fetch post data");
        }
      }
    };
    fetchPost();
  }, [postId]);

  useEffect(() => {
    const modal = document.getElementById("Modal");
    if (modal) {
      modal.addEventListener("hidden.bs.modal", () => {
        setZoom(1);
        setCrop({ x: 0, y: 0 });
        setcroppedAreaPixels(null);
        setImgUrl("");
      });
    }
  }, []);

  useEffect(() => {
    if (!loading && !isAdmin) {
      router.replace("/login");
    }
  }, [loading]);

  if (loading) {
    return <Loading />;
  }

  return isAdmin ? (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <h4 className="mb-5">Update Post</h4>
      <label className="form-label">Image</label>
      {localImg.url !== "" && (
        <img
          src={localImg.url}
          alt="img"
          style={{ width: "100%", borderRadius: "30px" }}
          className="mb-4"
        />
      )}
      <div className="d-flex mb-3">
        <div
          className="primaryButton text-center me-2"
          style={{ width: "107.27px" }}
          onClick={() => document.getElementById("ImgInput").click()}
        >
          {localImg.url !== "" ? "Change" : "Add"}
        </div>
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImgSelect}
        style={{ display: "none" }}
        id="ImgInput"
      />
      <form onSubmit={handleUpdatePost}>
        <div className="mb-4">
          <label htmlFor="postHeading" className="form-label">
            Heading
          </label>
          <input
            type="text"
            className="form-control"
            id="postHeading"
            name="heading"
            value={postData.heading}
            onChange={handleDataChange}
            required
          />
          {error !== "" && <div className="form-text text-danger">{error}</div>}
        </div>
        <label className="form-label">Content</label>
        <div className="mb-4">
          <JoditEditor
            value={postData.content}
            tabIndex={1}
            onChange={(newContent) =>
              setPostData({ ...postData, content: newContent })
            }
            config={{ height: 400 }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="posttimestamp" className="form-label">
            Published Date
          </label>
          <input
            type="date"
            className="form-control"
            id="posttimestamp"
            name="timestamp"
            value={postData.timestamp}
            onChange={handleDataChange}
            required
          />
        </div>
        <button
          style={{ border: 0 }}
          className="primaryButton d-inline"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>{" "}
              Updating
            </>
          ) : (
            <>Update</>
          )}
        </button>
      </form>
      {/* Cover Modal */}
      <button
        id="openModal"
        className="d-none"
        data-bs-target="#Modal"
        data-bs-toggle="modal"
      ></button>
      <div className="modal fade" id="Modal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body p-4">
              <h5 className="mb-4">Crop Image</h5>
              <div
                className="crop-container mb-4"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "300px",
                }}
              >
                <Cropper
                  image={imgUrl}
                  crop={crop}
                  zoom={zoom}
                  aspect={16 / 9}
                  cropShape="rect"
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={(croppedArea, croppedAreaPixels) =>
                    setcroppedAreaPixels(croppedAreaPixels)
                  }
                />
              </div>
              <div className="controls">
                <input
                  type="range"
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  aria-labelledby="Zoom"
                  onChange={(e) => {
                    setZoom(e.target.value);
                  }}
                  className="zoom-range"
                />
              </div>
              <div className="d-flex">
                <button
                  type="submit"
                  className="primaryButton me-3"
                  style={{ border: 0 }}
                  onClick={handleSaveImage}
                >
                  Save
                </button>
                <div
                  className="greyButton"
                  id="closeModal"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
