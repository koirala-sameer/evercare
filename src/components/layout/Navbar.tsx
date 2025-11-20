import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Name (now acts as Home link) */}
        <div className="flex items-center">
          <a href="/" className="no-underline hover:no-underline">
            <span className="text-3xl font-semibold">
              <span className="text-black">Ever</span>
              <span className="text-black">Care</span>
            </span>
          </a>
        </div>

        {/* Nav Items (Home removed) */}
        <nav className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
          <a href="/our-story" className="no-underline hover:no-underline hover:text-gray-900 transition">
            Our Story
          </a>
          <a href="/platform" className="no-underline hover:no-underline hover:text-gray-900 transition">
            The Platform
          </a>
          <a href="/services" className="no-underline hover:no-underline hover:text-gray-900 transition">
            Services
          </a>
        </nav>

        {/* CTA Button */}
        <button className="hidden md:block bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:bg-blue-700 transition">
          Get Started
        </button>

      </div>
    </header>
  );
};

export default Navbar;
