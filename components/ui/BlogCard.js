import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <div className="overflow-hidden rounded-xl mb-4 h-48">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-snug">
          {blog.title}
        </h3>

        <div className="flex items-center space-x-2 mb-3">
          <img
            src={blog.authorAvatar}
            alt={blog.author}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-xs font-medium text-gray-800">{blog.author}</span>
          <span className="text-gray-300 text-xs">•</span>
          <span className="text-xs text-gray-400">{blog.date}</span>
        </div>

        <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 mb-4">
          {blog.excerpt}
        </p>
      </div>

      <div>
        <a
          href={`/blog/${blog.id}`}
          className="inline-flex items-center text-xs font-semibold text-gray-900 hover:text-brand-darkGold border border-gray-200 rounded-full px-3 py-1.5 hover:border-brand-darkGold transition-all"
        >
          View Post
          <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
        </a>
      </div>
    </div>
  );
};