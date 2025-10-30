/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect } from "react";
import Service2Image from "../../../../public/images/services/web-api-development.jpg";
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

const usePageMeta = (title: any, description: any) => {
  const defaultTitle = "Aavya LabTech";
  const defaultDesc = "AWS Cloud Computing, Microsoft Azure Development, Enterprise Software Development, Generative AI, IoT Solutions, Custom software development, Enterprise IT solutions provider, AWS managed services provider, Azure cloud migration experts, ERP and CRM development services, Generative AI app development, AI-powered business tools, Custom AI chatbot solutions, GenAI integration services, IoT device integration services, Smart device applications";
  useEffect(() => {
    document.title = title || defaultTitle;
    document?.querySelector("meta[name='description']")?.setAttribute("content", description || defaultDesc);
  }, [defaultTitle, title, defaultDesc, description]);
};

const AdobeManagedServices = () => {
    usePageMeta("Aavya LabTech: API Development", null);
    const cardData = [
        {
            icon: <BiServer className="text-5xl text-white relative" />,
            title: "Custom API Development",
            description:
                "Unlock new functionality and streamline data flow with our custom API development services. Our team designs and builds APIs that enhance your applications' performance and enable smooth communication between platforms.",
        },
        {
            icon: <BiShieldQuarter className="text-5xl text-white relative" />,
            title: "API Integration Services",
            description:
                "Seamlessly connect your applications with third-party services, CRMs, ERPs, payment gateways, and more. Our API integration services enable smooth data synchronization, eliminating data silos and boosting efficiency.",
        },
        {
            icon: <BiUserVoice className="text-5xl text-white relative" />,
            title: "API Testing and Validation",
            description:
                "Ensure the reliability, security, and functionality of your APIs with comprehensive testing and validation services. We rigorously test APIs to provide a seamless, bug-free experience.",
        },
        {
            icon: <BiGroup className="text-5xl text-white relative" />,
            title: "API Security and Compliance",
            description:
                "Safeguard your data and protect your APIs from security threats with our comprehensive API security solutions. Our team implements security best practices to ensure data integrity and regulatory compliance.",
        },
        {
            icon: <BiCog className="text-5xl text-white relative" />,
            title: "API Documentation and Support",
            description:
                "Empower developers and partners with clear, comprehensive API documentation. We provide detailed documentation, code samples, and support to make your APIs easy to understand and use.",
        },
        {
            icon: <BiCloudDrizzle className="text-5xl text-white relative" />,
            title: "API Lifecycle Management",
            description:
                "We manage your API’s full lifecycle, from initial design to deployment and ongoing maintenance. Our API lifecycle management services ensure your APIs remain up-to-date, secure, and high-performing.",
        },
    ];
    return (
        <>
            <Breadcrumb
                title="Web API Development"
                links={[
                    { title: "Home", href: "/", icon: BiMinus },
                    { title: "Services", href: "/services", icon: BiMinus },
                    { title: "Web API Development", href: "/services/web-api-development", active: true },
                ]}
            />

            <div className=" text-black md:py-[30px] py-[50px] md:px-0 px-[20px]">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-2">
                        <div>
                            <h1 className="text-3xl text-secondary-dark leading-[40px]">
                                Web API Development{" "}
                                <span className="font-extrabold">
                                    Connect, Integrate, and Scale with Powerful APIs
                                </span>
                            </h1>

                            <p className="md:text-xl font-medium py-5 leading-8">
                                {`At Aavya LabTech, we specialize in building robust, secure, and scalable APIs that empower your business to integrate seamlessly with various applications, platforms, and third-party services. Our Web API development services are tailored to meet your unique requirements, allowing you to streamline processes, enable data flow, and create connected experiences for users and partners alike.`}
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
                                <span className="title">Our Web API Development Services
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
                                    Experienced API Developers
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8 ">
                                Our team has extensive experience designing and building APIs across multiple platforms and technologies.
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
                                Every API is tailored to your unique needs, ensuring it integrates seamlessly with your existing systems.
                            </p>
                        </div>
                        <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
                            <div className="flex mb-2">
                                <span className="relative mb-2">
                                    <BiSolidUserCheck className="text-5xl md:mb-0 text-black relative" />
                                </span>
                                <h3 className="text-2xl font-bold  md:pl-3 md:mt-2 text-secondary-dark  ">
                                    Security-First Approach
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8">
                                We prioritize security at every step to safeguard your data and maintain compliance with industry standards.
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
                            Connect and Grow with Custom APIs
                        </h1>
                        <p className="md:text-xl font-medium py-2 leading-8 ">
                            Ready to build a connected ecosystem for your business? Let Aavya LabTech help you create powerful, scalable APIs that enable integration, enhance functionality, and drive efficiency. <Link href={"/contact-us"} className="text-blue-600">Contact us</Link> today to learn more about our Web API development services.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdobeManagedServices;