import React from "react";
import { Logo } from "../../utils/Image";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

function Footer() {
  const paragraph = [
    " We are a reputed real estate firm, Totally committed to ethical business practices with true & loyal dealings which are very rare in this field of business.",
  ];

  const QuickLinks = [
    { label: "About Us", to: "#" },
    { label: "Services", to: "#" },
    { label: "Properties", to: "#" },
    { label: "Awards", to: "#" },
    { label: "Contact Us", to: "#" },
  ];
  const FooterAddress = [
    { label: "Rose Apts" },
    { label: "Float No-276 Pkt-B" },
    { label: "Sec-18 Dwarka New Delhi- 110075" },
    { label: "Phone : +91 9810258654," },
    { label: "9999994155, 8750876600" },
  ];

  const SocialIcons = [
    { id: "0", icon: <Facebook />, to: "#" },
    { id: "1", icon: <Instagram />, to: "#" },
    { id: "2", icon: <Twitter />, to: "#" },
    { id: "3", icon: <Linkedin />, to: "#" },
  ];

  return (
    <div className="bg-[#F7F7FD] lg:px-16 lg:py-6 p-4">
      <section className="bg-[#F7F7FD] flex flex-col lg:flex-row  justify-start items-start">
        <div className="lg:w-2/5 flex flex-col lg:p-10 p-5 ">
          <img src={Logo} width={100} height={58} className="lg:mb-5" />
          <h1 className="lg:w-full text-sm ">{paragraph}</h1>
        </div>
        <div className="lg:w-1/4 text-xl font-semibold flex flex-col lg:p-10 p-5 gap-2">
          <h1 className="mb-5">Quick Links</h1>
          {QuickLinks.map((item) => (
            <Link to={item.to} className="text-sm font-normal tracking-wide">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="lg:w-1/4 text-xl font-semibold flex flex-col lg:p-10 p-5">
          <h1 className="mb-5">Address</h1>
          <h1 className="uppercase text-base font-bold">Head office</h1>
          {FooterAddress.map((item) => (
            <p className="text-sm font-normal tracking-wide w-full">
              {item.label}
            </p>
          ))}
        </div>
        <div className="lg:w-1/4 text-xl font-semibold flex flex-col lg:p-10 p-5">
          <h1 className="mb-5">Social Link</h1>
          <div className="flex">
            {SocialIcons.map((item) => (
              <Link to={item.to} className="text-sm font-normal w-fit m-1 ">
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t p-5">
        <h1>Copyright © 2024. All rights reserved</h1>
      </section>
    </div>
  );
}

export default Footer;
