import Head from "next/head";
import { Questions } from "@/utils/questions";
import Image from "next/image";

export default function QatarVisaByQid() {
  const question = Questions[2];

  return (
    <>
      <Head>
        <title key="title">
          Qatar Visa Check: How to Check Qatar Visa Status Online by Qatar ID
          Number via MOI Portal
        </title>
        <meta
          key="description"
          name="description"
          content="Perform a Qatar visa check online using your Qatar ID number via the MOI Portal. Follow this step-by-step guide to track your visa approval, expiration, or rejection status easily."
        />
        <meta
          key="keywords"
          name="keywords"
          content="Qatar visa check, Qatar visa status check, check Qatar visa by Qatar ID, MOI visa inquiry, Qatar visa tracking, visa status Qatar ID, Qatar visa check online"
        />
        <link
          rel="canonical"
          href="https://qatarvisastatus.com/qatar-visa-by-qid"
        />
      </Head>
      <div className="container py-5">
        <h1 className="primary-color mb-4" style={{ fontWeight: "600" }}>
          {question.question}
        </h1>
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
