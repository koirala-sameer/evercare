import React from "react";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <section className="relative w-full py-32 bg-white overflow-hidden">

      {/* Ambient Google-style lights */}
      <div className="absolute top-[-200px] right-[-150px] w-[550px] h-[550px] 
        bg-[radial-gradient(circle,rgba(66,133,244,0.18)_0%,transparent_70%)] 
        blur-3xl opacity-50 pointer-events-none"></div>

      <div className="absolute bottom-[-200px] left-[-150px] w-[550px] h-[550px] 
        bg-[radial-gradient(circle,rgba(52,168,83,0.18)_0%,transparent_70%)] 
        blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* PAGE HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold text-google-black mb-4">
            EverCare One
          </h1>
          <p className="text-lg text-google-gray max-w-2xl mx-auto">
            One simple subscription to protect your parents and home.  
            Add premium services later — only if you need them.
          </p>
        </div>

        {/* SINGLE PRICING CARD */}
        <div className="bg-white/70 backdrop-blur-xl border border-gray-200 
            rounded-3xl p-12 shadow-[0_25px_80px_rgba(0,0,0,0.12)]">

          {/* Price block */}
          <div className="text-center mb-12">
            <span className="text-6xl font-extrabold text-google-blue">$9.99</span>
            <span className="text-google-gray text-xl font-medium">/month</span>
            <div className="mt-2 text-google-green font-semibold text-lg">
              NRN Launch Offer — Limited Time
            </div>
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-12">

            {[
              "Smart camera + motion alerts",
              "Weekly parent wellbeing check",
              "Emergency SOS button",
              "24/7 monitoring & notifications",
              "Home power & internet monitoring",
              "Door/Window safety status",
              "App access for live view & alerts",
              "Emergency escalation to family or neighbors",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="h-6 w-6 flex items-center justify-center rounded-full
                  bg-google-green text-white text-sm font-bold">✓</span>
                <p className="text-google-black text-[16px]">{item}</p>
              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="text-center mt-6">
            <Link
              to="/addons"
              className="bg-google-blue text-white px-14 py-4 rounded-xl text-xl font-semibold
                shadow-lg hover:bg-blue-700 hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              Start EverCare One →
            </Link>

            <p className="text-google-gray text-sm mt-4">
              Add Care+ or EverCare Total later — only if you need them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
