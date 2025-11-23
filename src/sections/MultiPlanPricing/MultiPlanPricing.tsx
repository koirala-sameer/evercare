// src/sections/MultiPlanPricing/MultiPlanPricing.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  billingNote?: string;
  highlight?: boolean;
  badge?: string;
  idealFor?: string;
  features: string[];
  ctaLabel: string;
};

const PLANS: Plan[] = [
  {
    id: "evercare-one",
    name: "EverCare One",
    tagline: "One simple plan that covers everyday life, visits, and updates.",
    price: "$9.99",
    priceNote: "NRN launch price (limited time)",
    billingNote: "Billed monthly. Cancel any time.",
    highlight: true,
    badge: "Most popular",
    idealFor: "Most families who want consistent, non-medical support and monthly visits.",
    features: [
      "Dedicated local Care Manager in Nepal",
      "Monthly home visit & wellbeing check",
      "Photo & video updates to your WhatsApp",
      "Bill pay help (utilities, internet, mobile)",
      "Errand & task coordination (groceries, meds, etc.)",
      "Emergency escalation with on-ground response",
    ],
    ctaLabel: "Start with EverCare One",
  },
  {
    id: "care-plus",
    name: "Care+ Health Add-On",
    tagline: "Add structured health supervision on top of EverCare One.",
    price: "$19.99",
    priceNote: "Per parent, per month",
    billingNote: "Requires EverCare One as the base plan.",
    idealFor: "Parents who need regular vitals checks and health tracking.",
    features: [
      "Monthly nurse visit (vitals + wellness check)",
      "Medication reminders & adherence review",
      "Doctor appointment booking & follow-up",
      "Lab test coordination & report sharing",
      "Monthly health summary to you and siblings",
    ],
    ctaLabel: "Add Care+ at checkout",
  },
  {
    id: "evercare-total",
    name: "EverCare Total",
    tagline: "For families who want us to handle almost everything.",
    price: "$39.99",
    priceNote: "All-inclusive bundle",
    billingNote: "Includes EverCare One + Care+ + premium concierge.",
    idealFor: "Busy families who want a single, hands-off solution.",
    features: [
      "Everything in EverCare One and Care+",
      "Priority response and coordination",
      "Quarterly deep-dive home safety & comfort review",
      "High-touch concierge: visits, gifts, and surprises",
      "Dedicated WhatsApp group with your Care Team",
    ],
    ctaLabel: "Talk to us about EverCare Total",
  },
];

export default function MultiPlanPricing() {
  return (
    <section className="relative w-full py-28 bg-white overflow-hidden">
      {/* Ambient Google-style lights */}
      <div
        className="pointer-events-none absolute -top-40 -right-32 h-[420px] w-[420px]
        bg-[radial-gradient(circle,rgba(66,133,244,0.18)_0%,transparent_70%)]
        blur-3xl opacity-60"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px]
        bg-[radial-gradient(circle,rgba(52,168,83,0.18)_0%,transparent_70%)]
        blur-3xl opacity-60"
      />

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-xs font-medium tracking-wide text-blue-700">
            Simple plans · Google-style clarity · Diaspora-first pricing
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#202124] sm:text-5xl">
            One base plan. Clear upgrades.
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Start with <span className="font-medium text-[#202124]">EverCare One</span> for daily life
            support, and layer on health and premium concierge only if you need them.
          </p>

          <p className="mt-2 text-sm text-gray-500">
            No long-term lock-in. Transparent pricing. Designed for Nepali parents, funded by you.
          </p>
        </div>

        {/* Plans grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const isHighlight = plan.highlight;

            return (
              <div
                key={plan.id}
                className={[
                  "relative flex h-full flex-col rounded-3xl border bg-white/80 p-7 shadow-soft backdrop-blur-sm transition-all",
                  isHighlight
                    ? "border-blue-500/30 shadow-card ring-2 ring-blue-100 hover:-translate-y-1 hover:shadow-lg"
                    : "border-gray-200 hover:-translate-y-1 hover:shadow-card",
                ].join(" ")}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white shadow-card">
                    {plan.badge}
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-5">
                  <h3 className="text-xl font-semibold tracking-tight text-[#202124]">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold text-[#202124]">
                      {plan.price}
                    </span>
                    <span className="text-sm text-gray-500">/month</span>
                  </div>

                  {plan.priceNote && (
                    <p className="mt-1 text-xs font-medium text-blue-700">
                      {plan.priceNote}
                    </p>
                  )}

                  {plan.billingNote && (
                    <p className="mt-1 text-xs text-gray-500">{plan.billingNote}</p>
                  )}
                </div>

                {/* Ideal for */}
                {plan.idealFor && (
                  <div className="mb-4 rounded-2xl bg-gray-50 px-3 py-2 text-xs text-gray-600">
                    <span className="font-medium text-[#202124]">Ideal for: </span>
                    {plan.idealFor}
                  </div>
                )}

                {/* Feature list */}
                <ul className="mb-6 flex-1 space-y-2 text-sm text-gray-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-[2px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-50">
                        <Check className="h-3 w-3 text-blue-600" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-2">
                  {plan.id === "evercare-one" && (
                    <Link
                      to="/checkout"
                      className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-card transition hover:bg-blue-700 hover:shadow-lg"
                    >
                      {plan.ctaLabel} →
                    </Link>
                  )}

                  {plan.id === "care-plus" && (
                    <Link
                      to="/checkout"
                      className="inline-flex w-full items-center justify-center rounded-2xl border border-blue-200 bg-white px-4 py-3 text-sm font-medium text-blue-700 shadow-soft transition hover:border-blue-400 hover:bg-blue-50"
                    >
                      {plan.ctaLabel}
                    </Link>
                  )}

                  {plan.id === "evercare-total" && (
                    <Link
                      to="/checkout"
                      className="inline-flex w-full items-center justify-center rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-soft transition hover:border-gray-500 hover:bg-gray-50"
                    >
                      {plan.ctaLabel}
                    </Link>
                  )}

                  <p className="mt-3 text-[11px] text-gray-500">
                    You only pay for what your parents actually need. Upgrade or downgrade any time.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Micro trust strip under plans */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>
            💳 International cards supported.{" "}
            <span className="font-medium text-[#202124]">
              Transparent invoices for every charge.
            </span>
          </p>
          <p>🔒 Bank-grade security · No hidden fees · Cancel in 2 clicks</p>
        </div>
      </div>
    </section>
  );
}
