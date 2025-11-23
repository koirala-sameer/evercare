import React from "react";

export default function ChatPanel({ open, onClose }) {
  return (
    <div
      className={`fixed bottom-28 right-6 w-[360px] h-[640px] bg-white shadow-2xl rounded-3xl border border-gray-200 z-50 transform transition-all duration-300 
      ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
      style={{ fontFamily: "Google Sans Text, Inter, sans-serif" }}
    >
      {/* HEADER — FINAL CLEAN VERSION */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 rounded-t-3xl">

        {/* Brand */}
        <div className="flex items-baseline space-x-1">
          <span className="text-lg font-semibold text-[#202124]">EverCare</span>
          <span className="text-lg font-medium text-gray-500">Assistant</span>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-3 flex-shrink-0">

          {/* Minimize */}
          <button className="hover:text-gray-800 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5" fill="none" viewBox="0 0 24 24"
              strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>

          {/* Close */}
          <button onClick={onClose} className="hover:text-gray-800 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6" fill="none" viewBox="0 0 24 24"
              strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

        </div>
      </div>

      {/* BODY */}
      <div className="p-6 overflow-y-auto h-[480px]">
        <p className="text-xl font-semibold text-[#202124] mb-4">
          ✨ What can I help you find?
        </p>
      </div>

      {/* INPUT */}
      <div className="px-6 py-5 border-t border-gray-200 rounded-b-3xl bg-white">
        <input
          type="text"
          placeholder="Ask anything…"
          className="w-full px-5 py-4 border border-gray-300 rounded-2xl 
                     text-[1.05rem] focus:ring-2 focus:ring-blue-500 
                     outline-none shadow-sm"
        />

        <p className="text-sm text-gray-400 mt-3 text-center">
          WhatsApp integration coming soon
        </p>
      </div>
    </div>
  );
}
