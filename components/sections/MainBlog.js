import AuthorProfileCard from "../ui/AuthorProfileCard";
import ArticleContent from "../ui/ArticleContent";
import KeyTakeaways from "../ui/KeyTakeaways";
import BlogHeader from "../ui/BlogHeader";
import FAQ from "../ui/FAQ";

const MainBlog = () => {
  return (
    <div className="flex-1 w-full space-y-6">
      <BlogHeader/>
      <AuthorProfileCard />
      <ArticleContent />
      <KeyTakeaways />
      <FAQ/>
    </div>
  );
};

export default MainBlog;
