"use client"
import Breadcrumb from "@/components/common/beardcrumb";
import Image from "next/image";
import { BiMinus } from "react-icons/bi";
import iotsolution from "../../../public/images/products/iot-solution.jpg";
import mpmsystem1 from "../../../public/images/products/mpm-systems-1.png";
import mpmsystem2 from "../../../public/images/products/mpm-systems-2.png";
import mpmsystem3 from "../../../public/images/products/mpm-systems-3.png";
import { useEffect } from "react";

const usePageMeta = (title: any, description: any) => {
  const defaultTitle = "Aavya Aavya LabTech";
  const defaultDesc = "AWS Cloud Computing, Microsoft Azure Development, Enterprise Software Development, Generative AI, IoT Solutions, Custom software development, Enterprise IT solutions provider, AWS managed services provider, Azure cloud migration experts, ERP and CRM development services, Generative AI app development, AI-powered business tools, Custom AI chatbot solutions, GenAI integration services, IoT device integration services, Smart device applications";
  useEffect(() => {
    document.title = title || defaultTitle;
    document?.querySelector("meta[name='description']")?.setAttribute("content", description || defaultDesc);
  }, [defaultTitle, title, defaultDesc, description]);
};

const MPMSystems = () => {
    usePageMeta("Aavya Aavya LabTech: IoT Solutions", null);
    return (
        <>
            <Breadcrumb
                title="MPM Systems"
                links={[
                    { title: "Home", href: "/", icon: BiMinus },
                    { title: "Products", href: "#", icon: BiMinus },
                    { title: "MPM Systems", href: "/products/mpm-systems", active: true },
                ]}
            />

            <div className=" text-black md:py-[30px] py-[50px] md:px-0 px-[20px]">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-2">
                        <div>
                            <h1 className="text-3xl text-secondary-dark leading-[40px]">
                                Machines Performance Systems
                                {" "}
                                <span className="font-extrabold">
                                    For Whom Productivity Matters
                                </span>
                            </h1>

                            <p className="md:text-xl font-medium py-5 leading-8">
                                {`An initiative to begin in Industry 4.0 revolution as to allow floors' machines/Lines to speak dicrectly with all stakeholders about all irregularities & performance status wherever they are, on mobiles with secured logins.`}
                            </p>
                            <p className="md:text-xl font-medium py-2 leading-8">
                                {`Big next thing after internet, is Internet of Things (IoT)... to let the local data reach on cloud to compare with schedules and let the processed Information be populated on-the-go on mobiles.`}
                            </p>
                        </div>
                        <div className="flex items-center flex-wrap justify-center">
                            <div className="rounded-md drop-shadow-md">
                                <Image
                                    src={iotsolution}
                                    alt="MPM Systems"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-200 text-black md:py-[30px] py-[0px] md:px-0 px-[20px]">
                <div className="container">
                    <p className="md:text-xl font-medium py-2 leading-8">
                        Industry 4.0 or whichever the title you prefer, but currently it is extremely typical for manufacturing sector.
                        It's a change in technology and an emergence of operational technologies and informational technologies meeting.
                    </p>
                    <p className="md:text-xl font-medium py-2 leading-8">
                        To summarize, it's the process whereby our digital world and physical world are meeting.
                        Conventional Factories to Smart Factories where lines itself speak what & how much to produce.
                    </p>
                </div>
            </div>

            <div className="container mt-10 mb-10">

                <h1 className="md:text-3xl text-lg mb-6 text-primary-main font-bold text-center relative">
                    Get ready to hear <span className="font-extrabold">DIRECT</span> from the <span className="font-extrabold">MOUTH</span> of Machines
                </h1>

                <div className="grid md:grid-cols-3 gap-2 h-screen/2 justify-center items-center mt-10">
                    <div className="m-auto">
                        <Image
                            src={mpmsystem1}
                            alt="MPM Systems"
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="m-auto">
                        <Image
                            src={mpmsystem2}
                            alt="MPM Systems"
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="m-auto">
                        <Image
                            src={mpmsystem3}
                            alt="MPM Systems"
                            className="object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>

            <div className="about-card md:px-0 px-[20px] bg-work-gradient">
                <div className="container">
                    <div className="grid lg:grid-cols-2">
                        <div className="py-[20px]">
                            <ul>
                                <li>
                                    <div className="flex mb-2 text-white">
                                        <p className="md:text-xl font-semibold md:pl-3 md:mt-0">
                                            A uniform open fact, big efforts are needed to improve production just 2% but with industry 4.0 basic understanding.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex mb-2 text-white">
                                        <p className="md:text-xl font-semibold md:pl-3 md:mt-0">
                                            Increase productivity up to 40% faster & 25% cheaper and / or reduce operational hours up to 30% to achieve the same target.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex mb-2 text-white">
                                        <p className="md:text-xl font-semibold md:pl-3 md:mt-0">
                                            Live fresh productivity TRENDS from histories.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex mb-2 text-white">
                                        <p className="md:text-xl font-semibold md:pl-3 md:mt-0">
                                            Improve lacunae like IDLE running, DOWN times, Line start DELAYS…and many more.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex mb-2 text-white">
                                        <p className="md:text-xl font-semibold md:pl-3 md:mt-0">
                                            LIVE variance analysis on BUDGETED Versus ACTUAL Time & Quantities to Improve overall performance efficiencies.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}

export default MPMSystems;