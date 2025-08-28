import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className=" relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl  flex flex-col">
      {/* Blog Image */}
      {blog.image && (
        <div className="group h-48 w-full overflow-hidden transition duration-300">
          <img
            src={`/blog/${blog.image}`}
            alt={blog.title}
            className="h-full w-full object-cover transform group-hover:scale-110 transition duration-500"
          />
        </div>
      )}

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">
          {blog.title}
        </h3>
        <p className="text-gray-600 mb-6 flex-grow">{blog.description}</p>

        <Link
          to={`/blogs/${blog.id}`}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm font-medium self-start"
        >
          Read More
          <span className="transform group-hover:translate-x-1 transition">
            →
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
