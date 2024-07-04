import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending form data to a server (or perform actual server submission)
    // For demonstration purposes, just logging the data
    console.log("Form submitted:", formData);

    // Show feedback to the user
    setFormSubmitted(true);

    // Optional: Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="px-2 mx-auto md:px-0 xl:max-w-screen-xl lg:max-w-[85vw]">
      <div
        className="contact border p-5 bg-navColor mt-10 mb-10 rounded-lg md:py-20 md:px-10"
        id="contacts"
      >
        <div className="flex flex-col justify-between items-center space-y-5 md:flex-row md:space-y-0">
          <div className="flex flex-col space-y-3 md:w-2/3 md:space-y-0">
            <h2 className="text-3xl text-white font-bold capitalize md:text-szmd md:mb-4">
              Get in touch with us!
            </h2>
            <p className="text-white text-base md:text-lg lg:text-lg xl:text-2xl">
              Have any question? You can get in touch with us. We will respond to you
              as soon as possible.
            </p>
          </div>
          <Link
            to="/contact"
            className="border py-2 px-10 font-semibold text-white text-base rounded-3xl flex items-center gap-2 md:text-xl md:py-2 md:px-5 hover:bg-white hover:text-navColor ease-in-out duration-500"
          >
            Contact us <HiOutlineArrowNarrowRight />
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-white" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-white" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-white" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-2 rounded-lg"
              required
            ></textarea>
          </div>
          <button type="submit" className="py-2 px-4 bg-white text-navColor rounded-lg">
            Send Message
          </button>
        </form>
        {formSubmitted && (
          <p className="mt-4 text-white">Message sent successfully!</p>
        )}
      </div>
    </div>
  );
};

export default Contact;