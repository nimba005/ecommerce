import React from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import Contact from '../Contact/Contact';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;