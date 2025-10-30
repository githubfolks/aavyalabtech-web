/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect } from "react";
import Service2Image from "../../../../public/images/services/azure-development.jpg";
import Breadcrumb from "@/components/common/beardcrumb";
import Image from "next/image";

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
 

const AzureCloudDevelopment = () => {
   
    const cardData = [
        {
            icon: <BiServer className="text-5xl text-white relative" />,
            title: "Azure Application Development",
            description:
                "Build custom cloud-native applications that scale with your business. From ideation to deployment, we create robust solutions that leverage Azure’s extensive tools, ensuring optimal performance, reliability, and security.",
        },
        {
            icon: <BiShieldQuarter className="text-5xl text-white relative" />,
            title: "Azure Migration Services",
            description:
                "Seamlessly transition to the cloud with our Azure migration services. We help you move your on-premises systems, applications, and data to Azure with minimal downtime and maximum efficiency.",
        },
        {
            icon: <BiUserVoice className="text-5xl text-white relative" />,
            title: "Azure DevOps & Automation",
            description:
                "Streamline your development processes with Azure DevOps. Our DevOps solutions help your team work more efficiently, automate workflows, and bring products to market faster.",
        },
        {
            icon: <BiGroup className="text-5xl text-white relative" />,
            title: "Azure Data Solutions",
            description:
                "Harness the power of your data with Azure’s suite of analytics and AI tools. From data storage to advanced analytics, we help you turn data into insights that drive growth and innovation.",
        },
        {
            icon: <BiCog className="text-5xl text-white relative" />,
            title: "Azure Managed Services",
            description:
                "Focus on your core business while we manage and optimize your Azure environment. Our managed services provide 24/7 support, monitoring, and performance optimization to keep your cloud infrastructure running smoothly.",
        },
        {
            icon: <BiCloudDrizzle className="text-5xl text-white relative" />,
            title: "Azure Security Solutions",
            description:
                "Protect your business with Azure’s built-in security features. We help secure your applications, data, and infrastructure with Azure’s powerful security tools and compliance capabilities.",
        },
    ];
    return (
        <>
            <Breadcrumb
                title="Azure Development"
                links={[
                    { title: "Home", href: "/", icon: BiMinus },
                    { title: "Services", href: "/services", icon: BiMinus },
                    { title: "Azure Development", href: "/services/azure-development", active: true },
                ]}
            />

            <div className=" text-black md:py-[30px] py-[50px] md:px-0 px-[20px]">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-2">
                        <div>
                            <h1 className="text-3xl text-secondary-dark leading-[40px]">
                                Azure Development Services{" "}
                                <span className="font-extrabold">
                                    Build, Scale, and Transform with the Power of Microsoft Azure
                                </span>
                            </h1>

                            <p className="md:text-xl font-medium py-5 leading-8">
                                {`At Aavya LabTech, we specialize in Microsoft Azure development, helping businesses leverage the full potential of the cloud. Our certified Azure experts design, develop, and deploy solutions that are scalable, secure, and tailored to meet your unique business needs. Whether you're looking to migrate, develop new applications, or manage complex workloads, we’re here to guide you through every step of your Azure journey`}
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
                                <span className="title">Our Azure Services</span>{" "}
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
                                    Certified Azure Experts
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8 ">
                                Our team is fully certified in Azure, ensuring you receive the highest level of expertise.
                            </p>
                        </div>
                        <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
                            <div className="flex mb-2">
                                <span className="relative mb-2">
                                    <BiCustomize className="text-5xl md:mb-0 text-black relative" />
                                </span>
                                <h3 className="text-2xl font-bold  md:pl-3 md:mt-2 text-secondary-dark  ">
                                    Tailored Solutions
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8 ">
                                We build solutions around your specific business needs, maximizing the value of your Azure investment.
                            </p>
                        </div>
                        <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
                            <div className="flex mb-2">
                                <span className="relative mb-2">
                                    <BiSolidUserCheck className="text-5xl md:mb-0 text-black relative" />
                                </span>
                                <h3 className="text-2xl font-bold  md:pl-3 md:mt-2 text-secondary-dark  ">
                                    Proven Results
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8">
                                With a portfolio of successful projects, we deliver results that drive your business forward.
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
                            Get Started with Azure Today
                        </h1>
                        <p className="md:text-xl font-medium py-2 leading-8 ">
                            Discover how Azure can transform your business with scalable, secure, and high-performance cloud solutions. Contact Aavya LabTech today for a free consultation, and let’s start building your future in the cloud.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AzureCloudDevelopment;