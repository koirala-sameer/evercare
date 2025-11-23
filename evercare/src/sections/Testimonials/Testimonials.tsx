import React from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Sydney, Australia",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "EverHome gives me weekly updates about my mother. I sleep better knowing she's safe and cared for.",
  },
  {
    name: "Sagar Thapa",
    location: "Dallas, USA",
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
    quote:
      "It truly feels like I’m still at home looking after my parents. The panic alert once helped my dad instantly.",
  },
  {
    name: "Anita Khadka",
    location: "London, UK",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "The monthly nurse visits and wellbeing reports keep our whole family reassured. Worth every rupee.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative w-full py-28 bg-white overflow-hidden">

      {/* Ambient radial background */}
      <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px] 
        bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)] 
        blur-3xl opacity-50"></div>

      <div className="absolute bottom-[-200px] right-[-140px] w-[420px] h-[420px] 
        bg-[radial-gradient(circle,rgba(52,211,153,0.15)_0%,transparent_70%)] 
        blur-3xl opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            What Families Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from Nepalese families around the world who trust EverHome.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-10 
              shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.10)]
              transition-all duration-300"
            >
              {/* Photo */}
              <div className="flex justify-center mb-6">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white"
                />
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-[17px] leading-relaxed italic mb-6 text-center">
                “{t.quote}”
              </p>

              {/* Name + Location */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.location}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
