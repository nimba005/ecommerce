import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import Carousel from "../Carousel/Carousel";
import { CarouselItem } from "../Carousel/Carousel";
import person from "../../Assets/Testimonials/person.jpeg";
import person2 from "../../Assets/Testimonials/person2.jpeg";
import person3 from "../../Assets/Testimonials/person3.jpeg";
import person4 from "../../Assets/Testimonials/person4.jpeg";

const testimonials = [
  {
    name: "Jacob Oyugi",
    image: person,
    quote: "This rentals service is top-notch! The process was smooth and the surport was amazing. I found the perfect place in no time.",
  },
  {
    name: "Mike Ogwel",
    image: person2,
    quote: "I had a fantastic experience with the website. The listing are accurate, and the customer service is very responsive.",
  },
  {
    name: "Joshua Obondi",
    image: person3,
    quote: "The variety of rentals available is impressive. I found exactly what i was looking for, and the move-in process was seamless.",
  },
  {
    name: "Grace Chiwo",
    image: person4,
    quote: "Highly recommend this service! The team was very helpfull, and i found a great apartment that meets all my needs.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials md:max-w-screen-xl md:mx-auto my-10 px-2">
      <div>
        <h3 className="text-4xl font-semibold text-center capitalize md:text-szmd opacity-[0.7]">
          Hear from our customers
        </h3>
        <div className="my-20 overflow-hidden w-full md:mx-auto md:w-[60%] lg:w-[75%] xl:w-[60%]">
          <Carousel>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 p-1 rounded-full bg-imgColor overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-lg font-semibold text-navColor">
                      {testimonial.name}
                    </p>
                    <ImQuotesLeft className="text-navColor my-2 md:my-5" />
                    <p className="text-base whitespace-normal text-center text-navColor md:text-lg">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;