// src/pages/BlogList.jsx
import React from "react";
import BlogCard from "../components/BlopgCard";

const blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    description:
      "Learn the basics of React, including components, JSX, and props.",
    image: "images/bg.jpg",
  },
  {
    id: 2,
    title: "Tailwind CSS Tips",
    description:
      "Improve your UI faster with these practical Tailwind CSS tips.",
  },
  {
    id: 3,
    title: "Understanding useEffect in React",
    description: "Master the useEffect hook with real-world examples.",
  },
];

const BlogList = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-10">All Blogs</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
