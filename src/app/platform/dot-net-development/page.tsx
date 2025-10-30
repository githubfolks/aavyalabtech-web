/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect, useState } from "react";
import Service2Image from "../../../../public/images/platform/microsoft.jpg";

import Breadcrumb from "@/components/common/beardcrumb";
import Image from "next/image";
import { FaGlobe } from "react-icons/fa";
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
import { Helmet } from "react-helmet";



const NetDevelopment = () => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    document.title = 'Aavya LabTech: .NET Development Services';
    const description = "Aavya Labs offers full-cycle .NET development services to build robust, scalable, and secure enterprise applications. We specialize in ASP.NET Core, C#.NET APIs, integration with databases, and cloud-ready architecture.";

    const keyWords = "ASP.NET Core Web Applications, C#.NET API Development, SQL Server Integration, .NET Microservices Architecture";

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

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": ".NET Development Services",
    "url": "https://aavyalabtech.com/platform/dot-net-development/",
    "image": "/images/platform/microsoft.jpg",
    "description": "Aavya LabTech offers full-cycle .NET development services to build robust, scalable, and secure enterprise applications. We specialize in ASP.NET Core, C#.NET APIs, integration with databases, and cloud-ready architecture.",
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
    "serviceType": ".NET Enterprise Application Development",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://aavyalabtech.com/contact-us/",
      "availableLanguage": ["English"]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": ".NET Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ASP.NET Core Web Applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "C#.NET API Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SQL Server Integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": ".NET Microservices Architecture"
          }
        }
      ]
    }
  };

  const cardData = [
    {
      icon: <BiServer className="text-5xl text-white relative" />,
      title: "Custom .NET Application Development",
      description:
        "We specialize in building custom applications that meet your specific business needs. Whether you require a complex enterprise software, a dynamic web app, or a specialized desktop solution, we deliver high-quality software that drives results.",
    },
    {
      icon: <BiShieldQuarter className="text-5xl text-white relative" />,
      title: ".NET Web Development",
      description:
        "We develop powerful, responsive web applications using ASP.NET MVC and ASP.NET Core. Our solutions are designed for scalability and performance, providing a seamless user experience across all devices.",
    },
    {
      icon: <BiUserVoice className="text-5xl text-white relative" />,
      title: ".NET API Development and Integration",
      description:
        "Our team excels in developing secure, high-performance RESTful APIs using .NET. These APIs enable seamless integration with other systems, ensuring smooth data exchange and enhanced functionality.",
    },
    {
      icon: <BiGroup className="text-5xl text-white relative" />,
      title: "Cloud Solutions with .NET",
      description:
        "Harness the power of Microsoft Azure with our cloud-native .NET development services. We design, develop, and deploy scalable cloud solutions that leverage Azure's full potential for storage, computing, and networking.",
    },
    {
      icon: <BiCog className="text-5xl text-white relative" />,
      title: ".NET Maintenance and Support",
      description:
        "Keep your .NET applications running smoothly with our comprehensive maintenance services. We provide regular updates, performance monitoring, and quick issue resolution to ensure optimal performance.",
    },
    {
      icon: <BiCloudDrizzle className="text-5xl text-white relative" />,
      title: "Transform Your Business with .NET",
      description:
        "Empower your organization with innovative, high-performance applications built on the .NET platform. Contact us today to discuss your project requirements and discover how our .NET development services can help you achieve your business goals.",
    },
  ];
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>
      </Helmet>

      <Breadcrumb
        title=".Net Development"
        links={[
          { title: "Home", href: "/", icon: BiMinus },
          { title: "Platform", href: "/platform", icon: BiMinus },
          { title: ".Net Development", href: "/platform/dot-net-development", active: true },
        ]}
      />

      <div className=" text-black md:py-[30px] py-[50px] md:px-0 px-[20px]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <h1 className="text-3xl text-secondary-dark leading-[40px]">
                Build Robust, Scalable, and Secure{" "}
                <span className="font-extrabold">
                  Applications with .NET
                </span>
              </h1>

              <p className="md:text-xl font-medium py-5 leading-8">
                {`Microsoft's .NET framework is a versatile and powerful platform for building a wide range of applications, from enterprise-grade solutions to dynamic web apps and sophisticated cloud-based services. With our .NET development services, you can leverage the full capabilities of this platform to create applications that are not only robust and scalable but also secure and easy to maintain. Whether you're looking to modernize existing systems or develop new solutions, our team of .NET experts is here to help.`}
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
                <span className="title">Why Microsoft .Net?</span>{" "}
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

                  <p className="md:text-xl font-medium py-2 leading-8 mb-3 text-justify">
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
                  Expertise
                </h3>
              </div>
              <p className="md:text-xl font-medium py-2 leading-8 ">
                Our team of certified Microsoft .Net consultants has extensive experience in implementing and optimizing digital business for organizations of all sizes.
              </p>
            </div>
            <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
              <div className="flex mb-2">
                <span className="relative mb-2">
                  <BiCustomize className="text-5xl md:mb-0 text-black relative" />
                </span>
                <h3 className="text-2xl font-bold  md:pl-3 md:mt-2 text-secondary-dark  ">
                  Customization
                </h3>
              </div>
              <p className="md:text-xl font-medium py-2 leading-8 ">
                We understand that every business is unique. That's why we offer tailored solutions that align with your specific goals and requirements.
              </p>
            </div>
            <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
              <div className="flex mb-2">
                <span className="relative mb-2">
                  <BiSolidUserCheck className="text-5xl md:mb-0 text-black relative" />
                </span>
                <h3 className="text-2xl font-bold  md:pl-3 md:mt-2 text-secondary-dark  ">
                  Proven Track Record
                </h3>
              </div>
              <p className="md:text-xl font-medium py-2 leading-8">
                We have successfully delivered Workfront solutions for numerous clients, helping them achieve greater project efficiency and collaboration.
              </p>
            </div>
            <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
              <div className="flex mb-2">
                <span className="relative mb-2">
                  <BiVector className="text-5xl md:mb-0 text-black relative" />
                </span>
                <h3 className="text-2xl font-bold md:pl-3 md:mt-2 text-secondary-dark  ">
                  Client-Centric Approach
                </h3>
              </div>
              <p className="md:text-xl font-medium py-2 leading-8">
                Your success is our priority. We work closely with you to ensure that our services not only meet but exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-main text-white md:py-[40px] py-[50px] md:px-20 px-[20px]">
        <div className="container">
          <div>
            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-0 font-bold">
              Get Started with Microsoft .Net Today
            </h1>
            <p className="md:text-xl font-medium py-2 leading-8 ">
              Transform the way you manage work with our comprehensive Microsoft .Net services. <Link href={"/contact-us"} className="text-blue-600">Contact us</Link> today to learn how we can help you optimize your project management processes and drive success for your organization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NetDevelopment;
