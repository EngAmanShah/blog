import Head from "next/head";
import { useState } from "react";

export default function FAQs() {
  const [questionDropDown, setquestionDropDown] = useState(null);
  const [loading, setLoading] = useState(true);

  const faqs = [
    {
      question: "How Can I Check the Status of My Qatar Visa Online?",
      answer:
        "To check your Qatar visa status online, visit the Ministry of Interior (MOI) website at moi.gov.qa or the Qatar Visa Center (QVC) at qatarvisacentre.com. Enter your details to view the current status of your visa application.",
    },
    {
      question:
        "What Details Are Required to View My Qatar Visa Status on the MOI Website?",
      answer:
        "On the MOI website, you need to provide your 15-digit visa number, passport number, and nationality. You'll also need to complete a CAPTCHA to verify your identity.",
    },
    {
      question:
        "Can I Track My Qatar Visa Application Status on the QVC Website?",
      answer:
        "Yes, you can track the status of your Qatar visa application through the Qatar Visa Center (QVC) website by entering your visa number, passport details, and file reference number.",
    },
    {
      question: "Is There a Mobile App for Checking My Qatar Visa Status?",
      answer:
        "Yes, the Metrash2 app allows you to check your Qatar visa status from your mobile device. The app is available for download on both Android and iOS platforms.",
    },
    {
      question: "What Does the ‘Valid to Use’ Status Mean for My Qatar Visa?",
      answer:
        "The ‘Valid to Use’ status means that your Qatar visa has been approved and is ready for use. You can travel to Qatar with this visa.",
    },
    {
      question:
        "What Does a ‘Rejected’ Status Indicate for My Qatar Visa Application?",
      answer:
        "A ‘Rejected’ status indicates that your Qatar visa application has been denied. Qatar immigration authorities typically do not provide specific reasons for the rejection.",
    },
    {
      question: "How Can I Check My Qatar Visa Status Offline?",
      answer:
        "To check your Qatar visa status offline, visit or contact the nearest Qatari embassy or consulate. You will need to provide your passport, visa number, and personal details such as your name and date of birth.",
    },
    {
      question:
        "What Should I Do If My Visa Application Is Rejected? Is There a Refund?",
      answer:
        "If your visa application is rejected, be aware that visa fees, service fees, and other related costs are non-refundable. You will need to submit a new application if desired.",
    },
    {
      question:
        "Can I Reapply for a Qatar Visa If My Previous Application Was Denied?",
      answer:
        "Yes, you can reapply for a Qatar visa after addressing the issues that led to the initial denial. Check for any waiting periods or specific guidelines before reapplying.",
    },
    {
      question: "How Long Does It Typically Take to Process a Qatar Visa?",
      answer:
        "A Qatar visa is usually processed within four working days, assuming all required documents are submitted accurately and in full.",
    },
    {
      question:
        "What Documents Are Needed to Apply for an ETA or Tourist Visa for Qatar?",
      answer:
        "To apply for an ETA or tourist visa, you must provide your passport details and a passport-size photo. Additional documents may be required depending on your residency status and other factors.",
    },
    {
      question: "Who Is Eligible to Apply for a Qatar Tourist Visa?",
      answer:
        "Nationals of certain countries who do not qualify for an ETA can apply for a Qatar tourist visa by completing an online application before their travel date.",
    },
    {
      question:
        "What Does the ‘Under Process’ Status Mean for My Qatar Visa Application?",
      answer:
        "The ‘Under Process’ status means that your Qatar visa application is currently being reviewed by the authorities and has not yet been finalized.",
    },
    {
      question: "What Does ‘Ready to Print’ Status Indicate for My Qatar Visa?",
      answer:
        "The ‘Ready to Print’ status means that your Qatar visa has been approved. You need to pay any applicable fees before printing your visa.",
    },
    {
      question: "Why Is My Qatar Visa Status Showing ‘Not Found’?",
      answer:
        "A ‘Not Found’ status usually means that no visa matches the details you provided or there may have been an error in the information entered during your search.",
    },
    {
      question: "What Are Some Common Reasons for Visa Rejection in Qatar?",
      answer:
        "Common reasons for a Qatar visa rejection include incomplete applications, criminal history, travel violations, financial issues, health problems, and gaps in employment history.",
    },
    {
      question: "What Does an ‘Expired’ Status Mean for My Qatar Visa?",
      answer:
        "An ‘Expired’ status indicates that the validity period of your Qatar visa has ended. You will need to renew your visa if you wish to travel to Qatar again.",
    },
    {
      question: "How Can I Print My Approved Qatar Visa?",
      answer:
        "Once your Qatar visa is approved, you can print it from the Ministry of Interior (MOI) website or the Qatar Visa Center (QVC) website. You may need to enter your visa details and pay any applicable fees before downloading and printing your visa.",
    },
    {
      question: "What Should I Do If My Visa Status Shows ‘Pending Approval’?",
      answer:
        "A ‘Pending Approval’ status means that your visa application is still under review. It may take a few days for authorities to process your request. If it remains pending for an extended period, you may contact MOI or QVC for further clarification.",
    },
    {
      question: "Can I Check My Qatar Visa Validity Online?",
      answer:
        "Yes, you can check your visa validity online by visiting the MOI website and entering your visa number and passport details. The system will display your visa’s expiry date and other relevant information.",
    },
    {
      question: "How Can I Extend My Qatar Visa?",
      answer:
        "You can apply for a visa extension online through the MOI website or visit a visa service center in Qatar. Extensions depend on your visa type and specific eligibility criteria.",
    },
    {
      question: "Can I Work in Qatar with a Tourist Visa?",
      answer:
        "No, you cannot work in Qatar with a tourist visa. To work legally, you must obtain a work visa sponsored by a Qatari employer.",
    },
    {
      question: "What Happens If I Overstay My Qatar Visa?",
      answer:
        "Overstaying your Qatar visa can result in fines, penalties, or deportation. It's important to extend or renew your visa before it expires.",
    },
    {
      question: "How Can I Cancel My Qatar Visa Application?",
      answer:
        "You can cancel your Qatar visa application through the MOI website or by contacting the visa processing center. Some visa fees may be non-refundable upon cancellation.",
    },
    {
      question: "Do I Need a Visa to Transit Through Qatar?",
      answer:
        "Depending on your nationality, you may be eligible for a transit visa or visa-free entry if you are staying in Qatar for a short duration during transit.",
    },
    {
      question: "Can I Apply for a Qatar Visa Upon Arrival?",
      answer:
        "Visa-on-arrival is available for citizens of certain countries. Check the official MOI or QVC website to see if you qualify for this facility.",
    },
    {
      question: "Is a Medical Test Required for a Qatar Work Visa?",
      answer:
        "Yes, a medical test is required for a Qatar work visa. It typically includes blood tests, X-rays, and screening for infectious diseases.",
    },
    {
      question: "Can I Sponsor My Family for a Qatar Residence Visa?",
      answer:
        "Yes, if you meet the minimum salary requirement and other criteria, you can sponsor your spouse, children, and dependents for a Qatar residence visa.",
    },
    {
      question:
        "What Is the Difference Between a Qatar Work Visa and a Business Visa?",
      answer:
        "A Qatar work visa is issued for individuals employed by a Qatari company and allows them to live and work in Qatar. A business visa is usually for short-term visits related to business activities, such as meetings or conferences, but does not permit employment.",
    },
    {
      question: "Can I Convert My Tourist Visa to a Work Visa in Qatar?",
      answer:
        "In most cases, you must exit Qatar and apply for a work visa through an employer. However, certain visa categories may allow conversion without leaving the country. Check with MOI for the latest regulations.",
    },
    {
      question: "How Do I Apply for a Qatar Family Visit Visa?",
      answer:
        "You can apply for a Qatar family visit visa through the MOI website or in person at the immigration office. You will need a sponsorship from a Qatar resident, along with required documents such as passport copies and proof of relationship.",
    },
    {
      question: "How Can I Avoid Visa Scams When Applying for a Qatar Visa?",
      answer:
        "To avoid visa scams, apply only through official channels such as the Ministry of Interior (MOI) website or the Qatar Visa Center (QVC). Be cautious of agents requesting upfront payments or unofficial documents.",
    },
    {
      question: "What Is a Qatar eVisa and How Can I Apply for It?",
      answer:
        "A Qatar eVisa is an electronic visa that allows travelers to enter Qatar for short stays. You can apply for it online through the official government portal, providing necessary documents such as passport details and travel itinerary.",
    },
    {
      question: "Can I Travel to Qatar Without a Visa?",
      answer:
        "Citizens of certain countries are eligible for visa-free entry to Qatar. Check the MOI website to see if your nationality qualifies for visa-free travel.",
    },
    {
      question: "What Is the Fine for Overstaying a Qatar Visa?",
      answer:
        "Overstaying a Qatar visa may result in fines of QAR 200 per day or more, depending on the visa type. It’s important to extend or renew your visa before it expires to avoid penalties.",
    },
    {
      question: "How Do I Get a Multiple-Entry Visa for Qatar?",
      answer:
        "Multiple-entry visas for Qatar are usually granted to business travelers, investors, and certain professionals. You must apply through the MOI or QVC and provide supporting documents, such as an invitation letter from a Qatari company.",
    },
    {
      question: "What Is a Qatar Hayya Card and Who Needs It?",
      answer:
        "The Qatar Hayya Card was introduced for the FIFA World Cup 2022, but similar programs may be introduced for future events. It serves as a visa and allows entry into Qatar for event attendees.",
    },
    {
      question: "Can I Check Someone Else’s Qatar Visa Status?",
      answer:
        "No, you cannot check another person’s visa status unless you are their official sponsor or have authorization to access their visa details through the MOI website.",
    },
  ];

  const toggleQuestion = (index) => {
    if (questionDropDown === index) {
      setquestionDropDown(null);
    } else {
      setquestionDropDown(index);
    }
  };

  return faqs.length > 0 ? (
    <>
      <Head>
        <title key="title">
          FAQs | Qatar Visa Status - Your Guide to Visa Inquiry and Tracking
        </title>
        <meta
          name="description"
          content="Find answers to the most frequently asked questions about tracking your Qatar visa status. Learn how to inquire, check, and verify Qatar visa application progress online."
          key="description"
        />
        <meta
          name="keywords"
          key="keywords"
          content="Qatar visa, visa status, visa inquiry, Qatar visa FAQs, Qatar visa tracking, Qatar visa application, check visa status, visa verification, Qatar visa process"
        />
        <link rel="canonical" href="https://qatarvisastatus.com/faqs" />
      </Head>
      <div
        className="py-5"
        style={{ backgroundColor: "rgba(221, 162, 97, .1)" }}
      >
        <h1 className="text-center" style={{ fontWeight: "600" }}>
          Frequently Asked Questions
        </h1>
      </div>
      <div className="container my-5 lh-lg">
        {faqs.map((faq, index) => (
          <div key={index} className="d-flex justify-content-center">
            <div className="question shadow mb-4 w-100">
              <div
                className="d-flex justify-content-between align-items-center cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <div className="d-flex align-items-center">
                  <div className="circle">{index + 1}</div>
                  <h4
                    className="m-0"
                    style={{ fontSize: "18px", fontWeight: "600" }}
                  >
                    {faq.question}
                  </h4>
                </div>
                <i
                  className={`fa fa-chevron-${
                    questionDropDown === index ? "up" : "down"
                  }`}
                ></i>
              </div>
              <p
                className={`mt-4 text-secondary ${
                  questionDropDown === index ? "" : "d-none"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : (
    <h1 className="text-center my-5 py-5">No faqs</h1>
  );
}
