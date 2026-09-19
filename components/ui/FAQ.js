"use client";

import React from "react";

const faqData = [
  {
    question: "What does an email marketing specialist do?",
    answer:
      "A specialist is responsible for the email channel of a company, from campaigns to automation flows, subscriber segmentation to deliverability, copywriting tracking to A/B-testing to reporting performance.",
  },
  {
    question:
      "What skills do you need to have as an email marketing specialist?",
    answer:
      "Technical skills range from email strategy to copywriting, automation, segmentation, deliverability, A/B testing, analytics, basic HTML, and knowledge of CRM integration. Soft skills include written communication, analytical thinking, attention to detail, creativity, and time management.",
  },
  {
    question: "What is an email marketer's salary?",
    answer:
      "The U.S. salary range for 2026 consists of experienced specialists earning $75,000+, and entry-level professionals earning about $32,500. The salary averages on the major platforms range from $61k to $72k a year.",
  },
  {
    question: "Which marketing tools do email marketing experts employ?",
    answer:
      "Most used tools are email and automation software such as Klaviyo, Mailchimp, ActiveCampaign, HubSpot, Analytics software, Design software, and e-commerce platforms such as Shopify.",
  },
  {
    question:
      "What do coding skills have to do with email marketing professionals? Do email marketing professionals need coding skills?",
    answer:
      "No deep coding knowledge is needed. Basic HTML and CSS knowledge is helpful in troubleshooting template formatting problems. Most of the new email platforms are drag-and-drop, and coding is not required for them.",
  },
  {
    question: "Is an email marketing specialist a job that requires a degree?",
    answer:
      "No degree is required. Academic qualifications are not a key factor in making most hiring decisions for this position, experience, portfolio performance, and knowledge of the platform are.",
  },
  {
    question:
      "What's the difference between an email marketing person and an email marketing management person?",
    answer:
      "A specialist concentrates on execution, creating campaigns, flows, and segments and reporting on results. A manager oversees the overall email program, establishes strategy, and can be a manager for a team or outside partner.",
  },
  {
    question: "Can you make a career in email marketing?",
    answer:
      "Yes, if the right person desires. There is still a lot of demand for skilled email marketers, particularly those with automation and deliverability knowledge. The position pays big to a candidate with strong analytical skills who loves marketing and data. Specialists are always highly sought-after in ecommerce, SaaS, and B2B settings.",
  },
];

const FAQ = ({ items = faqData }) => {
  return (
    <section className="w-full my-12 font-sans border-amber-200 p-6 rounded-4xl bg-gradient-to-bl from-amber-200 to-amber-100">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">
        Frequently Asked Questions
      </h2>
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {item.question}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
