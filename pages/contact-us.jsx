import Head from "next/head";
import { useState } from "react";
import { db } from "@/configuration/firebase-config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";

export default function ContactUs() {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setloading] = useState(false);

  const dataChange = (e) => {
    const { name, value } = e.target;
    if (/^\s+$/.test(value)) {
      return;
    }
    setuserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const collectionRef = collection(db, "contacts");
      await addDoc(collectionRef, {
        ...userData,
        timestamp: Timestamp.now(),
        read: false,
      });
      toast.success("Message sent successfully.");
      setuserData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log("Failed to add doc", error);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <Head>
        <title key="title">
          Contact Us | QatarVisaStatus.com - Get in Touch for Qatar Visa
          Assistance
        </title>
        <meta
          name="description"
          content="Contact QatarVisaStatus.com for any inquiries or assistance regarding your Qatar visa status. We're here to help you with your visa-related questions."
          key="description"
        />
        <meta
          name="keywords"
          key="keywords"
          content="Qatar visa status, contact QatarVisaStatus, visa help, visa inquiries, Qatar visa assistance"
        />
        <link rel="canonical" href="https://qatarvisastatus.com/contact-us" />
      </Head>
      <div
        className="py-5"
        style={{ backgroundColor: "rgba(221, 162, 97, .1)" }}
      >
        <h1 className="text-center" style={{ fontWeight: "600" }}>
          Get in Touch with Us
        </h1>
      </div>
      <div className="container my-5">
        <div
          className="text-secondary text-center mb-5 mx-md-5"
          style={{ fontSize: "18px" }}
        >
          We are here to assist you with any inquiries regarding your Qatar visa
          status. Whether you need help checking your visa, require support, or
          want to provide feedback, reach out to us via the contact form below.
          Our team will respond promptly to ensure you get the assistance you
          need with your Qatar visa status.
        </div>
        <div
          className="mx-md-5 px-2 px-sm-5 py-3 py-sm-5"
          style={{
            boxShadow: "0px 0px 50px 0px rgba(138, 138, 138, 0.1)",
            borderRadius: "32px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control text-secondary"
                style={{ backgroundColor: "#f5f5f5", borderRadius: "30px" }}
                id="name"
                name="name"
                value={userData.name}
                onChange={dataChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="form-control text-secondary"
                style={{ backgroundColor: "#f5f5f5", borderRadius: "30px" }}
                id="email"
                name="email"
                value={userData.email}
                onChange={dataChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject"
                className="form-control text-secondary"
                style={{ backgroundColor: "#f5f5f5", borderRadius: "30px" }}
                id="subject"
                name="subject"
                value={userData.subject}
                onChange={dataChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="form-label">
                Description
              </label>
              <textarea
                className="form-control text-secondary"
                placeholder="Type here..."
                style={{
                  backgroundColor: "#f5f5f5",
                  height: "80px",
                  borderRadius: "15px",
                }}
                id="message"
                name="message"
                value={userData.message}
                onChange={dataChange}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              style={{ border: 0 }}
              className="primaryButton d-inline-block"
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>{" "}
                  Sending
                </>
              ) : (
                <>Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
