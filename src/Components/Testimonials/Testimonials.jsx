import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import Carousel from "../Carousel/Carousel";
import { CarouselItem } from "../Carousel/Carousel";
import person from "../../Assets/Testimonials/person.jpeg";
import person2 from "../../Assets/Testimonials/person2.jpeg";
import person3 from "../../Assets/Testimonials/person3.jpeg";
import person4 from "../../Assets/Testimonials/person4.jpeg"

const Testimonials = () => {
  return (
    <section className="testimonials md:max-w-screen-xl mx-auto my-10 px-2">
      <div>
        <h3 className="text-4xl font-semibold text-center capitalize md:text-szmd opacity-[0.7]">
          Hear from our customers
        </h3>
        <div className="my-20 overflow-hidden w-full md:mx-auto md:w-[60%] lg:w-[75%] xl:w-[60%]">
          <Carousel>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <div className="flex h-20 w-20 p-1 rounded-full bg-imgColor overflow-hidded">
                  <img
                    src={person}
                    alt=""
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-lg font-semibold text-navColor">
                    Nimba Oyugi
                  </p>
                  <ImQuotesLeft className="text-navColor my-2 md:my-5" />
                  <p className="text-base whitespace-normal text-center text-navColor md:text-lg">
                    "The service was exceptional! From start to finish, the entire process was smooth and efficient. Highly recommend!"
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <div className="flex h-20 w-20 p-1 rounded-full bg-imgColor overflow-hidded">
                  <img
                    src={person2}
                    alt=""
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-lg font-semibold text-navColor">
                    Catherine Angir
                  </p>
                  <ImQuotesLeft className="text-navColor my-2 md:my-5" />
                  <p className="text-base whitespace-normal text-center text-navColor md:text-lg">
                    "Absolutely fantastic experience! The customer support was prompt and very helpful. Would definitely use again."
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <div className="flex h-20 w-20 p-1 rounded-full bg-imgColor overflow-hidded">
                  <img
                    src={person3}
                    alt=""
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-lg font-semibold text-navColor">
                    Elizabeth Mwanda
                  </p>
                  <ImQuotesLeft className="text-navColor my-2 md:my-5" />
                  <p className="text-base whitespace-normal text-center text-navColor md:text-lg">
                    "I was really impressed with the quality of service. Everything was handled professionally and efficiently. Five stars!"
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <div className="flex h-20 w-20 p-1 rounded-full bg-imgColor overflow-hidded">
                  <img
                    src={person4}
                    alt=""
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-lg font-semibold text-navColor">
                    Philip Obuya
                  </p>
                  <ImQuotesLeft className="text-navColor my-2 md:my-5" />
                  <p className="text-base whitespace-normal text-center text-navColor md:text-lg">
                    "A truly seamless experience from beginning to end. The team was friendly and attentive, making sure all my needs were met."
                  </p>
                </div>
              </div>
            </CarouselItem>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
