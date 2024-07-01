import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home.jsx";
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Privacy from './Components/Privacy/Privacy.jsx';
import Terms from './Components/Terms/Terms.jsx';
import Pricing from './Components/Pricing/Pricing.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import { BASE_URL } from './Components/Config/Config.js';

function App() {
  console.log('Base URL:', BASE_URL);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <footer />
    </>
  );
}

export default App;