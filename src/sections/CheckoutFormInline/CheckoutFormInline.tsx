import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutFormInline() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    yourName: "",
    phone: "",
    email: "",
    parentLocation: "",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();

    // In future we store this in localStorage or API
    localStorage.setItem("everhome-user", JSON.stringify(form));

    navigate("/addons");
  };

  return (
    <section id="checkout" className="relative w-full py-28 bg-[#f8f9fa]">
      <div className="max-w-3xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Start Your EverHome Setup
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Tell us a few details to personalize everything for your family.
          </p>
        </div>

        {/* Form Container */}
        <form
          onSubmit={onSubmit}
          className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.10)] 
                     border border-gray-200 flex flex-col gap-6"
        >

          {/* Your Name */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              required
              value={form.yourName}
              onChange={(e) => setForm({ ...form, yourName: e.target.value })}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 
                         focus:ring-2 focus:ring-blue-500 outline-none text-gray-900"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Phone Number</label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Your phone number"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 
                         focus:ring-2 focus:ring-blue-500 outline-none text-gray-900"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 
                         focus:ring-2 focus:ring-blue-500 outline-none text-gray-900"
            />
          </div>

          {/* Parent Location */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Parent's Location (City)</label>
            <input
              type="text"
              required
              value={form.parentLocation}
              onChange={(e) => setForm({ ...form, parentLocation: e.target.value })}
              placeholder="Kathmandu, Pokhara, Lalitpur..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 
                         focus:ring-2 focus:ring-blue-500 outline-none text-gray-900"
            />
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="mt-6 bg-blue-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold
                       shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all"
          >
            Continue →
          </button>

          {/* Microcopy */}
          <p className="text-sm text-gray-500 text-center mt-2">
            No payment required now — you’ll choose add-ons in the next step.
          </p>

        </form>
      </div>
    </section>
  );
}
