import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Privacy from './Components/Privacy/Privacy';
import Terms from './Components/Terms/Terms';
import Pricing from './Components/Pricing/Pricing';
import Testimonials from './Components/Testimonials/Testimonials';
import Nav from './Components/Hero/Nav'; // Import Nav component

function App() {
  return (
    <>
      <Nav /> {/* Include Nav component here */}
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
