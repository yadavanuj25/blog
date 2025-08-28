// src/components/BlogCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="border rounded-lg shadow p-6 bg-gray-50 hover:shadow-md transition flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
        <p className="text-gray-700">{blog.description}</p>
      </div>
      <Link
        to={`/blogs/${blog.id}`}
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 text-sm font-medium self-start"
      >
        Read More →
      </Link>
    </div>
  );
};

export default BlogCard;
