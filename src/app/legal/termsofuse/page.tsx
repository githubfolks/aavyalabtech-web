import React from "react";
import BannerImage from "../../../../public/images/home-baner.jpg"

import { BiMinus } from "react-icons/bi";
import Breadcrumb from "@/components/common/beardcrumb";
import { BsEnvelope, BsTelephone } from "react-icons/bs";
import Link from "next/link";


function Policy() {
    return (
        <>
            <Breadcrumb
                title="Terms of Use"
                links={[
                    { title: "Home", href: "/", icon: BiMinus },
                    { title: "Terms of Use", href: "/termsofuse" },
                ]}
                image={BannerImage}
            />

            <div className="bg-white text-black  md:py-[10px] py-[10px] md:px-0 px-[20px]">
                <div className="container">
                    <div className="md:mb-[2%] mb-4">
                        <div className="text-secondary-lighter text-base font-medium py-2 leading-8 ">
                            <p>
                                THESE TERMS AND CONDITIONS (THE "TERMS") ARE A LEGAL CONTRACT BETWEEN YOU AND THE COMPANY. THE TERMS EXPLAIN HOW YOU ARE PERMITTED TO USE THE WEBSITE LOCATED AT THE URL: WWW.AAVYALABTECH.COM (THE "SITE"). BY USING THE SITE, YOU ARE AGREEING TO ALL THE TERMS; IF YOU DO NOT AGREE WITH ANY OF THESE TERMS, DO NOT ACCESS OR OTHERWISE USE THE SITE OR ANY INFORMATION CONTAINED ON THE SITE.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Changes
                            </h1>

                            <p>
                                The Company may make changes to the content offered on the Site at any time. The Company can change, update, or add or remove provisions of these Terms, at any time by posting the updated Terms. By using this Site after the Company has updated the Terms, you are agreeing to all the updated Terms; if you do not agree with any of the updated Terms, you must stop using the Site.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                General Use
                            </h1>
                            <p>
                                By using this Site, you represent, acknowledge and agree that you are at least 18 years of age, or if you are under 18 years of age but are at least 13 years old (a "Minor"), that you are using the Site with the consent of your parent or legal guardian and that you have received your parent's or legal guardian's permission to use the Site and agree to its Terms. If you are a parent or legal guardian of a Minor, you hereby agree to bind the Minor to these Terms and to fully indemnify and hold harmless the Company if the Minor breaches any of these Terms. If you are not at least 13 years old, you may not use the Site at any time or in any manner or submit any information to the Company or the Site.
                            </p>
                            <p>
                                The Company provides content through the Site that is copyrighted and/or trademarked work of the Company or the Company's third-party licensors and suppliers or other users of the Site (collectively, the "Materials"). Materials may include logos, graphics, video, images, software and other content.
                            </p>
                            <p>
                                Subject to the terms and conditions of these Terms, and your compliance with these Terms, the Company hereby grants you a limited, personal, non-exclusive and non-transferable license to use and to display the Materials and to use this Site solely for your personal use. Except for the foregoing license, you have no other rights in the Site or any Materials and you may not modify, edit, copy, reproduce, create derivative works of, reverse engineer, alter, enhance or in any way exploit any of the Site or Materials in any manner.
                            </p>
                            <p>
                                If you breach any of these Terms, the above license will terminate automatically and you must immediately destroy any downloaded or printed Materials.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Using the Site
                            </h1>
                            <p>
                                You need not register with the Company to simply visit and view the Site. However, in order to obtain our services, you must register with the Company for an account and receive a password. Additionally, your use of our services will be subject to additional terms and you must agree to those terms in order to receive the services.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Privacy Policy
                            </h1>
                            <p>
                                Please review our Privacy Policy (the "Privacy Policy") which explains how we use information that you submit to the Company.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Proprietary Rights
                            </h1>
                            <p>
                                The Company is a trademark of the Company in the United States. Other trademarks, names and logos on this Site are the property of their respective owners. Unless otherwise specified in these Terms, all information and screens appearing on this Site, including documents, services, site design, text, graphics, logos, images and icons, as well as the arrangement thereof, are the sole property of the Company, Copyright © 2025 Aavya Aavya LabTech Inc. All rights not expressly granted herein are reserved. Except as otherwise required or limited by applicable law, any reproduction, distribution, modification, retransmission, or publication of any copyrighted material is strictly prohibited without the express written consent of the copyright owner or license.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Disclaimer of Warranties
                            </h1>
                            <p>
                                Your use of this Site is at your own risk. The Materials have not been verified or authenticated in whole or in part by the Company, and they may include inaccuracies or typographical or other errors. The Company does not warrant the accuracy of timeliness of the Materials contained on this Site. The Company has no liability for any errors or omissions in the Materials, whether provided by the Company, our licensors or suppliers or other users.
                            </p>
                            <p>
                                THE COMPANY, FOR ITSELF AND ITS LICENSORS, MAKES NO EXPRESS, IMPLIED OR STATUTORY REPRESENTATIONS, WARRANTIES, OR GUARANTEES IN CONNECTION WITH THIS SITE OR ANY MATERIALS RELATING TO THE QUALITY, SUITABILITY, TRUTH, ACCURACY OR COMPLETENESS OF ANY INFORMATION OR MATERIAL CONTAINED OR PRESENTED ON THIS SITE, INCLUDING WITHOUT LIMITATION THE MATERIALS. UNLESS OTHERWISE EXPLICITLY STATED, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THIS SITE AND MATERIALS AND ANY INFORMATION OR MATERIAL CONTAINED OR PRESENTED ON THIS SITE IS PROVIDED TO YOU ON AN "AS IS," "AS AVAILABLE" AND "WHERE-IS" BASIS WITH NO WARRANTY OF IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT OF THIRD-PARTY RIGHTS. THE COMPANY DOES NOT PROVIDE ANY WARRANTIES AGAINST VIRUSES, SPYWARE OR MALWARE THAT MAY BE INSTALLED ON YOUR COMPUTER.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Limitation of Liability
                            </h1>
                            <p>
                                THE COMPANY SHALL NOT BE LIABLE TO YOU FOR ANY DAMAGES RESULTING FROM YOUR DISPLAYING, COPYING, OR DOWNLOADING ANY MATERIALS TO OR FROM THIS SITE. IN NO EVENT SHALL THE COMPANY BE LIABLE TO YOU FOR ANY INDIRECT, EXTRAORDINARY, EXEMPLARY, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES (INCLUDING LOSS OF DATA, REVENUE, PROFITS, USE OR OTHER ECONOMIC ADVANTAGE) HOWEVER ARISING, EVEN IF THE COMPANY KNOWS THERE IS A POSSIBILITY OF SUCH DAMAGE. THE COMPANY'S AGGREGATE LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS SHALL BE LIMITED TO THE SUM OF $250.00.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Local Laws; Export Control
                            </h1>
                            <p>
                                The Company controls and operates this Site from its headquarters in the United States of America and the Materials may not be appropriate or available for use in other locations. If you use this Site outside the United States of America, you are responsible for following applicable local laws. Feedback.
                            </p>
                            <p>
                                If you send or transmit any communications, comments, questions, suggestions, or related materials to the Company, whether by letter, email, telephone, or otherwise (collectively, "Feedback"), suggesting or recommending changes to the Site or Materials, including, without limitation, new features or functionality relating thereto, all such Feedback is, and will be treated as, non-confidential and non-proprietary. You hereby assign all right, title, and interest in, and the Company is free to use, without any attribution or compensation to you, any ideas, know-how, concepts, techniques, or other intellectual property and proprietary rights contained in the Feedback, whether or not patentable, for any purpose whatsoever, including but not limited to, developing, manufacturing, having manufactured, licensing, marketing, and selling, directly or indirectly, products and services using such Feedback. You understand and agree that the Company is not obligated to use, display, reproduce, or distribute any such ideas, know-how, concepts, or techniques contained in the Feedback, and you have no right to compel such use, display, reproduction, or distribution.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                General
                            </h1>
                            <p>
                                The Company prefers to advise you if we feel you are not complying with these Terms and to recommend any necessary corrective action. However, certain violations of these Terms, as determined by the Company, may result in immediate termination of your access to this Site without prior notice to you. California state law and applicable U.S. federal law, without regard to the choice or conflicts of law provisions, will govern these Terms. Foreign laws do not apply. The United Nations on Contracts for the International Sale of Goods and any laws based on the Uniform Computer Information Transactions Act (UCITA) shall not apply to this Agreement. Any disputes relating to these Terms or this Site will be heard in the courts located in San Francisco, California. If any of these Terms is found to be inconsistent with applicable law, then such term shall be interpreted to reflect the intentions of the parties, and no other terms will be modified. The Company's failure to enforce any of these Terms is not a waiver of such term. These Terms are the entire agreement between you and the Company and supersede all prior or contemporaneous negotiations, discussions or agreements between you and the Company about this Site. The proprietary rights, disclaimer of warranties, representations made by you, indemnities, limitations of liability and general provisions shall survive any termination of these Terms.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Contact Us
                            </h1>
                            <p>
                                If you have any questions about these Terms or otherwise need to contact the Company for any reason, you can reach us at hello@aavyalabtech.com.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Policy;
