"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const ArticleContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const tocItems = [
    {
      id: "best-platforms",
      title: "What is the Best Email Marketing Platform for Shopify?",
    },
    {
      id: "best-non-woocommerce",
      title: "What is the Best Email Marketing Platform for WooCommerce?",
    },
    {
      id: "look-for",
      title: "What to Look for in an Ecommerce Email Marketing Platform",
    },
    {
      id: "10-best-platforms",
      title: "10 Best Email Marketing Platforms for Ecommerce",
    },
    {
      id: "compared-use-case",
      title: "Best Email Marketing Platforms Compared by Use Case",
    },
    {
      id: "klaviyo-vs-omnisend",
      title: "Klaviyo vs Omnisend vs Mailchimp for Ecommerce",
    },
    {
      id: "free-vs-paid",
      title: "Free vs Paid Email Marketing Platforms for Ecommerce",
    },
    {
      id: "how-to-choose",
      title:
        "How to Choose an Email Marketing Platform for Your Ecommerce Store",
    },
    {
      id: "when-to-switch",
      title: "When Should You Switch Ecommerce Email Marketing Platforms?",
    },
    { id: "conclusion", title: "Conclusion" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  return (
    <div className="w-full my-4 font-sans">
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors focus:outline-none"
          aria-expanded={isOpen}
        >
          <span className="font-semibold text-gray-800 text-base">
            Article Content
          </span>
          <FaChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-5 pt-1 border-t border-gray-100">
              <ul className="space-y-3">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors block leading-relaxed"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
