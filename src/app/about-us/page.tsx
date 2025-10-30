/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useEffect, useState } from "react";
import BannerImage from "../../../public/images/home-baner.jpg"
import AboutImage from "../../../public/images/home-baner.jpg"

import { BiMinus, BiServer, BiShieldQuarter, BiUserVoice } from "react-icons/bi";
import Breadcrumb from "@/components/common/beardcrumb";
import Image from "next/image";
import { Helmet } from "react-helmet";
 
function AboutUs() {
  const [description, setDescription] = useState('');

  useEffect(() => {
    document.title = 'Aavya LabTech: About Us';
    const description = "Aavya LabTech is a US-based software development company offering tailored enterprise solutions in .NET, Golang, mobile apps, cloud, and digital experience platforms. We focus on innovation, agility, and scalable tech solutions.";

    const keyWords = "AWS, Cloud Computing, Azure, Generative AI, GenAI, Gen AI, AI-powered, Workfront, IoT device, IoT, Smart device";

    const metaDescription = document?.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription?.setAttribute("content", description);
    }
    else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }

    const metaKeywords = document?.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords?.setAttribute("content", keyWords);
    }
    else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'keywords';
      newMeta.content = keyWords;
      document.head.appendChild(newMeta);
    }

    return () => {
      const metaDescription = document.querySelector('meta[name="description"]');
      const metaKeywords = document.querySelector('meta[name="keywords"]');

      if (metaDescription && metaDescription.getAttribute('content') === description) {
        metaDescription.remove();
      }
      if (metaKeywords && metaKeywords.getAttribute('content') === keyWords) {
        metaKeywords.remove();
      }
    };

  }, [description]);
  
  const jsonLdData =
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us - Aavya LabTech",
    "url": "https://aavyalabtech.com/about-us/",
    "description": "Aavya LabTech is a US-based software development company offering tailored enterprise solutions in .NET, Golang, mobile apps, cloud, and digital experience platforms. We focus on innovation, agility, and scalable tech solutions.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Aavya LabTech",
      "url": "https://aavyalabtech.com",
      "logo": {
        "@type": "ImageObject",
        "url": "/images/logo.png"
      },
      "founder": {
        "@type": "Person",
        "name": "Founder Name"
      },
      "foundingDate": "2024",
      "description": "Aavya LabTech delivers secure, scalable digital solutions leveraging modern technologies across cloud, web, and mobile platforms.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "info@aavyalabtech.com",
        "telephone": "+1-800-123-4567",
        "areaServed": "US",
        "availableLanguage": ["English"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/aavyalabtech",
        "https://twitter.com/aavyalabtech"
      ]
    }
  };

   
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>
      </Helmet>

      <Breadcrumb
        title="About Us"
        links={[
          { title: "Home", href: "/", icon: BiMinus },
          { title: "About Us", href: "/about-us" },
        ]}
      />

      <div className="bg-white text-black md:mb-8 mb-5 mt-4 md:py-[0px] py-[50px] md:px-0 px-[20px]">
        <div className="container">
          <div className="md:grid lg:grid-cols-2 gap-2">
            <div className="lg:mb-0 md:mb-8 mb-5 mt-4">
              <Image
                src={AboutImage}
                alt="AboutImage"
                className="relative width-full md:w-[600px] md:h-[400px] w-[600px] h-[240px]"
              />
            </div>
            <div>
              <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-0 font-bold">
                Innovating Technology, Transforming Businesses
              </h1>

              <p className="md:text-xl font-medium py-2 leading-8 ">
                At Aavya LabTech, we are passionate about harnessing the power of technology to drive business success. Founded with a vision to deliver cutting-edge software solutions, our company has grown into a trusted partner for businesses worldwide, offering a wide range of services in software development, IT consulting, and digital transformation.
              </p>
              <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-0 font-bold">
                Who We Are
              </h1>
              <p className="md:text-xl font-medium py-2 leading-8 ">
                We are a team of dedicated professionals, each an expert in their field, committed to delivering exceptional value to our clients. Our diverse team brings together years of experience in software engineering, project management, UI/UX design, and business analysis. This blend of technical expertise and industry knowledge enables us to provide solutions that are not only innovative but also tailored to meet the unique needs of each client.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-200 text-black md:py-[80px] py-[50px] md:px-0 px-[20px]">
        <div className="container">
          <div className="lg:grid md:grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <div className="shadow-xl rounded-lg md:p-7 md:mb-0 mb-5 border border-gray-300 bg-white  p-5">
              <h3 className="font-bold text-2xl md:pl-3 md:mt-2 text-secondary-dark  text-center">
                Our Mission
              </h3>
              <p className="md:text-xl text-base font-medium py-2 leading-8 text-center mb-3">
                Our mission is simple: to empower businesses through innovative technology solutions. We strive to deliver software that not only meets but exceeds our clients' expectations, enabling them to achieve their strategic goals and stay ahead of the competition.
              </p>
            </div>
            <div className="shadow-xl rounded-lg md:p-7 md:mb-0 mb-5 border border-gray-300 bg-white  p-5">
              <h3 className="font-bold text-2xl md:pl-3 md:mt-2 text-secondary-dark  text-center">
                Our Approach
              </h3>
              <p className="md:text-xl font-medium py-2 leading-8 text-center mb-3">
                We believe that successful software development is a collaborative process. That's why we place a strong emphasis on communication, transparency, and partnership with our clients. From initial consultation through to project delivery and beyond, we work closely with you to understand your business objectives, challenges, and vision.
              </p>
            </div>

            <div className="shadow-xl rounded-lg md:p-7 md:mb-0 mb-5 border border-gray-300 bg-white  p-5">
              <h3 className="font-bold text-2xl md:pl-3 md:mt-2 text-secondary-dark  text-center">
                Why Choose Us
              </h3>
              <p className="md:text-xl font-medium py-2 leading-8 text-center mb-3">
                Our team consists of seasoned professionals with deep technical knowledge and industry experience.
                We adhere to best practices and industry standards, ensuring that our solutions are robust, secure, and scalable.
                We stay at the forefront of technology trends, continuously learning and applying the latest advancements to our work.
              </p>
            </div>

          </div>
        </div>
      </div>
      <div className="bg-slate-200 text-black md:py-[80px] py-[50px] md:px-0 px-[20px]">
        <div className="container">
          <div className="md:mb-[5%] mb-10">
            <h3 className="mt-4 md:text-2xl text-lg  text-primary-main font-bold text-center relative leading-loose ">
              Our Key <br />{" "}
              <span
                className="title">
                Differentiators
              </span>{" "}
            </h3>
          </div>
          <div className="lg:grid md:grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <div className="shadow-xl rounded-lg md:p-7 md:mb-0 mb-5 border border-gray-300 bg-white  p-5">
              <span className="relative border-[6px] mx-auto mb-8 border-primary-light w-[80px] h-[80px] bg-gradient-to-l rounded-full from-primary-main to-primary-dark flex items-center justify-center">
                {" "}
                <BiServer className="text-5xl  md:mb-0 text-black relative" />
              </span>

              <h3 className="font-bold text-2xl md:pl-3 md:mt-2 text-secondary-dark  text-center">
                Performance & Agility
              </h3>

              <p className="md:text-xl font-medium py-2 leading-8 text-center mb-3">
                Our engines have the required horsepower to ensure that you get
                access to superlative performance.
              </p>
            </div>

            <div className="shadow-xl rounded-lg md:p-7 md:mb-0 mb-5 border border-gray-300 bg-white  p-5">
              <span className="relative border-[6px] mx-auto mb-8 border-primary-light w-[80px] h-[80px] bg-gradient-to-l rounded-full from-primary-main to-primary-dark flex items-center justify-center">
                {" "}
                <BiShieldQuarter className="text-5xl  md:mb-0 text-white relative" />
              </span>

              <h3 className="font-bold text-2xl md:pl-3 md:mt-2 text-secondary-dark  text-center">
                Security & Scalability
              </h3>

              <p className="md:text-xl font-medium py-2 leading-8 text-center ">
                We ensure your business-critical processes and apps run
                seamlessly to handle any surges or fluctuations in any activity.
              </p>
            </div>

            <div className="shadow-xl rounded-lg md:p-7 md:mb-0 mb-5 border border-gray-300 bg-white  p-5">
              <span className="relative border-[6px] mx-auto mb-8 border-primary-light w-[80px] h-[80px] bg-gradient-to-l rounded-full from-primary-main to-primary-dark flex items-center justify-center">
                {" "}
                <BiUserVoice className="text-5xl  md:mb-0 text-white relative" />
              </span>

              <h3 className="font-bold text-2xl md:pl-3 md:mt-2 text-secondary-dark  text-center">
                24x7 Support & Reliability
              </h3>

              <p className="md:text-xl font-medium py-2 leading-8 text-center mb-3">
                Our solutions are backed by stringent SLAs and MLAs, with
                superior support, reliability, security, and agility. We have
                always got your back.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
