import React from "react";

export default function FinalCTA() {
  return (
    <section className="relative w-full py-32 bg-white overflow-hidden">

      {/* Soft ambient glows */}
      <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px]
        bg-[radial-gradient(circle,rgba(66,133,244,0.12)_0%,transparent_70%)]
        blur-3xl opacity-40 pointer-events-none"></div>

      <div className="absolute bottom-[-200px] right-[-140px] w-[420px] h-[420px]
        bg-[radial-gradient(circle,rgba(52,168,83,0.12)_0%,transparent_70%)]
        blur-3xl opacity-40 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
          Your Peace of Mind, Completely Protected.
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-14">
          Try EverHome with total confidence.  
          If you don’t feel more connected and reassured within 30 days,  
          you can cancel with zero hassle — no questions asked.
        </p>

        {/* Guarantee Box */}
        <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-10 
          shadow-[0_20px_80px_rgba(0,0,0,0.08)] max-w-xl mx-auto mb-12">

          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            30-Day Peace of Mind Guarantee
          </h3>

          <p className="text-gray-600 text-[17px] leading-relaxed">
            Experience the safety, the updates, and the reassurance.  
            If it doesn’t feel right, you can walk away anytime.
          </p>
        </div>

        {/* CTA → Scroll to inline checkout */}
        <a
          href="#checkout"
          className="bg-blue-600 text-white px-14 py-4 rounded-2xl text-xl font-semibold
          shadow-lg hover:bg-blue-700 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]
          transition-all duration-300 inline-block"
        >
          Continue →
        </a>

        {/* Microcopy */}
        <p className="text-gray-500 text-sm mt-4">
          No contracts. Cancel anytime.
        </p>

      </div>
    </section>
  );
}
