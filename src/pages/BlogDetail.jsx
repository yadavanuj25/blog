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
    image: "/images/bg.jpg",
    author: "John Doe",
    date: "August 25, 2025",
  },
  {
    id: 2,
    title: "Tailwind CSS Tips",
    description:
      "Improve your UI faster with these practical Tailwind CSS tips.",
    content:
      "Tailwind CSS is a utility-first CSS framework that enables rapid UI development. Instead of writing custom CSS, you apply utility classes directly in your markup...",
    image: "/images/bg.jpg",
    author: "Emily Smith",
    date: "August 20, 2025",
  },
  {
    id: 3,
    title: "Understanding useEffect in React",
    description: "Master the useEffect hook with real-world examples.",
    content:
      "useEffect is one of the most powerful and commonly used React hooks. It allows you to run side effects in your components like fetching data, updating the DOM, or timers...",
    image: "/images/bg.jpg",
    author: "Alex Johnson",
    date: "August 15, 2025",
  },
  {
    id: 4,
    title: "React hooks",
    description: "Master the useEffect hook with real-world examples.",
    content:
      "useEffect is one of the most powerful and commonly used React hooks. It allows you to run side effects in your components like fetching data, updating the DOM, or timers...",
    image: "/images/bg.jpg",
    author: "Alex Johnson",
    date: "August 15, 2025",
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

  // Suggested blogs (exclude current one)
  const suggested = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-72 md:h-96 w-full">
        <img
          src={`/blog/${blog.image}`}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            {blog.title}
          </h1>
          <p className="text-gray-200 max-w-2xl">{blog.description}</p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-3xl mx-auto px-6 py-12 bg-white shadow-md rounded-xl -mt-12 relative z-10">
        <div className="flex items-center gap-4 mb-6 text-gray-500 text-sm">
          <span>✍ {blog.author}</span>
          <span>📅 {blog.date}</span>
        </div>

        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          {blog.content}
        </div>
      </div>

      {/* Suggested Blogs */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          You may also like
        </h2>
        <div className="grid gap-6 sm:grid-cols-3 ">
          {suggested.map((s) => (
            <Link
              to={`/blogs/${s.id}`}
              key={s.id}
              className="bg-white shadow-md border p-3 rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={`/blog/${s.image}`}
                alt={s.title}
                className="w-full h-40 rounded-lg object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {s.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <Link
          to="/blogs"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
