import React, { useState } from "react";

const addons = [
  {
    id: "care",
    name: "Guardian Care",
    price: 39,
    color: "from-blue-500 to-blue-400",
    tagline: "Health updates that give you peace of mind.",
    features: [
      "Monthly Nurse Visit (Vitals + Wellness Check)",
      "Medication Reminders & Review",
      "Lab Test Booking & Report Sharing",
      "Monthly Health Summary to Diaspora",
      "Priority Support Line for Parents",
      "Basic Home Check (cleanliness & safety)",
      "Doctor Appointment Coordination",
    ],
  },
  {
    id: "complete",
    name: "Guardian Complete",
    price: 99,
    color: "from-rose-500 to-rose-400",
    tagline: "Your parents fully cared for — as if you were home.",
    features: [
      "Weekly Companion Visit (1 hour)",
      "Grocery + Medicine Pickup",
      "Maid/Cleaning Arrangements",
      "Handyman/Repair Coordination",
      "Emergency Hospital Coordination",
      "Post-surgery Recovery Oversight",
      "Annual Home Safety Audit",
      "Dedicated Care Manager",
    ],
  },
  {
    id: "legal",
    name: "Legal & Document Pack",
    price: 299,
    color: "from-purple-500 to-purple-400",
    tagline: "The ultimate legal support for diaspora families.",
    features: [
      "Property verification",
      "Tenant background check",
      "Land measurement coordination",
      "NOC, Citizenship, PAN paperwork",
      "Visa/Passport Support",
      "Notary & Documentation",
    ],
  },
  {
    id: "travel",
    name: "Travel & Arrival Pack",
    price: 199,
    color: "from-orange-500 to-orange-400",
    tagline: "Everything ready when your parents travel.",
    features: [
      "Airport pickup",
      "Home prep & cleaning",
      "SIM & Wi-Fi setup",
      "Driver for 24 hrs",
      "Home patrol",
      "Luggage delivery",
    ],
  },
  {
    id: "homecare",
    name: "Home Care Pack",
    price: 29,
    color: "from-green-500 to-green-400",
    tagline: "Making your home worry-free, every month.",
    features: [
      "Monthly plumbing/electric check",
      "Water filter servicing",
      "AC/Heater servicing",
      "Garden care",
      "Pest control coordination",
    ],
  },
];

const AddOns = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const total = selected.reduce(
    (sum, id) => sum + (addons.find((a) => a.id === id)?.price || 0),
    9.99 // Base Guardian Secure plan is always included
  );

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-white via-[#f7f9ff] to-white py-24 px-6 overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute top-[-200px] right-[-150px] w-[550px] h-[550px]
        bg-[radial-gradient(circle,rgba(99,102,241,0.25)_0%,transparent_70%)]
        blur-3xl opacity-60"></div>

      <div className="absolute bottom-[-200px] left-[-150px] w-[550px] h-[550px]
        bg-[radial-gradient(circle,rgba(45,212,191,0.25)_0%,transparent_70%)]
        blur-3xl opacity-60"></div>

      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-10">

          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Build Your Care Plan
          </h1>

          <p className="text-lg text-gray-600 mb-10 max-w-xl">
            Start with Guardian Secure ($9.99/mo).  
            Add optional services depending on your parents’ needs.
          </p>

          {addons.map((a) => (
            <div
              key={a.id}
              onClick={() => toggle(a.id)}
              className={`cursor-pointer bg-white/60 backdrop-blur-xl border border-white/40
                rounded-3xl p-8 shadow-[0_25px_70px_rgba(0,0,0,0.08)]
                hover:shadow-[0_35px_100px_rgba(0,0,0,0.12)]
                transition-all duration-500
                ${selected.includes(a.id) ? "ring-4 ring-blue-500/40" : ""}
              `}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-bold text-gray-900">{a.name}</h3>

                <div
                  className={`text-2xl font-extrabold bg-gradient-to-r ${a.color} 
                  text-transparent bg-clip-text`}
                >
                  ${a.price}
                  {a.id === "legal" || a.id === "travel" ? "" : "/mo"}
                </div>
              </div>

              <p className="italic text-gray-700 mb-6">{a.tagline}</p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                {a.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* RIGHT SUMMARY */}
        <div className="lg:col-span-1">

          <div className="sticky top-24 bg-white/70 backdrop-blur-2xl
            border border-white/40 rounded-3xl p-8 
            shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Your Plan Summary
            </h3>

            <ul className="mb-8 space-y-3 text-gray-700">
              <li className="flex justify-between font-medium">
                <span>Guardian Secure</span>
                <span>$9.99</span>
              </li>

              {selected.map((id) => {
                const a = addons.find((x) => x.id === id)!;
                return (
                  <li key={id} className="flex justify-between">
                    <span>{a.name}</span>
                    <span>
                      ${a.price}
                      {a.id === "legal" || a.id === "travel" ? "" : "/mo"}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="flex justify-between text-2xl font-bold text-gray-900 mb-10">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl text-lg font-semibold 
              hover:bg-blue-700 shadow-lg transition">
              Continue →
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AddOns;
