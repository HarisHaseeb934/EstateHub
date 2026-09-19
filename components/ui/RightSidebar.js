"use client";

import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function RightSidebar() {
  return (
    <aside className="w-full max-w-xs space-y-6 hidden md:block md:sticky md:top-24 h-fit self-start">
      <Link
        href={"/"}
        className="min-h-150 flex items-end relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-black p-6 text-white text-center shadow-lg"
      >
        {/* <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div> */}

        <div className="relative z-10 flex flex-col items-center">
          <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
            Build High-Converting Ecommerce Stores <br /> For Growth
          </h3>

          <div className="mt-6 inline-block w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-md">
            Schedule a Meeting Today
          </div>
        </div>
      </Link>

      <div className="px-2 py-4 border-y">
        <span className="block text-xs font-semibold tracking-wider text-gray-500 uppercase mb-3">
          Stay Connected
        </span>
        <h4 className="text-sm font-bold text-gray-900 mb-3">
          Follow IR Solutions
        </h4>

        <div className="flex items-center space-x-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="YouTube"
          >
            <FaYoutube size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Twitter / X"
          >
            <FaXTwitter size={18} />
          </a>
        </div>
      </div>
    </aside>
  );
}
