import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BlogCard = ({ blog }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl flex flex-col">
      {blog.image && (
        <div className="group relative h-48 w-full overflow-hidden">
          {/* Default Image */}
          <img
            src={`/blog/${blog.image}`}
            alt={blog.title}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          {/* Hover Image */}
          {blog.hoverImage && (
            <img
              src={`/blog/${blog.hoverImage}`}
              alt={`${blog.title} hover`}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          )}
        </div>
      )}

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">
          {blog.title}
        </h3>
        <p className="text-gray-600 mb-3 flex-grow">{blog.description}</p>

        <Link
          to={`/blogs/${blog.id}`}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm font-bold self-start"
        >
          Read More
          <span className="transform group-hover:translate-x-1 transition">
            <ArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
