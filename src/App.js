import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home.jsx";
import Privacy from './Components/Privacy/Privacy.jsx';
import Terms from './Components/Terms/Terms.jsx';
import Pricing from './Components/Pricing/Pricing.jsx';
import { BASE_URL } from './Components/Config/Config.js';

function App() {
  console.log('Base URL:', BASE_URL);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <footer />
    </>
  );
}

export default App;