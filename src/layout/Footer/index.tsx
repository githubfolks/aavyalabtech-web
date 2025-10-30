import React from "react";
import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagramAlt,
  BiLogoTwitter,
  BiPhone,
} from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="bottom-0 md:block px-[20px] md:px-[0px] bg-wave before:bg-cover before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-[0.03] bg-gray-950/80 lg:pt-[31px] md:pt-[50px] pb-5 relative">
        <div className="container relative">
          <div className="md:grid lg:grid-cols-4 md:grid-cols-2 mt-2">
            <div className="bg-[#1a171709] border rounded-md p-2 mb-8 md:mb-0">
              <p className="text-white font-bold leading-7 py-0">
                Increase efficiency, accelerate business growth with
                aavyalabtech&apos;s agile, reliable, and scalable solutions.
              </p>

              <div className="flex justify-center gap-2 mt-10">
                <Link href="https://x.com/aavyalabtech/" target="_blank">
                  <BiLogoTwitter className="mr-2 text-xl text-white  hover:text-primary-light " />
                </Link>

                <Link href="https://www.facebook.com/aavyalabtech" target="_blank">
                  <BiLogoFacebook className="mr-2 text-xl text-white  hover:text-primary-light " />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/aavyalabtech/"
                  target="_blank"
                >
                  <BiLogoLinkedin className="mr-2 text-xl text-white  hover:text-primary-light " />
                </Link>

                <Link
                  href="https://www.instagram.com/aavyalabtech/"
                  target="_blank"
                >
                  <BiLogoInstagramAlt className="mr-2 text-xl text-white  hover:text-primary-light " />
                </Link>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="grid md:grid-cols-4 grid-cols-4">
                <div className="md:pl-3 mt-0 hidden md:block">
                  <h3 className="text-2xl text-left mb-5 text-white font-bold ">
                    Platforms
                  </h3>
                  <ul>
                    <li className="lg:text-sm md:text-[0.6rem] text-white lg:font-semibold md:font-medium lg:mb-4 md:mb-2">
                      <Link href="/platform/dot-net-development">
                        Microsoft
                      </Link>
                    </li>
                    <li className="lg:text-sm md:text-[0.6rem] text-white lg:font-semibold md:font-medium lg:mb-4 md:mb-2">
                      <Link href="/platform/mobile-app-development">
                        React Native
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="md:pl-3 mt-0 hidden md:block">
                  <h3 className="text-2xl text-left mb-5 text-white font-bold ">
                    Services
                  </h3>
                  <ul>
                    <li className="lg:text-sm md:text-[0.6rem] text-white lg:font-semibold md:font-medium lg:mb-4 md:mb-2">
                      <Link href="/services/aws-cloud-computing">
                        AWS Cloud Computing
                      </Link>
                    </li>

                    <li className="lg:text-sm md:text-[0.6rem] text-white lg:font-semibold md:font-medium lg:mb-4 md:mb-2">
                      <Link href="/services/azure-development">
                        Azure Development
                      </Link>
                    </li>
                    <li className="lg:text-sm md:text-[0.6rem] text-white lg:font-semibold md:font-medium lg:mb-4 md:mb-2">
                      <Link href="/services/enterprise-application-development">
                        Enterprise Application
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="md:pl-3 mt-0 hidden md:block">
                  <h3 className="text-2xl text-left mb-5 text-white font-bold">
                    Company
                  </h3>
                  <ul>
                    <li className="lg:text-sm md:text-[0.6rem] text-white lg:font-semibold md:font-medium lg:mb-4 md:mb-2">
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                    <li className="lg:text-sm md:text-[0.6rem] text-white lg:font-semibold md:font-medium lg:mb-4 md:mb-2">
                      <Link href="/legal/privacy">Privacy Policy</Link>
                    </li>
                    <li className="lg:text-sm md:text-[0.6rem] text-white lg:font-semibold md:font-medium lg:mb-4 md:mb-2">
                      <Link href="/legal/termsofuse">Terms of Use</Link>
                    </li>
                    <li className="lg:text-sm md:text-[0.6rem] text-white lg:font-semibold md:font-medium lg:mb-4 md:mb-2">
                      <Link href="/legal/termsofservice">Terms of Service</Link>
                    </li>
                  </ul>
                </div>
                <div className="lg:pl-3 mt-0 hidden md:block">
                  <h3 className="text-2xl text-left mb-5 text-white font-bold">
                    Office Info
                  </h3>
                  <ul>
                    <li className="flex justify-center align- items-center mb-2">
                      <div className="basis-[10%]">
                        <p className="lg:w-[6%] w-[10%] text-primary-main text-xl">
                          <FaLocationDot />
                        </p>
                      </div>
                      <div className="basis-[90%] font-medium text-secondary-main text-sm text-white">
                        {`D-5, Third Floor, Sector-10, Noida, Uttar Pradesh, 201301, India`}
                      </div>
                    </li>
                    <li className="flex justify-center align- items-center mb-2">
                      <div className="basis-[10%]">
                        <p className="lg:w-[6%] w-[10%] text-primary-main text-xl">
                          <BiPhone />
                        </p>
                      </div>
                    </li>
                    <li className="flex justify-center align- items-center mb-2">
                      <div className="basis-[10%]">
                        <p className="lg:w-[6%] w-[10%] text-primary-main text-xl">
                          <BiPhone />
                        </p>
                      </div>
                      <div className="basis-[100%] text-secondary-main text-sm text-white">
                        <Link href="tel:+919910143234">91-9910-143234</Link> (India)
                      </div>
                    </li>
                    <li className="flex justify-center align- items-center mb-4">
                      <div className="basis-[10%]">
                        <p className="lg:w-[6%] w-[10%] text-primary-main text-xl">
                          <BsEnvelope />
                        </p>
                      </div>
                      <div className="basis-[90%]">
                        <Link
                          href="mailto:hello@aavyalabtech.com"
                          className="font-medium text-secondary-main text-sm text-white"
                        >
                          hello@aavyalabtech.com
                        </Link>
                      </div>
                    </li>
                    <li className="lg:text-sm md:text-[0.6rem] text-white lg:font-semibold md:font-medium lg:mb-4 md:mb-2">
                      <span className=" text-bold  md:text-base"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden md:block">
            <h3 className="text-2xl text-left mb-5 text-white font-bold">
              Office Info
            </h3>
            <ul>
              <li className="flex justify-center align- items-center mb-2">
                <div className="basis-[10%]">
                  <p className="lg:w-[6%] w-[10%] text-primary-main text-xl">
                    <FaLocationDot />
                  </p>
                </div>
                <div className="basis-[90%] font-medium text-secondary-main text-sm text-white">
                  {`D-5, Third Floor, Sector-10, Noida, Uttar Pradesh, 201301, India`}
                </div>
              </li>
              <li className="flex justify-center align- items-center mb-2">
                <div className="basis-[10%]">
                  <p className="lg:w-[6%] w-[10%] text-primary-main text-xl">
                    <BiPhone />
                  </p>
                </div>
              </li>
              <li className="flex justify-center align- items-center mb-2">
                <div className="basis-[10%]">
                  <p className="lg:w-[6%] w-[10%] text-primary-main text-xl">
                    <BiPhone />
                  </p>
                </div>
                <div className="basis-[90%] font-medium text-secondary-main text-sm text-white">
                  <Link href="tel:+919910143234">91-9910-143234</Link> (India)
                </div>
              </li>
              <li className="flex justify-center align- items-center mb-2">
                <div className="basis-[10%]">
                  <p className="lg:w-[6%] w-[10%] text-primary-main text-xl">
                    <BsEnvelope />
                  </p>
                </div>
                <div className="basis-[90%]">
                  <Link
                    href="mailto:hello@aavyalabtech.com"
                    className="font-medium text-secondary-main text-sm text-white"
                  >
                    hello@aavyalabtech.com
                  </Link>
                </div>
              </li>
              <li className="lg:text-sm md:text-[0.6rem] text-white lg:font-semibold md:font-medium lg:mb-4 md:mb-2">
                <span className=" text-bold  md:text-base"></span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="bg-black py-3 border-t ">
        <div className="container">
          <div className="md:grid grid-cols-2 flex flex-col items-center">
            <div className="mb-3 md:mb-0">
              <p className="text-white lg:text-sm md:text-[0.6rem]">
                © Copyright Aavya LabTech {new Date().getFullYear()}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
