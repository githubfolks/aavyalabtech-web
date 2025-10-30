/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect, useState } from "react";
import Service2Image from "../../../../public/images/platform/salesforce.png";

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
import { Helmet } from "react-helmet";
 
const Salesforce = () => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    document.title = 'Aavya Labs LLC: Salesforce Consulting and Integration';
    const description = "Aavya Labs offers Salesforce integration, customization, and API development services to help businesses optimize their CRM workflows, automate data pipelines, and extend Salesforce functionality with scalable custom apps and solutions.";

    const keyWords = "Salesforce API Integration, Salesforce Lightning Component Development, Salesforce Workflows & Automation, Salesforce + Third-Party Systems Integration";

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
    "name": "Salesforce Integration & Custom Development",
    "url": "https://aavyalabs.com/platform/salesforce/",
    "image": "/images/platform/platform.png",
    "description": "Aavya Labs offers Salesforce integration, customization, and API development services to help businesses optimize their CRM workflows, automate data pipelines, and extend Salesforce functionality with scalable custom apps and solutions.",
    "areaServed": {
      "@type": "Country",
      "name": "United States, India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Salesforce Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Salesforce API Integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Salesforce Lightning Component Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Salesforce Workflows & Automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Salesforce + Third-Party Systems Integration"
          }
        }
      ]
    }
  };

  const cardData = [
    {
      icon: <BiServer className="text-5xl text-white relative" />,
      title: "Salesforce Implementation & Setup",
      description:
        "Bring the power of Salesforce into your organization with our implementation services. We ensure a seamless transition, setting up your Salesforce environment for optimal performance and aligning it with your business goals.",
    },
    {
      icon: <BiShieldQuarter className="text-5xl text-white relative" />,
      title: "Salesforce Customization & Development",
      description:
        "Unlock the full potential of Salesforce with customized solutions. Our development team builds custom applications, workflows, and integrations that extend Salesforce’s capabilities.",
    },
    {
      icon: <BiUserVoice className="text-5xl text-white relative" />,
      title: "Salesforce Consulting Services",
      description:
        "Optimize your Salesforce strategy with expert guidance. Our consultants work with you to identify opportunities, streamline processes, and ensure your Salesforce platform aligns with your growth objectives.",
    },
    {
      icon: <BiGroup className="text-5xl text-white relative" />,
      title: "Salesforce Managed Services",
      description:
        "Let us handle the day-to-day management of your Salesforce system so you can focus on growing your business. We provide ongoing support, maintenance, and proactive improvements to ensure your Salesforce environment evolves with your business needs.",
    },
    {
      icon: <BiCog className="text-5xl text-white relative" />,
      title: "Salesforce Integration Solutions",
      description:
        "Integrate Salesforce with other business tools to create a connected, efficient ecosystem. From ERP and accounting software to marketing automation platforms, we help you unify your technology stack.",
    },
    {
      icon: <BiCloudDrizzle className="text-5xl text-white relative" />,
      title: "Industries We Serve",
      description:
        "We provide Salesforce solutions for a variety of industries, including finance, healthcare, retail, manufacturing, and more. Our in-depth industry expertise ensures that your Salesforce solution is tailored to meet the specific challenges and compliance requirements of your sector.",
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
        title="Salesforce"
        links={[
          { title: "Home", href: "/", icon: BiMinus },
          { title: "Platform", href: "/platform", icon: BiMinus },
          { title: "Salesforce", href: "/platform/salesforce", active: true },
        ]}
      />

      <div className=" text-black md:py-[30px] py-[50px] md:px-0 px-[20px]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <h1 className="text-3xl text-secondary-dark leading-[40px]">
                Salesforce Solutions{" "}
                <span className="font-extrabold">
                  That Drive Growth and Efficiency
                </span>
              </h1>

              <p className="md:text-xl font-medium py-5 leading-8">
                {`At Aavyalabs, we specialize in Salesforce solutions designed to empower your business, boost productivity, and strengthen customer relationships. As certified Salesforce experts, we work closely with you to tailor Salesforce to fit your unique business needs, streamline operations, and maximize ROI.`}
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
                <span className="title">Why Salesforce?</span>{" "}
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
              Why Aavyalabs ?
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
                Our team of certified Salesforce consultants has extensive experience in implementing and optimizing Salesforce for organizations of all sizes.
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
                We have successfully delivered Salesforce solutions for numerous clients, helping them achieve greater project efficiency and collaboration.
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
              Get Started with Salesforce Today
            </h1>
            <p className="md:text-xl font-medium py-2 leading-8 ">
              Transform the way you manage work with our comprehensive Salesforce services. <Link href={"/contact-us"} className="text-blue-600">Contact us</Link> today to learn how we can help you optimize your project management processes and drive success for your organization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Salesforce;
