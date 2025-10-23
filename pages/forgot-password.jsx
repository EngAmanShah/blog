import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/configuration/firebase-config";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [email, setemail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(`Password reset link sent to ${email}`);
        setemail("");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="container py-5 my-0 my-md-5">
      <form className="mb-3" onSubmit={handleForgotPassword}>
        <div className="mb-5 w-sm-75">
          <label htmlFor="email" className="form-label mb-4">
            A password reset link will be sent to the email
          </label>
          <input
            type="email"
            className="form-control"
            style={{ borderRadius: "30px" }}
            id="email"
            placeholder="Enter email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="primaryButton"
          style={{ borderWidth: 0 }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
