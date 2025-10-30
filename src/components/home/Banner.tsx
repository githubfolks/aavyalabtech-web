"use client";
import React, { useRef } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PeopleImg from "../../../public/images/home/people.png";
import { useGSAP } from "@gsap/react";
import { FaArrowDown } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const HomeBaner: React.FC = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut", duration: 0.4 },
      });

      tl.from("h1", {
        y: -40,
        opacity: 0,
      })
        .from("p", {
          x: -40,
          opacity: 0,
          stagger: 0.5,
        })
        .from(btnRef?.current, {
          x: -40,
          opacity: 0,
          stagger: 0.5,
        });

      gsap.from(imageRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 2,
        ease: "back.out(1.7)", // Spring-like bounce effect on image
      });

      gsap.to(containerRef.current, {
        scale: 0.9,
        opacity: 0,
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top 0%",
          end: "bottom 15%",
          scrub: 1,
          markers: false,
          pin: true,
          onEnter: () =>
            gsap.to(containerRef.current, { scale: 1, ease: "bounce.out" }), // Spring effect on entry
          onLeave: () =>
            gsap.to(containerRef.current, { scale: 1, ease: "bounce.out" }), // Spring effect on leave
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      className="h-screen max-w-screen home_banner flex flex-col md:flex-row items-center justify-between px-4 home pt-24 md:pt-0"
      ref={pageRef}
    >
      <div
        ref={containerRef}
        className="container flex flex-col md:flex-row items-center justify-center md:justify-start gap-5 md:gap-8"
      >
        <div
          className="text-primary-main flex flex-col gap-5 md:flex-1"
          ref={textRef}
        >
          <h1
            className="text-4xl  2xl:text-6xl  mb-4 font-extrabold text-center md:text-left tracking-normal lg:!leading-[1.2]"
            id={"title"}
          >
            Empowering Your Digital Future
          </h1>
          <p className="text-text-main md:text-xl font-semibold mb-6 text-center md:text-left leading-8">
          At Aavya Labs, we build scalable, secure, and high-performance digital solutions tailored to your business needs. Our core expertise includes <span className="font-semibold">Enterprise Software Development</span>, <span className="font-semibold">Cloud Solutions</span>, along with <span className="font-semibold">Empower MSMEs with our Maitil.AI</span> platform. From backend systems to enterprise tools, we help you accelerate digital transformation with modern technology, expert engineering, and agile delivery.
          </p>
        </div>
        <div
          className="p-2 md:flex-1 flex justify-center items-center"
          ref={imageRef}
        >
          <Image
            src={PeopleImg}
            alt="People working together"
            className="h-auto w-full rounded-lg drop-shadow-lg"
            id="img"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBaner;
