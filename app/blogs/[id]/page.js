import Blog from "./Blog";

const Page = async({params}) => {
  const { id } = await params;
  return (
    <main className="w-full min-h-screen">
      <Blog/>
    </main>
  );
};

export default Page;