import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import ContextProvider from "./ContextProvider";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTopButton from "./BackToTopButton";

export default function Layout({ children }) {
  return (
    <ContextProvider>
      <div
        className={`d-flex flex-column ${poppins.className}`}
        style={{ minHeight: "100vh" }}
      >
        <Navbar />
        <ToastContainer position="top-center" autoClose={3000} />
        <main
          className="flex-grow-1 bg-white"
          style={{
            paddingTop: "66px",
          }}
        >
          {children}
        </main>
        <BackToTopButton />
        <Footer />
      </div>
    </ContextProvider>
  );
}
