import React from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import Contacts from '../Contacts/Contact';
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