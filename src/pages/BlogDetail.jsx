// src/pages/BlogDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

// Simulated blog data
const blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    description:
      "Learn the basics of React, including components, JSX, and props.",
    content:
      "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'...",
  },
  {
    id: 2,
    title: "Tailwind CSS Tips",
    description:
      "Improve your UI faster with these practical Tailwind CSS tips.",
    content:
      "Tailwind CSS is a utility-first CSS framework that enables rapid UI development. Instead of writing custom CSS, you apply utility classes directly in your markup...",
  },
  {
    id: 3,
    title: "Understanding useEffect in React",
    description: "Master the useEffect hook with real-world examples.",
    content:
      "useEffect is one of the most powerful and commonly used React hooks. It allows you to run side effects in your components like fetching data, updating the DOM, or timers...",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Blog not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 max-w-3xl mx-auto">
      <Link
        to="/blogs"
        className="mt-6 mb-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 text-sm font-medium self-start"
      >
        ← Back to Blogs
      </Link>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 mb-6">{blog.description}</p>
      <div className="text-gray-800 leading-relaxed">{blog.content}</div>
    </div>
  );
};

export default BlogDetail;
