import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">

      {/* Background Google-style gradients */}
      <div className="absolute w-[600px] h-[600px] top-[-200px] right-[-120px] rounded-full 
        bg-[radial-gradient(circle,rgba(66,133,244,0.15)_0%,transparent_70%)] blur-3xl"></div>

      <div className="absolute w-[520px] h-[520px] bottom-[-180px] left-[-140px] rounded-full 
        bg-[radial-gradient(circle,rgba(251,188,5,0.12)_0%,transparent_70%)] blur-3xl opacity-60"></div>

      {/* Subtle yellow glow behind title */}
      <div className="absolute top-[220px] left-[80px] w-[280px] h-[120px]
        bg-[radial-gradient(circle,rgba(251,188,5,0.10)_0%,transparent_70%)]
        blur-2xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-5 py-2.5 
            rounded-full text-sm font-semibold text-google-blue shadow-md mb-10 border border-gray-100">
            <span className="h-2.5 w-2.5 rounded-full bg-google-green"></span>
            EverCare — Trusted by families in 12+ countries
          </div>

          {/* Headline */}
          <h1 className="relative text-[48px] md:text-[64px] font-bold leading-[1.08] text-google-black tracking-tight mb-6">

            {/* Small yellow dot accent */}
            <span className="absolute -left-6 top-4 w-3 h-3 rounded-full bg-google-yellow opacity-70"></span>

            One Platform.
            <br /> Total Peace of Mind.

            {/* Soft yellow underline effect */}
            <span className="absolute left-0 bottom-[-6px] w-40 h-[6px]
              bg-[linear-gradient(90deg,rgba(251,188,5,0.35),transparent)]
              rounded-full"></span>
          </h1>

          {/* Subheadline */}
          <p className="text-[20px] text-google-gray leading-relaxed max-w-xl mb-12">
            Introducing <span className="font-semibold text-google-black">EverCare One</span> — 
            real-time home security, wellbeing updates, and personalized care designed for families 
            living abroad who want their parents safe, supported, and never alone.
          </p>

          {/* Price Tag */}
          <div className="inline-flex items-baseline gap-4 bg-white px-12 py-7 rounded-2xl 
            shadow-xl border border-gray-200 mb-12">
            <span className="text-[56px] font-bold text-google-blue">$9.99</span>
            <span className="text-google-gray text-[20px] font-medium">/month</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">

            {/* Main CTA */}
            <Link
              to="/addons"
              className="bg-google-blue text-white px-10 py-3.5 rounded-xl text-[17px] font-semibold 
              shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              Start EverCare One →
            </Link>

            {/* Secondary CTA */}
            <a
              href="#"
              className="bg-white border-2 border-google-blue text-google-blue px-10 py-3.5 rounded-xl
              text-[17px] font-semibold hover:bg-google-blue hover:text-white hover:-translate-y-1 
              transition-all duration-300"
            >
              Watch Demo
            </a>
          </div>

          {/* Micro Features */}
          <div className="flex flex-wrap gap-10">
            {[
              "24/7 Monitoring",
              "Weekly Parent Check-ins",
              "No Contracts",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-google-gray text-[16px]">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-google-green text-white font-bold text-[14px]">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT PHONE MOCKUP */}
        <div className="flex justify-center">

          <div className="relative bg-[#1a1a1a] w-[340px] h-[680px] rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.35)] p-3">

            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black h-8 w-40 rounded-b-3xl z-20"></div>

            {/* Screen */}
            <div className="bg-gradient-to-br from-google-blue to-google-green w-full h-full rounded-[32px] p-6 text-white flex flex-col">

              <div className="text-sm opacity-90 mt-6">Today, 2:47 PM</div>

              <div className="text-[28px] font-bold mt-1">EverCare One</div>
              <div className="opacity-90 mb-4">All systems operational</div>

              {/* Grid */}
              <div className="grid grid-cols-2 gap-4 mt-4">

                {/* Live Camera */}
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <span className="text-3xl">🎥</span>
                  <div className="font-semibold text-[15px] mt-3">Live Camera</div>
                  <div className="text-xs opacity-90">• Recording</div>
                </div>

                {/* Door */}
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <span className="text-3xl">🚪</span>
                  <div className="font-semibold text-[15px] mt-3">Door Status</div>
                  <div className="text-xs opacity-90">• Secured</div>
                </div>

                {/* Wellbeing */}
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <span className="text-3xl">💚</span>
                  <div className="font-semibold text-[15px] mt-3">Wellbeing</div>
                  <div className="text-xs opacity-90">• Good</div>
                </div>

                {/* SOS (soft Google Red) */}
                <div className="bg-google-red/20 text-white backdrop-blur rounded-xl p-4 border border-google-red/30">
                  <span className="text-3xl">🆘</span>
                  <div className="font-semibold text-[15px] mt-3">Emergency</div>
                  <div className="text-xs opacity-90">• Tap to trigger</div>
                </div>
              </div>

              {/* Bottom CTA */}
              <button className="mt-auto bg-white text-google-blue font-semibold py-3 rounded-xl shadow text-center hover:bg-gray-100 transition">
                View Dashboard →
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
