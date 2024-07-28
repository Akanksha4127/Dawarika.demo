import React from "react";
import { TvMinimal, Package2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  ImgSlider1,
} from "../../utils/Image.js";
import { IMG5 } from "../../utils/Image.js";
import { IMG6, IMG7, IMG8, IMG9, IMG10, IMG11 } from "../../utils/Image.js";

function Home() {
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

  const [ImageIndx, setImageIndx] = useState(0);

  const next = () => {
    if (ImgSlider1.length === 0 || ImgSlider1.length === 1) {
      return;
    }
    setImageIndx(() =>
      ImageIndx === ImgSlider1.length - 1 ? 0 : ImageIndx + 1
    );
  };
  useEffect(() => {
    const intervalid = setInterval(() => {
      next();
      console.log("AK");
    }, 1000);
    return () => clearInterval(intervalid);
  }, []);

  return (
    <div className="HomeContent mt-16 z-10 bg-white">
      <div className="-z-50 ">
        {/* <img src={IMG11} alt="" className="fixed w-full h-full" /> */}
        <div className="z-50 bg-white">
          <div className="ImgSlider w-screen z-50">
            <img
              src={ImgSlider1[ImageIndx]}
              alt={`slide ${ImageIndx}`}
              className="h-96 w-screen "
            />
          </div>
          <div className="ImgText lg:flex bg-white justify-center lg:p-28 p-5">
            <div className="img  bg-white">
              <img
                src={IMG5}
                alt="Img5"
                // width={2000}
                // height={000}
                className="bg-white h-[420px] w-[1200px]"
              />
            </div>
            <div className="Text bg-white lg:p-10 h-full text-lg ">
              <h1 className="font-serif font-semibold text-blue-500 text-[1.5rem] mb-10 w-full">
                Golf Island Real Estate: Premier Real Estate Solutions
                <bR></bR> in Dwarka, New Delhi
              </h1>
              <p className="text-lg font-light sm:text-sm mb-10">
                Golf Island Real Estate stands as a beacon of trust and
                excellence in the bustling real estate markets of Dwarka, New
                Delhi, and Dwarka Expressway. With a keen focus on delivering
                top-tier property solutions, Golf Island Real Estate has carved
                a niche for itself in an industry that thrives on reliability,
                expertise, and client satisfaction.
              </p>
              <h2 className=" font-semibold mb-10">
                Comprehensive Real Estate Services
              </h2>
              <p className="font-light  mb-10">
                Golf Island Real Estate specializes in a diverse range of
                services that cater to various real estate needs. Whether you
                are looking to purchase a flat, invest in a lucrative property
                project, or find the perfect rental space, Golf Island Real
                Estate provides tailored solutions to meet your specific
                requirements.
              </p>
            </div>
          </div>
          <div className="DealPanel bg-white flex flex-col ">
            <div className="DealText text-center ">
              <h1 className="Title text-xl font-semibold font-serif">
                WHERE WE DEAL
              </h1>
              <h2 className="SubTitle font-light font-serif text-lg">
                Dwarka New Delhi & Dwarka Expressway.
              </h2>
            </div>
            <div className="DealImg w-full justify-center items-center flex p-5 lg:p-0">
              <img src={IMG6} className=" h-72 w-[580px] rounded-lg " />
            </div>
            <div className="Button w-full flex justify-center items-center ">
              <button className="h-12 w-[296px] bg-blue-500 rounded-lg text-white text-3xl ">
                Dwarka
              </button>
            </div>
          </div>

          <div className="DealPaneL2 bg-white flex flex-col justify-center items-center">
            <div className="DealText text-center mt-20 bg-white ">
              <h1 className="Title text-xl font-semibold font-serif">
                WHERE WE DEAL
              </h1>
              <h2 className="SubTitle font-light font-serif text-sm p-2">
                We have over 30 years of experience and knowledge on various
                real state business transactions.
              </h2>
            </div>
            <div className="line flex bg-white">
              <h1 className="text-4xl text-blue-500">____</h1>
              <h2 className="text-4xl">__</h2>
            </div>

            <div className="TemplateGrid grid grid-cols-3 grid-rows-3 relative bg-white mt-5  w-[1040px] h-[1220PX] ">
              <div className=" col-span-2 h-96 ">
                <img src={IMG7} className="h-96 w-[680px] rounded-lg" />
              </div>
              <div className=" ">
                <img src={IMG8} className="h-96 w-[780px] rounded-lg" />
              </div>
              <div className="">
                <img src={IMG9} className=" h-96 w-[330px] rounded-lg" />
              </div>
              <div className=" col-span-2">
                <img src={IMG10} className=" h-96 w-[700px] rounded-lg" />
              </div>
              <div className="col-span-3">
                <img src={IMG11} className="h-[480px] w-[1250px] rounded-lg " />
              </div>
            </div>
          </div>

          <div className="ChoosePanel  bg-[#F7F7F7] w-full">
            <div className="PanelText text-center m-20 space-y-4 relative top-8">
              <h1 className="Title text-4xl font-semibold font-serif">
                Why Choose Us
              </h1>
              <h2 className="SubTitle font-light font-serif text-lg">
                We provide full service at every step.
              </h2>
              <div className="line flex ml-[630px] space-x-4 relative -top-4">
                <h1 className="text-4xl text-blue-500">____</h1>
                <h2 className="text-4xl">__</h2>
              </div>
            </div>
            <section className="hidden lg:block">
              <div className="PanelCard flex justify-around p-10 ">
                <div className="Card1 bg-white h-96 w-72 border-2 hover:shadow-md text-center space-y-6 rounded-md ">
                  <div className="Img relative ml-28 mt-8">
                    <img src={Card1} />
                  </div>
                  <div className="Text">
                    <h1 className="font-bold text-xl">Trusted By Lakhs</h1>
                    <p className="font-light text-black">
                      We are one of the oldest real estate company in Dwarka and
                      Dwarka Expressway and have served millions of customers.
                    </p>
                  </div>
                </div>
                <div className="Card2 bg-[#dadada] h-96 w-72  rounded-md">
                  <div className="Card1 bg-white h-96 w-72 border-2 hover:shadow-md text-center space-y-6 ">
                    <div className="Img relative ml-28 mt-8">
                      <img src={Card2} />
                    </div>
                    <div className="Text">
                      <h1 className="font-bold text-xl">One Stop Solution</h1>
                      <p className="font-light text-black">
                        We provide all real estate related services such as
                        Documentation, Bank Loan, TDS /Tax Compliances,
                        Registration of Property, Interiors, Vastu,etc so our
                        customers don't have to bother themselves for anything
                        related to there home
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Card3 bg-[#dadada] h-96 w-72  rounded-md">
                  <div className="Card1 bg-white h-96 w-72 border-2 hover:shadow-md text-center space-y-6 ">
                    <div className="Img relative ml-28 mt-8">
                      <img src={Card3} />
                    </div>
                    <div className="Text">
                      <h1 className="font-bold text-xl">Loans Made Easy</h1>
                      <p className="font-light text-black">
                        We are associated with multiple Public / Private Sector
                        banks such as SBI, Bank of Baroda, HDFC, ICICI, Axis,
                        etc for your finance needs and get all the work done
                        from your door step.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Card4 bg-[#dadada] h-96 w-72  rounded-md">
                  <div className="Card1 bg-white h-96 w-72 border-2 hover:shadow-md text-center space-y-6 ">
                    <div className="Img relative ml-28 mt-8">
                      <img src={Card4} />
                    </div>
                    <div className="Text">
                      <h1 className="font-bold text-xl">
                        Interiors You Fascinated
                      </h1>
                      <p className="font-light text-black">
                        We have a In-House team of interior designer and
                        professionals to take care of your interior & renovation
                        needs of your dream home. Whatever Work & Designs you
                        chose we promise to deliver in time framed manner and
                        best of the quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="Panel lg:m-16 bg-white flex flex-col p-3 lg:p-0">
            <div className="Title">
              <h1 className="text-3xl font-bold w-full text-center">
                GOLF ISLAND REAL ESTATE
              </h1>
            </div>
            <div className="Card lg:justify-around lg:m-12 flex flex-col lg:flex-row w-full justify-center items-center">
              <div className="Card1 lg:w-[48vh] h-[66vh] bg-slate-500">
                <img src={Card5} className="h-full" />
              </div>
              <div className="card2 lg:w-[48vh] lg:h-[66vh] p-2">
                <h1 className="font-bold text-m">
                  Comprehensive Real Estate Services
                </h1>
                <p className="text-m font-light">
                  Golf Island Real Estate specializes in a diverse range of
                  services that cater to various real estate needs. Whether you
                  are looking to purchase a flat, invest in a lucrative property
                  project, or find the perfect rental space, Golf Island Real
                  Estate provides tailored solutions to meet your specific
                  requirements.
                </p>
                <h1 className="font-bold text-m">
                  Property Sales and Purchases
                </h1>
                <p className="text-m font-light">
                  Navigating the complexities of buying or selling property can
                  be daunting. Golf Island Real Estate simplifies this process
                  with its extensive market knowledge and professional guidance.
                  The company offers a wide selection of flats and properties,
                  ensuring that clients find options that suit their preferences
                  and budget. Their expert team assists with every step of the
                  transaction, from initial consultation to finalizing the deal,
                  ensuring a smooth and hassle-free experience.
                </p>
              </div>
              <div className="card3 lg:w-[48vh] h-[66vh] bg-slate-500 border-2">
                <img src={Card6} className="h-full" />
              </div>
            </div>
          </div>

          <section className="bg-[#F7F7F7] w-full flex flex-col lg:flex-row justify-center items-center lg:justify-evenly p-16">
            <div className=" flex flex-col justify-center items-center pb-10 lg:pb-0">
              <h1 className="font-bold tracking-wide mb-5">Visit Our Office</h1>
              <h1 className="font-bold tracking-wide uppercase">Head Office</h1>
              <p className="text-center text-sm">
                Rose Apts.<br></br>Flat No.276 Sector 18<br></br>Dwarks New
                Delhi- 110075
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
      </div>
    </div>
  );
}

export default Home;
