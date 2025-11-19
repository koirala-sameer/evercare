import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Security from "../pages/Security";
import AddOns from "../pages/AddOns";  // Only keep what exists

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/security" element={<Security />} />
      <Route path="/addons" element={<AddOns />} />
    </Routes>
  );
}
