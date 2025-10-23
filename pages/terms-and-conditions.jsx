import Link from "next/link";
import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title key="title">
          Terms and Conditions | QatarVisaStatus.com - Check Qatar Visa Status
        </title>
        <meta
          name="description"
          content="Read the Terms and Conditions of QatarVisaStatus.com, a platform for checking Qatar visa statuses. Understand the guidelines for using our services."
          key="description"
        />
        <meta
          name="keywords"
          key="keywords"
          content="Qatar visa status, visa terms and conditions, visa services guidelines, QatarVisaStatus.com"
        />
        <link
          rel="canonical"
          href="https://qatarvisastatus.com/terms-and-conditions"
        />
      </Head>
      <div className="container py-5 lh-lg">
        <h1 className="mb-5" style={{ fontWeight: "600" }}>
          Terms and Conditions
        </h1>
        <div className="mb-4">
          <span className="fw-bold">Effective Date:</span> January 18, 2025
        </div>
        <h5 className="mb-2" style={{ fontWeight: "600" }}>
          Introduction
        </h5>
        <div className="mb-5">
          Welcome to <span className="fw-bold">Qatarvisastatus.com</span>, a
          resource for checking Qatar visa statuses and related information. By
          accessing or using our Website, you agree to comply with and be bound
          by these Terms and Conditions.
        </div>
        <h5 className="mb-2" style={{ fontWeight: "600" }}>
          Use of Our Website
        </h5>
        <div className="mb-5">
          <span className="fw-bold">Prohibited Activities:</span> You agree not
          to use our Website for any illegal or unauthorized purposes. This
          includes transmitting harmful content, attempting unauthorized access,
          or using automated systems to extract data.
        </div>
        <h5 className="mb-2" style={{ fontWeight: "600" }}>
          Intellectual Property
        </h5>
        <div className="mb-5">
          <span className="fw-bold">Ownership:</span> All content on
          qatarvisastatus.com, including text, graphics, and logos, is the
          property of qatarvisastatus.com or its licensors. You may not
          reproduce, distribute, or modify this content without explicit
          permission.
        </div>
        <h5 className="mb-2" style={{ fontWeight: "600" }}>
          Disclaimers and Limitation of Liability
        </h5>
        <div className="mb-5">
          <span className="fw-bold">No Warranty:</span> Our Website is provided
          "as is" without any warranties of any kind. We do not guarantee that
          the Website will be error-free or continuously available.
        </div>
        <div className="mb-5">
          <span className="fw-bold">Limitation of Liability:</span> We are not
          liable for any indirect, incidental, or consequential damages arising
          from your use of the Website. Our total liability is limited to the
          maximum extent permitted by law.
        </div>
        <h5 className="mb-2" style={{ fontWeight: "600" }}>
          Changes to These Terms
        </h5>
        <div className="mb-5">
          We may update these Terms periodically. Changes will be posted on this
          page with an updated effective date. Your continued use of the Website
          constitutes your acceptance of these changes.
        </div>
        <h5 className="mb-2" style={{ fontWeight: "600" }}>
          Governing Law
        </h5>
        <div className="mb-5">
          These Terms are governed by the laws of Qatar. Any disputes related to
          these Terms will be resolved in the courts of Qatar.
        </div>
        <h5 className="mb-2" style={{ fontWeight: "600" }}>
          Contact Us
        </h5>
        <div className="mb-5">
          For any questions or concerns about these Terms, please{" "}
          <Link
            href="/contact-us"
            className="text-decoration-none primary-color fw-bold"
          >
            Contact Us
          </Link>
          .
        </div>
      </div>
    </>
  );
}
