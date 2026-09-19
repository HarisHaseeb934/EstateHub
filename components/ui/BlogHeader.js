'use client';

import React from 'react';
import { FiClock } from 'react-icons/fi';

const BlogHeader = ({
  title = "Email Marketing Specialist: Skills, Responsibilities, and Salary in 2026",
  date = "September 18, 2026",
  readTime = "9 min read"
}) => {
  return (
    <header className="w-full max-w-4xl py-4 font-sans text-slate-900">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
        {title}
      </h1>

      {/* Meta Information (Date & Read Time) */}
      <div className="flex items-center gap-3 mt-4 text-sm font-medium text-slate-700">
        <span>{date}</span>
        <span className="text-slate-400">—</span>
        <div className="flex items-center gap-1.5">
          <FiClock className="w-4 h-4 text-slate-800" />
          <span>{readTime}</span>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;