import { AllPosts } from "@/components/sections/AllPosts";
import { FeaturedPost } from "@/components/sections/FeaturedPost";
import { SearchBlogSection } from "@/components/ui/SearchBlogSection";
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const postsData = [
  {
    id: 1,
    title: "Smart Contract Development Cost in 2027: Complete Pricing Guide",
    excerpt:
      "Learn smart contract development costs for tokens, NFTs, DeFi, EVM, audits, developers, deployment, and ongoing...",
    author: "muhammad saif",
    date: "2026-09-08",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 2,
    title: "How to Increase Revenue on a Shopify Store Through Klaviyo",
    excerpt:
      "Learn how to increase Shopify sales with Klaviyo through personalized campaigns, automated flows, and customer...",
    author: "ammar basit",
    date: "2026-08-24",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 3,
    title: "What Is RWA Tokenization and Why Enterprises Are Adopting It",
    excerpt:
      "Discover why enterprises are investing in RWA tokenization. Explore key business benefits, industry use cases, adoption...",
    author: "muhammad saif",
    date: "2026-08-17",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 4,
    title: "What Role Do Smart Contracts Play in RWA Transactions?",
    excerpt:
      "Smart contracts help automate RWA transactions, reduce costs, improve transparency, and enable secure blockchain...",
    author: "muhammad saif",
    date: "2026-08-05",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
  },
];

const featuredData = {
  id: 1,
  title: "Freelance vs Agency vs In-House Smart Contract Developers",
  excerpt:
    "Compare freelance, staff augmentation, agency, and in-house smart contract developers by cost, security, timelines, and project fit.",
  author: "Nadia",
  date: "2026-09-11",
  authorAvatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
};

export default function BlogSection() {
  return (
    <section className="max-w-7xl my-15 mx-auto px-4 py-12 bg-slate-50/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Post
          </h2>
          <FeaturedPost post={featuredData} />
        </div>

        <div className="lg:col-span-5">
          <AllPosts posts={postsData} />
        </div>
      </div>
      <SearchBlogSection/>
    </section>
  );
}
