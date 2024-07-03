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
                    Abdul Ali
                  </p>
                  <ImQuotesLeft className="text-navColor my-2 md:my-5" />
                  <p className="text-base whitespace-normal text-center text-navColor md:text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugit dolorum hic optio enim ullam corrupti ex ut esse sint
                    quisquam. Ipsum beatae non rerum recusandae nulla dolorum
                    modi inventore debitis. Lorem, ipsum. Lorem, ipsum.
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
                    Richard Tait
                  </p>
                  <ImQuotesLeft className="text-navColor my-2 md:my-5" />
                  <p className="text-base whitespace-normal text-center text-navColor md:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore explicabo recusandae corporis laborum perspiciatis
                    iste? Vel quisquam nemo voluptatum quae! Reiciendis
                    perferendis sit soluta, neque aliquid nobis. Lorem, ipsum.
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
                    Ruth Garcia
                  </p>
                  <ImQuotesLeft className="text-navColor my-2 md:my-5" />
                  <p className="text-base whitespace-normal text-center text-navColor md:text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Esse eum impedit facere sequi amet quaerat nulla natus nobis
                    odit accusantium error, quos ex repellat ut vero
                    exercitationem, adipisci quod autem? Lorem, ipsum.
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
                    Yusuf Joseph
                  </p>
                  <ImQuotesLeft className="text-navColor my-2 md:my-5" />
                  <p className="text-base whitespace-normal text-center text-navColor md:text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Esse eum impedit facere sequi amet quaerat nulla natus nobis
                    odit accusantium error, quos ex repellat ut vero
                    exercitationem, adipisci quod autem? Lorem, ipsum.
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
