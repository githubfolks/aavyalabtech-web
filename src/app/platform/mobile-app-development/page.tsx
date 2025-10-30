/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect, useState } from "react";
import Service2Image from "../../../../public/images/platform/native.png";

import Breadcrumb from "@/components/common/beardcrumb";
import Image from "next/image";
import Link from "next/link";

import {
  BiCloudDrizzle,
  BiCog,
  BiCustomize,
  BiGroup,
  BiMinus,
  BiServer,
  BiShieldQuarter,
  BiSolidUserCheck,
  BiUserVoice,
  BiVector,
} from "react-icons/bi";
 
const MobileAppDevelopment = () => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    document.title = 'Aavya LabTech: ';
    const description = "Aavya Labs offers full-cycle mobile app development services for iOS, Android, and cross-platform apps using React Native and Flutter. From design to deployment, we deliver secure, scalable, and high-performance mobile solutions.";

    const keyWords = "Custom Mobile App Development, Mobile App Development Services, iOS & Android Native App Development, Cross-Platform App Development (React Native, Flutter), UI/UX Design for Mobile Interfaces, App Maintenance, Testing & Deployment";

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
    "@type": "ProfessionalService",
    "name": "Mobile App Development Services",
    "url": "https://aavyalabtech.com/platform/mobile-app-development/",
    "image": "/images/platform/native.png",
    "description": "Aavya Labs offers full-cycle mobile app development services for iOS, Android, and cross-platform apps using React Native and Flutter. From design to deployment, we deliver secure, scalable, and high-performance mobile solutions.",
    "provider": {
      "@type": "Organization",
      "name": "Aavya LabTech",
      "url": "https://aavyalabtech.com",
      "logo": {
        "@type": "ImageObject",
        "url": "/images/logo.png"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceType": "Custom Mobile App Development",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://aavyalabtech.com/contact-us",
      "availableLanguage": ["English"]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mobile App Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "iOS & Android Native App Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cross-Platform App Development (React Native, Flutter)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design for Mobile Interfaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "App Maintenance, Testing & Deployment"
          }
        }
      ]
    }
  };

  const cardData = [
    {
      icon: <BiServer className="text-5xl text-white relative" />,
      title: "Custom Mobile App Development",
      description:
        "We develop custom mobile applications that are perfectly aligned with your business needs. Whether you're looking for a consumer-facing app, a B2B solution, or an enterprise-grade application, we deliver high-quality apps that drive engagement and achieve your goals.",
    },
    {
      icon: <BiShieldQuarter className="text-5xl text-white relative" />,
      title: "UI/UX Design",
      description:
        "Our design team creates intuitive and visually appealing user interfaces that provide a smooth and enjoyable experience for your users. We focus on usability, accessibility, and aesthetics to ensure your app stands out in the market.",
    },
    {
      icon: <BiUserVoice className="text-5xl text-white relative" />,
      title: "Mobile App Testing & Quality Assurance",
      description:
        "We conduct thorough testing across multiple devices and platforms to ensure your app is free of bugs and performs flawlessly. Our QA team uses both manual and automated testing methods to verify functionality, performance, and security.",
    },
    {
      icon: <BiGroup className="text-5xl text-white relative" />,
      title: "App Deployment & Launch",
      description:
        "We handle the entire submission process for the Apple App Store and Google Play Store, ensuring your app meets all guidelines and is approved without delays.",
    },
    {
      icon: <BiCog className="text-5xl text-white relative" />,
      title: "App Maintenance & Support",
      description:
        "Keep your app up-to-date with regular maintenance and updates. We monitor performance, fix bugs, and implement new features to keep your app competitive in the market.",
    },
    {
      icon: <BiCloudDrizzle className="text-5xl text-white relative" />,
      title: "Mobile App Modernization",
      description:
        "If your existing app needs a fresh look or improved user experience, we offer redesign services that bring your app up to modern standards while preserving its core functionality.",
    },
  ];
  return (
    <>
      <Breadcrumb
        title="Mobile App Development"
        links={[
          { title: "Home", href: "/", icon: BiMinus },
          { title: "Platform", href: "/platform", icon: BiMinus },
          { title: "Mobile App Development", href: "/platform/mobile-app-development", active: true },
        ]}
      />

      <div className=" text-black md:py-[30px] py-[50px] md:px-0 px-[20px]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <h1 className="text-3xl text-secondary-dark leading-[40px]">
                Transform Your Ideas into{" "}
                <span className="font-extrabold">
                  Engaging Mobile Experiences
                </span>
              </h1>

              <p className="md:text-xl font-medium py-5 leading-8">
                {`In today's digital world, a strong mobile presence is crucial for business success. Whether you're looking to launch a new app, enhance an existing one, or create a mobile version of your web application, our mobile app development services are designed to deliver innovative and user-centric solutions. We specialize in building high-performance mobile apps that offer seamless experiences across all devices and platforms.`}
              </p>
            </div>

            <div className="mx-auto">
              <Image
                src={Service2Image}
                alt="Platform Services"
                width={500}
                height={200}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 text-black md:py-[80px] py-[0px] md:px-0 px-[20px]">
        <div className="container">
          <div className="container">
            <div className="md:mb-[5%] mb-10">
              <h3 className="mt-4 md:text-2xl text-lg  text-primary-main font-bold text-center relative leading-loose ">
                <span className="title">Why Mobile App?</span>{" "}
              </h3>
            </div>

            <div className="lg:grid md:grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="shadow-xl rounded-lg md:p-7 md:mb-0 mb-5 border border-gray-300 bg-white/60 backdrop-blur-md p-5"
                >
                  <span className="relative border-[6px] mx-auto mb-8 border-primary-light w-[80px] h-[80px] bg-gradient-to-l rounded-full from-primary-main to-primary-dark flex items-center justify-center">
                    {card.icon}
                  </span>

                  <h3 className="font-bold text-2xl md:pl-3 md:mt-2 text-secondary-dark  text-center">
                    {card.title}
                  </h3>

                  <p className="md:text-xl text-base font-medium py-2 leading-8 mb-3">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="md:py-[20px] py-[20px] md:px-20 px-[20px] bg-drop md:bg-contain bg-cover bg-fixed bg-no-repeat bg-[#f9f9f9]  ">
        <div className="container">
          <div className=" md:p-2 md:mb-8 mb-5">
            <h3 className="xl:text-4xl text-3xl  text-secondary-dark font-bold">
              Why Aavya LabTech ?
            </h3>
          </div>
          <div className="md:grid md:grid-cols-2 lg:grid mb-8 lg:grid-cols-2 gap-8">
            <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
              <div className="flex mb-2">
                <span className="relative mb-2">
                  <BiServer className="text-5xl md:mb-0 text-black relative" />
                </span>
                <h3 className="text-2xl font-bold  md:pl-3 md:mt-2 text-secondary-dark  ">
                  Expert Team:
                </h3>
              </div>
              <p className="md:text-xl font-medium py-2 leading-8 ">
                Our developers and designers have extensive experience in building successful mobile apps across various industries.
              </p>
            </div>
            <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
              <div className="flex mb-2">
                <span className="relative mb-2">
                  <BiCustomize className="text-5xl md:mb-0 text-black relative" />
                </span>
                <h3 className="text-2xl font-bold  md:pl-3 md:mt-2 text-secondary-dark  ">
                  Cutting-Edge Technology:
                </h3>
              </div>
              <p className="md:text-xl font-medium py-2 leading-8 ">
                We use the latest tools and technologies to create apps that are not only innovative but also future-proof.
              </p>
            </div>
            <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
              <div className="flex mb-2">
                <span className="relative mb-2">
                  <BiSolidUserCheck className="text-5xl md:mb-0 text-black relative" />
                </span>
                <h3 className="text-2xl font-bold  md:pl-3 md:mt-2 text-secondary-dark  ">
                  Agile Methodology:
                </h3>
              </div>
              <p className="md:text-xl font-medium py-2 leading-8">
                Our agile development approach ensures flexibility, collaboration, and quick turnaround times, keeping your project on track.
              </p>
            </div>
            <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
              <div className="flex mb-2">
                <span className="relative mb-2">
                  <BiVector className="text-5xl md:mb-0 text-black relative" />
                </span>
                <h3 className="text-2xl font-bold md:pl-3 md:mt-2 text-secondary-dark  ">
                  Client-First Approach:
                </h3>
              </div>
              <p className="md:text-xl font-medium py-2 leading-8">
                We prioritize your vision and goals, working closely with you to deliver a mobile app that truly represents your brand.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-main text-white md:py-[40px] py-[50px] md:px-20 px-[20px]">
        <div className="container">
          <div>
            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-0 font-bold">
              Get Started with Your Mobile App Today
            </h1>
            <p className="md:text-xl font-medium py-2 leading-8 ">
              Ready to take your business mobile? <Link href={"/contact-us"} className="text-blue-600">Contact us</Link> today to discuss your app idea and find out how our mobile app development services can help you create an impactful and engaging app that meets your business objectives.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileAppDevelopment;
