import React from "react";
import { BiCustomize, BiServer, BiSolidUserCheck, BiVector } from "react-icons/bi";

const Works = () => {
  return (
    <>
      <div className="md:py-[80px] py-[50px] md:px-0 px-[20px] bg-growth bg-cover bg-fixed bg-center">
        <div className="container">
          <div className="lg:grid lg:grid-cols-2">
            <div className="">
              <h1 className="text-white md:leading-[50px] leading-9 text-2xl  md:text-3xl font-extrabold">
                We focus on
                driving your digital growth
              </h1>

              <p className="py-2 md:text-xl text-white text-justify ">
                The Aavya LabTech journey began with a passionate team of experts. Backed by a strong legacy of innovation
                and excellence, we specialize in crafting modern digital solutions for
                businesses across industries.
              </p>

              <p className="py-2 md:text-xl text-white text-justify ">
                With the rapid global shift towards cloud computing and digital-first
                strategies, Aavya LabTech is committed to empowering businesses with
                secure, scalable, and efficient IT infrastructures. Leveraging the
                capabilities of industry leaders like Amazon AWS, and Microsoft
                Azure, we provide future-ready solutions to fuel your business success
                in an increasingly digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-card md:px-0 px-[20px] bg-work-gradient">
        <div className="container">
          <div className="grid lg:grid-cols-2">
            <div className="py-[50px]">
              <h3 className="text-2xl md:text-3xl font-extrabold py-4 text-white/100">
                Empowering Digital Transformation with Aavya LabTech
              </h3>

              <ul>
                <li>
                  <div className="flex mb-2 text-white">
                    <BiServer className="text-3xl md:mb-0" />
                    <p className="md:text-xl font-semibold md:pl-3 md:mt-0">
                      Driving Business Success through Digital Transformation
                    </p>
                  </div>
                </li>

                <li>
                  <div className="flex mb-2 text-white">
                    <BiCustomize className="text-3xl md:mb-0" />
                    <p className="md:text-xl font-semibold md:pl-3 md:mt-0">
                      Empowering Businesses to Thrive with Digital Innovation
                    </p>
                  </div>
                </li>

                <li>
                  <div className="flex mb-2 text-white">
                    <BiSolidUserCheck className="text-3xl md:mb-0" />
                    <p className="md:text-xl font-semibold md:pl-3 md:mt-0">
                      Transforming Businesses with Cutting-Edge Digital Solutions
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex mb-2 text-white">
                    <BiVector className="text-3xl md:mb-0" />
                    <p className="md:text-xl font-semibold md:pl-3 md:mt-0">
                      Accelerating Digital Transformation for Forward-Thinking Businesses
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
