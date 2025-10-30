"use client"
import Breadcrumb from "@/components/common/beardcrumb";
import Image from "next/image";
import { BiMinus } from "react-icons/bi";
import Service2Image from "../../../public/images/products/maitil-ai.png";
import MaitilAILogo from "../../../public/images/products/maitil.ai-transparent.png";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const MaitilAI = () => {
    const [description, setDescription] = useState('');

    useEffect(() => {
        document.title = 'Aavya Aavya LabTech: ';
        const description = "Aavya Labs helps enterprises harness the power of Generative AI to create intelligent automation, content generation, and predictive solutions using LLMs, NLP, and custom-trained AI models. We deliver ethical, secure, and scalable AI solutions for real business impact.";

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

    const jsonLdData =
    {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Generative AI Development Services",
        "url": "https://aavyalabtech.com/services/generative-ai/",
        "image": "/images/products/maitil-ai.png",
        "description": "Aavya Labs helps enterprises harness the power of Generative AI to create intelligent automation, content generation, and predictive solutions using LLMs, NLP, and custom-trained AI models. We deliver ethical, secure, and scalable AI solutions for real business impact.",
        "provider": {
            "@type": "Organization",
            "name": "Aavya Aavya LabTech",
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
        "serviceType": "Enterprise Generative AI Development",
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://aavyalabtech.com/contact-us/",
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

    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(jsonLdData)}
                </script>
            </Helmet>
            <Breadcrumb
                title="Maitil AI"
                links={[
                    { title: "Home", href: "/", icon: BiMinus },
                    { title: "Products", href: "#", icon: BiMinus },
                    { title: "Maitil AI", href: "/products/maitil-ai", active: true },
                ]}
            />

            <div className=" text-black md:py-[30px] py-[50px] md:px-0 px-[20px]">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-2">
                        <div>
                            <h1 className="text-3xl text-secondary-dark leading-[40px]">
                                Empowering the Future with
                                {" "}
                                <span className="font-extrabold">
                                    maitil.ai
                                </span>
                            </h1>

                            <p className="md:text-xl font-medium py-5 leading-8">
                                {`We empower MSMEs with our Maitil.AI platform, offering tailored AI solutions that simplify complex operations and deliver actionable insights, including intelligent automation, predictive analytics, and personalized customer experiences, to drive sustainable growth.`}
                            </p>
                        </div>

                        <div className="flex items-center justify-center">
                            <Image
                                src={Service2Image}
                                alt="Platform Services"
                                width={200}
                                className="object-cover"
                            />
                            <Image
                                src={MaitilAILogo}
                                alt="Platform Services"
                                width={220}
                                className="items-center justify-center mt-4"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-200 text-black md:py-[80px] py-[0px] md:px-0 px-[20px]">
                <div className="container">
                    <p className="md:text-xl font-medium py-5 leading-8">
                        {`We help businesses pinpoint where AI can make a real difference. We look for those key challenges or hidden opportunities within their industry that AI can solve, whether it's predicting future trends, understanding customer language, using visual data, or automating physical tasks.`}
                    </p>
                </div>
            </div>

        </>
    );

}

export default MaitilAI;