import React from "react";
import { useState, useEffect } from "react";
import ImageSlider from "../ui/ImageSlider";

const Contact = () => {
  const Form = () => {
    return (
      <form className="w-full flex flex-col gap-2 p-2 lg:w-3/4">
        <div className="w-full flex gap-4">
          <input
            className="border px-4 py-3 border-neutral-900 w-full"
            type="text"
            placeholder="Enter your name"
          />
          <input
            className="border px-4 py-3 border-neutral-900 w-full"
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <input
          className="border px-4 py-3 border-neutral-900 w-full"
          type="text"
          placeholder="Enter your phone number"
        />
        <input
          className="border px-4 py-3 border-neutral-900 w-full"
          type="text"
          placeholder="Enter your address.."
        />
        <textarea
          className="border px-4 py-3 border-neutral-900 w-full h-40"
          placeholder="Message"
        ></textarea>
        <button
          className="bg-[#0056B3] w-fit px-10 py-3 rounded-lg text-lg text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  };

  return (
    <div className="mb-10 lg:mb-1">
      <div>
        <ImageSlider />
      </div>

      <section className="bg-[#F7F7F7] w-full flex flex-col lg:flex-row justify-center items-center lg:justify-evenly p-16">
        <div className=" flex flex-col justify-center items-center pb-10 lg:pb-0">
          <h1 className="font-bold tracking-wide mb-5">Visit Our Office</h1>
          <h1 className="font-bold tracking-wide uppercase">Head Office</h1>
          <p className="text-center text-sm">
            Rose Apts.<br></br>Flat No.276 Sector 18<br></br>Dwarks New Delhi-
            110075
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <h1 className="font-bold tracking-wide mb-5">Contact us</h1>
          <h1 className="font-bold tracking-wide ">
            Mobile No<span className="font-normal"> +91 9810258654</span>
          </h1>
          <p className="text-center text-sm">
            +91 9999994155<br></br>8750876600<br></br>
            <span className="font-bold">Email Id:</span>
          </p>
        </div>
      </section>
      <section className="flex  lg:flex-row  flex-col">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4908395308676!2d77.0325479814259!3d28.58504831301087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ac1bb869d75%3A0x48bf188ef80f81af!2s276%2C%20Sector%2018%2C%20Sector%2018A%20Dwarka%2C%20Dwarka%2C%20New%20Delhi%2C%20Delhi%2C%20110075!5e0!3m2!1sen!2sin!4v1722092430747!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-full pt-10 flex lg:justify-end">
          <Form />
        </div>
      </section>
    </div>
  );
};

export default Contact;
