import Head from "next/head";
import Pagination from "@mui/material/Pagination";
import usePagination from "@/Hooks/UsePagination";
import { useState, useEffect } from "react";
import { db } from "@/configuration/firebase-config";
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export default function blog({ posts }) {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(21);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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
    if (windowWidth < 992) {
      setPostsPerPage(20);
    } else {
      setPostsPerPage(21);
    }
  }, [windowWidth]);

  return (
    <>
      <Head>
        <title key="title">
          Latest Insights and Updates on Qatar Visa Status | QatarVisaStatus.com
        </title>
        <meta
          name="description"
          content="Explore our blog for the latest news, tips, and insights on Qatar visa services, application processes, and updates. Stay informed with Qatar Visa Status."
          key="description"
        />
        <meta
          name="keywords"
          key="keywords"
          content="Qatar visa status, Qatar visa news, visa application tips, Qatar ID updates, immigration information, Qatar residency, travel to Qatar"
        />
        <link rel="canonical" href="https://qatarvisastatus.com/blog" />
      </Head>
      <div
        className="py-5"
        style={{ backgroundColor: "rgba(221, 162, 97, .1)" }}
      >
        <h1 className="text-center" style={{ fontWeight: "600" }}>
          Qatar Visa Status Blog
        </h1>
      </div>
      <div className="container">
        <div className="text-center mt-3 mb-5">
          Welcome to the Qatar Visa Status blog, your go-to resource for the
          latest insights and updates on Qatar's visa services and immigration
          processes. Whether you're planning to travel, applying for a visa, or
          seeking information about residency options, our blog provides
          valuable tips, in-depth guides, and expert advice tailored to your
          needs. Stay informed and navigate the complexities of Qatar's visa
          system with ease, ensuring a smooth and successful journey.
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
                style={{ minHeight: "50px" }}
                aria-label="Search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                required
              />
            </form>
          </div>
          <div className="container py-5">
            <div className="row mb-5">
              {currentPosts.map((post) => (
                <div key={post.id} className="col-12 col-md-6 col-lg-4 mb-4">
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      paddingTop: "56.25%",
                      borderRadius: "32px",
                      backgroundColor: "#f0f0f0",
                      overflow: "hidden",
                    }}
                  >
                    <Link href={`/post/${post.heading.replace(/\s+/g, "-")}`}>
                      <img
                        src={post.img}
                        alt={post.heading}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "32px",
                        }}
                        className="mb-2 cursor-pointer"
                        loading="lazy"
                      />
                    </Link>
                  </div>
                  <Link
                    href={`/post/${post.heading.replace(/\s+/g, "-")}`}
                    className="text-decoration-none text-dark"
                  >
                    <div
                      className="clamp cursor-pointer"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        minHeight: "60px",
                      }}
                    >
                      {post.heading}
                    </div>
                  </Link>
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
              ))}
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
    </>
  );
}

export async function getServerSideProps() {
  const postsCollection = collection(db, "posts");
  const currentDate = format(new Date(), "yyyy-MM-dd");

  const postsQuery = query(
    postsCollection,
    where("timestamp", "<=", currentDate),
    orderBy("timestamp", "desc")
  );

  const docsSnapshot = await getDocs(postsQuery);

  const posts = docsSnapshot.docs.map((doc) => {
    const postData = doc.data();
    return {
      id: doc.id,
      ...postData,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
