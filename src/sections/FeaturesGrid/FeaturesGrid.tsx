import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "security",
    label: "Home Security",
    icon: "🔒",
    color: "google-blue",
    title: "Smart Home Security That Watches Over Your Parents",
    desc: "EverCare One uses advanced cameras, AI-powered detection, and real human agents to ensure your parents' home is always safe — day and night.",
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
    desc: "If your parents ever feel unsafe or unwell, they press the SOS button — EverCare alerts your family, neighbors, and emergency responders instantly.",
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
    desc: "Your parents' wellbeing is checked through simple prompts, smart activity awareness, and weekly human follow-ups.",
    points: [
      "Weekly phone wellbeing calls",
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
    desc: "If the home loses electricity or internet, EverCare alerts you instantly — so you're always aware of what your parents may be experiencing.",
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
    desc: "From simple tasks to checking in during stress, EverCare ensures your parents always have someone reliable ready to help.",
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
    desc: "EverCare uses pattern detection and wellbeing signals to flag changes early — before problems escalate.",
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
    <section className="relative w-full py-28 bg-white overflow-hidden">

      {/* Subtle yellow ambient glow */}
      <div className="absolute top-[-150px] left-[150px] w-[300px] h-[300px] 
        bg-[radial-gradient(circle,rgba(251,188,5,0.10)_0%,transparent_70%)]
        blur-3xl pointer-events-none"></div>

      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-14 px-6">
        <h2 className="text-5xl font-extrabold text-google-black mb-4">
          Prevent problems before they happen
        </h2>
        <p className="text-lg text-google-gray">
          AI-powered monitoring + real human assistance help keep your parents safe.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelected(cat)}
            className={`
              px-6 py-2.5 rounded-full border text-sm font-semibold transition-all
              ${selected.id === cat.id
                ? "border-google-blue text-google-blue shadow-lg bg-blue-50"
                : "border-google-blue/40 text-google-blue hover:bg-blue-50/50"}
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Animated Content Panel */}
      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-b from-[#f0f7ff] to-[#e6efff] p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
          >
            {/* Header */}
            <div className="flex items-start gap-6">
              <div className="text-5xl">{selected.icon}</div>

              <div>
                <h3 className="text-3xl font-bold text-google-black mb-3">
                  {selected.title}
                </h3>

                <p className="text-google-gray text-[17px] leading-relaxed mb-6">
                  {selected.desc}
                </p>

                {/* Feature points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {selected.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="flex items-center justify-center h-6 w-6 rounded-full bg-google-green text-white text-[13px] font-bold">
                        ✓
                      </span>
                      <span className="text-google-black">{p}</span>
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
