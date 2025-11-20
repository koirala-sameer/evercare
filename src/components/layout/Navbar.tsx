import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [regionOpen, setRegionOpen] = useState(false);
  const [autoRegion, setAutoRegion] = useState("Select Region");

  // Auto-region detection
  useEffect(() => {
    try {
      const locale = Intl.DateTimeFormat().resolvedOptions().locale;
      const lang = navigator.language || locale;

      if (lang.includes("US")) setAutoRegion("United States");
      else if (lang.includes("GB") || lang.includes("UK")) setAutoRegion("United Kingdom");
      else if (lang.includes("AU")) setAutoRegion("Australia");
      else if (lang.includes("CA")) setAutoRegion("Canada");
      else if (lang.includes("JP")) setAutoRegion("Japan");
      else if (lang.includes("KR")) setAutoRegion("South Korea");
      else if (lang.includes("EU")) setAutoRegion("Europe");
      else if (lang.includes("AE") || lang.includes("SA")) setAutoRegion("Middle East");
      else setAutoRegion("Region");
    } catch (e) {
      setAutoRegion("Region");
    }
  }, []);

  const regions = [
    "United States",
    "United Kingdom",
    "Australia",
    "Canada",
    "Europe",
    "Middle East",
    "Japan",
    "South Korea",
  ];

  const openChat = () => {
    const event = new CustomEvent("open-chat");
    window.dispatchEvent(event);
  };

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* BRAND — GOOGLE STYLE EVERCARE */}
        <a href="/" className="flex items-center no-underline hover:no-underline">
          <span
            className="flex items-center text-3xl"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              color: "#202124",
              letterSpacing: "-0.25px",
            }}
          >
            <span style={{ fontWeight: 500 }}>Ever</span>
            <span style={{ fontWeight: 600, marginLeft: "1px" }}>Care</span>
          </span>
        </a>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
          <a href="/our-story" className="hover:text-gray-900 transition">Our Story</a>
          <a href="/platform" className="hover:text-gray-900 transition">The Platform</a>
          <a href="/services" className="hover:text-gray-900 transition">Services</a>
        </nav>

        {/* RIGHT ICONS */}
        <div className="hidden md:flex items-center space-x-5">

          {/* Help Icon */}
          <button
            onClick={openChat}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-black hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor"
              className="w-6 h-6 text-black">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M8.045 9.673a3.956 3.956 
                   0 017.702 0c0 1.756-1.22 2.79-2.273 
                   3.535-.892.627-1.474 1.25-1.474 
                   2.292v.25M12 17.75h.007v.008H12v-.008Z"/>
            </svg>
          </button>

          {/* Globe / Region */}
          <div className="relative">
            <button
              onClick={() => setRegionOpen(!regionOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-black hover:bg-gray-100 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
                strokeWidth="1.5" stroke="currentColor"
                className="w-6 h-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 
                     21C9.79 21 8 16.97 8 12S9.79 3 12 
                     3m0 18a9.004 9.004 0 01-8.716-6.747M12 
                     3c2.21 0 4 4.03 4 9s-1.79 9-4 
                     9m0-18C9.79 3 8 7.03 8 
                     12s1.79 9 4 9"/>
              </svg>
            </button>

            {regionOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 shadow-xl rounded-xl p-2 z-50">
                {regions.map((region) => (
                  <button
                    key={region}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700"
                  >
                    {region}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* User Icon */}
          <button
            onClick={() => console.log("Login modal soon")}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-black hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor"
              className="w-6 h-6 text-black">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M15.75 9A3.75 3.75 0 
                   1 1 12 5.25 3.75 3.75 
                   0 0 1 15.75 9Z"/>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4.5 20.25a8.25 8.25 
                   0 1 1 15 0"/>
            </svg>
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
