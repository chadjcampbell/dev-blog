import BlogCard from "../components/BlogCard";

const blogArr = [
  {
    title: "React Routers createBrowserRouter",
    summary:
      "This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack. It also enables the v6.4 data APIs like loaders, actions, fetchers and more.",
    date: "11/26/2023",
    type: "tutorial",
  },
  {
    title: "CS50x vs CS50p",
    summary:
      "Whereas CS50x itself focuses on computer science more generally as well as programming with C, Python, SQL, and JavaScript, CS50P is entirely focused on programming with Python. You can take CS50P before CS50x, during CS50x, or after CS50x.",
    date: "11/21/2023",
    type: "article",
  },
];

const Blogs = () => {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-[95vh] flex items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            My Blogs
          </h2>
          <p className=" text-gray-800 sm:text-xl dark:text-gray-200">
            The more that you read, the more things you will know. The more that
            you learn, the more places you'll go.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {blogArr.map((blog) => (
            <BlogCard
              key={blog.title}
              title={blog.title}
              summary={blog.summary}
              date={blog.date}
              type={blog.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
