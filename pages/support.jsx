import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { Questions, qatarId } from "../utils/questions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function Support() {
  const [searchQuery, setSearchQuery] = useState("");
  const [questionDropDown, setquestionDropDown] = useState(null);

  const toggleQuestion = (index) => {
    if (questionDropDown === index) {
      setquestionDropDown(null);
    } else {
      setquestionDropDown(index);
    }
  };

  const filterQuestions = (questions) =>
    questions.filter((faq) => {
      const queryWords = searchQuery.toLowerCase().split(" ");
      return queryWords.every((word) =>
        faq.question.toLowerCase().includes(word)
      );
    });

  const filteredQuestions = filterQuestions(Questions);
  const filteredIdQuestions = filterQuestions(qatarId);

  return (
    <>
      <Head>
        <title key="title">
          Qatar Visa Status Support - Help with Visa Tracking & Application
        </title>
        <meta
          name="description"
          content="Get support for tracking your Qatar visa status, resolving application issues, and answering visa-related queries. Contact us for assistance on Qatar visa services."
          key="description"
        />
        <meta
          name="keywords"
          key="keywords"
          content="Qatar visa status support, Qatar visa tracking help, visa application assistance, Qatar visa inquiries, Qatar visa services, contact Qatar visa support"
        />
        <link rel="canonical" href="https://qatarvisastatus.com/support" />
      </Head>
      <div className="container py-5 lh-lg">
        <input
          type="search"
          placeholder="Search here"
          className="form-control shadow px-md-4 w-ms-75 mb-5"
          style={{ borderRadius: "30px", height: "50px" }}
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {filteredQuestions.length > 0 && (
          <div
            className="mb-4 primary-color"
            style={{ fontSize: "30px", fontWeight: "700" }}
          >
            Qatar Visa Status Support - Help with Visa Tracking & Application
          </div>
        )}
        {filteredQuestions.map((faq, index) => (
          <div
            key={index}
            className="mb-4 pb-3"
            style={{ borderBottom: "2px solid rgba(232, 232, 232, 1)" }}
          >
            <div
              className="d-flex justify-content-between align-items-end cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <div style={{ fontSize: "24px", fontWeight: "600" }}>
                {faq.question}
              </div>
              {questionDropDown === index ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </div>
            <ol
              className={`mt-3 ${questionDropDown === index ? "" : "d-none"}`}
            >
              {faq.answer.map((step, index) => (
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
        ))}
        {filteredIdQuestions.length > 0 && (
          <div
            className="mb-4 primary-color"
            style={{ fontSize: "30px", fontWeight: "700" }}
          >
            Qatar Id Status Support - Help with Qatar Id Tracking & Application
          </div>
        )}
        {filteredIdQuestions.map((faq, index) => (
          <div
            key={index}
            className="mb-4 pb-3"
            style={{ borderBottom: "2px solid rgba(232, 232, 232, 1)" }}
          >
            <div
              className="d-flex justify-content-between align-items-end cursor-pointer"
              onClick={() => toggleQuestion(index + Questions.length)}
            >
              <div style={{ fontSize: "24px", fontWeight: "600" }}>
                {faq.question}
              </div>
              {questionDropDown === index + Questions.length ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </div>
            <ol
              className={`mt-3 ${
                questionDropDown === index + Questions.length ? "" : "d-none"
              }`}
            >
              {faq.answer.map((step, index) => (
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
        ))}
        {filteredQuestions.length === 0 && filteredIdQuestions.length === 0 && (
          <h4 className="my-5">No results for your search.</h4>
        )}
      </div>
    </>
  );
}
