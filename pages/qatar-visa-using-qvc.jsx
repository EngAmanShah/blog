import Head from "next/head";
import { Questions } from "@/utils/questions";
import Image from "next/image";

export default function QatarVisaQvc() {
  const question = Questions[3];

  return (
    <>
      <Head>
        <title key="title">
          Qatar Visa Check Online via Qatar Visa Center (QVC) – Track Status
          Easily
        </title>
        <meta
          key="description"
          name="description"
          content="Perform a Qatar visa check online using the Qatar Visa Center (QVC) website. Follow this step-by-step guide to track visa approval, validity, and processing status effortlessly."
        />
        <meta
          key="keywords"
          name="keywords"
          content="Qatar visa check, Qatar visa status check, check Qatar visa online, Qatar Visa Center, QVC visa inquiry, Qatar visa tracking, Qatar visa verification"
        />
        <link
          rel="canonical"
          href="https://qatarvisastatus.com/qatar-visa-using-qvc"
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
