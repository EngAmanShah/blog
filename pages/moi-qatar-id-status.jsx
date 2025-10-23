import Head from "next/head";
import Image from "next/image";
import { qatarId } from "@/utils/questions";

export default function MoiQatarIdStatus() {
  const question = qatarId[0];
  return (
    <>
      <Head>
        <title key="title">
          Check MOI Qatar ID Status Online via Passport - MOI Portal
        </title>
        <meta
          name="description"
          content="Easily check your MOI Qatar ID status online using your passport number via the MOI Portal. Get instant updates on visa and residency status at QatarVisaStatus.com."
          key="description"
        />
        <meta
          name="keywords"
          key="keywords"
          content="MOI Qatar ID check by passport, MOI Qatar ID status, Qatar visa check, Qatar residency status, check Qatar ID online"
        />
        <link
          rel="canonical"
          href="https://qatarvisastatus.com/moi-qatar-id-status"
        />
        <meta
          key="og-title"
          property="og:title"
          content="Check MOI Qatar ID Status Online via Passport - MOI Portal"
        />
        <meta
          key="og-desciption"
          property="og:description"
          content="Easily check your MOI Qatar ID status online using your passport number via the MOI Portal. Get instant updates on visa and residency status at QatarVisaStatus.com."
        />
        <meta
          key="og-img"
          property="og:image"
          content="https://qatarvisastatus.com/qatar-id-status.png"
        />
        <meta
          key="og-url"
          property="og:url"
          content="https://qatarvisastatus.com/moi-qatar-id-status"
        />
        <meta key="og-type" property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Check MOI Qatar ID Status Online via Passport - MOI Portal"
        />
        <meta
          name="twitter:description"
          content="Easily check your MOI Qatar ID status online using your passport number via the MOI Portal. Get instant updates on visa and residency status at QatarVisaStatus.com."
        />
        <meta
          name="twitter:url"
          content="https://qatarvisastatus.com/moi-qatar-id-status"
        />
        <meta
          name="twitter:image"
          content="https://qatarvisastatus.com/qatar-id-status.png"
        />
      </Head>
      <div className="container py-5 lh-lg">
        <h1 className="mb-4 text-center" style={{ fontWeight: "600" }}>
          {question.question}
        </h1>
        <div
          style={{
            width: "100%",
            borderRadius: "30px",
            position: "relative",
            overflow: "hidden",
          }}
          className="mb-5"
        >
          <div
            style={{
              paddingTop: "56.25%",
              backgroundColor: "#f0f0f0",
              width: "100%",
            }}
          />
          <Image
            src="/qatar-id-status.png"
            alt="Check MOI Qatar ID Status Online Using Passport Number"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "30px",
              position: "absolute",
              top: "0",
              left: "0",
              objectFit: "cover",
            }}
            priority
          />
        </div>
        <ol className="mt-3 mb-5">
          {question.answer.map((step, index) => (
            <li key={index} style={{ fontSize: "18px" }}>
              <div style={{ fontWeight: "600" }}>{step.point}</div>
              {step.img && (
                <Image
                  src={step.img}
                  alt={step.alt}
                  className="my-2 w-100 h-100"
                />
              )}
            </li>
          ))}
        </ol>
        <div>
          <h3 className="mb-3">Understanding the MOI Qatar ID Card (QID)</h3>
          <div className="mb-5">
            The <strong>MOI Qatar ID Card (QID)</strong> is a mandatory
            identification document for all residents and expatriates living in
            Qatar. It serves as proof of residency and is required for accessing
            various services, including banking and government facilities. The
            QID includes vital information such as your name, photograph, date
            of birth, gender, and address. Additionally, it helps the Qatari
            government in maintaining security and preventing fraudulent
            activities.
          </div>
          <h3 className="mb-3">
            Fees and Application for Smart MOI Qatar ID (Smart QID)
          </h3>
          <div className="mb-5">
            You can easily apply for a{" "}
            <strong>Smart MOI Qatar ID (Smart QID)</strong> through the official{" "}
            <strong>Ministry of Interior Qatar</strong> website. The cost of a
            Smart QID card is <strong>QR 100</strong>, similar to a standard
            MOI Qatar ID card. Additionally, if you want to subscribe to the{" "}
            <strong>e-gate service</strong>, the fees are QR100 for one year,
            QR150 for two years, and QR200 for three years. The Smart QID offers
            enhanced convenience and security for residents.
          </div>
          <h3 className="mb-3">Key Benefits of the Smart MOI Qatar ID (QID)</h3>
          <div className="mb-5">
            The <strong>Smart MOI Qatar ID (QID)</strong> provides several benefits
            that make it an essential document for residents of Qatar. Below are
            the primary advantages of having a Smart QID:
          </div>

          <div className="mb-5">
            <span className="fw-bold">
              Simplified Access to Government Services:{" "}
            </span>
            With a Smart QID, accessing{" "}
            <strong>Qatari government services</strong> becomes hassle-free. You
            can complete many processes without the need for physical documents,
            simply by presenting your Smart QID.
          </div>

          <div className="mb-5">
            <span className="fw-bold">
              Enhanced Security and Fraud Protection:{" "}
            </span>
            The Smart QID incorporates <strong>biometric technology</strong> and
            encryption, which significantly reduces fraudulent activities. This
            advanced ID card protects your sensitive information and ensures
            secure identification.
          </div>

          <div className="mb-5">
            <span className="fw-bold">Reduces the Need for Paperwork: </span>
            Using a Smart QID minimizes the paperwork involved in government
            transactions, making it easier to apply for various services and
            reducing the time spent on administrative tasks.
          </div>
          <div className="mb-5">
            <span className="fw-bold">
              Essential for Obtaining a Qatar Driving License:{" "}
            </span>
            A <strong>Smart QID</strong> is required for obtaining or renewing
            your <strong>Qatar driving license</strong>, streamlining the
            process and ensuring your legal status is up to date.
          </div>
          <div className="mb-5">
            <span className="fw-bold">
              Facilitates Updating Legal Documents:{" "}
            </span>
            The Smart QID is also used for updating various legal and
            residency-related documents, ensuring compliance with{" "}
            <strong>Qatari laws</strong> and regulations.
          </div>
        </div>
      </div>
    </>
  );
}
