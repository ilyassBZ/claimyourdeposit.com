import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the subscription work?",
      answer: "Start with a 7-day free trial. After the trial period, you'll be charged $45/year for ONE rental property with unlimited photo uploads, cloud storage, document template generation, and 1 document delivery via third-party postal service included. Additional deliveries are $12 each. Each additional property is $10/year. Cancel anytime during or after the trial, with 90-day archive access after cancellation."
    },
    {
      question: "When should I start using this tool?",
      answer: "Day 1 of your move-in. The earlier you organize your records, the better. Upload photos of every room, existing conditions, and the property's state before you unpack. Build your digital archive from the start."
    },
    {
      question: "Do you use AI to analyze my photos?",
      answer: "Not yet. Right now, you upload and organize records yourself using our digital filing system. We help you generate summary documents based on YOUR notes and observations. AI-powered analysis is coming in a future update."
    },
    {
      question: "Is this legal advice or legal services?",
      answer: "No. This is a SaaS productivity tool for organizing personal records. We provide document templates that you can customize and edit yourself. You have 100% control over all text. For legal advice, consult an attorney."
    },
    {
      question: "Which states are supported?",
      answer: "All 50 US states. Our document template library includes customizable formats for each state, updated for 2026. You edit all content yourself before exporting."
    },
    {
      question: "What if I need to send my documentation?",
      answer: "You can download your PDF summary at any time for free. Your annual subscription includes 1 document delivery via third-party postal service with tracking. If you need additional deliveries, each costs $12 and includes tracking. All documents are user-generated and sent as-is. We do not provide legal advice or guarantee any outcomes."
    },
    {
      question: "Can I use this for multiple properties?",
      answer: "Yes! Your first property is $45/year (includes 1 document delivery via third-party postal service). Each additional property (like a second rental or roommate's separate lease) is only $10/year."
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "You get 90 days of read-only archive access after cancellation. Download your files during this time. After 90 days, all data is permanently deleted from our servers."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`faq-item ${openIndex === index ? 'open' : ''}`}
        >
          <button 
            className="faq-question"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            <span className="faq-icon">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          <div className="faq-answer">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

