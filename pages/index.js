import Head from "next/head";
import { useState } from "react";
import { countries } from "countries-list";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    visaNumber: "",
    passportNumber: "",
    nationality: "",
  });

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (
        formData.visaNumber.trim() === "" &&
        formData.passportNumber.trim() === ""
      ) {
        toast.error("Please enter passport or visa number");
        return;
      }
      router.push(
        "https://portal.moi.gov.qa/wps/portal/MOIInternet/services/inquiries/visaservices/enquiryandprinting"
      );
    } catch (error) {
      console.log("Failed to check the status", error);
      toast.error("Failed to check the status", error.message);
    }
  };

  return (
    <>
      <Head>
        <title>
          Check Qatar Visa Status Online - MOI Qatar Visa Inquiry Guide
        </title>
        <meta
          name="description"
          content="Easily check your MOI Qatar visa status online using passport or visa number. Access the official MOI portal to verify visa details and print your Qatar visa."
        />
        <meta
          name="keywords"
          content="Qatar visa check, MOI Qatar visa inquiry, check Qatar visa status, Qatar visa printing, MOI visa verification, visa status online, Qatar visa guide"
        />
        <link rel="canonical" href="https://qatarvisastatus.com/" />
      </Head>
      <div className="bg-light lh-lg">
        <div className="container py-5">
          <h1 className="mb-2 text-center" style={{ fontWeight: "600" }}>
            MOI Qatar Visa Inquiry & Printing Guide
          </h1>
          <p className="text-center mb-4">
            Easily check your <strong>MOI Qatar visa</strong> status using the
            official{" "}
            <a href="https://portal.moi.gov.qa/">www.moi.gov.qa inquiry</a>{" "}
            portal. Whether you need to verify your visa or check passport
            details, our tool provides a seamless experience for all your{" "}
            <strong>Qatar visa check</strong> needs.
          </p>
          <form
            className="shadow px-2 py-3 p-sm-4 bg-white mb-5"
            style={{ borderRadius: "20px" }}
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="passportNumber"
                className="form-label"
                style={{ fontWeight: "600" }}
              >
                Passport Number
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your passport number"
                style={{ borderRadius: "30px" }}
                id="passportNumber"
                name="passportNumber"
                value={formData.passportNumber}
                onChange={handleDataChange}
              />
            </div>
            <div className="d-flex align-items-center mb-4">
              <div
                className="bg-primary-color"
                style={{ flex: 1, height: "1px" }}
              ></div>
              <div className="primary-color" style={{ padding: "0 10px" }}>
                OR
              </div>
              <div
                className="bg-primary-color"
                style={{ flex: 1, height: "1px" }}
              ></div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="visaNumber"
                className="form-label"
                style={{ fontWeight: "600" }}
              >
                Visa Number
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your visa number"
                style={{ borderRadius: "30px" }}
                id="visaNumber"
                name="visaNumber"
                value={formData.visaNumber}
                onChange={handleDataChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="nationality"
                className="form-label"
                style={{ fontWeight: "600" }}
              >
                Nationality
              </label>
              <select
                className="form-select"
                id="nationality"
                value={formData.nationality}
                name="nationality"
                onChange={handleDataChange}
                required
              >
                <option value="" disabled>
                  --Select-Nationality--
                </option>
                {Object.entries(countries).map(([code, country]) => (
                  <option key={code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <button
                type="submit"
                style={{ border: 0 }}
                className="primaryButton w-50"
              >
                Submit
              </button>
              <div
                className="primaryButton text-center w-50"
                onClick={() =>
                  setFormData({
                    visaNumber: "",
                    passportNumber: "",
                    nationality: "",
                  })
                }
              >
                Reset
              </div>
            </div>
          </form>
          <p className="text-center mt-4 mb-5">
            Need to check your visa status? Use our{" "}
            <strong>Qatar visa check</strong> tool to access real-time updates.
            Simply enter your passport or visa number and select your
            nationality to begin.
          </p>

          <h2 className="mt-5 mb-4 text-center" style={{ fontWeight: "600" }}>
            What If Your Visa Is Rejected?
          </h2>
          <p className="lh-lg" style={{ maxWidth: "800px", margin: "auto" }}>
            If your visa status shows as rejected or invalid:
          </p>
          <ul
            className="lh-lg mt-3"
            style={{ maxWidth: "800px", margin: "auto" }}
          >
            <li>Contact your sponsor or employer for clarification</li>
            <li>
              Ensure your passport details and application info are correct
            </li>
            <li>Visit the nearest Qatar Visa Center or Embassy if required</li>
            <li>
              You may reapply after correcting the issue or waiting for
              eligibility
            </li>
          </ul>
          <h2 className="mt-5 mb-4 text-center" style={{ fontWeight: "600" }}>
            When Is the Best Time to Apply for a Qatar Visa?
          </h2>
          <p className="lh-lg" style={{ maxWidth: "800px", margin: "auto" }}>
            It's recommended to apply for a Qatar visa at least 2–3 weeks before
            your intended travel date. Avoid peak seasons such as Ramadan, Eid
            holidays, or major events like the FIFA World Cup, as processing may
            take longer.
          </p>
          <h2 className="mt-5 mb-4 text-center" style={{ fontWeight: "600" }}>
            Tips for a Smooth Visa Status Check
          </h2>
          <ul className="lh-lg" style={{ maxWidth: "800px", margin: "auto" }}>
            <li>
              Make sure your passport/visa number is correct — double check
              before submitting.
            </li>
            <li>
              Select the correct nationality from the dropdown — spelling
              matters.
            </li>
            <li>
              If you get an error, wait a few minutes and try again; the MOI
              server may be busy.
            </li>
            <li>
              Use a stable internet connection for better loading and printing.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
