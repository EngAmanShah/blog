import Head from "next/head";
import { Questions } from "@/utils/questions";
import Image from "next/image";

export default function QatarVisaByPassport() {
  const question = Questions[0];

  return (
    <>
      <Head>
        <title key="title">
          Qatar Visa Check: How to perform Qatar Visa Check Online by Passport
          Number MOI
        </title>
        <meta
          key="description"
          name="description"
          content="Perform a Qatar visa check online by passport number MOI. Follow our step-by-step guide to track your visa approval, validity, and updates."
        />
        <meta
          key="keywords"
          name="keywords"
          content="Qatar visa check, Qatar visa status check, MOI Qatar visa inquiry, check Qatar visa online, Qatar visa tracking, visa status by passport number, MOI Qatar visa verification, Qatar e-visa status"
        />
        <link
          rel="canonical"
          href="https://qatarvisastatus.com/qatar-visa-by-passport"
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
