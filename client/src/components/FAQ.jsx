import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is this legal?",
      answer: "Yes. We provide legal information and document generation based on publicly available statutes. Our service helps you understand your rights and create proper demand letters."
    },
    {
      question: "Does it work for apartments?",
      answer: "Yes, specifically designed for residential tenancies. Our system covers apartments, condos, houses, and any residential rental property."
    },
    {
      question: "What if my landlord still refuses to pay?",
      answer: "Our demand letters cite specific laws and penalties (including treble damages). Most landlords comply when faced with legal consequences. We also provide guidance on next steps."
    },
    {
      question: "How accurate is the AI?",
      answer: "Our AI is trained on thousands of cases and state laws. It identifies normal wear and tear vs. damage with high accuracy and always provides legal citations for transparency."
    },
    {
      question: "Which states are supported?",
      answer: "All 50 US states. Our database is updated with 2025 state laws and local ordinances."
    },
    {
      question: "Do I need a lawyer?",
      answer: "Not for most cases. Our service handles straightforward deposit disputes. For complex cases, we recommend consulting an attorney, but our documentation gives you a strong starting point."
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

