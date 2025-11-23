import React from "react";

const MicroTrust = () => {
  return (
    <section className="relative w-full py-16 bg-white">

      {/* Background subtle radial light */}
      <div className="absolute inset-0 max-w-7xl mx-auto">
        <div className="absolute top-[-120px] left-[20%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(66,133,244,0.12)_0%,transparent_70%)] blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-150px] right-[20%] w-[280px] h-[280px] bg-[radial-gradient(circle,rgba(52,168,83,0.12)_0%,transparent_70%)] blur-3xl opacity-60"></div>
      </div>

      <div className="relative px-6 max-w-7xl mx-auto">

        {/* Grid of Trust Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

          {/* Card 1 */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">12+</div>
            <div className="text-gray-800 font-semibold text-lg">Countries Served</div>
            <p className="text-gray-500 text-sm mt-2">
              NRN families trusting EverHome
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
            <div className="text-gray-800 font-semibold text-lg">Wellbeing Check-Ins</div>
            <p className="text-gray-500 text-sm mt-2">
              Completed by our care team
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-800 font-semibold text-lg">Satisfaction Rate</div>
            <p className="text-gray-500 text-sm mt-2">
              Among NRN families worldwide
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">30 sec</div>
            <div className="text-gray-800 font-semibold text-lg">Avg. Alert Response</div>
            <p className="text-gray-500 text-sm mt-2">
              Fast, real-time safety escalation
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MicroTrust;
