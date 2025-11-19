import React from "react";

export default function InstantTrustStrip() {
  return (
    <section className="relative w-full py-12 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Soft yellow ambient glow behind strip */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10px] left-[20px] w-[180px] h-[80px] 
            bg-[radial-gradient(circle,rgba(251,188,5,0.15)_0%,transparent_70%)]
            blur-xl opacity-50"></div>

          <div className="absolute bottom-[10px] right-[20px] w-[200px] h-[90px] 
            bg-[radial-gradient(circle,rgba(251,188,5,0.12)_0%,transparent_70%)]
            blur-xl opacity-50"></div>
        </div>

        {/* Slim bar */}
        <div
          className="w-full bg-white rounded-2xl px-10 py-6
          shadow-[0_15px_40px_rgba(0,0,0,0.07)]
          border border-gray-200 relative z-10
          flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0
          lg:h-[105px]"
        >

          {/* LEFT — FLAGS + COUNT */}
          <div className="flex items-center gap-5 whitespace-nowrap">

            {/* Google-style circular flag cluster */}
            <div className="flex -space-x-2">
              {["np","us","gb","ca","au","ae","de","jp"].map((code) => (
                <img
                  key={code}
                  src={`https://flagcdn.com/${code}.svg`}
                  className="w-9 h-9 rounded-full border-[3px] border-white shadow-md object-cover"
                />
              ))}
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-[20px] font-bold text-google-black flex items-center gap-1">
                12,000+ families protected
                {/* tiny yellow dot accent */}
                <span className="w-2 h-2 rounded-full bg-google-yellow opacity-80"></span>
              </span>
              <span className="text-google-gray text-[14px]">
                Nepalese families across 8+ countries
              </span>
            </div>
          </div>

          {/* RIGHT — Metrics with Google Colors */}
          <div className="flex items-center gap-16 whitespace-nowrap">

            {/* Homes Secured */}
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-google-blue">4,200+</span>
              <span className="text-google-gray text-xs">Homes Secured</span>
            </div>

            {/* Parents Monitored */}
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-google-green">2,100+</span>
              <span className="text-google-gray text-xs">Parents Monitored</span>
            </div>

            {/* Alerts Processed — subtle red */}
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-google-red">18,340+</span>
              <span className="text-google-gray text-xs">Alerts Processed</span>
            </div>

            {/* System Reliability — subtle yellow */}
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-google-yellow">99.9%</span>
              <span className="text-google-gray text-xs">System Reliability</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
