/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import PlatformImage from "../../../public/images/platform/platform.png";
import { BiMinus } from "react-icons/bi";
import Breadcrumb from "@/components/common/beardcrumb";
import Image from "next/image";
import { FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { GrCloudComputer } from "react-icons/gr";
import ReactNativeImage from "../../../public/images/platform/native.png";
import MicrosoftImage from "../../../public/images/platform/microsoft.jpg";
import PlatformCard from "@/components/common/PlatformCard";

const Platform = () => {

  const platforms = [
    {
      name: "Microsoft .NET",
      description:
        "Create powerful applications with Microsoft .NET development platform.",
      href: "/platform/dot-net-development",
      icon: GrCloudComputer,
      image: MicrosoftImage,
    },
    {
      name: "React Native",
      description:
        "Develop cross-platform mobile applications with React Native.",
      href: "/platform/mobile-app-development",
      icon: FaGlobe,
      image: ReactNativeImage,
    },
  ];

  return (
    <>
      <Breadcrumb
        title="Platform"
        links={[
          { title: "Home", href: "/", icon: BiMinus },
          { title: "Platform", href: "/platform", active: true },
        ]}
      />

      <div className=" text-black md:py-[30px] py-[50px] md:px-0 px-[20px]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <h1 className="text-3xl text-secondary-dark leading-[40px]">
                Discover our{" "}
                <span className="font-extrabold">
                  cutting-edge IT Solutions
                </span>
              </h1>

              <p className="md:text-xl font-medium py-5 leading-8">
                {`At Aavya LabTech, we specialize in providing innovative IT services
                across leading platforms such as Microsoft,
                React Native, and more. Our solutions are designed to enhance
                business processes, improve efficiency, and foster long-term
                success. Whether it's cloud computing, app development, or
                enterprise solutions, we deliver customized solutions to meet
                the diverse needs of your business.`}
              </p>

              <ul>
                <li className="flex justify-center items-center mb-4">
                  <div className="basis-[10%]">
                    <FaGlobe className="text-4xl text-indigo-700 bg-indigo-200 p-2 rounded-full" />
                  </div>
                  <div className="basis-[90%]">
                    <p className="md:text-xl py-3">
                      Solutions tailored to your industry needs
                    </p>
                  </div>
                </li>
                <li className="flex justify-center items-center mb-4">
                  <div className="basis-[10%]">
                    <FaGlobe className="text-4xl text-indigo-700 bg-indigo-200 p-2 rounded-full" />
                  </div>
                  <div className="basis-[90%]">
                    <p className="md:text-xl py-3">
                      Proven track record of transforming businesses with modern
                      technology
                    </p>
                  </div>
                </li>
              </ul>

              <div className="grid">
                <div className="hidden md:block">
                  <p className="md:text-xl mt-3 font-medium">
                    Explore Our Platform Solutions Today!
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto">
              <Image
                src={PlatformImage}
                alt="Platform Services"
                height={300}
                width={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-10 px-4 ">
        <div className="grid grid-cols- sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {platforms.map((platform) => (
            <PlatformCard key={platform.name} platform={platform} />
          ))}
        </div>
      </div>

      <div className="mx-10 bg-primary-main/90 rounded-lg p-12 mb-10 drop-shadow-xl shadow-md shadow-primary-main">
        <div className="container">
          <h1 className="md:text-4xl text-white font-extrabold leading-tight mb-5">
            <span className="font-extrabold">Innovative IT Solutions</span> to
            Propel Your Business
          </h1>

          <p className="text-white md:text-xl font-medium py-6 leading-8">
            {` At Aavya LabTech, we specialize in providing innovative IT services
            across leading platforms such as Microsoft, React Native, and more. Our solutions are designed to enhance business
            processes, improve efficiency, and foster long-term success. Whether
            it's cloud computing, app development, or enterprise solutions, we
            deliver customized solutions to meet the diverse needs of your
            business.`}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="space-y-4">
              <h3 className="text-xl text-white font-bold">
                Our Key Services Include:
              </h3>
              <ul className="list-disc pl-5 text-white md:text-xl font-medium">
                <li>
                  <strong>Microsoft Solutions:</strong> Leverage Microsoft
                  technologies, including .NET Development and Office Add-Ins,
                  to streamline operations.
                </li>
                <li>
                  <strong>React Native Development:</strong> Build
                  cross-platform mobile apps that deliver an exceptional user
                  experience.
                </li>
                <li>
                  <strong>Cloud Solutions:</strong> Harness the power of AWS,
                  Azure, and other cloud platforms for scalable, secure
                  solutions.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-white font-bold">
                Why Choose Aavya LabTech?
              </h3>
              <ul className="list-disc pl-5 text-white md:text-xl font-medium">
                <li>
                  <strong>Expert Team:</strong> Our team consists of experienced
                  professionals dedicated to delivering top-tier IT services.
                </li>
                <li>
                  <strong>Custom Solutions:</strong> We tailor our services to
                  suit the specific needs and goals of your business.
                </li>
                <li>
                  <strong>Proven Track Record:</strong> We have successfully
                  implemented solutions for businesses of all sizes and
                  industries.
                </li>
                <li>
                  <strong>Innovative Technology:</strong> We use the latest
                  technologies and methodologies to ensure your business stays
                  ahead.
                </li>
                <li>
                  <strong>End-to-End Support:</strong> From consulting to
                  implementation and ongoing support, we’re with you every step
                  of the way.
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/contact-us"
              className="inline-block bg-white text-primary-main font-bold py-3 px-8 rounded-lg hover:bg-primary-dark hover:text-white transition duration-300"
            >
              Get In Touch With Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Platform;
