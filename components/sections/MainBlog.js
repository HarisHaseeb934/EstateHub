import AuthorProfileCard from "../ui/AuthorProfileCard";
import ArticleContent from "../ui/ArticleContent";
import KeyTakeaways from "../ui/KeyTakeaways";
import BlogHeader from "../ui/BlogHeader";
import FAQ from "../ui/FAQ";
import Table from "../ui/Table";

const TABLE_DATA = [
  {
    id: 1,
    question: "How does reentrancy happen?",
    whatItTests: "Security knowledge",
  },
  {
    id: 2,
    question: "How would you secure an admin function?",
    whatItTests: "Access control",
  },
  {
    id: 3,
    question: "How do you test a smart contract?",
    whatItTests: "Testing process",
  },
  {
    id: 4,
    question: "How do you reduce gas costs?",
    whatItTests: "Optimization",
  },
  {
    id: 5,
    question: "What happens when a transaction reverts?",
    whatItTests: "EVM knowledge",
  },
  {
    id: 6,
    question: "When would you use a proxy contract?",
    whatItTests: "Architecture",
  },
  {
    id: 7,
    question: "How do you test for unexpected inputs?",
    whatItTests: "Edge case thinking",
  },
  {
    id: 8,
    question: "How do you prepare a contract for an audit?",
    whatItTests: "Security workflow",
  },
  {
    id: 9,
    question: "What is the difference between storage and memory?",
    whatItTests: "Solidity knowledge",
  },
  {
    id: 10,
    question: "How would you monitor a contract after deployment?",
    whatItTests: "Production experience",
  },
];

const MainBlog = () => {
  return (
    <div className="flex-1 w-full space-y-6">
      <BlogHeader />
      <AuthorProfileCard />
      <ArticleContent />
      <KeyTakeaways />
      <Table items={TABLE_DATA} />
      <FAQ />
    </div>
  );
};

export default MainBlog;
