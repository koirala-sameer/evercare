import React from "react";
import HeroSection from "../sections/HeroSection/HeroSection";
import Pricing from "../sections/Pricing/Pricing";
import Testimonials from "../sections/Testimonials/Testimonials";
import FinalCTA from "../sections/FinalCTA/FinalCTA";
import InstantTrustStrip from "../sections/InstantTrustStrip/InstantTrustStrip";
import FeaturesGrid from "../sections/FeaturesGrid/FeaturesGrid";

// NEW
import ChatBubble from "../components/ChatBubble";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InstantTrustStrip />
      <FeaturesGrid />
      <Pricing />
      <Testimonials />
      <FinalCTA />

      {/* Floating Chat Bubble + Panel */}
      <ChatBubble />
    </>
  );
}
