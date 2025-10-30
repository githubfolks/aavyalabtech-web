import React from "react";
import { BiServer } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";
import { DiCodeBadge } from "react-icons/di";
import { FiBatteryCharging } from "react-icons/fi";
import ProviderCard from "./ProviderCard";


const WhatWeProvide = () => {
  const cardData = [
    {
      title: "Generative AI Solutions",
      icon: DiCodeBadge,
      detail: [
        "At Aavya LabTech, we specialize in delivering cutting-edge Generative AI solutions that empower businesses to automate processes, create innovative content, and make data-driven decisions with unparalleled accuracy. Our AI-driven models are designed to enhance creativity, improve efficiency, and unlock new business opportunities.",
      ],
      linkpath: "services/generative-ai"
    },
    {
      title: "Enterprise Software Development",
      icon: DiCodeBadge,
      detail: [
        "Our enterprise application development services help you stay ahead of the competition with applications that are purpose-built for your business needs.",
      ],
      linkpath: "services/enterprise-application-development"
    },
    {
      title: "Mobile Application Development",
      icon: FaMobileAlt,
      detail: [
        "Our team specializes in building innovative mobile apps for iOS and Android platforms. Using frameworks like React Native to build apps that function seamlessly across devices. Crafting user-friendly interfaces that ensure smooth and engaging experiences for your users.",
      ],
      linkpath: "platform/mobile-app-development"
    },
    {
      title: "IT Consulting and Digital Transformation",
      icon: FiBatteryCharging,
      detail: [
        "We offer expert consulting services to help businesses leverage technology for greater efficiency, scalability, and innovation. Advising on the best tools and platforms to achieve your business goals. Guiding your business through digital evolution, streamlining processes, and improving operations through technology.",
      ],
      linkpath: ""
    },
    {
      title: "Cloud Solutions",
      icon: BiServer,
      detail: [
        "Our cloud services help businesses scale, reduce costs, and enhance operational efficiency. Moving your data and applications to cloud platforms for greater scalability and performance. Designing secure, scalable cloud environments tailored to your business. Ensuring your cloud infrastructure operates smoothly and efficiently.",
      ],
      linkpath: ""
    },
  ];

  return (

    <div className=" md:my-48 lg:m-16 md:py-[10px] py-[10px] md:px-0 px-[20px] bg-drop md:bg-contain bg-cover bg-fixed bg-no-repeat bg-[#f9f9f9]  ">
      <div className="container">
        <div className="md:grid md:grid-cols-2 lg:grid  lg:grid-cols-3 gap-8">
          <div className=" md:p-2 md:mb-0 mb-5 ">
            <h3 className="xl:text-4xl text-3xl  text-secondary-dark font-bold ">
              What we provide ?
            </h3>

            <p className=" text-secondary-light font-medium py-5 leading-8 md:text-xl ">
              At Aavya LabTech, we offer a wide range of IT and software development services designed to empower your business through cutting-edge technology solutions. From enterprise software development to project management platforms, we deliver the expertise, tools, and support you need to thrive in the digital landscape.
            </p>

          </div>
          {cardData.map((c) => {
            return <ProviderCard key={c.title} {...c} />;
          })}
        </div>
      </div>
    </div>
    
  );
};

export default WhatWeProvide;
