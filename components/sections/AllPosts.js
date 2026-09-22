import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const AllPosts = ({ posts }) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between pb-2 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900">All Posts</h2>
        <a
          href="/allblogs"
          className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-brand-darkGold border border-gray-200 rounded-full px-4 py-1.5 hover:border-brand-darkGold transition-all"
        >
          View All
          <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>

      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            className="py-4 bg-[#F7F8F9] group cursor-pointer hover:bg-amber-200 rounded-3xl p-7"
            href={"/blogs/1"}
          >
            <h3 className="text-md font-bold text-gray-900 group-hover:text-brand-darkGold transition-colors leading-snug mb-2">
              {post.title}
            </h3>

            <p className="text-md text-gray-500 line-clamp-2 leading-relaxed mb-3">
              {post.excerpt}
            </p>

            <div className="flex items-center space-x-2">
              <img
                src={post.avatar}
                alt={post.author}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium textblack">
                {post.author}
              </span>
              <span className="bg-black h-0.5 w-4 text-xs"></span>
              <span className="text-xs font-bold text-black">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
