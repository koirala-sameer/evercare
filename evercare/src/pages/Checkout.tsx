import React, { useState } from "react";

export default function Checkout() {
  const [selectedPlan, setSelectedPlan] = useState("secure");
  const [addons, setAddons] = useState({
    legal: false,
    travel: false,
    homecare: false,
  });

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  const [parent, setParent] = useState({
    name: "",
    phone: "",
    city: "",
  });

  // Pricing Logic
  const basePrices = {
    secure: 9.99,
    health: 19.99,
    guardian: 49.99,
  };

  const addonPrices = {
    legal: 299,
    travel: 199,
    homecare: 29,
  };

  const toggleAddon = (key: string) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const monthlyTotal =
    basePrices[selectedPlan] + (addons.homecare ? addonPrices.homecare : 0);

  const oneTimeTotal =
    (addons.legal ? addonPrices.legal : 0) +
    (addons.travel ? addonPrices.travel : 0);

  return (
    <div
      className="min-h-screen bg-white pt-32 pb-20 px-6"
      style={{ fontFamily: "Google Sans Text, Inter, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-semibold text-[#202124] mb-10">
          Complete Your EverCare Plan
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* --------------------------------------------- */}
          {/* LEFT: PLAN SELECTION */}
          {/* --------------------------------------------- */}
          <div className="lg:col-span-2 space-y-12">

            {/* STEP 1: PLAN SELECTION */}
            <section>
              <h2 className="text-2xl font-semibold text-[#202124] mb-5">
                1. Choose Your Plan
              </h2>

              <div className="space-y-4">

                {/* Secure */}
                <button
                  onClick={() => setSelectedPlan("secure")}
                  className={`w-full text-left p-6 rounded-2xl border ${
                    selectedPlan === "secure"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                >
                  <div className="text-xl font-semibold text-[#202124]">
                    EverCare Secure — $9.99/mo
                  </div>
                  <p className="text-gray-600">
                    Home safety + daily wellbeing updates.
                  </p>
                </button>

                {/* Health Support */}
                <button
                  onClick={() => setSelectedPlan("health")}
                  className={`w-full text-left p-6 rounded-2xl border ${
                    selectedPlan === "health"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                >
                  <div className="text-xl font-semibold text-[#202124]">
                    Health Support + Family Updates — $19.99/mo
                  </div>
                  <p className="text-gray-600">
                    Monthly nurse visit + medication review.
                  </p>
                </button>

                {/* Guardian Complete */}
                <button
                  onClick={() => setSelectedPlan("guardian")}
                  className={`w-full text-left p-6 rounded-2xl border ${
                    selectedPlan === "guardian"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                >
                  <div className="text-xl font-semibold text-[#202124]">
                    Guardian Complete — $49.99/mo
                  </div>
                  <p className="text-gray-600">
                    Weekly visits + home help + emergency support.
                  </p>
                </button>
              </div>
            </section>

            {/* STEP 2: ADDONS */}
            <section>
              <h2 className="text-2xl font-semibold text-[#202124] mb-5">
                2. Optional Add-Ons
              </h2>

              <div className="space-y-4">

                {/* Legal Pack */}
                <button
                  onClick={() => toggleAddon("legal")}
                  className={`w-full text-left p-6 rounded-2xl border ${
                    addons.legal ? "border-blue-500 bg-blue-50" : "border-gray-300"
                  }`}
                >
                  <div className="text-xl font-semibold">Legal & Document Pack — $299</div>
                  <p className="text-gray-600">Property + paperwork help.</p>
                </button>

                {/* Travel Pack */}
                <button
                  onClick={() => toggleAddon("travel")}
                  className={`w-full text-left p-6 rounded-2xl border ${
                    addons.travel ? "border-blue-500 bg-blue-50" : "border-gray-300"
                  }`}
                >
                  <div className="text-xl font-semibold">Travel & Arrival Pack — $199</div>
                  <p className="text-gray-600">Airport pickup + home prep.</p>
                </button>

                {/* Home Care Pack */}
                <button
                  onClick={() => toggleAddon("homecare")}
                  className={`w-full text-left p-6 rounded-2xl border ${
                    addons.homecare
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                >
                  <div className="text-xl font-semibold">Home Care Pack — $29/mo</div>
                  <p className="text-gray-600">
                    Plumbing/electric checks + servicing.
                  </p>
                </button>
              </div>
            </section>

            {/* STEP 3: BUYER DETAILS */}
            <section>
              <h2 className="text-2xl font-semibold text-[#202124] mb-5">
                3. Your Details (Diaspora)
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  className="border border-gray-300 rounded-xl px-5 py-4"
                  placeholder="Full Name"
                  onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
                />

                <input
                  className="border border-gray-300 rounded-xl px-5 py-4"
                  placeholder="Email Address"
                  onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
                />

                <input
                  className="border border-gray-300 rounded-xl px-5 py-4"
                  placeholder="Phone Number"
                  onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })}
                />

                <input
                  className="border border-gray-300 rounded-xl px-5 py-4"
                  placeholder="Country"
                  onChange={(e) => setBuyer({ ...buyer, country: e.target.value })}
                />
              </div>
            </section>

            {/* STEP 4: PARENT DETAILS */}
            <section>
              <h2 className="text-2xl font-semibold text-[#202124] mb-5">
                4. Parent Details (in Nepal)
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  className="border border-gray-300 rounded-xl px-5 py-4"
                  placeholder="Parent Full Name"
                  onChange={(e) => setParent({ ...parent, name: e.target.value })}
                />

                <input
                  className="border border-gray-300 rounded-xl px-5 py-4"
                  placeholder="Parent Phone Number"
                  onChange={(e) => setParent({ ...parent, phone: e.target.value })}
                />

                <input
                  className="border border-gray-300 rounded-xl px-5 py-4"
                  placeholder="City / Location"
                  onChange={(e) => setParent({ ...parent, city: e.target.value })}
                />
              </div>
            </section>
          </div>

          {/* --------------------------------------------- */}
          {/* RIGHT: SUMMARY PANEL */}
          {/* --------------------------------------------- */}
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 shadow-md h-fit lg:sticky lg:top-32">

            <h3 className="text-2xl font-semibold text-[#202124] mb-6">
              Order Summary
            </h3>

            <div className="space-y-4 text-lg">

              {/* Plan */}
              <div>
                <div className="font-medium text-[#202124]">Plan Selected:</div>
                <div className="text-gray-700 capitalize">{selectedPlan}</div>
                <div className="font-semibold mt-1">
                  ${basePrices[selectedPlan].toFixed(2)}/month
                </div>
              </div>

              <hr className="border-gray-300" />

              {/* Add-ons */}
              <div>
                <div className="font-medium text-[#202124] mb-2">Add-Ons:</div>

                {!addons.legal && !addons.travel && !addons.homecare && (
                  <div className="text-gray-500">No add-ons selected</div>
                )}

                {addons.legal && (
                  <div className="flex justify-between">
                    <span>Legal Pack</span>
                    <span>${addonPrices.legal}</span>
                  </div>
                )}

                {addons.travel && (
                  <div className="flex justify-between">
                    <span>Travel Pack</span>
                    <span>${addonPrices.travel}</span>
                  </div>
                )}

                {addons.homecare && (
                  <div className="flex justify-between">
                    <span>Home Care Pack</span>
                    <span>${addonPrices.homecare}/mo</span>
                  </div>
                )}
              </div>

              <hr className="border-gray-300" />

              {/* Totals */}
              <div>
                <div className="flex justify-between font-semibold text-[#202124]">
                  <span>Monthly Total</span>
                  <span>${monthlyTotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between font-semibold text-[#202124] mt-2">
                  <span>One-Time Total</span>
                  <span>${oneTimeTotal.toFixed(2)}</span>
                </div>
              </div>

            </div>

            <button
              className="w-full mt-8 px-10 py-4 bg-[#202124] text-white rounded-xl text-lg font-medium shadow hover:opacity-90 transition"
            >
              Complete Order
            </button>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Payment integration coming soon (Stripe ready)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
