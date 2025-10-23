import React, { useState, useEffect, useContext } from "react";
import { Context } from "@/components/ContextProvider";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/configuration/firebase-config";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import useAuth from "@/Hooks/UseAuth";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import Loading from "@/components/Loading";

export default function Login() {
  const { user, isAdmin, loading } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setuserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then(async (userCredentials) => {
        const user = userCredentials.user;
        if (!user.emailVerified) {
          signOut(auth);
          toast.error("Verify your email to continue");
          return;
        } else if (user.uid !== "rL9yGg1z2QM1zxGgVpQciYQ0zXG2") {
          signOut(auth);
          toast.error("You are not allowed to login");
          return;
        } else {
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error.message);
        toast.error(`Error logging in: ${error.message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!loading && user && isAdmin) {
      router.push("/dashboard");
    }
  }, [loading]);

  if (loading) {
    return <Loading />;
  }

  return !isAdmin ? (
    <div className="container py-5 my-0 my-md-5">
      <div className="row">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <h1 className="mb-3 primary-color" style={{ fontWeight: "600" }}>
            Login
          </h1>
          <div className="mb-5" style={{ fontSize: "20px" }}>
            Enter your details to Log in.
          </div>
          <form className="mb-3 w-md-75" onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="userEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                style={{ borderRadius: "30px" }}
                id="userEmail"
                name="email"
                aria-describedby="emailHelp"
                value={userData.email}
                onChange={handleDataChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userPassword" className="form-label">
                Password
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type={visible ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  style={{ borderRadius: "30px" }}
                  id="userPassword"
                  name="password"
                  value={userData.password}
                  onChange={handleDataChange}
                  required
                />
                {visible ? (
                  <VisibilityIcon
                    style={{
                      position: "absolute",
                      top: 7,
                      right: 10,
                      color: "rgba(134, 141, 151, 1)",
                      cursor: "pointer",
                    }}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <VisibilityOffIcon
                    style={{
                      position: "absolute",
                      top: 7,
                      right: 10,
                      color: "rgba(134, 141, 151, 1)",
                      cursor: "pointer",
                    }}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className="mb-3 form-check d-flex justify-content-end">
              <Link
                href="/forgot-password"
                className="text-decoration-none primary-color fw-bold"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="primaryButton"
              style={{ borderWidth: 0 }}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </>
              ) : (
                <>Login</>
              )}
            </button>
          </form>
          <div className="row">
            <h6>
              Don't have an account?{" "}
              <span>
                <Link
                  href="/register"
                  className="text-decoration-none primary-color fw-bold"
                >
                  Register
                </Link>
              </span>
            </h6>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <img
            src="/qatar-visa-status.png"
            alt="qatar-visa-status"
            width="100%"
          />
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
