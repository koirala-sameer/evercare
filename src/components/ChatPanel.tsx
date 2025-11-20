import React from "react";

export default function ChatPanel({ open, onClose }) {
  return (
    <div
      className={`fixed bottom-28 right-6 w-[360px] h-[640px] bg-white shadow-2xl rounded-3xl border border-gray-200 z-50 transform transition-all duration-300 
      ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 rounded-t-3xl">
        <div className="text-2xl font-semibold flex items-center space-x-1">
          <span className="text-green-600">Ever</span>
          <span className="text-black">Care Assistant</span>
        </div>

        <div className="flex items-center space-x-4 text-gray-500 text-xl">
          <button className="hover:text-gray-800">⤵</button>
          <button className="hover:text-gray-800">⟳</button>
          <button onClick={onClose} className="hover:text-gray-800 text-3xl">✕</button>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 overflow-y-auto h-[480px]">
        <p className="text-2xl font-semibold text-gray-900 mb-4">
          ✨ What can I help you find?
        </p>
      </div>

      {/* Input */}
      <div className="px-6 py-5 border-t border-gray-200 rounded-b-3xl relative bg-white">
        <input
          type="text"
          placeholder="Ask anything"
          className="w-full px-5 py-4 border border-gray-300 rounded-2xl text-xl focus:ring-2 focus:ring-green-500 outline-none shadow-sm"
        />

        <p className="text-sm text-gray-400 mt-3 text-center">
          WhatsApp integration coming soon
        </p>
      </div>
    </div>
  );
}
