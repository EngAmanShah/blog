import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { auth, db } from "@/configuration/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import useAuth from "@/Hooks/UseAuth";
import { useRouter } from "next/router";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import Loading from "@/components/Loading";

export default function Register() {
  const { user, isAdmin, loading } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [cpVisible, setcpVisible] = useState(false);
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setuserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (userData.password !== userData.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const user = userCredential.user;
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        name: userData.name,
        email: userData.email,
      });
      await sendEmailVerification(userCredential.user);
      toast.success("Email verification sent, please verify");
      await signOut(auth);
      setuserData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      router.push("/login");
    } catch (error) {
      console.error("Error signing up:", error.message);
      toast.error("Error signing up:" + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!loading && user && isAdmin) {
      router.push("/dashboard");
    }
  }, [loading]);

  if (loading) {
    return <Loading />;
  }

  return !user ? (
    <div className="register">
      <div className="container py-5 my-0 my-md-5">
        <div className="row">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <h1 className="mb-3 primary-color" style={{ fontWeight: "600" }}>
              Register
            </h1>
            <div className="mb-5" style={{ fontSize: "20px" }}>
              Enter your details to register.
            </div>
            <form className="mb-3" onSubmit={handleRegister}>
              <div className="mb-4">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  style={{ borderRadius: "30px" }}
                  id="name"
                  name="name"
                  value={userData.name}
                  onChange={handleDataChange}
                  required
                />
              </div>
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
                  value={userData.email}
                  onChange={handleDataChange}
                  required
                />
              </div>
              <div className="mb-4">
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
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type={cpVisible ? "text" : "password"}
                    className="form-control"
                    placeholder="Confirm your password"
                    style={{ borderRadius: "30px" }}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={userData.confirmPassword}
                    onChange={handleDataChange}
                    required
                  />
                  {cpVisible ? (
                    <VisibilityIcon
                      style={{
                        position: "absolute",
                        top: 7,
                        right: 10,
                        color: "rgba(134, 141, 151, 1)",
                        cursor: "pointer",
                      }}
                      onClick={() => setcpVisible(false)}
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
                      onClick={() => setcpVisible(true)}
                    />
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="primaryButton d-inline-block px-5"
                style={{ borderWidth: 0 }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  <>Register</>
                )}
              </button>
            </form>
            <div className="row">
              <h6>
                Already have an account?{" "}
                <span>
                  <Link
                    id="login"
                    href="/login"
                    className="text-decoration-none primary-color fw-bold"
                  >
                    Login
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
    </div>
  ) : (
    <Loading />
  );
}
