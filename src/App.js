import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home.jsx";
import Privacy from './Components/Privacy/Privacy';
import Terms from './Components/Terms/Terms';
import Pricing from './Components/Pricing/Pricing';
import { BASE_URL } from './Components/Config/Config';

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