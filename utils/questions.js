import selectEnglish from "@/public/select-english.png";
import inquiries from "@/public/inquiries.png";
import visaServices from "@/public/visa-services.png";
import visaInquiry from "@/public/visa-inquiry.png";
import submit from "@/public/submit.png";
import otherInquiries from "@/public/other-inquiries.png";
import officialDocuments from "@/public/official-documents.png";
import qid from "@/public/qid.png";
import selectLanguage from "@/public/select-language.png";
import trackApplication from "@/public/track-application.png";
import qvc from "@/public/qvc.png";

const Questions = [
  {
    question:
      "How to Perform a Qatar Visa Check Online by Passport Number MOI Portal?",
    answer: [
      {
        point:
          "Visit the official MOI Qatar website at https://portal.moi.gov.qa/ to begin your Qatar visa check.",
        img: null,
      },
      {
        point: "Switch the language to English for easy navigation.",
        img: selectEnglish,
        alt: "Language selection on MOI Qatar website with English option highlighted",
      },
      {
        point:
          "Go to the 'Inquiries' section on the homepage to proceed with your Qatar visa check.",
        img: inquiries,
        alt: "Homepage inquiries section on MOI Qatar website for visa status checks",
      },
      {
        point: "Select 'Visa Services' from the list of available services.",
        img: visaServices,
        alt: "Visa Services option in MOI Qatar inquiries section",
      },
      {
        point: "Click on 'Visa Inquiry and Printing'.",
        img: visaInquiry,
        alt: "Visa Inquiry and Printing service selected on MOI Qatar portal",
      },
      {
        point:
          "Enter your passport number and choose your nationality to check your Qatar visa status.",
        img: submit,
        alt: "Submission field for passport number and nationality on MOI Qatar website",
      },
      {
        point:
          "Complete the CAPTCHA code, then hit 'Submit' to view your Qatar visa check results.",
        img: null,
      },
    ],
  },
  {
    question:
      "How to Perform a Qatar Visa Check Online by Visa Number via MOI Portal?",
    answer: [
      {
        point:
          "Visit the official MOI Qatar website at https://portal.moi.gov.qa/ to start your Qatar visa check.",
        img: null,
      },
      {
        point: "Switch the language to English for easy navigation.",
        img: selectEnglish,
        alt: "Switch to English option on MOI Qatar website",
      },
      {
        point:
          "Go to the 'Inquiries' section on the homepage to proceed with your Qatar visa check.",
        img: inquiries,
        alt: "Accessing the inquiries section for visa-related services",
      },
      {
        point: "Select 'Visa Services' from the list of available services.",
        img: visaServices,
        alt: "Visa Services menu for visa inquiry options on MOI Qatar",
      },
      {
        point:
          "Click on 'Visa Inquiry and Printing' to continue your Qatar visa check.",
        img: visaInquiry,
        alt: "Visa Inquiry and Printing option selected for visa status check",
      },
      {
        point:
          "Enter your visa number and choose your nationality to check your Qatar visa status.",
        img: submit,
        alt: "Form for entering visa number and nationality on MOI portal",
      },
      {
        point:
          "Complete the CAPTCHA code, then hit 'Submit' to view your Qatar visa check results.",
        img: null,
      },
    ],
  },
  {
    question:
      "How to Perform a Qatar Visa Check Online by Qatar ID Number via MOI Portal?",
    answer: [
      {
        point:
          "Visit the official MOI Qatar website at https://portal.moi.gov.qa/ to start your Qatar visa check.",
        img: null,
      },
      {
        point: "Switch the language to English for easy navigation.",
        img: selectEnglish,
        alt: "Select English option for easier navigation on MOI Qatar website",
      },
      {
        point:
          "Go to the 'Inquiries' section on the homepage to proceed with your Qatar visa check.",
        img: inquiries,
        alt: "MOI Qatar inquiries section for checking visa status",
      },
      {
        point: "Select 'Other Inquiries' from the list of available services.",
        img: otherInquiries,
        alt: "Other Inquiries service option on MOI Qatar for ID checks",
      },
      {
        point:
          "Click on 'Official Documents' to continue your Qatar visa check.",
        img: officialDocuments,
        alt: "Official Documents section in MOI Qatar for ID verification",
      },
      {
        point:
          "Enter your Qatar ID (QID) number and choose your nationality to check your Qatar visa status.",
        img: qid,
        alt: "Field for entering Qatar ID number and nationality",
      },
      {
        point:
          "Complete the CAPTCHA code, then hit 'Submit' to view your Qatar visa check results.",
        img: null,
      },
    ],
  },
  {
    question:
      "How to Perform a Qatar Visa Check Using the QVC (Qatar Visa Center) Website?",
    answer: [
      {
        point:
          "Go to the official Qatar Visa Center website at https://www.qatarvisacenter.com/",
        img: null,
      },
      {
        point:
          "Select your preferred language and choose your country from the options.",
        img: selectLanguage,
        alt: "Language and country selection options on Qatar Visa Center website",
      },
      {
        point: "Click on the 'Track Application' button to proceed.",
        img: trackApplication,
        alt: "Track Application button on Qatar Visa Center website",
      },
      {
        point:
          "Enter your passport number and visa number in the designated fields.",
        img: qvc,
        alt: "Form for entering passport and visa number to track application status",
      },
      {
        point:
          "Input the CAPTCHA code and click 'Submit' to complete your Qatar visa check.",
        img: null,
      },
    ],
  },
];

const qatarId = [
  {
    question:
      "How to Check Your MOI Qatar ID Status Online Using Passport Number via MOI Portal?",
    answer: [
      {
        point:
          "Visit the official MOI Qatar website at https://portal.moi.gov.qa/",
        img: null,
      },
      {
        point: "Switch the language to English for easier navigation.",
        img: selectEnglish,
        alt: "Switch to English option on MOI Qatar homepage for easier ID checks",
      },
      {
        point:
          "Navigate to the 'Inquiries' section prominently displayed on the homepage.",
        img: inquiries,
        alt: "Inquiries section on MOI Qatar homepage",
      },
      {
        point:
          "Select 'Other Inquiries' to access services related to MOI Qatar ID verification.",
        img: otherInquiries,
        alt: "Other Inquiries service option for MOI Qatar ID verification",
      },
      {
        point: "Click on 'Official Documents' to proceed with your inquiry.",
        img: officialDocuments,
        alt: "Official Documents page for MOI Qatar ID verification",
      },
      {
        point: "Enter your passport number and select your nationality.",
        img: qid,
        alt: "Passport number and nationality fields for ID verification",
      },
      {
        point:
          "Complete the CAPTCHA code, then hit 'Submit' to view your MOI Qatar ID details and status.",
        img: null,
      },
    ],
  },
  {
    question:
      "How to Check Your MOI Qatar ID Status Online Using MOI Qatar ID (QID) Number via MOI Portal?",
    answer: [
      {
        point:
          "Start by visiting the official MOI Qatar website at https://portal.moi.gov.qa/",
        img: null,
      },
      {
        point: "Switch the language to English for easier navigation.",
        img: selectEnglish,
        alt: "Option to switch to English on MOI Qatar homepage for ID checks",
      },
      {
        point: "Locate the 'Inquiries' section on the homepage.",
        img: inquiries,
        alt: "Inquiries section on MOI Qatar for ID status checks",
      },
      {
        point:
          "Select 'Other Inquiries' to access MOI Qatar ID-related services.",
        img: otherInquiries,
        alt: "Other Inquiries section for MOI Qatar ID services",
      },
      {
        point:
          "Click on 'Official Documents' to access the necessary forms for MOI Qatar ID status.",
        img: officialDocuments,
        alt: "Official Documents section on MOI Qatar for MOI Qatar ID status checks",
      },
      {
        point:
          "Input your MOI Qatar ID (QID) number and select your nationality.",
        img: qid,
        alt: "Fields for entering MOI Qatar ID number and nationality",
      },
      {
        point:
          "Complete the CAPTCHA code, then click 'Submit' to view your MOI Qatar ID details and current status.",
        img: null,
      },
    ],
  },
];

module.exports = {
  Questions,
  qatarId,
};
