import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden px-6">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-900 via-purple-900 to-black animate-gradient" />

      {/* Floating glowing circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Page Content */}
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-6">
        Smart Event Booking 🎉
      </h1>

      <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
        Browse events, book seats, and manage reservations with ease.
      </p>

      <Link
        to="/events"
        className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
      >
        🚀 Explore Events
      </Link>
    </div>
  );
};

export default HomePage;
