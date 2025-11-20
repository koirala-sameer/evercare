import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://img.icons8.com/?size=512&id=59822&format=png"
            alt="home icon"
            className="h-7 w-7"
          />
          <span className="text-xl font-semibold text-gray-900">SafeHome</span>
        </div>

        {/* Nav Items */}
        <nav className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
          <a href="/" className="no-underline hover:no-underline hover:text-gray-900 transition">Home</a>
          <a href="/our-story" className="no-underline hover:no-underline hover:text-gray-900 transition">Our Story</a>
          <a href="/platform" className="no-underline hover:no-underline hover:text-gray-900 transition">The Platform</a>
          <a href="/services" className="no-underline hover:no-underline hover:text-gray-900 transition">Services</a>
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
