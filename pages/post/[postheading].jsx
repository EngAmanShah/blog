import Head from "next/head";
import { db } from "@/configuration/firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { FacebookShareButton } from "react-share";
import { toast } from "react-toastify";

export default function Post({ post }) {
  const copyToClipboard = () => {
    const currentURL = `qatarvisastatus.com/post/${formattedHeading}`;
    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        toast.success("Link copied to clipboard!");
      })
      .catch((error) => {
        console.error("Copy failed:", error);
      });
  };

  const sendEmail = () => {
    const subject = encodeURIComponent(`${post.heading}`);
    const body = encodeURIComponent(
      `Check out this post: qatarvisastatus.com/post/${formattedHeading}`
    );
    const emailLink = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = emailLink;
  };

  const formattedHeading = post.heading.replace(/\s+/g, "-");

  return (
    <>
      <Head>
        <title key="title">{post.heading}</title>
        <meta key="description" name="description" content={post.heading} />
        <meta key="og-title" property="og:title" content={post.heading} />
        <meta
          key="og-desciption"
          property="og:description"
          content={post.heading}
        />
        <meta key="og-img" property="og:image" content={post.img} />
        <meta key="og-type" property="og:type" content="article" />
        <meta
          key="og-url"
          property="og:url"
          content={`https://qatarvisastatus.com/post/${formattedHeading}`}
        />
      </Head>
      <div className="container py-5">
        <h1 className="text-center mb-3" style={{ fontWeight: "600" }}>
          {post.heading}
        </h1>
        <div
          className="text-center text-secondary mb-5"
          style={{ fontSize: "16px", fontWeight: "bold" }}
        >
          {new Date(post.timestamp).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div
          style={{
            width: "100%",
            borderRadius: "30px",
            position: "relative",
            overflow: "hidden",
          }}
          className="mb-5"
        >
          <div
            style={{
              paddingTop: "56.25%",
              backgroundColor: "#f0f0f0",
              width: "100%",
            }}
          />
          <img
            src={post.img}
            alt={post.heading}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "30px",
              position: "absolute",
              top: "0",
              left: "0",
              objectFit: "cover",
            }}
            loading="lazy"
          />
        </div>
        <div
          className="mb-5"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="d-flex flex-column align-items-center flex-sm-row justify-content-center">
          <FacebookShareButton
            className="me-sm-3 mb-3 mb-sm-0"
            hashtag={post.heading}
            url={`https://qatarvisastatus.com/post/${formattedHeading}`}
          >
            <div
              title="Share on facebook"
              className="px-4 py-2"
              style={{
                backgroundColor: "#316FF6",
                color: "white",
                borderRadius: "6px",
                width: "118.34px",
              }}
            >
              <i className="fa fa-facebook me-2"></i>
              Share
            </div>
          </FacebookShareButton>
          <div
            title="Share via email"
            className="cursor-pointer me-sm-3 mb-3 mb-sm-0 px-4 py-2"
            style={{
              backgroundColor: "grey",
              color: "white",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "118.34px",
            }}
            onClick={sendEmail}
          >
            <i className="fa fa-envelope me-2"></i>
            Share
          </div>
          <div
            title="Copy link to clipboard"
            className="cursor-pointer px-4 py-2"
            style={{
              backgroundColor: "#55A84F",
              color: "white",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "118.34px",
            }}
            onClick={copyToClipboard}
          >
            <i className="fa fa-link me-2"></i>
            Copy
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { postheading } = context.query;

  const formattedHeading = postheading.replace(/-/g, " ");
  const postsRef = collection(db, "posts");
  const q = query(postsRef, where("heading", "==", formattedHeading));

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return {
      notFound: true,
    };
  }

  const docSnapshot = querySnapshot.docs[0];

  const post = {
    id: docSnapshot.id,
    ...docSnapshot.data(),
  };

  return {
    props: {
      post,
    },
  };
}
