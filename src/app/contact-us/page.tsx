"use client";
import React, { useEffect, useRef, useState } from "react";
import { BiMinus } from "react-icons/bi";
import Breadcrumb from "@/components/common/beardcrumb";
import ContactWrapper from "@/components/contact/ContactWrapper";
import ContactForm from "@/components/contact/ContactForm";
import { FaMobileAlt, FaPhone } from "react-icons/fa";
import ContactCard from "@/components/contact/ContactCard";
import { FaLocationDot, FaMessage } from "react-icons/fa6";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin
import { useGSAP } from "@gsap/react";
import { BsEnvelope } from "react-icons/bs";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
 

const ContactUs = () => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    document.title = 'Aavya Aavya LabTech: Contact Us';
    const description = "Aavya Labs is a US-based software development company offering tailored enterprise solutions in .NET, Golang, mobile apps, cloud, and digital experience. We focus on innovation, agility, and scalable tech solutions.";

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
    "@type": "ContactPage",
    "name": "Contact Us – Aavya Labs",
    "url": "https://aavyalabtech.com/contact-us/",
    "description": "Get in touch with Aavya Labs for custom software development, platform integration, and cloud solutions. Reach out to our team for consultations or service inquiries.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://aavyalabtech.com/contact-us/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Aavya Aavya LabTech",
      "url": "https://aavyalabtech.com",
      "logo": {
        "@type": "ImageObject",
        "url": "/images/logo.png"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-123-4567",
      "contactType": "Customer Service",
      "areaServed": "US",
      "availableLanguage": ["English"]
    }
  };

  const divRef = useRef<HTMLDivElement | null>(null);

  const cardData = [
    {
      title: "Talk to us",
      icon: FaPhone,
      detail: `You can start a conversation or ask a question right now using the message box in the lower right hand corner of this page.`,
      link: "tel:844-392-2892",
    },
    {
      title: "Send us e-mail",
      icon: BsEnvelope,
      detail: `Feel free to send us good old fashioned email at hello@aavyalabtech.com and we'll get back to you asap.`,
      link: "mailto:hello@aavyalabtech.com",
    },
    {
      title: "Location",
      icon: FaLocationDot,
      detail: `D-5, Third Floor, Sector-10, Noida, Uttar Pradesh, 201301, India`,
    },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut", duration: 1 },
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      });

      tl.fromTo(
        ".contact-card",
        {
          rotation: 45,
          opacity: 0,
          x: -100,
        },
        {
          rotation: 0,
          opacity: 1,
          x: 0,
          stagger: 1,
        }
      );
    },
    { scope: divRef }
  );

  return (
    <>
      <Breadcrumb
        title="Contact Us"
        links={[
          { title: "Home", href: "/", icon: BiMinus },
          { title: "Contact Us", href: "/contact-us" },
        ]}
      />

      <div className="text-black md:mb-8 mb-5 mt-14 md:py-[0px] py-[50px] md:px-0 px-[20px]">
        <div className="container">
          <div className="md:mb-8 mb-5">
            <h3 className="md:text-3xl text-lg mb-6 text-primary-main font-bold text-center relative leading-loose ">
              <span className="title">Ready to Get Started?</span>
            </h3>
            <h4 className="text-center relative">
              Your email address will not be published. Required fields are
              marked *
            </h4>
          </div>
        </div>
        <ContactWrapper title={"Get connected with us"}>
          <ContactForm />
        </ContactWrapper>
        <div
          className="container grid md:grid-cols-3 mt-8 mb-12 gap-4 "
          ref={divRef}
        >
          {cardData.map((c, index) => (
            <div
              key={c.title}
              className={`p-2 h-auto md:basis-1/3 flex-shrink-0 contact-card ${index === 3 ? "md:col-span-3 flex justify-center" : ""
                }`}
            >
              <ContactCard {...c} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
