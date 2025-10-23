import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="navbar navbar-expand-lg bg-primary-color px-xl-5 fixed-top"
      style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand p-0" href="/">
          <div className="d-flex align-items-center">
            <Image
              src="/logo.png"
              alt="logo"
              className="me-3 d-none d-sm-block"
              width={50}
              height={50}
            />
            <div style={{ fontWeight: "bold", color: "white" }}>
              Qatar Visa Status
            </div>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          style={{ borderColor: "white", color: "white" }}
        >
          <span
            className="navbar-toggler-icon"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3E%3Cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3E%3C/svg%3E')",
            }}
          ></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="#offcanvasNavbarLabel"
        >
          <div className="offcanvas-header bg-primary-color">
            <div data-bs-dismiss="offcanvas">
              <Link className="navbar-brand p-0" href="/">
                <div className="d-flex align-items-center">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    className="me-3"
                    width={50}
                    height={50}
                  />
                  <div style={{ fontWeight: "bold", color: "white" }}>
                    Qatar Visa Status
                  </div>
                </div>
              </Link>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              style={{
                filter: "invert(1)",
              }}
            ></button>
          </div>
          <div className="offcanvas-body bg-primary-color">
            <ul className="navbar-nav justify-content-end align-items-end align-items-sm-start flex-grow-1">
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link fw-bold"
                  href="/"
                  style={{
                    color: "white",
                    borderBottom:
                      pathname === "/" ? "1px solid white" : undefined,
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link fw-bold"
                  href="/moi-qatar-id-status"
                  style={{
                    color: "white",
                    borderBottom:
                      pathname === "/moi-qatar-id-status"
                        ? "1px solid white"
                        : undefined,
                  }}
                >
                  Qatar ID Status
                </Link>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link fw-bold"
                  href="/blog"
                  style={{
                    color: "white",
                    borderBottom:
                      pathname === "/blog" ? "1px solid white" : undefined,
                  }}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <div
                    className="dropdown-toggle d-flex align-items-center justify-content-end justify-content-sm-start nav-link fw-bold text-white"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </div>
                  <ul className="dropdown-menu dropdown-menu-start dropdown-menu-lg-end">
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        className="dropdown-item"
                        href="/visa-status-messages"
                      >
                        Status Messages
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        className="dropdown-item"
                        href="/visa-rejection-reasons"
                      >
                        Rejection Reasons
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        className="dropdown-item"
                        href="/qatar-visa-by-passport"
                      >
                        Visa Check by Passport
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        className="dropdown-item"
                        href="/qatar-visa-by-number"
                      >
                        Visa Check by its number
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link className="dropdown-item" href="/qatar-visa-by-qid">
                        Visa Check by QID
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        className="dropdown-item"
                        href="/qatar-visa-using-qvc"
                      >
                        Visa Check using QVC
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        className="dropdown-item"
                        href="/qid-status-by-qid-number"
                      >
                        QID Status using qid number
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
