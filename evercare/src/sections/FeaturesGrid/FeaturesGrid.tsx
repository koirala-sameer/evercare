import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "security",
    label: "Home Security",
    icon: "🔒",
    color: "google-blue",
    title: "Smart Home Security That Watches Over Your Parents",
    desc: "EverCare One uses advanced cameras, AI-powered detection, and real human agents to ensure your parents' home stays safe — day and night.",
    points: [
      "Smart camera with HD + night vision",
      "Motion and person detection",
      "Door & window safety monitoring",
      "Instant alerts on your phone",
    ],
  },
  {
    id: "sos",
    label: "Emergency SOS",
    icon: "🆘",
    color: "google-red",
    title: "One Button. Instant Help.",
    desc: "If your parents ever feel unsafe or unwell, pressing the SOS button alerts your family, neighbors, and responders instantly.",
    points: [
      "Physical SOS button included",
      "Immediate escalation to family",
      "Optional neighbor or caretaker alerts",
      "Soft Google-red emergency UI",
    ],
  },
  {
    id: "wellbeing",
    label: "Wellbeing",
    icon: "💚",
    color: "google-green",
    title: "Daily Wellbeing Updates That Reassure You",
    desc: "Your parents’ wellbeing is checked through smart prompts, subtle activity awareness, and weekly human follow-ups.",
    points: [
      "Weekly wellbeing calls",
      "AI wellness signals",
      "Subtle activity monitoring",
      "Health-friendly reminders",
    ],
  },
  {
    id: "power",
    label: "Power & Internet",
    icon: "📶",
    color: "google-yellow",
    title: "Know When Power or Wi-Fi Goes Down",
    desc: "EverCare instantly alerts you if electricity or internet drops, so you’re always aware of your parents’ home status.",
    points: [
      "Power outage alerts",
      "Internet disconnection alerts",
      "Automatic reconnection checks",
      "Dual fail-safes built in",
    ],
  },
  {
    id: "assistance",
    label: "Assistance",
    icon: "🤝",
    color: "google-blue",
    title: "Human Help When Your Parents Need It",
    desc: "From small tasks to stress moments, EverCare ensures your parents always have a reliable human to reach out to.",
    points: [
      "Human assistance on demand",
      "Check-ins during unusual events",
      "Supportive call center teams",
      "Care coordination if needed",
    ],
  },
  {
    id: "health",
    label: "Health Signals",
    icon: "📊",
    color: "google-green",
    title: "Meaningful Health Indicators",
    desc: "EverCare uses behaviour signals and wellness patterns to detect issues early — before they become problems.",
    points: [
      "Wellbeing signal tracking",
      "Behavioral pattern changes",
      "Early risk indicators",
      "Health recommendations",
    ],
  },
];

export default function FeaturesGrid() {
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className="relative w-full py-32 bg-white overflow-hidden">

      {/* Subtle yellow glow behind heading */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[380px] h-[180px]
        bg-[radial-gradient(circle,rgba(251,188,5,0.12)_0%,transparent_70%)]
        blur-2xl pointer-events-none opacity-60"></div>

      {/* SECTION HEADING */}
      <div className="relative max-w-4xl mx-auto text-center mb-20 px-6">

        <h2 className="font-extrabold text-google-black leading-[1.05] mb-4">
          <span className="block text-[60px] md:text-[64px]">Prevent problems</span>
          <span className="relative block text-[38px] md:text-[42px] mt-1">
            before they happen

            {/* Subtle yellow underline */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-[200px] h-[6px]
              bg-[linear-gradient(90deg,rgba(251,188,5,0.35),transparent)]
              rounded-full"></span>
          </span>
        </h2>

        <p className="text-lg text-google-gray mt-8 max-w-2xl mx-auto">
          AI-powered monitoring + real human assistance, designed to keep your parents safe and supported.
        </p>
      </div>

      {/* CATEGORY PILLS */}
      <div className="flex flex-wrap justify-center gap-4 mb-14 px-6">
        {categories.map((cat) => {
          const isActive = selected.id === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelected(cat)}
              className={`
                px-6 py-2.5 rounded-full border text-sm font-semibold transition-all tracking-wide
                ${
                  isActive
                    ? "border-google-blue text-google-blue shadow-md bg-blue-50"
                    : "border-google-blue/40 text-google-blue hover:bg-blue-50/40"
                }
              `}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* CONTENT PANEL */}
      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-white/80 backdrop-blur-xl p-12 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.12)]
              border border-gray-200"
          >
            <div className="flex items-start gap-6">

              {/* ICON */}
              <div className="text-6xl">{selected.icon}</div>

              {/* TEXT CONTENT */}
              <div>
                <h3 className="text-3xl font-bold text-google-black mb-3">{selected.title}</h3>

                <p className="text-google-gray text-[17px] leading-relaxed mb-6">
                  {selected.desc}
                </p>

                {/* BULLET POINTS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {selected.points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="flex items-center justify-center h-6 w-6 rounded-full 
                        bg-google-green text-white text-[13px] font-bold">
                        ✓
                      </span>
                      <span className="text-google-black">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}
