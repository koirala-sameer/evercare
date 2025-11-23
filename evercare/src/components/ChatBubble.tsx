import React, { useState } from "react";
import ChatPanel from "./ChatPanel";
import ChatPrompt from "./ChatPrompt";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Animated Google-style Prompt */}
      {!open && <ChatPrompt />}

      {/* Floating Bubble */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-blue-600 shadow-xl flex items-center justify-center hover:scale-105 transition transform cursor-pointer z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.83L3 20l1.11-3.33A7.87 7.87 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {/* Chat Window */}
      <ChatPanel open={open} onClose={() => setOpen(false)} />
    </>
  );
}
