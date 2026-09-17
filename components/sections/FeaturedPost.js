import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const FeaturedPost = ({ post }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="overflow-hidden rounded-xl mb-6">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-72 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex items-center space-x-3 mb-4">
        <img
          src={post.authorAvatar}
          alt={post.author}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-sm font-medium text-gray-800">{post.author}</span>
        <span className="text-gray-300">•</span>
        <span className="text-sm text-gray-500">{post.date}</span>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug hover:text-brand-darkGold transition-colors cursor-pointer">
        {post.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {post.excerpt}
      </p>

      <div>
        <a
          href="#"
          className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-brand-darkGold border border-gray-200 rounded-full px-4 py-2 hover:border-brand-darkGold transition-all"
        >
          Read More
          <ArrowUpRight className="w-4 h-4 ml-1.5" />
        </a>
      </div>
    </div>
  );
};
