import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    async function fetchBlog() {
      try {
        const postRes = await fetch(
          `https://dummyjson.com/posts/${id}`
        );

        const productRes = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        const postData = await postRes.json();
        const productData = await productRes.json();

        setBlog(postData);
        setImage(productData.thumbnail);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-semibold">
          Loading...
        </h2>
      </div>
    );
  }

  const readingTime = Math.max(
    1,
    Math.ceil(blog.body.split(" ").length / 200)
  );

  return (
    <div className="bg-gray-100 min-h-screen pb-12">
      {/* Hero */}
      <div className="relative">
        <img
          src={image}
          alt={blog.title}
          className="w-full h-[500px] object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute bottom-10 left-10 text-white max-w-4xl">
          <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">
            Blog Article
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            {blog.title}
          </h1>

          <div className="flex gap-6 mt-4">
            <span>👨 Admin</span>
            <span>⏱ {readingTime} min read</span>
            <span>👀 {blog.views}</span>
            <span>👍 {blog.reactions?.likes}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 -mt-16 relative z-10">
        <div className="flex flex-wrap gap-3 mb-8">
          {blog.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <p className="text-gray-700 leading-8 text-lg">
          {blog.body}
        </p>

        <p className="mt-6 text-gray-700 leading-8">
          {blog.body}
        </p>

        <p className="mt-6 text-gray-700 leading-8">
          {blog.body}
        </p>

        <div className="border-t mt-10 pt-6 flex gap-6">
          <span>👍 Likes: {blog.reactions?.likes}</span>
          <span>👎 Dislikes: {blog.reactions?.dislikes}</span>
          <span>👀 Views: {blog.views}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;