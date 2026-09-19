"use client";

import React from "react";
import { FaSquare } from "react-icons/fa";

const KeyTakeaways = () => {
  const takeaways = [
    "Klaviyo, Omnisend, Mailchimp, and other platforms offer different features for ecommerce email marketing.",
    "Integration depth matters for more than simply having a platform connection available.",
    "The right platform depends on your store size, team, and actual marketing needs.",
    "Klaviyo and Omnisend suit most growing stores, but neither fits every situation perfectly.",
    "Always calculate platform pricing of your future store size, not just today's.",
    "Persistent automation, integration, reporting, or scalability problems can be signs that it is time to consider switching platforms.",
  ];

  return (
    <div className="w-full my-6 p-6 bg-slate-50 border border-slate-200 rounded-lg shadow-sm font-sans">
      <h2 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
        Key Takeaways
      </h2>

      <ul className="space-y-3">
        {takeaways.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-2 text-slate-900 flex-shrink-0">
              <FaSquare className="w-2 h-2" />
            </span>
            <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyTakeaways;
