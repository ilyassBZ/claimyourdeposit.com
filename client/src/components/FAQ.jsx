import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the subscription work?",
      answer: "Start with a 7-day free trial. After the trial period, you'll be charged $40/year for ONE rental property with unlimited documentation, storage, and letter generation. Each additional property is $10/year. Cancel anytime during or after the trial, with 90-day archive access after cancellation."
    },
    {
      question: "When should I start documenting?",
      answer: "Day 1 of your move-in. The earlier you document, the stronger your case. Upload photos of every room, existing damage, and the property's condition before you unpack."
    },
    {
      question: "Do you use AI to analyze my photos?",
      answer: "Not yet. Right now, you document and organize evidence yourself. We help you generate demand letters based on YOUR observations and your state's laws. AI vision analysis is coming in a future update."
    },
    {
      question: "Is this legal advice?",
      answer: "No. We provide documentation tools and letter templates based on publicly available laws. You review and approve all letters before sending. For complex legal issues, consult an attorney."
    },
    {
      question: "Which states are supported?",
      answer: "All 50 US states. Our demand letter generator includes state-specific security deposit laws, timelines, and citation formats updated for 2025."
    },
    {
      question: "What if my landlord ignores the letter?",
      answer: "Our letters cite specific laws and penalties. Most landlords respond when faced with documentation and legal citations. If they don't, you'll have organized evidence for small claims court or legal counsel."
    },
    {
      question: "Can I use this for multiple properties?",
      answer: "Yes! Your first property is $40/year. Each additional property (like a second rental or roommate's separate lease) is only $10/year."
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "You get 90 days of read-only archive access after cancellation. Download your evidence during this time. After 90 days, all data is permanently deleted."
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

