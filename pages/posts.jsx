import { useContext, useState, useEffect } from "react";
import { Context } from "@/components/ContextProvider";
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import usePagination from "@/Hooks/UsePagination";
import { db, storage } from "@/configuration/firebase-config";
import { doc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

import { toast } from "react-toastify";

export default function Posts() {
  const router = useRouter();
  const { posts } = useContext(Context);
  const [windowWidth, setWindowWidth] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(21);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loadingStates, setLoadingStates] = useState({});

  const postsToDisplay = searchResult.length > 0 ? searchResult : posts;
  const {
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    setcurrentPageIndex,
    displayPage,
  } = usePagination(postsPerPage, posts.length);

  const currentPosts = postsToDisplay.slice(startPageIndex, endPageIndex);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchQuery !== "") {
      const result = posts.filter(
        (post) =>
          post.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.content.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (result.length > 0) {
        setcurrentPageIndex(1);
        setSearchResult(result);
      } else {
        toast.info("No posts found");
      }
    }
  };

  const handleDeletePost = async (post) => {
    const confirm = window.confirm("Are you sure you want to delete the post?");
    if (confirm) {
      try {
        setLoadingStates((prevState) => ({
          ...prevState,
          [post.id]: true,
        }));
        const imgRef = ref(storage, post.img);
        await deleteObject(imgRef);
        const postRef = doc(db, "posts", post.id);
        await deleteDoc(postRef);
        toast.success("Post deleted successfully.");
      } catch (error) {
        console.log("Failed to delete the post", error);
        toast.error("Failed to delete the post");
      } finally {
        setLoadingStates((prevState) => ({
          ...prevState,
          [post.id]: false,
        }));
      }
    }
  };

  useEffect(() => {
    if (searchQuery === "") {
      setSearchResult([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 1200) {
      setPostsPerPage(20);
    } else {
      setPostsPerPage(21);
    }
  }, [windowWidth]);

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <div className="d-flex justify-content-between mb-5">
        <h4>Posts</h4>
        <div
          className="primaryButton m-0"
          onClick={() => router.push("/add-post")}
        >
          Add Post
        </div>
      </div>
      {posts.length > 0 ? (
        <>
          <div className="container search-templates d-flex justify-content-center">
            <form
              className="d-flex align-items-center h-100 w-sm-75"
              role="search"
              onSubmit={handleSearch}
            >
              <input
                className="form-control me-2 rounded-pill elevation px-md-5 h-100"
                type="search"
                placeholder="Search for a post"
                aria-label="Search"
                style={{ minHeight: "50px" }}
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                required
              />
            </form>
          </div>
          <div className="container py-5">
            <div className="row mb-5">
              {currentPosts.map((post) => {
                const currentDate = new Date().setHours(0, 0, 0, 0);
                const postDate = new Date(post.timestamp).setHours(0, 0, 0, 0);
                const isPastOrCurrentDate = postDate <= currentDate;
                return (
                  <div
                    key={post.id}
                    className="col-12 col-md-6 col-xl-4 mb-4 position-relative"
                  >
                    <div
                      className="d-flex position-absolute"
                      style={{ top: 0, right: 10 }}
                    >
                      <button
                        className="btn btn-primary m-1"
                        style={{
                          border: 0,
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                        disabled={loadingStates[post.id]}
                        onClick={() => handleDeletePost(post)}
                      >
                        {loadingStates[post.id] ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm text-white"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          </>
                        ) : (
                          <i className="fa fa-trash text-white"></i>
                        )}
                      </button>
                      <div
                        className="btn btn-primary m-1"
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                        onClick={() => router.push(`/edit-post/${post.id}`)}
                      >
                        <i className="fa fa-pencil text-white"></i>
                      </div>
                    </div>
                    <img
                      src={post.img}
                      alt="ede"
                      style={{ width: "100%", borderRadius: "10px" }}
                      className="mb-2 cursor-pointer"
                      onClick={() => {
                        if (isPastOrCurrentDate) {
                          const formattedHeading = post.heading.replace(
                            /\s+/g,
                            "-"
                          );
                          router.push(`/post/${formattedHeading}`);
                        }
                      }}
                    />
                    <div
                      className="clamp cursor-pointer"
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        minHeight: "54px",
                      }}
                      onClick={() => {
                        if (isPastOrCurrentDate) {
                          const formattedHeading = post.heading.replace(
                            /\s+/g,
                            "-"
                          );
                          router.push(`/post/${formattedHeading}`);
                        }
                      }}
                    >
                      {post.heading}
                    </div>
                    <div
                      className="d-flex justify-content-end text-secondary"
                      style={{ fontSize: "14px" }}
                    >
                      {new Date(post.timestamp).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            {postsToDisplay.length > (postsPerPage === 21 ? 21 : 20) && (
              <div className="d-flex justify-content-center mt-4 mt-lg-0">
                <Pagination
                  size={windowWidth < 400 ? "small" : ""}
                  count={totalPages}
                  page={currentPageIndex}
                  className="custom-pagination"
                  onChange={(event, page) => displayPage(page)}
                />
              </div>
            )}
          </div>
        </>
      ) : (
        <h5 className="text-center my-5">No Posts</h5>
      )}
    </div>
  );
}
