import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Security from "../pages/Security";
import AddOns from "../pages/AddOns";

// NEW imports
import ServicesAndPricing from "../pages/ServicesAndPricing";
import Checkout from "../pages/Checkout";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Old pages */}
      <Route path="/security" element={<Security />} />
      <Route path="/addons" element={<AddOns />} />

      {/* NEW — Services + Pricing merged page */}
      <Route path="/services-and-pricing" element={<ServicesAndPricing />} />

      {/* NEW — Checkout flow */}
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}
