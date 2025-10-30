/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect, useState } from "react";
import Service2Image from "../../../../public/images/services/aws-cloud-computing.jpg";
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

const AWSCloudComputing = () => {
    const [description, setDescription] = useState('');

    useEffect(() => {
        document.title = 'Aavya LabTech: AWS Cloud Computing Services';
        const description = "Aavya LabTech provides AWS cloud services including cloud architecture, infrastructure as code, cost optimization, migration, DevOps automation, and managed cloud hosting. We help businesses scale reliably and securely on AWS.";

        const keyWords = "AWS Infrastructure Design & Deployment, Cloud Migration & Optimization, DevOps & CI/CD Automation, AWS Managed Services & Monitoring";

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
        "name": "AWS Cloud Computing Services",
        "url": "https://Aavya LabTech.com/services/aws-cloud-computing/",
        "image": "/images/services/aws-cloud-computing.jpg",
        "description": "Aavya Labs provides AWS cloud services including cloud architecture, infrastructure as code, cost optimization, migration, DevOps automation, and managed cloud hosting. We help businesses scale reliably and securely on AWS.",
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
        "serviceType": "AWS Cloud Consulting & DevOps Services",
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://Aavya LabTech.com/contact",
            "availableLanguage": ["English"]
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AWS Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "AWS Infrastructure Design & Deployment"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Cloud Migration & Optimization"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "DevOps & CI/CD Automation"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "AWS Managed Services & Monitoring"
                    }
                }
            ]
        }
    };

    const cardData = [
        {
            icon: <BiServer className="text-5xl text-white relative" />,
            title: "AWS Cloud Migration",
            description:
                "Migrate your business to AWS seamlessly and securely. Our cloud migration services are designed to help you move your on-premises infrastructure, applications, and data to AWS with minimal disruption.",
        },
        {
            icon: <BiShieldQuarter className="text-5xl text-white relative" />,
            title: "AWS Infrastructure & Architecture Design",
            description:
                "Build a strong, scalable foundation with custom AWS architecture. Our team designs and deploys cloud infrastructure that fits your workload, performance, and security requirements.",
        },
        {
            icon: <BiUserVoice className="text-5xl text-white relative" />,
            title: "AWS DevOps and Automation",
            description:
                "Accelerate development and deployment with AWS DevOps tools. We help you build and manage CI/CD pipelines, automate infrastructure, and adopt a DevOps culture for faster delivery.",
        },
        {
            icon: <BiGroup className="text-5xl text-white relative" />,
            title: "AWS Data and Analytics Solutions",
            description:
                "Turn data into insights with AWS’s data and analytics tools. We help you build data lakes, enable real-time analytics, and leverage machine learning for data-driven decision-making.",
        },
        {
            icon: <BiCog className="text-5xl text-white relative" />,
            title: "AWS Managed Services",
            description:
                "Stay focused on your business while we manage your AWS environment. Our managed services include 24/7 monitoring, maintenance, and optimization, so your infrastructure is always running at peak performance.",
        },
        {
            icon: <BiCloudDrizzle className="text-5xl text-white relative" />,
            title: "AWS Security and Compliance",
            description:
                "Secure your cloud environment with AWS’s powerful security tools. We help you implement best-in-class security practices to protect your data, applications, and infrastructure.",
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
                title="AWS Cloud Computing"
                links={[
                    { title: "Home", href: "/", icon: BiMinus },
                    { title: "Services", href: "/services", icon: BiMinus },
                    { title: "AWS Cloud Computing", href: "/services/aws-cloud-computing", active: true },
                ]}
            />

            <div className=" text-black md:py-[30px] py-[50px] md:px-0 px-[20px]">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-2">
                        <div>
                            <h1 className="text-3xl text-secondary-dark leading-[40px]">
                                AWS Cloud Computing Services{" "}
                                <span className="font-extrabold">
                                    Scalable, Secure, and Transformative
                                </span>
                            </h1>

                            <p className="md:text-xl font-medium py-5 leading-8">
                                {`At Aavya LabTech, we empower businesses to harness the full potential of Amazon Web Services (AWS) for cloud computing. Our team of AWS-certified experts works closely with you to design, implement, and manage cloud solutions that drive efficiency, flexibility, and growth. Whether you're migrating existing systems, developing new applications, or optimizing your cloud infrastructure, we are here to help you succeed`}
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
                                <span className="title">Our AWS Cloud Computing Services</span>{" "}
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
                                    Certified AWS Experts
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8 ">
                                Our team holds AWS certifications and stays updated with the latest AWS advancements and best practices.
                            </p>
                        </div>
                        <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
                            <div className="flex mb-2">
                                <span className="relative mb-2">
                                    <BiCustomize className="text-5xl md:mb-0 text-black relative" />
                                </span>
                                <h3 className="text-2xl font-bold  md:pl-3 md:mt-2 text-secondary-dark  ">
                                    Custom Solutions
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8 ">
                                We build cloud solutions that are aligned with your unique business goals.
                            </p>
                        </div>
                        <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
                            <div className="flex mb-2">
                                <span className="relative mb-2">
                                    <BiSolidUserCheck className="text-5xl md:mb-0 text-black relative" />
                                </span>
                                <h3 className="text-2xl font-bold  md:pl-3 md:mt-2 text-secondary-dark  ">
                                    Proven Success
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8">
                                With a portfolio of successful AWS implementations, we deliver solutions that drive measurable results for our clients.
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
                            Ready to Transform Your Business with AWS?
                        </h1>
                        <p className="md:text-xl font-medium py-2 leading-8 ">
                            Let Aavya LabTech guide your journey to the cloud with AWS. <Link href={"/contact-us"} className="text-blue-600">Contact us</Link> today to discuss how AWS Cloud Computing can revolutionize your business, improve agility, and enhance productivity.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AWSCloudComputing;