import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Background with opacity */}
      <div className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 text-black">
          Welcome to My Blog
        </h1>
        <p className="text-lg mb-8 max-w-md text-black">
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
    </div>
  );
};

export default LandingPage;
