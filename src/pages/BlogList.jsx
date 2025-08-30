import React, { useState } from "react";
import BlogCard from "../components/BlogCard";

const blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    description:
      "Learn the basics of React, including components, JSX, and props.",
    image: "/images/blog1.jpg",
    category: "React",
  },
  {
    id: 2,
    title: "Tailwind CSS Tips",
    description:
      "Improve your UI faster with these practical Tailwind CSS tips.",
    image: "/images/react.jpg",
    hoverImage: "/images/node.jpg",
    category: "CSS",
  },
  {
    id: 3,
    title: "Understanding useEffect in React",
    description: "Master the useEffect hook with real-world examples.",
    image: "/images/node.jpg",
    hoverImage: "/images/react.jpg",
    category: "React",
  },
  {
    id: 4,
    title: "State Management with Redux",
    description: "Learn how Redux makes state predictable and scalable.",
    image: "/images/bg.jpg",
    hoverImage: "/images/react.jpg",
    category: "Redux",
  },
  {
    id: 5,
    title: "Next.js for Beginners",
    description: "Build production-ready apps with React and Next.js.",
    image: "/images/bg.jpg",
    hoverImage: "/images/react.jpg",
    category: "Next.js",
  },
  {
    id: 6,
    title: "Deploying React Apps",
    description: "Learn multiple ways to deploy your React app live.",
    image: "/images/bg.jpg",
    category: "React",
  },
];

const categories = ["All", ...new Set(blogs.map((b) => b.category))];

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const blogsPerPage = 3;

  const featuredBlog = blogs[0];
  console.log(featuredBlog);

  const filteredBlogs = blogs
    .filter((blog) => blog.id !== featuredBlog.id)
    .filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategory = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative py-20 text-center text-white">
        <div className="absolute inset-0 bg-[url('/images/blog1.jpg')] bg-cover bg-center bg-no-repeat opacity-100"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-indigo-900/60"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Blog</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Stay updated with the latest articles, tutorials, and insights on
            modern web development.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured</h2>
        <div className="bg-blue-50 rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row transform transition hover:scale-102 hover:shadow-xl">
          <img
            src={`/blog${featuredBlog.image}`}
            alt={featuredBlog.title}
            className="w-full md:w-1/2 h-64 object-cover"
          />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <span className="text-sm text-blue-600 font-medium">
                {featuredBlog.category}
              </span>
              <h3 className="text-2xl font-bold mb-3 mt-1">
                {featuredBlog.title}
              </h3>
              <p className="text-gray-600">{featuredBlog.description}</p>
            </div>
            <a
              href={`/blogs/${featuredBlog.id}`}
              className="mt-4  w-max inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          {/* Search Input */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Categories (moved below search) */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategory(cat)}
                  className={`px-4 py-2 rounded-lg border transition font-medium ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Cards */}
          {filteredBlogs.length === 0 ? (
            <p className="text-center text-gray-600 mt-10">No blogs found.</p>
          ) : (
            <>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {currentBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-10 space-x-2">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => goToPage(index + 1)}
                      className={`px-4 py-2 rounded-md border transition ${
                        currentPage === index + 1
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
