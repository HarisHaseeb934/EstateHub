"use client"
import { Search, ArrowRight } from 'lucide-react';
import { BlogCard } from './BlogCard';
import { useState } from 'react';
import Link from 'next/link';

const tempBlog = {
  id: 1,
  title: 'Smart Contract Developer Skills: What to Check Before You Hire',
  excerpt:
    'Learn the smart contract developer skills to check before hiring, from Solidity and security to testing frameworks and real-world deployment experience.',
  author: 'Nadia',
  date: '2026-09-16',
  category: 'Blockchain',
  authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
  image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
};

const categories = [
  'All', 'DevOps', 'Blockchain', 'Web Development', 'Game Development',
  'Staff Augmentation', 'IoT', 'Mobile App Development', 'Design',
  'E-Commerce', 'Artificial Intelligence', 'Digital Marketing', 'WordPress'
];

export const SearchBlogSection = ({ blogs = [], onViewAll }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Limit to 9 posts for the homepage section
  const displayedBlogs = filteredBlogs.slice(0, 9);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header & Search */}
      <div className="text-center max-w-full mx-auto mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Search for blogs</h2>
        <p className="text-gray-500 text-sm mb-6">
          Browse our blogs by category and explore on technology, business, and growth.
        </p>

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-darkGold transition-colors"
          />
          <Search className="w-4 h-4 text-gray-400 absolute right-3 top-3.5" />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-brand-darkGold text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-brand-darkGold hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of 9 Blogs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {Array.from({length: 10}, () => tempBlog).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* View All Button */}
      {Array.from({length: 10}, () => tempBlog).length > 9 && (
        <div className="text-center">
          <Link
            href={"/allblogs"}
            // onClick={onViewAll}
            className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-gray-900 bg-white border border-gray-200 rounded-full hover:border-brand-darkGold hover:text-brand-darkGold shadow-sm transition-all"
          >
            View All
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      )}
    </section>
  );
};