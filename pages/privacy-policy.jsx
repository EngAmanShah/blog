import Link from "next/link";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title key="title">
          Privacy Policy | QatarVisaStatus.com - Check Qatar Visa Status
        </title>
        <meta
          name="description"
          content="Review the privacy policy of QatarVisaStatus.com. Learn how we handle personal information and protect your data while checking Qatar visa statuses."
          key="description"
        />
        <meta
          name="keywords"
          key="keywords"
          content="Qatar visa privacy policy, data protection, personal information, QatarVisaStatus.com"
        />
        <link
          rel="canonical"
          href="https://qatarvisastatus.com/privacy-policy"
        />
      </Head>
      <div className="container py-5 lh-lg">
        <h1 className="mb-5" style={{ fontWeight: "600" }}>
          Privacy Policy
        </h1>
        <div className="mb-4">
          <span className="fw-bold">Effective Date:</span> January 18, 2025
        </div>
        <h5 className="mb-2" style={{ fontWeight: "600" }}>
          Introduction
        </h5>
        <div className="mb-5">
          At <span className="fw-bold">Qatarvisastatus.com</span>, we value your
          privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and safeguard your
          information in connection with our visa status checking services.
        </div>
        <h5 className="mb-2" style={{ fontWeight: "600" }}>
          Information We Collect
        </h5>
        <div className="mb-5">
          <span className="fw-bold">Personal Information:</span> We collect
          personal information such as your passport number, visa number, and
          Qatar ID number when you use our Website for visa-related inquiries.
        </div>
        <div className="mb-5">
          <span className="fw-bold">Usage Data:</span> We collect data about
          your interaction with our Website, including IP addresses, browser
          types, and the pages you visit, to enhance your experience and improve
          our services.
        </div>
        <h5 className="mb-2" style={{ fontWeight: "600" }}>
          How We Use Your Information
        </h5>
        <div className="mb-5">
          <span className="fw-bold">To Provide Visa Services:</span> We use your
          information to offer and manage our Qatar visa status checking
          services, respond to your inquiries, and provide updates on your visa
          status.
        </div>
        <div className="mb-5">
          <span className="fw-bold">To Improve Our Services: </span> We analyze
          usage data to understand how our Website is used and to enhance our
          services and user experience.
        </div>
        <h5 className="mb-2" style={{ fontWeight: "600" }}>
          Sharing Your Information
        </h5>
        <div className="mb-5">
          <span className="fw-bold">With Service Providers:</span> We may share
          your information with third-party service providers who assist us in
          delivering our visa services and maintaining the Website.
        </div>
        <div className="mb-5">
          <span className="fw-bold">For Legal Compliance:</span> We may disclose
          your information to comply with legal obligations or to protect our
          rights and the rights of others.
        </div>
        <h5 className="mb-2" style={{ fontWeight: "600" }}>
          Data Security
        </h5>
        <div className="mb-5">
          We implement industry-standard security measures to protect your
          personal information. However, please be aware that no method of
          electronic transmission or storage is completely secure.
        </div>
        <h5 className="mb-2" style={{ fontWeight: "600" }}>
          Your Rights
        </h5>
        <div className="mb-5">
          <span className="fw-bold">Opt-Out:</span> You can opt out of receiving
          promotional emails from us by following the unsubscribe instructions
          included in those emails.
        </div>
        <h5 className="mb-2" style={{ fontWeight: "600" }}>
          Changes to This Privacy Policy
        </h5>
        <div className="mb-5">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date. Your continued
          use of the Website after such changes signifies your acceptance of the
          revised policy.
        </div>
        <h5 className="mb-2" style={{ fontWeight: "600" }}>
          Contact Us
        </h5>
        <div className="mb-5">
          For questions about this Privacy Policy, please{" "}
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
