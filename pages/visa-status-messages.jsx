import Head from "next/head";
import Link from "next/link";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaHourglassHalf,
  FaPrint,
  FaUserCheck,
  FaPassport,
  FaSyncAlt,
  FaExclamationCircle,
} from "react-icons/fa";

export default function VisaStatusMessages() {
  const visaStatuses = [
    {
      title: "Under Process",
      description:
        "Your MOI Qatar visa application is currently being reviewed. You can monitor your progress through the MOI Qatar visa inquiry or QVC Qatar visa check services.",
      icon: <FaHourglassHalf className="text-warning" />,
    },
    {
      title: "Valid to Use",
      description:
        "Your MOI Qatar visa is ready for travel. Confirm the visa status via the MOI Qatar visa inquiry & printing portal or QVC Qatar.",
      icon: <FaPassport className="text-success" />,
    },
    {
      title: "Ready to Print",
      description:
        "Your visa has been approved. You can proceed to print your visa using the MOI Qatar visa inquiry & printing system.",
      icon: <FaPrint className="text-primary" />,
    },
    {
      title: "Under Outside Process",
      description:
        "Your employment contract is still being processed. Track updates through the moi.gov.qa visa inquiry service.",
      icon: <FaSyncAlt className="text-warning" />,
    },
    {
      title: "Processing Delay",
      description:
        "Your visa processing is delayed. Contact MOI Qatar or QVC Qatar for further information and assistance.",
      icon: <FaSyncAlt className="text-warning" />,
    },
    {
      title: "Payment Pending",
      description:
        "Payment is pending for your approved visa. Complete payment through www.moi.gov.qa inquiry or QVC Qatar services.",
      icon: <FaExclamationCircle className="text-danger" />,
    },
    {
      title: "Approved",
      description:
        "Your MOI Qatar visa has been successfully approved. You may also check your QID status via a QID check service.",
      icon: <FaCheckCircle className="text-success" />,
    },
    {
      title: "Used Inside Country",
      description:
        "Your visa has already been used for entry into Qatar. Confirm current status via QVC Qatar or MOI Qatar visa inquiry & printing services.",
      icon: <FaUserCheck className="text-info" />,
    },
    {
      title: "Transferred to Resident",
      description:
        "Your visa has been transferred to a Qatar ID (QID). Confirm your residency status via a QID check.",
      icon: <FaUserCheck className="text-info" />,
    },
    {
      title: "Rejected",
      description:
        "Unfortunately, your MOI Qatar visa application was rejected. Use the QVC Qatar visa check to get more details.",
      icon: <FaTimesCircle className="text-danger" />,
    },
    {
      title: "Expired",
      description:
        "Your visa has expired. Check your options for renewal or new applications using the MOI Qatar visa inquiry & printing portal.",
      icon: <FaTimesCircle className="text-danger" />,
    },
    {
      title: "Canceled",
      description:
        "Your visa has been canceled. Verify the cancellation using the MOI Qatar visa inquiry system or contact MOI support.",
      icon: <FaExclamationCircle className="text-danger" />,
    },
    {
      title: "Not Found",
      description:
        "No records were found for your inquiry. Make sure the details you entered are correct or try again through QVC Qatar or MOI Qatar portals.",
      icon: <FaExclamationCircle className="text-warning" />,
    },
  ];

  const faqList = [
    {
      question: "How can I check my Qatar visa status online?",
      answer:
        "You can check your Qatar visa status online through the MOI Qatar visa inquiry & printing portal or by using QVC Qatar visa check services. Simply enter your application number or passport details.",
    },
    {
      question: "What is QVC Qatar?",
      answer:
        "QVC Qatar, or Qatar Visa Center, assists applicants by providing visa application support, including biometric enrollment and medical tests before traveling to Qatar.",
    },
    {
      question: "How do I perform a QID check?",
      answer:
        "You can perform a QID check through the MOI Qatar official website. It helps verify your Qatar ID validity, personal data, and visa status.",
    },
    {
      question: "What should I do if my Qatar visa is 'Under Process'?",
      answer:
        "If your visa status shows 'Under Process,' you should regularly check updates through the MOI Qatar visa inquiry portal or the QVC Qatar tracking system.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Qatar Visa Status Messages - MOI Qatar Inquiry, QVC Qatar Visa Check
        </title>
        <meta
          name="description"
          content="Understand your Qatar visa status messages easily. Check visa updates through MOI Qatar visa inquiry & printing, QVC Qatar visa check, and perform a QID check online."
        />
        <meta
          name="keywords"
          content="Qatar visa status messages, qvc qatar, qvc qatar visa check, moi qatar visa inquiry & printing, qid check, moi qatar visa status, moi visa messages, moi qatar tracking, qatar visa inquiry, moi visa inquiry"
        />
        <link
          rel="canonical"
          href="https://qatarvisastatus.com/visa-status-messages"
        />
      </Head>

      <div className="container py-5 lh-lg">
        <h1 className="text-center mb-4">
          MOI Qatar Visa Status Messages and Meaning
        </h1>

        <p className="text-center text-secondary mb-5">
          Checking your <strong>MOI Qatar visa status</strong> is now easier
          with online services like <strong>QVC Qatar visa check</strong> and{" "}
          <strong>MOI Qatar visa inquiry & printing</strong>. Whether you want
          to verify your visa approval, print your visa, or perform a{" "}
          <strong>QID check</strong> for residency validation, we guide you
          through every step.
        </p>

        <ul className="mb-5">
          {visaStatuses.map((status, index) => (
            <li key={index} className="mb-3 d-flex align-items-start">
              <span className="me-2 fs-5">{status.icon}</span>
              <div>
                <h3 className="fw-bold fs-6 mb-1">{status.title}</h3>
                <p className="mb-0">{status.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mb-5">
          <h2 className="h4 mb-4">Frequently Asked Questions (FAQ)</h2>
          {faqList.map((faq, index) => (
            <div key={index} className="mb-3">
              <h3 className="fw-bold fs-6">{faq.question}</h3>
              <p className="mb-0">{faq.answer}</p>
            </div>
          ))}
        </div>

        <p>
          Still need help? Visit the official{" "}
          <Link href="https://www.moi.gov.qa">MOI Qatar inquiry page</Link> or
          contact <Link href="/contact-moi">MOI Qatar visa support</Link> for
          further assistance regarding your visa application, status inquiry, or
          QID check.
        </p>
      </div>
    </>
  );
}
