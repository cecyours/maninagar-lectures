import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold mb-3 line-clamp-2">
          {blog.title}
        </h2>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {blog.body.slice(0, 120)}...
        </p>

        <Link
          to={`/blog/${blog.id}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;