import MainBlog from "@/components/sections/MainBlog";
import RightSidebar from "../../components/ui/RightSidebar";

const Blog = () => {
  return (
    <div className="max-w-7xl w-full my-15 mx-auto px-4 py-12">
      <div className="flex w-full justify-between gap-15 items-start">
        <MainBlog />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Blog;