import React, { useState, useEffect } from "react";
import Contact from "./Contact";
import Services from "./Services";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  // Routeur
  return (
    <Routes>
      <Route path="Contact" element={<Contact />} />
      <Route path="/" element={<Services />} />
    </Routes>
  );
}

export default App;
