import React from "react";
import ServicesImage from "../../../public/images/services.jpg";
import AemImage from "../../../public/images/services/aem.jpg";
import CloudImage from "../../../public/images/services/cloud.jpg";
import AzureDevelopmentImage from "../../../public/images/services/azure-development.jpg";
import ApiImage from "../../../public/images/services/api.png";

import { GrCloudComputer } from "react-icons/gr";

import {
  BiMinus,
} from "react-icons/bi";
import Breadcrumb from "@/components/common/beardcrumb";
import Image from "next/image";
import { Link } from "@mui/material";
import { FaGlobe } from "react-icons/fa";
import PlatformCard from "@/components/common/PlatformCard";



const Services = () => {
  const services = [
    {
      name: "AWS Cloud Computing",
      description:
        "Cloud computing services, scalable, secure, and transformative.",
      href: "/services/aws-cloud-computing",
      icon: FaGlobe,
      image: CloudImage,
    },
    {
      name: "Microsoft Azure Development",
      description:
        "Build, scale, and transform with the power of Microsoft Azure.",
      href: "/platform/azure-development",
      icon: FaGlobe,
      image: AzureDevelopmentImage,
    },
    {
      name: "Enterprise Software Development",
      description:
        "Transform your business operations with scalable, robust, and secure enterprise applications.",
      href: "/services/enterprise-application-development",
      icon: GrCloudComputer,
      image: ApiImage,
    },
  ];

  return (
    <>
      <Breadcrumb
        title="Services"
        links={[
          { title: "Home", href: "/", icon: BiMinus },
          { title: "Services", href: "/services", active: true },
        ]}
      />

      <div className=" text-black md:py-[30px] py-[50px] md:px-0 px-[20px]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <h1 className="text-3xl text-secondary-dark leading-[40px]">
                What we promise{" "}
                <span className="font-extrabold">
                  high quality IT Agency Services
                </span>
              </h1>

              <p className="md:text-xl font-medium py-5 leading-8">
                {`At Aavya LabTech, we harness the collective expertise of our team, combining our knowledge, skills, and insights to craft innovative solutions tailored to meet the diverse needs of our clients. From strategic consulting to cutting-edge technology solutions, we are committed to delivering results that drive success for businesses of all sizes.`}
              </p>

              <ul>
                <li className="flex justify-center items-center mb-4">
                  <div className="basis-[10%]">
                    <FaGlobe className="text-4xl text-indigo-700 bg-indigo-200 p-2 rounded-full" />
                  </div>
                  <div className="basis-[90%]">
                    <p className="md:text-xl py-3">
                      Experts around the world
                    </p>
                  </div>
                </li>

                <li className="flex justify-center items-center mb-4">
                  <div className="basis-[10%]">
                    <FaGlobe className="text-4xl text-indigo-700 bg-indigo-200 p-2 rounded-full" />
                  </div>
                  <div className="basis-[90%]">
                    <p className="md:text-xl py-3">
                      Best Practice for industry
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

            </div>

            <div className="mx-auto">
              <Image
                src={ServicesImage}
                alt="Platform Services"
                width={500}
                height={200}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-10 px-4 ">
        <div className="grid grid-cols- sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service) => (
            <PlatformCard key={service.name} platform={service} />
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
            {`At Aavya LabTech, we specialize in providing innovative IT services
            across leading platforms such as Microsoft, React
            Native, and more. Our solutions are designed to enhance business
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
                  <strong>AWS Cloud Computing:</strong> Customize Salesforce
                  to meet your unique business needs.
                </li>
                <li>
                  <strong>Azure Development:</strong> Leverage Microsoft
                  technologies, including .NET Development and Office Add-Ins,
                  to streamline operations.
                </li>
                <li>
                  <strong>Web API Development:</strong> Build
                  cross-platform mobile apps that deliver an exceptional user
                  experience.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="md:text-xl text-white font-bold">
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

export default Services;
