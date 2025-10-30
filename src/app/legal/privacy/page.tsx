import React from "react";
import BannerImage from "../../../../public/images/home-baner.jpg"

import { BiMinus } from "react-icons/bi";
import Breadcrumb from "@/components/common/beardcrumb";
import { BsEnvelope, BsTelephone } from "react-icons/bs";
import Link from "next/link";


function Privacy() {
    return (
        <>
            <Breadcrumb
                title="Privacy Policy"
                links={[
                    { title: "Home", href: "/", icon: BiMinus },
                    { title: "Privacy Policy", href: "/privacy" },
                ]}
                image={BannerImage}
            />

            <div className="bg-white text-black  md:py-[10px] py-[10px] md:px-0 px-[20px]">
                <div className="container">
                    <div className="md:mb-[2%] mb-4">
                        <div className="text-secondary-lighter text-base font-medium py-2 leading-8 ">
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                EFFECTIVE DATE: June 15, 2024
                            </h1>
                            <p>
                                Aavya Aavya LabTech, d/b/a Aavya LabTech ("Aavyalabtech," "we" or "us") values your privacy. This Privacy Policy (the "Policy") applies to the Aavya LabTech website, https://Aavya LabTech.com ("Site"), and the Aavya LabTech Platform and related services. In this Policy, we describe how we collect, use, and disclose information that we obtain via our Services, which includes our Site and Platform, as well the services available through our Site and Platform (including those listed here).
                            </p>
                            <p>
                                Your use of our Services, and any dispute over privacy, is subject to this Policy and the Aavya LabTech Platform Terms of Service, including its applicable limitations on damages and the resolution of disputes, as well as any Service-Specific Terms and the Aavya LabTech Terms of Use.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                About our Services
                            </h1>

                            <ul>
                                We offer various tools, content and resources that allow customers to create, administer and manage their online businesses and websites, and related information. As part of our Services we may collect and host certain information and generate reports and analytics on behalf of our customers, which may include information about our customers' end users ("End User Information"). Our customers' use of the information they collect, as well as any information we collect or generate on their behalf (including End User Information), is subject to the customer's own privacy policy, not this one.
                            </ul>
                            <li>
                                The Information We Collect
                            </li>
                            <li>
                                How We Use the Information We Collect
                            </li>
                            <li>
                                How We Disclose Information
                            </li>
                            <li>
                                Cookies and Other Tracking Mechanisms
                            </li>
                            <li>
                                Third-Party Analytics
                            </li>
                            <li>
                                Third-Party Links
                            </li>
                            <li>
                                User-Generated Content
                            </li>
                            <li>
                                Security
                            </li>
                            <li>
                                Access to Personal Information
                            </li>
                            <li>
                                Marketing Communications
                            </li>
                            <li>
                                Children Under 13
                            </li>
                            <li>
                                Changes to this Policy
                            </li>
                            <li>
                                Contact Us
                            </li>


                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                The Information We Collect
                            </h1>
                            <p>
                                We may collect information about you directly from you and from third parties, as well as automatically through your use of our Services. In general, we collect the following information:
                            </p>
                            <p>
                                Registration and Payment Information. You may browse our Site without registering, but in order to use most of our Services, you must register and create an account. When you register, we collect your name, email and other contact information, company name, you title, payment information and other information.
                            </p>
                            <p>
                                Hosted Content and Services. As noted above, we may collect or generate certain information (including End User Information) on our customers' behalf related to our Services (collectively, "Hosted Data"). Hosted Data includes the information we collect via our hosted applications, any information our customers post with respect to such hosted services, and the information we generate on behalf of our Customers.
                            </p>
                            <p>
                                Information We Collect Automatically. We may automatically collect the following information related to our Services, through log files, cookies, web beacons and other technologies: domain name; browser type; device type; operating system; page views and other activities; IP address; the date, time and length of time you use our Services; device identifiers; location information; and referring URL.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                How We Use the Information We Collect
                            </h1>

                            <ul>
                                We use the information that we collect via the Services for the following purposes:
                            </ul>
                            <li>
                                To provide our Services to our customers.
                            </li>
                            <li>
                                To communicate with our customers.
                            </li>
                            <li>
                                To send marketing and other information to our customers. We do not use the personal information we collect on behalf of our customers, from their end users, for our own marketing purposes.
                            </li>
                            <li>
                                To tailor the content and information that we send or display on our Site, to offer location customization and personalized help and instructions, and to otherwise personalize experiences while using our Services.
                            </li>
                            <li>
                                To better understand how users access and use our Services, in order to improve our Services, develop new Services, respond to user desires and preferences; and for other research and analytical purposes.
                            </li>
                            <li>
                                To create aggregate and/or de-identified reports and datasets for market analysis, research, marketing or other purposes.
                            </li>

                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                How We Share Your Information
                            </h1>
                            <ul>
                                We may disclose the information that we collect about you, including personally identifiable information, as follows:
                            </ul>
                            <li>
                                Service Providers. We may disclose the information we collect to third-party vendors, service providers, contractors, or agents who perform functions on our behalf.
                            </li>
                            <li>
                                Business Transfers. If we are acquired by or merged with another company, if substantially all of our assets are transferred to another company, or as part of a bankruptcy proceeding, we may transfer the information we have collected from you to the other company.
                            </li>
                            <li>
                                In Response to Legal Process. We also may disclose the information we collect from you in order to comply with the law, a judicial proceeding, subpoena, court order, or other legal process.
                            </li>
                            <li>
                                To Protect Us and Others. We also may disclose the information we collect from you where we believe it is necessary to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the safety of any person, violations of our Terms of Use or this Policy, or as evidence in litigation in which Aavya LabTech is involved.
                            </li>
                            <li>
                                Aggregate and De-Identified Information. We may share aggregate or de-identified information about users with third parties for marketing, advertising, research, or similar purposes. Further, as noted above, as part of its Services, Aavya LabTech may collect or generate information and reports on behalf of its customers, which may include End User Information and other information related to our hosted services. Notwithstanding anything else in this Privacy Policy, our customers may access, view and download the information we collect or generate on their behalf, including any End User Information, and we have no control over their collection, use or disclosure of this information.
                            </li>

                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Our Use of Cookies and Other Tracking Mechanisms
                            </h1>
                            <p>
                                We use cookies, local storage objects, clear GIFs and other tracking mechanisms to track information about your use of our Services.

                            </p>
                            <p>
                                Cookies. Cookies are alphanumeric identifiers that we transfer to your computer's hard drive through your web browser for record-keeping purposes. Some cookies allow us to make it easier for you to navigate our Site and Services, while others are used to enable a faster log-in process or to allow us to track your activities while using our Services. Most web browsers automatically accept cookies, but if you prefer, you can edit your browser options to block them in the future. The Help portion of the toolbar on most browsers will tell you how to prevent your computer from accepting new cookies, how to have the browser notify you when you receive a new cookie, or how to disable cookies altogether. Visitors to our Site who disable cookies will be able to browse certain areas of the Site, but some features may not function
                            </p>
                            <p>
                                Local Storage Objects. We may use Local Storage Objects ("LSOs"), including Flash LSOs, to store your Site preferences and to personalize your visit. LSOs are different from browser cookies because of the amount and type of data stored. Typically, you cannot control, delete, or disable the acceptance of LSOs through your web browser.
                            </p>
                            <p>
                                Clear GIFs, pixel tags and other technologies. Clear GIFs are tiny graphics with a unique identifier, similar in function to cookies. In contrast to cookies, which are stored on your computer's hard drive, clear GIFs are embedded invisibly on web pages. We may use clear GIFs (a.k.a. web beacons, web bugs or pixel tags), in connection with our Site to, among other things, track the activities of Site visitors, help us manage content, and compile statistics about Site usage. We and our third-party service providers also use clear GIFs in HTML emails to our customers, to help us track email response rates, identify when our emails are viewed, and track whether our emails are forwarded.
                            </p>
                            <p>
                                Third-Party Analytics. We use automated devices and applications, such as Google Analytics, to evaluate usage of our Services. We use these tools to help us improve our Services, performance and user experiences. These entities may use cookies and other tracking technologies to perform their services, and may combine the information that we provide about you with other information that they have collected. This Policy does not cover such third parties' use of the data.
                            </p>
                            <p>
                                Do-Not-Track Options. Currently, our Site does not honor browser requests not to be tracked.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Third-Party Links
                            </h1>
                            <p>
                                Our Site may contain links to third-party websites. Any access to and use of such linked websites is not governed by this Policy, but instead is governed by the privacy policies of those third parties. We are not responsible for the information practices of such third parties.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                User-Generated Content
                            </h1>
                            <p>
                                We may invite you to post content on our Site. If you post content to Site, all of the information that you post will be available to all visitors to our Site, and we cannot prevent such information from being used in a manner that may violate this Policy, the law, or your personal privacy.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Security of My Personal Information
                            </h1>
                            <p>
                                We have implemented commercially reasonable precautions to protect the information we collect from loss, misuse, and unauthorized access, disclosure, alteration, and destruction. Please be aware that despite our best efforts, no data security measures can guarantee 100% security.
                            </p>
                            <p>
                                You should take steps to protect against unauthorized access to your account and the information accessible via your account by, among other things, signing off after using a shared computer, choosing a robust password that nobody else knows or can easily guess, and keeping your log-in and password private. We are not responsible for any lost, stolen, or compromised passwords or for any activity on your account via unauthorized password activity.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Access to My Personal Information
                            </h1>
                            <p>
                                You may modify your profile information by logging into your account and updating your information. Please note that copies of information that you have updated, modified, or deleted may remain viewable in cached and archived pages Site for a period of time. Additionally, if you discontinue using our Services or update your profile information, we may retain the data previously collected about you.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Marketing Communications
                            </h1>
                            <p>
                                We may send our customers periodic promotional or informational emails; however, we will not use End User Information for our own marketing purposes. Customers may opt out of receiving marketing communications from us by following the opt-out instructions contained in the email. Please note that it may take up to 10 business days for us to process opt-out requests. If you opt out of receiving emails about recommendations or other information we think may interest you, we may still send you emails about your account or any Services you have requested or received from us.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Children Under 13
                            </h1>
                            <p>
                                Our Site and Services are not designed for children under 13. If we discover that a child under 13 has provided us with personal information, we will delete such information from our systems.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Transfer of Personal Information to the United States
                            </h1>
                            <p>
                                Please note that information we collect or receive, including any personal information, will be transferred to and processed in the United States, where Aavya LabTech is located. By using our Site and Services, you consent to the transfer and processing of such information in the United States, which may not provide the same level of protection for personal information as exists in your country of residence. By using the Services, you consent to such transfer.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Changes to this Policy
                            </h1>
                            <p>
                                This Policy is current as of the Effective Date set forth above. We may change this Policy from time to time, so please be sure to check back periodically. We will post any changes to this Policy on our Site, at https://Aavya LabTech.com/legal/privacy. If we make any changes to this Policy that materially affect our practices with regard to the personal information we have previously collected from you, we will endeavor to provide you with notice in advance of such change by highlighting it on our Site, or by emailing you at your email address of record.
                            </p>

                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Contact Us
                            </h1>

                            <p>
                                If you have questions about the privacy aspects of our Services or would like to make a complaint, please contact us at privacy@Aavya LabTech.com.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Privacy;
