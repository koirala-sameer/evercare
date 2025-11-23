// src/pages/ServicesAndPricing.tsx
import React from "react";
import { Link } from "react-router-dom";
import MultiPlanPricing from "../sections/MultiPlanPricing/MultiPlanPricing";

export default function ServicesAndPricing() {
  return (
    <div className="relative w-full bg-white">
      {/* Ambient Background Lights */}
      <div
        className="pointer-events-none absolute inset-0 -top-52 mx-auto h-[720px] w-[720px]
        bg-[radial-gradient(circle,rgba(66,133,244,0.15)_0%,transparent_70%)]
        blur-3xl opacity-70"
      />
      <div
        className="pointer-events-none absolute -bottom-80 -left-40 h-[620px] w-[620px]
        bg-[radial-gradient(circle,rgba(52,168,83,0.15)_0%,transparent_70%)]
        blur-3xl opacity-70"
      />

      {/* HERO SECTION */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20 text-center">
        <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-xs font-medium tracking-wide text-blue-700">
          Essential services · Built for Nepali parents · Trusted by NRNs
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#202124] sm:text-5xl">
          Everything your parents need — in one clear plan.
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
          EverCare provides the daily support, monthly visits, updates, errands,
          bill management, coordination, and emergency response your parents
          need — while giving you peace of mind, no matter where you live.
        </p>

        <p className="mx-auto mt-2 max-w-xl text-sm text-gray-500">
          Designed for Nepali families living abroad. Transparent communication,
          WhatsApp updates, and on-ground support you can trust.
        </p>

        <div className="mt-8">
          <Link
            to="/checkout"
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-card transition hover:bg-blue-700 hover:shadow-lg"
          >
            Get Started →
          </Link>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-[#202124] sm:text-4xl">
          What’s included in EverCare One
        </h2>

        <p className="mx-auto mt-3 max-w-3xl text-center text-gray-600">
          Our core plan covers everything required for your parents’ comfort,
          safety, and everyday support in Nepal.
        </p>

        <div className="mx-auto mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Monthly Home Visit",
              desc: "A dedicated Care Manager visits your parents at home, checks on wellbeing, comfort and safety.",
            },
            {
              title: "WhatsApp Updates",
              desc: "You receive photos, videos, and notes after each visit — plus updates when tasks are completed.",
            },
            {
              title: "Bill Payments & Errands",
              desc: "Electricity, water, internet, mobile, or daily errands — we coordinate everything.",
            },
            {
              title: "Medicine Assistance",
              desc: "We help with reminders, refills, and arranging delivery.",
            },
            {
              title: "Emergency Response",
              desc: "If something happens, our on-ground team responds quickly and updates you immediately.",
            },
            {
              title: "Local Coordination",
              desc: "We help communicate with doctors, banks, technicians, plumbers, and local service providers.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white/70 p-6 shadow-soft backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-card"
            >
              <h3 className="text-lg font-semibold text-[#202124]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MULTI PLAN PRICING */}
      <MultiPlanPricing />

      {/* CTA SECTION */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-32 pt-10 text-center">
        <h2 className="text-3xl font-semibold text-[#202124] sm:text-4xl">
          A service built with your family in mind.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Whether you're in the US, Australia, Europe, or the Middle East —
          EverCare ensures your parents in Nepal are supported, safe, and
          regularly visited. No hidden fees. No confusion.
        </p>

        <div className="mt-8">
          <Link
            to="/checkout"
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-base font-medium text-white shadow-card transition hover:bg-blue-700 hover:shadow-lg"
          >
            Start Your Subscription →
          </Link>
        </div>

        <p className="mt-5 text-xs text-gray-500">
          Cancel anytime · Transparent pricing · No surprises
        </p>
      </section>
    </div>
  );
}
