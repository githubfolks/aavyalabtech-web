
"use client"
import HomeBaner from "@/components/home/Banner";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const WhyAvya = dynamic(() => import("@/components/home/WhyAvya"));
const Works = dynamic(() => import("@/components/home/Works"));
const WhatWeProvide = dynamic(() => import("@/components/home/WhatWeProvide"));


const HomePage = () => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    document.title = 'Aavya LabTech: Home';
    const description = "AWS Cloud Computing, Microsoft Azure Development, Enterprise Software Development, Generative AI, IoT Solutions, Custom software development, Enterprise IT solutions provider, AWS managed services provider, Azure cloud migration experts, ERP and CRM development services, Generative AI app development, AI-powered business tools, Custom AI chatbot solutions, GenAI integration services, IoT device integration services, Smart device applications";

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
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://aavyalabtech.com/#website",
        "url": "https://aavyalabtech.com",
        "name": "Aavya LabTech",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://aavyalabtech.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://aavyalabtech.com/#organization",
        "name": "Aavya LabTech",
        "url": "https://aavyalabtech.com",
        "logo": {
          "@type": "ImageObject",
          "url": "/images/logo.png"
        },
        "description": "Aavya LabTech is a software development company specializing in Golang, .NET, cloud platforms (AWS, Azure), Salesforce, mobile app development, and AI solutions.",
        "sameAs": [
          "https://www.linkedin.com/company/aavyalabtech",
          "https://twitter.com/aavyalabtech"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "telephone": "+1-800-123-4567",
          "email": "hello@aavyalabtech.com",
          "areaServed": "USA",
          "availableLanguage": ["English"]
        },
        "foundingDate": "2024",
        "founder": {
          "@type": "Person",
          "name": ""
        },
        "address": {
          "@type": "D-5, Third Floor",
          "addressLocality": "Sector-10, Noida",
          "addressRegion": "California, 94085, Uttar Pradesh, 201301",
          "addressCountry": "India"
        }
      }
    ]
  };


  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>
      </Helmet>
      <HomeBaner />
      <WhatWeProvide />
      <WhyAvya />
      <Works />
    </>
  );
};
export default HomePage;
