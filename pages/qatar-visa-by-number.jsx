import Head from "next/head";
import { Questions } from "@/utils/questions";
import Image from "next/image";

export default function QatarVisaByNumber() {
  const question = Questions[1];

  return (
    <>
      <Head>
        <title key="title">
          Qatar Visa Check: Check Qatar Visa Status Online by Visa Number | MOI
          Portal Guide
        </title>
        <meta
          key="description"
          name="description"
          content="Perform a Qatar visa check online using your visa number via the MOI Qatar Portal. Follow our step-by-step guide to track visa approvals, rejections, and validity."
        />
        <meta
          key="keywords"
          name="keywords"
          content="Qatar visa check, Qatar visa status check, MOI Qatar visa inquiry, check Qatar visa by visa number, visa verification Qatar, online visa status tracking"
        />
        <link
          rel="canonical"
          href="https://qatarvisastatus.com/qatar-visa-by-number"
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
