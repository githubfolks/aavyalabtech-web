/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect, useState } from "react";
import Service2Image from "../../../../public/images/services/generative-ai.jpg";
import Breadcrumb from "@/components/common/beardcrumb";
import Image from "next/image";
import { MdPrecisionManufacturing } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { TbHealthRecognition } from "react-icons/tb";
import { SiWikimediafoundation } from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";
import {
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
import Link from "next/link";

const GenerativeAI = () => {

    const [description, setDescription] = useState('');

    useEffect(() => {
        document.title = 'Aavya LabTech: Generative AI';
        const description = "Aavya LabTech helps enterprises harness the power of Generative AI to create intelligent automation, content generation, and predictive solutions using LLMs, NLP, and custom-trained AI models. We deliver ethical, secure, and scalable AI solutions for real business impact.";

        const keyWords = "Custom LLM Development, AI-Powered Chatbots & Assistants, Content Generation & Summarization Tools, Enterprise Data Fine-Tuning for AI Models";

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
        "name": "Generative AI Development Services",
        "url": "https://Aavya LabTech.com/services/generative-ai/",
        "image": "/images/services/generative-ai-services.jpg",
        "description": "Aavya Labs helps enterprises harness the power of Generative AI to create intelligent automation, content generation, and predictive solutions using LLMs, NLP, and custom-trained AI models. We deliver ethical, secure, and scalable AI solutions for real business impact.",
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
        "serviceType": "Enterprise Generative AI Development",
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://Aavya LabTech.com/contact",
            "availableLanguage": ["English"]
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Generative AI Capabilities",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Custom LLM Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "AI-Powered Chatbots & Assistants"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Content Generation & Summarization Tools"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Enterprise Data Fine-Tuning for AI Models"
                    }
                }
            ]
        }
    };

    const cardData = [
        {
            icon: <BiServer className="text-5xl text-white relative" />,
            title: "Text Generation",
            description: (
                <>
                    <ul className="list-outside list-disc mt-3 ml-4 leading-8 md:text">
                        <li className="text-secondary-light">
                            AI-driven content creation for blogs, articles, product descriptions, and more.
                        </li>
                        <li className="text-secondary-light">
                            Real-time conversational agents and chatbots.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            icon: <BiShieldQuarter className="text-5xl text-white relative" />,
            title: "Image and Video Generation",
            description: (
                <>
                    <ul className="list-outside list-disc mt-3 ml-4 leading-8 md:text">
                        <li className="text-secondary-light">
                            High-quality AI-generated images and graphics.
                        </li>
                        <li className="text-secondary-light">
                            Automated video creation and editing using deep learning models.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            icon: <BiUserVoice className="text-5xl text-white relative" />,
            title: "Natural Language Processing (NLP)",
            description: (
                <>
                    <ul className="list-outside list-disc mt-3 ml-4 leading-8 md:text">
                        <li className="text-secondary-light">
                            Language translation, sentiment analysis, and text summarization.
                        </li>
                        <li className="text-secondary-light">
                            Intelligent search and context-aware document retrieval.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            icon: <BiGroup className="text-5xl text-white relative" />,
            title: "AI-Powered Automation",
            description: (
                <>
                    <ul className="list-outside list-disc mt-3 ml-4 leading-8 md:text">
                        <li className="text-secondary-light">
                            Automate business processes using AI-driven decision-making.
                        </li>
                        <li className="text-secondary-light">
                            Real-time anomaly detection and predictive analysis.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            icon: <BiCog className="text-5xl text-white relative" />,
            title: "Custom Model Development",
            description: (
                <>
                    <ul className="list-outside list-disc mt-3 ml-4 leading-8 md:text">
                        <li className="text-secondary-light">
                            Fine-tuned AI models specific to your business requirements.
                        </li>
                        <li className="text-secondary-light">
                            Integration with existing platforms and infrastructure.
                        </li>
                    </ul>
                </>
            ),
        },
    ];

    const industriesData = [
        {
            icon: <MdPrecisionManufacturing className="text-5xl text-white relative" />,
            title: "Manufacturing",
            description: (
                <>
                    <ul className="list-outside list-disc mt-3 ml-4 leading-8 md:text">
                        <li className="text-secondary-light">
                            AI-driven predictive maintenance and automated production insights.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            icon: <MdAttachMoney className="text-5xl text-white relative" />,
            title: "Finance",
            description: (
                <>
                    <ul className="list-outside list-disc mt-3 ml-4 leading-8 md:text">
                        <li className="text-secondary-light">
                            Fraud detection, risk assessment, and financial forecasting.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            icon: <FaCartArrowDown className="text-5xl text-white relative" />,
            title: "E-Commerce",
            description: (
                <>
                    <ul className="list-outside list-disc mt-3 ml-4 leading-8 md:text">
                        <li className="text-secondary-light">
                            Personalized product recommendations and dynamic pricing strategies.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            icon: <TbHealthRecognition className="text-5xl text-white relative" />,
            title: "Healthcare",
            description: (
                <>
                    <ul className="list-outside list-disc mt-3 ml-4 leading-8 md:text">
                        <li className="text-secondary-light">
                            AI-assisted diagnostics, patient data analysis, and drug discovery.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            icon: <SiWikimediafoundation className="text-5xl text-white relative" />,
            title: "Media & Entertainment",
            description: (
                <>
                    <ul className="list-outside list-disc mt-3 ml-4 leading-8 md:text">
                        <li className="text-secondary-light">
                            AI-generated content, video editing, and personalized recommendations.
                        </li>
                    </ul>
                </>
            ),
        },
    ];

    return (
        <>
            <Breadcrumb
                title="Generative AI"
                links={[
                    { title: "Home", href: "/", icon: BiMinus },
                    { title: "Services", href: "/services", icon: BiMinus },
                    { title: "Generative AI", href: "/services/generative-ai", active: true },
                ]}
            />

            <div className=" text-black md:py-[30px] py-[50px] md:px-0 px-[20px]">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-2">
                        <div>
                            <h1 className="text-3xl text-secondary-dark leading-[40px]">
                                Generative AI Solutions
                                {" "}
                                <span className="font-extrabold">
                                    Unlock the Power of AI-Driven Innovation
                                </span>
                            </h1>

                            <p className="md:text-xl font-medium py-5 leading-8">
                                {`At Aavya LabTech, we specialize in delivering cutting-edge Generative AI solutions that empower businesses to automate processes, create innovative content, and make data-driven decisions with unparalleled accuracy. Our AI-driven models are designed to enhance creativity, improve efficiency, and unlock new business opportunities.`}
                            </p>
                            <p className="md:text-xl font-medium py-2 leading-8">
                                {`For more details on GenAI platform, please`}
                                <Link href={"/maitil-ai"} className="text-blue-600"> click here</Link>
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
                                <span className="title">Our Generative AI Capabilities
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
                                    {card.description}
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
                                    Proven Expertise
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8 ">
                                Our team of AI specialists has extensive experience in deploying and fine-tuning generative models across industries.
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
                                We customize AI models to align with your business goals and operational needs.
                            </p>
                        </div>
                        <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
                            <div className="flex mb-2">
                                <span className="relative mb-2">
                                    <BiSolidUserCheck className="text-5xl md:mb-0 text-black relative" />
                                </span>
                                <h3 className="text-2xl font-bold  md:pl-3 md:mt-2 text-secondary-dark  ">
                                    Seamless Integration
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8">
                                Our AI solutions integrate smoothly with your existing systems, ensuring minimal disruption.
                            </p>
                        </div>
                        <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
                            <div className="flex mb-2">
                                <span className="relative mb-2">
                                    <BiVector className="text-5xl md:mb-0 text-black relative" />
                                </span>
                                <h3 className="text-2xl font-bold md:pl-3 md:mt-2 text-secondary-dark  ">
                                    Scalable Performance
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8">
                                Our models are designed to scale with your business, handling increasing workloads with ease.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-200 text-black md:py-[80px] py-[0px] md:px-0 px-[20px]">
                <div className="container">
                    <div className="container">
                        <div className="md:mb-[5%] mb-10">
                            <h3 className="mt-4 md:text-2xl text-lg  text-primary-main font-bold text-center relative leading-loose ">
                                <span className="title">Industries We Serve
                                </span>{" "}
                            </h3>
                        </div>

                        <div className="lg:grid md:grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                            {industriesData.map((card, index) => (
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
                                    {card.description}
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
                            How It Works ?
                        </h3>
                    </div>
                    <div className="md:grid md:grid-cols-3 lg:grid mb-8 lg:grid-cols-3 gap-4">
                        <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
                            <div className="flex mb-2">
                                <span className="relative mb-2">
                                    <BiServer className="text-5xl md:mb-0 text-black relative" />
                                </span>
                                <h3 className="text-2xl font-bold  md:pl-3 md:mt-2 text-secondary-dark  ">
                                    Consultation
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8 ">
                                We assess your business needs and identify opportunities for AI integration.
                            </p>
                        </div>
                        <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
                            <div className="flex mb-2">
                                <span className="relative mb-2">
                                    <BiCustomize className="text-5xl md:mb-0 text-black relative" />
                                </span>
                                <h3 className="text-2xl font-bold  md:pl-3 md:mt-2 text-secondary-dark  ">
                                    Model Development
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8 ">
                                Our AI experts design and train a custom model tailored to your requirements.
                            </p>
                        </div>
                        <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
                            <div className="flex mb-2">
                                <span className="relative mb-2">
                                    <BiSolidUserCheck className="text-5xl md:mb-0 text-black relative" />
                                </span>
                                <h3 className="text-2xl font-bold  md:pl-3 md:mt-2 text-secondary-dark  ">
                                    Testing & Optimization
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8">
                                We rigorously test and refine the model to maximize accuracy and performance.
                            </p>
                        </div>
                        <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
                            <div className="flex mb-2">
                                <span className="relative mb-2">
                                    <BiVector className="text-5xl md:mb-0 text-black relative" />
                                </span>
                                <h3 className="text-2xl font-bold md:pl-3 md:mt-2 text-secondary-dark  ">
                                    Deployment
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8">
                                We integrate the AI solution with your existing infrastructure.
                            </p>
                        </div>
                        <div className="shadow-xl rounded-lg md:p-2 md:mb-0 mb-0 border border-gray-300 bg-white p-5">
                            <div className="flex mb-2">
                                <span className="relative mb-2">
                                    <MdSupportAgent className="text-5xl md:mb-0 text-black relative" />
                                </span>
                                <h3 className="text-2xl font-bold md:pl-3 md:mt-2 text-secondary-dark  ">
                                    Ongoing Support
                                </h3>
                            </div>
                            <p className="md:text-xl font-medium py-2 leading-8">
                                We provide continuous monitoring, updates, and support to ensure long-term success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-primary-main text-white md:py-[40px] py-[50px] md:px-20 px-[20px]">
                <div className="container">
                    <div>
                        <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-0 font-bold">
                            Get Started with Generative AI
                        </h1>
                        <p className="md:text-xl font-medium py-2 leading-8 ">
                            Discover how Generative AI can transform your business.
                        </p>
                        <p className="md:text-xl font-medium py-2 leading-8">
                            <Link href={"/contact-us"} className="text-blue-600">Contact us</Link> today to schedule a consultation and explore the future of AI-driven innovation.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GenerativeAI;