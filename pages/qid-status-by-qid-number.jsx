import Head from "next/head";
import Image from "next/image";
import { qatarId } from "@/utils/questions";

export default function QatarIdStatusByQid() {
  const question = qatarId[1];
  return (
    <>
      <Head>
        <title key="title">
          How to Check MOI Qatar ID Status Online Using QID Number - MOI Portal
        </title>
        <meta
          name="description"
          content="Learn how to check your MOI Qatar ID status online using your QID number via the MOI Portal. Get real-time updates on visa and residency status easily."
          key="description"
        />
        <meta
          name="keywords"
          key="keywords"
          content="MOI Qatar ID check by QID number, MOI Qatar ID status, Qatar visa check, Qatar residency status, check Qatar ID online"
        />
        <link
          rel="canonical"
          href="https://qatarvisastatus.com/qid-status-by-qid-number"
        />
        <meta
          key="og-title"
          property="og:title"
          content=" How to Check MOI Qatar ID Status Online Using QID Number - MOI Portal"
        />
        <meta
          key="og-desciption"
          property="og:description"
          content="Learn how to check your MOI Qatar ID status online using your QID number via the MOI Portal. Get real-time updates on visa and residency status easily."
        />
        <meta
          key="og-img"
          property="og:image"
          content="https://qatarvisastatus.com/qid-status-by-qid-number.png"
        />
        <meta
          key="og-url"
          property="og:url"
          content="https://qatarvisastatus.com/qid-status-by-qid-number"
        />
        <meta key="og-type" property="og:type" content="website" />

        <meta
          name="twitter:title"
          content=" How to Check MOI Qatar ID Status Online Using QID Number - MOI Portal"
        />
        <meta
          name="twitter:description"
          content="Learn how to check your MOI Qatar ID status online using your QID number via the MOI Portal. Get real-time updates on visa and residency status easily."
        />
        <meta
          name="twitter:url"
          content="https://qatarvisastatus.com/qid-status-by-qid-number"
        />
        <meta
          name="twitter:image"
          content="https://qatarvisastatus.com/qid-status-by-qid-number.png"
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
            src="/qid-status-by-qid-number.png"
            alt="Check MOI Qatar ID Status Online by QID Number"
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
        <ol className="mt-3">
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
      </div>
    </>
  );
}
