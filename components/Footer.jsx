import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  return (
    <footer className="footer lh-lg text-center-sm bg-primary-color text-white">
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-6 mb-4">
            <Link href="/" className="text-decoration-none">
              <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-start">
                <Image
                  src="/logo.png"
                  width={120}
                  height={120}
                  alt="logo"
                  className="me-3"
                />
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "22px",
                    color: "white",
                  }}
                >
                  Qatar Visa Status
                </div>
              </div>
            </Link>
            <div className="mt-2 px-3 px-sm-0">
              Easily perform your MOI Qatar visa check online. Get real-time
              updates on visa approval, renewal, and cancellation using your
              passport or visa number. Fast and secure!
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <div className="d-flex flex-column">
              <h6 className="mb-3">
                <Link
                  href="/about-us"
                  className="text-decoration-none text-white"
                >
                  About Us
                </Link>
              </h6>
              <h6 className="mb-3">
                <Link
                  href="/privacy-policy"
                  className="text-decoration-none text-white"
                >
                  Privacy Policy
                </Link>
              </h6>
              <h6 className="mb-3">
                <Link
                  href="/terms-and-conditions"
                  className="text-decoration-none text-white"
                >
                  Terms & Conditions
                </Link>
              </h6>
              <h6>
                <Link href="/blog" className="text-decoration-none text-white">
                  Blog
                </Link>
              </h6>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <div className="d-flex flex-column">
              <h6 className="mb-3">
                <Link
                  href="/contact-moi"
                  className="text-decoration-none text-white"
                >
                  Contact MOI
                </Link>
              </h6>
              <h6 className="mb-3">
                <Link
                  href="/contact-us"
                  className="text-decoration-none text-white"
                >
                  Contact Us
                </Link>
              </h6>
              <h6 className="mb-3">
                <Link
                  href="/support"
                  className="text-decoration-none text-white"
                >
                  Support
                </Link>
              </h6>
              <h6>
                <Link href="/faqs" className="text-decoration-none text-white">
                  FAQs
                </Link>
              </h6>
            </div>
          </div>
        </div>
        <hr />
        <div className="row text-center text-white">
          <div className="col pb-3">
            Copyright &copy; {currentDate?.getFullYear()}{" "}
            <span className="primary-orange" style={{ fontWeight: "600" }}>
              Qatarvisastatus.com
            </span>
            . All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
