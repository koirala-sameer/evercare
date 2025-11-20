import React, { useEffect, useState } from "react";

export default function ChatPrompt() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 800);
    const hide = setTimeout(() => setShow(false), 3800);

    return () => {
      clearTimeout(timer);
      clearTimeout(hide);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-28 right-6 bg-white px-6 py-4 rounded-2xl shadow-lg border border-gray-200 text-lg text-gray-700 transition-all duration-500 z-50 flex items-center space-x-4
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
    >
      {/* CSR Avatar (1.5× size) */}
      <img
        src="https://i.pravatar.cc/150?img=47"  // Replace with your real CSR photo later
        alt="CSR"
        className="w-12 h-12 rounded-full object-cover border border-gray-200"
      />

      {/* Prompt Text */}
      <span>Need help? Just ask.</span>
    </div>
  );
}
