import React from "react";
import { Link } from "react-router-dom";

export default function ServicesAndPricing() {
  return (
    <div className="bg-white" style={{ fontFamily: "Google Sans Text, Inter, sans-serif" }}>

      {/* -------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------------------------- */}
      <section className="pt-28 pb-24 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl font-semibold text-[#202124] mb-6 tracking-tight">
          Everything your parents need — in one simple plan.
        </h1>

        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Transparent care, daily updates, and real Nepali support designed 
          for families living abroad.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#plans"
            className="px-10 py-4 bg-[#202124] text-white rounded-xl shadow hover:opacity-90 transition text-lg font-medium"
          >
            View Plans
          </a>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* -------------------------------------------------------- */}
      {/*  BASE PLAN (SECURE) */}
      {/* -------------------------------------------------------- */}
      <section id="plans" className="py-24 max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-semibold text-[#202124] text-center mb-16">
          Core Plan — EverCare Secure
        </h2>

        <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200 shadow-sm mb-20">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}
            <div className="max-w-xl">
              <h3 className="text-3xl font-semibold text-[#202124] mb-4">
                EverCare Secure
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Smart home safety + daily wellbeing updates.  
                Perfect for seniors who don’t need medical supervision.
              </p>

              <ul className="text-gray-700 space-y-3 text-lg">
                <li>• Daily wellness check</li>
                <li>• Activity & movement alerts</li>
                <li>• Emergency detection & call support</li>
                <li>• Monthly home safety report</li>
                <li>• WhatsApp updates for diaspora family</li>
              </ul>
            </div>

            {/* Right */}
            <div className="mt-10 lg:mt-0 text-center">
              <div className="text-4xl font-bold text-[#202124] mb-2">
                $9.99<span className="text-xl font-medium text-gray-500">/month</span>
              </div>

              <Link
                to="/checkout"
                className="inline-block mt-4 px-10 py-4 bg-[#202124] text-white rounded-xl shadow hover:opacity-90 transition text-lg font-medium"
              >
                Start EverCare One
              </Link>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------- */}
        {/*  UPSALE TIERS */}
        {/* -------------------------------------------------------- */}


        {/* HEALTH SUPPORT PLAN */}
        <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm mb-20">

          <h3 className="text-3xl font-semibold text-[#202124] mb-4">
            Health Support + Family Updates
          </h3>

          <div className="text-2xl font-semibold text-[#202124] mb-8">
            $19.99<span className="text-xl text-gray-500">/month</span>
          </div>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl">
            Perfect for parents who need monthly medical supervision.
          </p>

          <ul className="space-y-3 text-lg text-gray-700 mb-8">
            <li>• 🩺 Monthly Nurse Visit (Vitals + Wellness Check)</li>
            <li>• 💊 Medication Reminders & Review</li>
            <li>• 🧪 Lab Test Booking & Report Sharing</li>
            <li>• 📄 Monthly Health Summary to Diaspora</li>
            <li>• 📞 Priority Support Line for Parents</li>
            <li>• 🧼 Basic Home Check (cleanliness, safety risks)</li>
            <li>• 🏥 Doctor Appointment Coordination</li>
          </ul>

          <p className="text-lg italic text-gray-600 mb-6">
            “Health updates that give you peace of mind.”
          </p>

          <Link
            to="/checkout"
            className="inline-block px-10 py-4 bg-[#202124] text-white rounded-xl shadow hover:opacity-90 transition text-lg font-medium"
          >
            Upgrade to Health Support
          </Link>
        </div>


        {/* GUARDIAN COMPLETE PLAN */}
        <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm">

          <h3 className="text-3xl font-semibold text-[#202124] mb-4">
            Guardian Complete — Full Care + Home Assistance + Emergency Response
          </h3>

          <div className="text-2xl font-semibold text-[#202124] mb-8">
            $49.99<span className="text-xl text-gray-500">/month</span>
          </div>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl">
            Perfect for parents with higher health needs or families who want zero stress.
          </p>

          <ul className="space-y-3 text-lg text-gray-700 mb-8">
            <li>• 🧑‍⚕️ Weekly Companion Visit (1 hour)</li>
            <li>• 🛒 Grocery + Medicine Pickup & Drop-off</li>
            <li>• 🧹 Maid/Cleaning Arrangements</li>
            <li>• 🔧 Handyman/Repair Arrangements</li>
            <li>• 🚑 Emergency Hospital Coordination</li>
            <li>• 🛏 Post-surgery/Home Recovery Oversight</li>
            <li>• 🛡 Annual Home Safety Audit</li>
            <li>• 💼 Dedicated Care Manager</li>
          </ul>

          <p className="text-lg italic text-gray-600 mb-6">
            “Your parents fully cared for — as if you were home.”
          </p>

          <Link
            to="/checkout"
            className="inline-block px-10 py-4 bg-[#202124] text-white rounded-xl shadow hover:opacity-90 transition text-lg font-medium"
          >
            Go Premium — Guardian Complete
          </Link>
        </div>

      </section>

      <hr className="border-gray-200" />

      {/* -------------------------------------------------------- */}
      {/*  OPTIONAL ADD-ONS */}
      {/* -------------------------------------------------------- */}
      <section className="py-24 max-w-6xl mx-auto px-6" id="addons">
        <h2 className="text-4xl font-semibold text-[#202124] text-center mb-16">
          Optional Add-Ons  
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* LEGAL PACK */}
          <div className="bg-gray-50 p-8 rounded-3xl border shadow-sm">
            <h3 className="text-2xl font-semibold text-[#202124] mb-3">
              Legal & Document Pack
            </h3>

            <div className="text-xl font-semibold text-[#202124] mb-6">
              $299<span className="text-gray-500 text-lg"> per request</span>
            </div>

            <ul className="space-y-3 text-lg text-gray-700 mb-6">
              <li>• Property verification</li>
              <li>• Tenant background check</li>
              <li>• Land measurement coordination</li>
              <li>• Government paperwork help</li>
              <li>• Visa / passport support</li>
              <li>• Notary & document work</li>
            </ul>

            <Link
              to="/checkout"
              className="inline-block mt-4 px-10 py-4 bg-[#202124] text-white 
                         rounded-xl shadow hover:opacity-90 transition"
            >
              Add Legal Pack
            </Link>
          </div>


          {/* TRAVEL PACK */}
          <div className="bg-gray-50 p-8 rounded-3xl border shadow-sm">
            <h3 className="text-2xl font-semibold text-[#202124] mb-3">
              Travel & Arrival Pack
            </h3>

            <div className="text-xl font-semibold text-[#202124] mb-6">
              $199<span className="text-gray-500 text-lg"> per arrival</span>
            </div>

            <ul className="space-y-3 text-lg text-gray-700 mb-6">
              <li>• Airport pickup</li>
              <li>• Home prep & cleaning</li>
              <li>• SIM & Wi-Fi setup</li>
              <li>• 24-hour driver service</li>
              <li>• Temporary home patrol</li>
              <li>• Luggage delivery</li>
            </ul>

            <Link
              to="/checkout"
              className="inline-block mt-4 px-10 py-4 bg-[#202124] text-white 
                         rounded-xl shadow hover:opacity-90 transition"
            >
              Add Travel Pack
            </Link>
          </div>


          {/* HOME CARE PACK */}
          <div className="bg-gray-50 p-8 rounded-3xl border shadow-sm">
            <h3 className="text-2xl font-semibold text-[#202124] mb-3">
              Home Care Pack
            </h3>

            <div className="text-xl font-semibold text-[#202124] mb-6">
              $29<span className="text-gray-500 text-lg"> / month</span>
            </div>

            <ul className="space-y-3 text-lg text-gray-700 mb-6">
              <li>• Plumbing/electric check</li>
              <li>• Water filter servicing</li>
              <li>• AC/Heater servicing</li>
              <li>• Garden care</li>
              <li>• Pest control coordination</li>
            </ul>

            <Link
              to="/checkout"
              className="inline-block mt-4 px-10 py-4 bg-[#202124] text-white 
                         rounded-xl shadow hover:opacity-90 transition"
            >
              Add Home Care Pack
            </Link>
          </div>

        </div>

      </section>


      {/* -------------------------------------------------------- */}
      {/*  FINAL CTA */}
      {/* -------------------------------------------------------- */}
      <section className="py-24 text-center bg-gray-50">
        <h2 className="text-4xl font-semibold text-[#202124] mb-6">
          Ready to begin your EverCare journey?
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          One plan. One price. Peace of mind — every single day.
        </p>

        <Link
          to="/checkout"
          className="px-12 py-4 bg-[#202124] text-white text-lg font-medium rounded-xl shadow hover:opacity-90 transition"
        >
          Continue →
        </Link>
      </section>

    </div>
  );
}
