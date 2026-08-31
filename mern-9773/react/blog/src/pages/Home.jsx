import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const postsRes = await fetch("https://dummyjson.com/posts");
        const productsRes = await fetch("https://dummyjson.com/products");

        const postsData = await postsRes.json();
        const productsData = await productsRes.json();

        const blogsWithImages = postsData.posts.map((post, index) => ({
          ...post,
          image:
            productsData.products[index % productsData.products.length]
              ?.thumbnail,
        }));

        setBlogs(blogsWithImages);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          Latest Blogs
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;