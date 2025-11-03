import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center py-4 px-6 hover:bg-gray-100 transition"
      >
        <span className="font-medium text-gray-800">{title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && <div className="px-6 pb-4 text-gray-700">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const items = [
    {
      title: "What Products Do You Offer on Your Golf E-Commerce Website?",
      content:
        "We offer golf clubs, balls, apparel, bags, shoes, gloves, accessories, training aids, and custom-fitted gear from top brands.",
    },
    {
      title: "Do You Provide Custom Fitting Services for Golf Clubs?",
      content:
        "Yes, we offer professional custom fitting services for golf clubs to ensure optimal performance and a personalized fit for you.",
    },
    {
      title: "What Brands Do You Carry?",
      content:
        "Customers often want to know which golf brands are featured on your website, as brand reputation can influence their purchasing decisions.",
    },
    {
      title: "What Payment Methods Do You Accept?",
      content:
        "We accept major credit cards, debit cards, Apple Pay, Google Pay, and select buy-now-pay-later options at checkout.",
    },
    {
      title: "How Do You Handle Shipping and Delivery?",
      content:
        "We process orders within 1–2 business days. Delivery typically takes 3–7 days. Tracking details are provided once the order ships.",
    },
    {
      title: "What's Your Return and Exchange Policy?",
      content:
        "We accept returns and exchanges within 30 days of purchase, with original packaging and receipt. Some exclusions may apply.",
    },
  ];

  return (
    <div className="mx-auto mt-10 border border-gray-300 rounded-md overflow-hidden shadow-sm">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
