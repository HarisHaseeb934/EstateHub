"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin, FaFacebook  } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

const AuthorProfileCard = () => {
  const author = {
    name: "Ammar Basit",
    title: "SEO Content Specialist",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80", // Replace with your image path
    bio: "Ammar is a content writer who specializes in digital marketing, staff augmentation, and business technology. He creates SEO-friendly blog posts a...",
    tags: ["Digital marketing", "Staff Augmentation"],
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  };

  return (
    <div className="max-w-full p-6 bg-white rounded-lg shadow-sm font-sans border border-gray-100">
      <div className="flex items-start gap-4 mt-2">
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image
            src={author.avatarUrl}
            alt={author.name}
            fill
            sizes="64px"
            className="rounded-full object-cover border-2 border-gray-100"
          />
        </div>

        <div className="flex-1">
          <span className="text-xs font-bold tracking-wider text-gray-500 uppercase">
            WRITTEN BY
          </span>
          <Link
            href={"/"}
            className="block hover:underline text-2xl font-bold text-gray-900 leading-tight"
          >
            {author.name}
          </Link>

          <div className="flex flex-col mt-2 gap-2">
            <span className="text-sm font-semibold text-blue-600">
              {author.title}
            </span>

            <div className="flex items-center gap-2">
              <a
                href={author.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center  text-black hover:opacity-90 transition-opacity"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={23} />
              </a>
              <a
                href={author.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-full  text-black hover:opacity-90 transition-opacity"
                aria-label="Twitter Profile"
              >
                <BsTwitterX size={23} />
              </a>
              <a
                href={author.socials.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-ful text-black transition-colors"
                aria-label="Personal Website"
              >
                <RiInstagramFill size={23} />
              </a>
              <a
                href={author.socials.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-ful text-black transition-colors"
                aria-label="Personal Website"
              >
                <FaFacebook size={23} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-600 leading-relaxed">{author.bio}</p>

      <div className="mt-4 pt-2">
        <span className="block text-xs font-bold tracking-wider text-gray-700 uppercase mb-2">
          EXPERTISE
        </span>
        <div className="flex flex-wrap gap-2">
          {author.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;
