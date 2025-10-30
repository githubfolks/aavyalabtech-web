/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect, useState } from "react";
import Service2Image from "../../../../public/images/services/web-api-development.jpg";
import Breadcrumb from "@/components/common/beardcrumb";
import Image from "next/image";
import Link from "next/link";
import { Helmet } from "react-helmet";

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


const EnterpriseApplicationDevelopment = () => {
    const [description, setDescription] = useState('');

    useEffect(() => {
        document.title = 'Aavya LabTech: ';
        const description = "Aavya LabTech specializes in developing scalable, secure, and performance-driven enterprise applications using technologies like C#.Net, Golang, SQL Server, PostgreSQL, and REST APIs. We deliver tailor-made solutions that streamline business operations and accelerate growth.";

        const keyWords = "C#.Net Development, Golang Backend Architecture, SQL Server / PostgreSQL Database Design, REST API Integration";

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
        "name": "Enterprise Application Development",
        "url": "https://Aavya LabTech.com/services/enterprise-application-development",
        "image": "/images/services/web-api-development.jpg",
        "description": "Aavya Labs specializes in developing scalable, secure, and performance-driven enterprise applications using technologies like C#.Net, Golang, SQL Server, PostgreSQL, and REST APIs. We deliver tailor-made solutions that streamline business operations and accelerate growth.",
        "provider": {
            "@type": "Organization",
            "name": "Aavya LabTech",
            "url": "https://Aavya LabTech.com",
            "logo": {
                "@type": "ImageObject",
                "url": "/images/logo.png"
            }
        },
        "areaServed": {
            "@type": "Country",
            "name": "United States"
        },
        "serviceType": "Custom Enterprise Software Development",
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://Aavya LabTech.com/contact-us/",
            "availableLanguage": ["English"]
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Enterprise Software Capabilities",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "C#.Net Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Golang Backend Architecture"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "SQL Server / PostgreSQL Database Design"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "REST API Integration"
                    }
                }
            ]
        }
    };

    const cardData = [
        {
            icon: <BiServer className="text-5xl text-white relative" />,
            title: "Custom Enterprise Software Solutions",
            description:
                "We design and build custom enterprise software tailored to your specific needs. Whether it's a comprehensive ERP solution or a custom CRM system, our team ensures that each application is crafted to fit your unique workflows and deliver a seamless user experience.  Tech Stack: Golang, C#.NET, Ms SQL Server, PostgreSQL",
        },
        {
            icon: <BiShieldQuarter className="text-5xl text-white relative" />,
            title: "Backend Development & API Integration",
            description:
                "With powerful backend development and integration capabilities, we enable your enterprise applications to securely communicate with each other. Our team specializes in building and optimizing REST APIs, facilitating smooth data exchange and connectivity across all your systems. Core Focus: RESTful API development, secure integrations, data management",
        },
        {
            icon: <BiUserVoice className="text-5xl text-white relative" />,
            title: "Mobile Application Development",
            description:
                "Take your enterprise application to the next level with mobile solutions. We develop intuitive mobile apps that extend your business processes beyond the desktop, allowing users to stay productive on any device. Platforms: iOS, Android, Cross-Platform",
        },
        {
            icon: <BiGroup className="text-5xl text-white relative" />,
            title: "Database Design & Optimization",
            description:
                "Efficient data management is critical to enterprise success. Our experts in Ms SQL Server and PostgreSQL ensure your database architecture is scalable, secure, and optimized for performance. Services: Database design, performance tuning, data security.",
        },
        {
            icon: <BiCog className="text-5xl text-white relative" />,
            title: "Testing & Quality Assurance",
            description:
                "We rigorously test your application to ensure it meets our high standards for functionality, security, and performance.",
        },
        {
            icon: <BiCloudDrizzle className="text-5xl text-white relative" />,
            title: "Deployment & Maintenance",
            description:
                "Once the application is ready, we deploy it in a secure environment and provide continuous support and updates to keep your application running smoothly.",
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
                title="Enterprise Software Development"
                links={[
                    { title: "Home", href: "/", icon: BiMinus },
                    { title: "Services", href: "/services", icon: BiMinus },
                    { title: "Enterprise Software Development", href: "/services/enterprise-application-development", active: true },
                ]}
            />

            <div className=" text-black md:py-[30px] py-[50px] md:px-0 px-[20px]">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-2">
                        <div>
                            <h1 className="text-3xl text-secondary-dark leading-[40px]">
                                Transform your business operations with {" "}
                                <span className="font-extrabold">
                                    scalable, robust, and secure enterprise applications.
                                </span>
                            </h1>

                            <p className="md:text-xl font-medium py-5 leading-8">
                                {`In today’s digital-first world, businesses need customized solutions that can adapt to unique workflows, streamline complex processes, and empower teams to work efficiently. Our enterprise application development services help you stay ahead of the competition with applications that are purpose-built for your business needs. From scalable backend systems to intuitive user interfaces, we deliver end-to-end solutions that support and enhance your operations.`}
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
                                <span className="title">Our Capabilities
                                </span>{" "}
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
                                    Scalability
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8 ">
                                Our applications are built to grow with your business, handling increased load and complexity with ease.
                            </p>
                        </div>
                        <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
                            <div className="flex mb-2">
                                <span className="relative mb-2">
                                    <BiCustomize className="text-5xl md:mb-0 text-black relative" />
                                </span>
                                <h3 className="text-2xl font-bold  md:pl-3 md:mt-2 text-secondary-dark  ">
                                    Security
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8 ">
                                We implement robust security measures to safeguard your data, ensuring compliance and protecting against potential threats.
                            </p>
                        </div>
                        <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
                            <div className="flex mb-2">
                                <span className="relative mb-2">
                                    <BiSolidUserCheck className="text-5xl md:mb-0 text-black relative" />
                                </span>
                                <h3 className="text-2xl font-bold  md:pl-3 md:mt-2 text-secondary-dark  ">
                                    User-Centric Design
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8">
                                Our UI/UX team focuses on creating intuitive interfaces that are both visually appealing and highly functional.
                            </p>
                        </div>
                        <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
                            <div className="flex mb-2">
                                <span className="relative mb-2">
                                    <BiVector className="text-5xl md:mb-0 text-black relative" />
                                </span>
                                <h3 className="text-2xl font-bold md:pl-3 md:mt-2 text-secondary-dark  ">
                                    End-to-End Support
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8">
                                From concept to deployment and beyond, we provide ongoing support and maintenance to ensure your application’s success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-primary-main text-white md:py-[40px] py-[50px] md:px-20 px-[20px]">
                <div className="container">
                    <div>
                        <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-0 font-bold">
                            Get Started with Us Today
                        </h1>
                        <p className="md:text-xl font-medium py-2 leading-8 ">
                            Ready to transform your business with a custom enterprise application? <Link href={"/contact-us"} className="text-blue-600">Contact us</Link> to discuss your project requirements and learn how we can build a solution that drives your business forward.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EnterpriseApplicationDevelopment;