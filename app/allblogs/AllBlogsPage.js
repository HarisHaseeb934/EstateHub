"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { BlogCard } from "@/components/ui/BlogCard";

const tempBlog = {
  id: 1,
  title: "Smart Contract Developer Skills: What to Check Before You Hire",
  excerpt:
    "Learn the smart contract developer skills to check before hiring, from Solidity and security to testing frameworks and real-world deployment experience.",
  author: "Nadia",
  date: "2026-09-16",
  category: "Blockchain",
  authorAvatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  image:
    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
};

const categories = [
  "All",
  "DevOps",
  "Blockchain",
  "Web Development",
  "Game Development",
  "Staff Augmentation",
  "IoT",
  "Mobile App Development",
  "Design",
  "E-Commerce",
  "Artificial Intelligence",
  "Digital Marketing",
  "WordPress",
];

export const AllBlogsPage = ({ blogs = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const postsPerPage = 15;

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center max-w-full mx-auto mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Search for blogs
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Browse our blogs by category and explore on technology, business, and
          growth.
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

      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === cat
                ? "bg-brand-darkGold text-white"
                : "bg-gray-100 text-gray-600 hover:bg-brand-darkGold hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 15 Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {Array.from({ length: 15 }, () => tempBlog).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Pagination Bar */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2 py-6 border-t border-gray-100">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-xs font-medium text-gray-500 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Previous page
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors ${
                currentPage === number
                  ? "border border-gray-300 font-bold text-black"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-xs font-medium text-gray-500 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next page
          </button>
        </div>
      )}
    </div>
  );
};
