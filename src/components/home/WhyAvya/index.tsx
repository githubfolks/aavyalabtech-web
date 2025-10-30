import React from "react";
import { BiSolidUserPlus, BiShareAlt, BiServer, BiJoystickButton, BiCommand } from "react-icons/bi";
import AvyaCard from "./AvyaCard";


const WhyAvya = () => {
  const cardData = [
    {
      title: "Agile Methodology",
      icon: BiCommand,
      detail: [
        "We follow agile development practices, ensuring flexibility, transparency, and faster delivery of your projects.",
      ],
    },
    {
      title: "Focus on Quality",
      icon: BiShareAlt,
      detail: [
        "We adhere to best coding practices and conduct thorough testing to deliver robust, secure, and high-performance applications.",
      ],
    },
    {
      title: "Collaborative Approach",
      icon: BiSolidUserPlus,
      detail: [
        "We work closely with you throughout the development process, ensuring that the final product aligns with your vision and goals.",
      ],
    },
    {
      title: "Cutting-Edge Technology",
      icon: BiJoystickButton,
      detail: [
        "We use the latest tools and technologies to create apps that are not only innovative but also future-proof.",
      ],
    },
    {
      title: "Client-Focused Approach",
      icon: BiServer,
      detail: [
        "We work closely with you to understand your business goals and deliver solutions that align with your objectives.",
      ],
    },
  ];

  return (
    <div className=" md:my-48 lg:m-16 md:py-[10px] py-[10px] md:px-0 px-[20px] bg-drop md:bg-contain bg-cover bg-fixed bg-no-repeat bg-[#f9f9f9]  ">


      <div className="container">

        <div className="md:grid md:grid-cols-2 lg:grid  lg:grid-cols-3 gap-8">
          <div className=" md:p-2 md:mb-0 mb-5 ">
            <h3 className="xl:text-4xl text-3xl  text-secondary-dark font-bold ">
              Why Aavya LabTech ?
            </h3>

            <p className=" text-secondary-light  font-medium py-5 leading-8 md:text-xl">
              Your success is our priority.
              We work closely with you to ensure that our services not only meet but exceed your expectations.
              We follow agile development practices, ensuring flexibility, transparency, and faster delivery of your projects.
              We encourage creativity and out-of-the-box thinking to develop solutions that push the boundaries of technology.
            </p>
          </div>
          {cardData.map((c) => {
            return <AvyaCard key={c.title} {...c} />;
          })}
        </div>
      </div>

    </div>
  );
};

export default WhyAvya;
