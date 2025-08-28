import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Blog</h1>
      <p className="text-lg mb-8 max-w-md">
        Discover the latest insights, tutorials, and tech stories written with
        passion and clarity.
      </p>
      <button
        onClick={() => navigate("/blogs")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        View Blogs
      </button>
    </div>
  );
};

export default LandingPage;
