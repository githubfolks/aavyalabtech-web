import React from "react";
import BannerImage from "../../../../public/images/home-baner.jpg"

import { BiMinus } from "react-icons/bi";
import Breadcrumb from "@/components/common/beardcrumb";
import { BsEnvelope, BsTelephone } from "react-icons/bs";
import Link from "next/link";


function TermsOfService() {
    return (
        <>
            <Breadcrumb
                title="Terms of Service"
                links={[
                    { title: "Home", href: "/", icon: BiMinus },
                    { title: "Terms of Service", href: "/termsofservice" },
                ]}
                image={BannerImage}
            />

            <div className="bg-white text-black  md:py-[10px] py-[10px] md:px-0 px-[20px]">
                <div className="container">
                    <div className="md:mb-[2%] mb-4">
                        <div className="text-secondary-lighter text-base font-medium py-2 leading-8 ">
                            <p>
                                These Aavya LabTech Platform Terms of Service apply to all accounts for any Services and managed custom applications utilizing any Services, and will apply to all accounts after May 1, 2024.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                LICENSE AGREEMENT
                            </h1>
                            <p>
                                These Aavya LabTech Platform Terms of Service (the "Agreement") is made and entered into by and between Aavya Aavya LabTech Inc. ("Aavya LabTech", "we" or "us") and the business entity on behalf of whom an authorized representative is agreeing to these terms (such entity referred to as the "Customer" or "you").
                            </p>
                            <p>
                                This Agreement is effective as of the date Customer clicks the "I Agree" button (the "Effective Date"). If you are agreeing to this Agreement on behalf of Customer, you represent and warrant that: (i) you have full legal authority to bind Customer to this Agreement and (ii) you have read and understand this Agreement. If you do not have the legal authority to bind Customer, do not click the "I Agree" button below. This Agreement governs Customer's access to and use of the Services. For an offline variant of this Agreement, you may contact Aavya LabTech for more information.
                            </p>
                            <p>
                                All capitalized terms are as defined in the list of definitions at the end of this Agreement or as otherwise defined within the Agreement
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Licenses
                            </h1>
                            <li>
                                From Aavya LabTech to Customer. Subject to this Agreement, Aavya LabTech grants to Customer a worldwide, non-sublicensable, non-transferable, non-exclusive, terminable, limited license during the License Term to: (a) use the Services, (b) integrate the Services into any Application and provide the Services, solely as integrated into the Application, to End Users of the Application, and (c) use any Software provided by Aavya LabTech as part of the Services.
                            </li>
                            <li>
                                From Customer to Aavya LabTech. By submitting, posting, generating, or displaying any Application and/or Customer Data on or through the Services, Customer gives Aavya LabTech a worldwide, non-sublicensable, non-transferable, non-exclusive, terminable, limited license to use any Application and/or Customer Data for the sole purpose of enabling Aavya LabTech to provide, maintain, protect, and improve the Services in accordance with the Agreement.
                            </li>
                            <p>
                                In addition, any questions, comments, suggestions, ideas, feedback, or other information provided by you to us ("Comments") are not confidential and you hereby grant us a worldwide, perpetual, irrevocable, royalty-free, sublicensable license to reproduce, display, perform, distribute, publish, modify, edit or otherwise use such Comments as we deem appropriate, for any and all commercial and/or non-commercial purposes, in our sole discretion.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Provision of the Services
                            </h1>
                            <li>
                                Console. Aavya LabTech will provide the Services to Customer. As part of receiving the Services, Customer will have online remote access to the Admin Console, through which Customer may administer the Services.
                            </li>
                            <li>
                                Facilities and Data Transfer. All facilities used to store and process an Application and Customer Data will adhere to reasonable security standards no less protective than the security standards at facilities where Aavya LabTech processes and stores its own information of a similar type. Aavya LabTech has used commercially reasonable efforts to implement industry standard systems and procedures to ensure the security and confidentiality of an Application and Customer Data, protect against anticipated threats or hazards to the security or integrity of an Application and Customer Data, and protect against unauthorized access to or use of an Application and Customer Data. Aavya LabTech may process and store (including transient storage) an Application and Customer Data in the United States or any other country in which Aavya LabTech or its agents maintain facilities.
                            </li>
                            <p>
                                Aavya LabTech will retain your information for as long as your account is active or as needed to provide you Services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
                            </p>
                            <p>
                                By using the Services, Customer consents to this processing and storage of an Application and Customer Data. The parties agree that Aavya LabTech is merely a data processor.
                            </p>
                            <li>
                                Accounts. Customer must have an Account and a Token (if applicable) to use the Services, and is responsible for the information it provides to create the Account, the security of the Token and its passwords for the Account, and for any use of its Account and the Token. If Customer becomes aware of any unauthorized use of its password, its Account or the Token, Customer will: (a) change their password and Token (if applicable) through the Admin Console and (b) notify Aavya LabTech as promptly as possible.
                            </li>
                            <li>
                                Privacy Policies. The Services are subject to Aavya LabTech's Privacy Policy located here https://aavyalabtech.com/legal/privacy.
                            </li>
                            <li>
                                New Applications and Services. Aavya LabTech may: (i) make new applications, tools, features or functionality available from time to time through the Services and (ii) add new services to the "Services" definition from time to time (by adding them at the URL set forth under that definition), the use of which may be contingent upon Customer's agreement to additional terms.
                            </li>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                Modifications
                            </h1>
                            <ul>
                                <li>
                                    a. To the Services. Subject to Section 9.4 (Termination for Convenience), Aavya LabTech may make Updates to the Services from time to time. If Aavya LabTech makes a material change to the Services, Aavya LabTech will inform Customer, provided that Customer has subscribed with Aavya LabTech through the Admin Console to be informed about such change.
                                </li>
                                <li>
                                    b. To the Agreement. Aavya LabTech may make changes to this Agreement, including Fees from time to time. Unless otherwise noted by Aavya LabTech, material changes to the Agreement will become effective 30 days after they are posted to the Terms URL, except if the changes apply to new functionality in which case they will be effective immediately. If Customer does not agree to the revised Agreement, you must stop using the Services.
                                </li>
                                <li>
                                    c. Service Specific Terms. The Service Specific Terms are hereby incorporated by reference into the Agreement.
                                </li>
                            </ul>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                3. Payment Terms
                            </h1>
                            <ul>
                                <li>
                                    3.1 Free Quota. Certain Services are provided to Customer without charge up to the Fee Threshold, as applicable.
                                </li>
                                <li>
                                    3.2 Online Billing. Aavya LabTech will issue an electronic bill to Customer for all charges accrued above the Fee Threshold based on (i) Customer's use of the Services during the License Term (including, if any, the relevant Fee for TS); (ii) any Committed Purchases selected; and/or (iv) any Package Purchases selected. For use above the Fee Threshold, Customer will be responsible for all Fees up to the amount set in the Account and will pay all Fees in U.S. Dollars or in such other currency as agreed to in writing by the parties. Customer will pay all Fees in accordance with the payment terms applicable to the Fees. Aavya LabTech's measurement of Customer's use of the Services is final.
                                </li>
                                <li>
                                    <p>
                                        3.3 Taxes. Customer is responsible for any Taxes, and Customer will pay Aavya LabTech for the Services without any reduction for Taxes. If Aavya LabTech is obligated to collect or pay Taxes, the Taxes will be invoiced to Customer, unless Customer provides Aavya LabTech with a timely and valid tax exemption certificate authorized by the appropriate taxing authority. In some states the sales tax is due on the total purchase price at the time of sale and must be invoiced and collected at the time of the sale. If Customer is required by law to withhold any Taxes from its payments to Aavya LabTech, Customer must provide Aavya LabTech with an official tax receipt or other appropriate documentation to support such withholding. Aavya LabTech is required to collect Value Added Tax of the European Union ("EU VAT") from non-taxable EU Customers, therefore, EU VAT shall be charged to these Customers on top of our Fees.
                                    </p>
                                    <p>
                                        Customer takes full responsibility for all taxes and fees of any nature associated with the sale of Customer's commercial products or services through Applications or Services. Aavya LabTech shall not be liable for any taxes or other fees to be paid in accordance with or related to Customers sale of commercial products or services. When purchasing or selling commercial products or services, it is Customer's responsibility to determine whether or not sales taxes apply to a transaction and to collect, report and remit the correct amounts to the appropriate authority. Customer takes full responsibility for all taxes and fees of any nature associated with Application including any sales tax related to the purchase or sale of commercial products or services.
                                    </p>
                                </li>
                                <li>
                                    3.4 Invoice Disputes & Refunds. To the fullest extent permitted by law, Customer waives all claims relating to Fees unless claimed within sixty days after charged (this does not affect any Customer rights with its credit card issuer ). Refunds (if any) are at the discretion of Aavya LabTech and will only be in the form of credit for the Services. Nothing in this Agreement obligates Aavya LabTech to extend credit to any party.
                                </li>
                                <li>
                                    3.5 Credit Card Information. If you make a purchase for a Fee, you agree to Aavya LabTech, or our third party service providers, storing your payment card information. You expressly agree that we are authorized to charge you (i) a monthly Fee billed on a monthly basis, (ii) any other Fees for services you may purchase, and (iii) any applicable taxes in connection with your use of the Services or services to the payment card you provide and to reimburse us for all collection costs and interest for any overdue amounts. If the payment card you provide expires and you do not provide new payment card information or cancel your account, you authorize us to continue billing you and you agree to remain responsible for any uncollected Fees.
                                </li>
                                <li>
                                    3.5 Delinquent Payments. Late payments may bear interest at the rate of 1.5% per month (or the highest rate permitted by law, if less). Aavya LabTech reserves the right to suspend Customer's Account for any late payments.
                                </li>
                            </ul>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                4. Customer Obligations
                            </h1>
                            <ul>
                                <li>
                                    4.1 Compliance. Customer is solely responsible for its Applications, Projects, and Customer Data and for making sure its Applications, Projects, and Customer Data comply with the Acceptable Use Policy. Aavya LabTech reserves the right to review the Application, Project, and Customer Data to ensure Customer's compliance with the Acceptable Use Policy. Customer is responsible for ensuring all End Users comply with Customer's obligations under the Agreement.
                                </li>
                                <li>
                                    4.2 Privacy. Customer will protect the privacy and legal rights of its End Users under all applicable laws and regulations, which includes a legally adequate privacy notice communicated from Customer. Customer may have the ability to access, monitor, use, or disclose Customer Data submitted by End Users through the Services. Customer will obtain and maintain any required consents from End Users to allow Customer's access, monitoring, use and disclosure of Customer Data. Further, Customer will notify its End Users that any Customer Data provided as part of the Services will be made available to a third party (i.e. Aavya LabTech) as part of Aavya LabTech providing the Services.
                                </li>
                                <li>
                                    4.3 Restrictions. Customer will not, and will not allow third parties under its control or End Users to: (a) copy, modify, create a derivative work of, reverse engineer, decompile, translate, disassemble, or otherwise attempt to extract the source code of the Services or any component thereof (subject to Section 4.4 below and except to the extent such restriction is expressly prohibited by applicable law); (b) use the Services for High Risk Activities; (c) sublicense, resell, or distribute the Services or any component thereof separate from any integrated Application; (d) use the Services to create, train, or improve (directly or indirectly) a substantially similar product or service; (e) create multiple Applications, Accounts, or Projects to simulate or act as a single Application, Account, or Project (respectively) or otherwise access the Services in a manner intended to avoid incurring Fees; (f) unless otherwise set forth in the Service Specific Terms, use the Services to operate or enable any telecommunications service or in connection with any Application that allows End Users to place calls or to receive calls from any public switched telephone network; or (g) process or store any Customer Data that is subject to the International Traffic in Arms Regulations maintained by the Department of State. Unless otherwise specified in writing by Aavya LabTech, Aavya LabTech does not intend uses of the Services to create obligations under HIPAA, and makes no representations that the Services satisfy HIPAA requirements. If Customer is (or becomes) a Covered Entity or Business Associate, as defined in HIPAA, Customer agrees not to use the Services for any purpose or in any manner involving Protected Health Information (as defined in HIPAA) unless Customer has received prior written consent to such use from Aavya LabTech.
                                </li>
                                <li>
                                    4.4 Third Party Components. Third party components (which may include open source software) of the Services may be subject to separate license agreements. To the limited extent a third party license expressly supersedes this Agreement, that third party license instead governs Customer's agreement with Aavya LabTech for the specific included third party components of the Services, or use of the Services (as may be applicable).
                                </li>
                                <li>
                                    4.5 Documentation. Aavya LabTech may provide Documentation for Customer's use of the Services. The Documentation may specify restrictions (e.g. attribution or HTML restrictions) on how the Applications may be built or the Services may be used and Customer will comply with any such restrictions specified.
                                </li>
                                <li>
                                    4.6 Intellectual Property Policy. Aavya LabTech provides information to help copyright holders manage their intellectual property online, but Aavya LabTech cannot determine whether something is being used legally or not without their input. Aavya LabTech responds to notices of alleged copyright infringement and terminates accounts of repeat infringers according to the process set out in the U.S. Digital Millennium Copyright Act. If Customer thinks somebody is violating Customer's or its End Users' copyrights and wants to notify Aavya LabTech, Customer can find information about submitting notices.
                                </li>
                                <li>
                                    4.7 Application and No Multiple Accounts, Bills, Tokens. Any Application must have material value independent from the Services. Aavya LabTech has no obligation to provide multiple bills, Tokens (if applicable), or Accounts to Customer under the Agreement.
                                </li>
                                <li>
                                    4.8 Giving Us Access to Other Accounts and Services. Some of our Services may require you to give us access to or require you to provide login information and password information for accounts or services you may have with third party providers. When you provide this information to us or give us access to these third party accounts you agree that you have read all contracts and written agreements governing such access, login information and passwords and that you have all the necessary contractual and legal rights to give us such access, login information and passwords.
                                </li>
                                <li>
                                    4.9 Terms You Must Post on Your Application. You are responsible for drafting the terms of use and privacy policy for any Application hosted by us for you as part of the Services for End Users. The terms of use for your Application must designate us a third party beneficiary and must contain intellectual property, limitations of liability, limitations of remedy, disclaimers of warranty and indemnification provisions each for the benefit of Aavya LabTech which are at least as favorable to Aavya LabTech as contained in this Agreement. You are also responsible for drafting the privacy policy for your Application. Your Application's privacy policy must contain terms that are at least as protective of a user's privacy as those contained in this Agreement.
                                </li>
                                <li>
                                    You agree to indemnify and hold harmless Aavya LabTech and its licensors, suppliers, officers, directors, employees, agents, affiliates, subsidiaries, successors and assigns from and against any and all liability, loss, claim, damages, expense or cost (including but not limited to attorneys' fees), arising from or related to the use of, access to, interaction with or reliance upon, your Application, including the purchase, sale or other distribution of Commercial Products.
                                </li>
                            </ul>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                5. Suspension and Removals
                            </h1>
                            <ul>
                                <li>
                                    5.1 Suspension/Removals. If Customer becomes aware that any Application, Project (including an End User's use of a Project), or Customer Data violates the Acceptable Use Policy, Customer will immediately suspend the Application or Project (if applicable), remove the applicable Customer Data or suspend access to an End User (as may be applicable). If Customer fails to suspend or remove as noted in the prior sentence, Aavya LabTech may specifically request that Customer do so. If Customer fails to comply with Aavya LabTech's request to do so within twenty-four hours, then Aavya LabTech may suspend accounts of the applicable End Users, disable the Project or Application, and/or disable the Account (as may be applicable) until such violation is corrected.
                                </li>
                                <li>
                                    5.2 Emergency Security Issues. Despite the foregoing, if there is an Emergency Security Issue, then Aavya LabTech may automatically suspend the offending End User account, Application, Project, or the Account. Suspension will be to the minimum extent required, and of the minimum duration, to prevent or terminate the Emergency Security Issue. If Aavya LabTech suspends an End User account, Application, Project, or the Account, for any reason, without prior notice to Customer, at Customer's request, Aavya LabTech will provide Customer the reason for the suspension as soon as is reasonably possible.
                                </li>
                            </ul>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                6. Intellectual Property Rights; Brand Features.
                            </h1>
                            <ul>
                                <li>
                                    6.1 Intellectual Property Rights. Except as expressly set forth herein, this Agreement does not grant either party any rights, implied or otherwise, to the other's content or any of the other's intellectual property. As between the parties, Customer owns all Intellectual Property Rights in Customer Data and the Application (if applicable) and Aavya LabTech owns all Intellectual Property Rights in the Services and Software.
                                </li>
                                <li>
                                    6.2 Brand Features Limitation. If Customer wants to display Aavya LabTech Brand Features in connection with its use of the Services, Customer must obtain written permission from Aavya LabTech through the process specified in the Trademark Guidelines. For the purpose of providing the Services, Customer permits Aavya LabTech to display any Customer Brand Features that may appear in Customer's use of the Services. Any use of a party's Brand Features will inure to the benefit of the party holding Intellectual Property Rights to those Brand Features. A party may revoke the other party's right to use its Brand Features pursuant to this Agreement with written notice to the other and a reasonable period to stop the use.
                                </li>
                                <li>
                                    6.3 Customer Feedback. If Customer provides Aavya LabTech feedback or suggestions about the Services, then Aavya LabTech may use that information without obligation to Customer, and Customer hereby irrevocably assigns to Aavya LabTech all right, title, and interest in that feedback or those suggestions.
                                </li>
                            </ul>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                7. Technical Support Services
                            </h1>
                            <ul>
                                <li>
                                    7.1 By Customer. Customer has sole responsibility for technical support of its Applications and Projects.
                                </li>
                                <li>
                                    7.2 By Aavya LabTech. Subject to payment of applicable Fees, Aavya LabTech will provide TS to Customer during the License Term in accordance with the TS Guidelines. Certain TS levels include a minimum recurring Fee as described in the "Fees" definition below. If Customer downgrades its TS level during any calendar month, Aavya LabTech may continue to provide TS at the same level and TS Fees before the downgrade for the remainder of that month.
                                </li>
                                <li>
                                    (i) required by law or third party relationship (including if there is a change in applicable law or relationship), or
                                </li>
                                <li>
                                    (ii) doing so could create a security risk or substantial economic or material technical burden.
                                </li>
                                <li>
                                    The above policy is the "Deprecation Policy."
                                </li>
                            </ul>

                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                8. Confidential Information
                            </h1>
                            <p>

                                The recipient will not disclose the Confidential Information, except to Affiliates, employees, agents or professional advisers who need to know it and who have agreed in writing (or in the case of professional advisers are otherwise bound) to keep it confidential. The recipient will ensure that those people and entities use the received Confidential Information only to exercise rights and fulfill obligations under this Agreement, while using reasonable care to keep it confidential. The recipient may also disclose Confidential Information to the extent required by applicable Legal Process; provided that the recipient uses commercially reasonable efforts to: (i) promptly notify the other party of such disclosure before disclosing; and (ii) comply with the other party's reasonable requests regarding its efforts to oppose the disclosure. Notwithstanding the foregoing, subsections (i) and (ii) above will not apply if the recipient determines that complying with (i) and (ii) could: (a) result in a violation of Legal Process; (b) obstruct a governmental investigation; and/or (c) lead to death or serious physical harm to an individual. As between the parties, Customer is responsible for responding to all third party requests concerning its use and its End Users' use of the Services.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                9. Term and Termination
                            </h1>
                            <ul>
                                <li>
                                    9.1 Agreement Term. This Agreement will remain in effect for the License Term.
                                </li>
                                <li>
                                    9.2 Termination for Breach. Either party may terminate this Agreement for breach if: (i) the other party is in material breach of the Agreement and fails to cure that breach within thirty days after receipt of written notice; (ii) the other party ceases its business operations or becomes subject to insolvency proceedings and the proceedings are not dismissed within ninety days; or (iii) the other party is in material breach of this Agreement more than two times notwithstanding any cure of such breaches.
                                </li>
                                <li>
                                    9.3 Termination for Inactivity. Aavya LabTech reserves the right to terminate the Services for inactivity, if, for a period of at least ninety consecutive days, Customer: (a) has failed to access the Admin Console; (b) a Project has no active virtual machine or storage resources or an Application has not served any requests; and (c) no electronic bills have being generated.
                                </li>
                                <li>
                                    9.4 Termination for Convenience. Customer may stop using the Services at any time. Customer may terminate this Agreement for its convenience at any time on prior written notice and upon termination, must cease use of the applicable Services. Under no circumstances shall Customer be entitled to a refund of any prepaid fees if Customer terminate for convenience. Aavya LabTech may terminate this Agreement for its convenience at any time without liability to Customer, except that Aavya LabTech will provide a prorated refund of any fees prepaid for the balance of the terminated License Term. Subject to Section 7.3, Aavya LabTech may discontinue any Services or any portion or feature for any reason at any time without liability to Customer.
                                </li>
                                <li>
                                    9.5 Effect of Termination. If the Agreement expires or is terminated, then: (i) the rights granted by one party to the other will immediately cease; (ii) all Fees (including Taxes) owed by Customer to Aavya LabTech are immediately due upon receipt of the final electronic bill; (iii) Customer will delete the Software, any Application, Instance, Project, and any Customer Data; and (iv) upon request, each party will use commercially reasonable efforts to return or destroy all Confidential Information of the other party.
                                </li>
                            </ul>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                10. Publicity
                            </h1>
                            <p>
                                Customer is permitted to state publicly that it is a customer of the Services, consistent with the Trademark Guidelines. Aavya LabTech may include Customer's name or Brand Features in a list of Aavya LabTech customers, online or in promotional materials. Aavya LabTech may also verbally reference Customer as a customer of the Aavya LabTech products or services that are the subject of this Agreement. This section is subject to the "Brand Features Limitation" section of the Agreement. For clarification, neither party needs to seek approval from the other if the party is repeating a public statement that is substantially similar to a public statement that has been previously approved.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                11. Representations
                            </h1>
                            <p>
                                Each party represents that: (a) it has full power and authority to enter into the Agreement; and (b) it will comply with all laws and regulations applicable to its provision, or use, of the Services, as applicable. Aavya LabTech warrants that it will provide the Services in accordance with the applicable SLA (if any).
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                12. Disclaimer of warranty
                            </h1>
                            <p>
                                THE SERVICES AND MATERIALS ARE PROVIDED "AS IS," "AS AVAILABLE," "WITH ALL FAULTS" AND WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, Aavya LabTech AND ITS LICENSORS DISCLAIM ALL WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OF TITLE, MERCHANTIBILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, NEITHER Aavya LabTech NOR ITS LICENSORS WARRANT THAT ACCESS TO THE SERVICES, APPLICATIONS, AND THE MATERIALS INCLUDING CUSTOMER DATA WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT DEFECTS, IF ANY, WILL BE CORRECTED; NOR DOES Aavya LabTech OR ITS LICENSORS MAKE ANY REPRESENTATIONS ABOUT THE ACCURACY, RELIABILITY, CURRENCY, QUALITY, COMPLETENESS, USEFULNESS, PERFORMANCE, SECURITY, LEGALITY OR SUITABILITY OF THE SERVICES, THE MATERIALS OR THE APPLICATIONS. YOU EXPRESSLY AGREE THAT YOUR USE OF THE SERVICES AND YOUR RELIANCE UPON THE SERVICES AND/OR THE MATERIALS IS AT YOUR SOLE RISK. IN ADDITION, Aavya LabTech IS NOT RESPONSIBLE, AND MAKES NO REPRESENTATIONS OR WARRANTIES FOR THE DELIVERY OF ANY MESSAGES (SUCH AS EMAILS, POSTING OF ANSWERS OR TRANSMISSION OF ANY OTHER USER GENERATED CONTENT) SENT THROUGH THE APPLICATION OR SERVICES TO ANYONE.
                            </p>
                            <p>
                                IN ADDITION, YOU ACKNOWLEDGE AND AGREE THAT ANY DATA, INFORMATION, CONTENT OR MATERIALS CONTAINED IN OR MADE AVAILABLE IN CONNECTION WITH THE SERVICES IS NOT INTENDED AS A SUBSTITUTE FOR, THE KNOWLEDGE, EXPERTISE, SKILL AND JUDGMENT TAX, LEGAL OR OTHER PROFESSIONALS. THE SERVICES DO NOT PROVIDE TAX OR LEGAL ADVICE. YOU ARE RESPONSIBLE FOR OBTAINING SUCH ADVICE.
                            </p>
                            <p>
                                FURTHER, Aavya LabTech AND ITS LICENSORS MAKE NO REPRESENTATION OR WARRANTIES THAT THE SERVICES OR THE MATERIALS OR THE APPLICATIONS ARE APPROPRIATE OR AVAILABLE FOR USE IN ALL GEOGRAPHIC LOCATIONS. IF YOU USE THE SERVICES, THE SERVICES OR THE MATERIALS OUTSIDE THE UNITED STATES OF AMERICA, YOU ARE SOLELY RESPONSIBLE FOR COMPLIANCE WITH ALL APPLICABLE LAWS, INCLUDING WITHOUT LIMITATION EXPORT AND IMPORT REGULATIONS OF OTHER COUNTRIES. NEITHER Aavya LabTech NOR ANY THIRD PARTY PROVIDERS, PARTNERS OR AFFILIATES WARRANT THAT THE SERVICES, APPLICATIONS, OR THE MATERIALS OR ANY E-MAIL SENT FROM THE SERVICES, APPLICATIONS OR ANY THIRD PARTY PROVIDERS, PARTNERS OR AFFILIATES ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                            </p>
                            <p>
                                THIS AGREEMENT APPLIES SOLELY TO THE SERVICES. AS PART OF THE SERVICES PROVIDED TO OTHER Aavya LabTech CUSTOMERS AND END USERS, WE HOST APPLICATIONS FOR CERTAIN THIRD PARTIES ("THIRD PARTY SITES"). THIRD PARTY SITES INCLUDE CONTENT GENERATED BY THIRD PARTIES AND ARE NOT UNDER THE MANAGEMENT AND CONTROL OF Aavya LabTech. Aavya LabTech IS NOT RESPONSIBLE FOR SUCH THIRD PARTY APPLICATIONS, INCLUDING WITHOUT LIMITATION, THE ACCURACY, SUFFICIENCY, CORRECTNESS, RELIABILITY, VERACITY, COMPLETENESS OR TIMELINESS THEREOF, ANY LINK CONTAINED THEREIN, OR ANY CHANGES OR UPDATES THERETO, OR ANY GOODS OR SERVICES SOLD THEREON. YOUR ACCESS OR USE OF ANY THIRD PARTY APPLICATIONS IS GOVERNED BY THE TERMS APPLICABLE TO SUCH THIRD PARTY APPLICATION. THE HOSTING OF ANY THIRD PARTY APPLICATION BY Aavya LabTech DOES NOT IMPLY AN ENDORSEMENT THEREOF BY Aavya LabTech, OR OF THE PROVIDER OF SUCH CONTENT OR SERVICES, OF ANY THIRD PARTY APPLICATION.
                            </p>
                            <p>
                                YOU AGREE THAT Aavya LabTech SHALL NOT BE RESPONSIBLE FOR THE ANY ACTIVITY, LOSS, OR DAMAGE OF ANY SORT INCURRED AS A RESULT OF YOUR USE OF ANY THIRD PARTY SITES AND/OR THIRD PARTY SERVICES, WHETHER OR NOT YOU OR AN END USER WAS LOGGED IN THROUGH, LINKED TO, OR DIRECTED TO A THIRD PARTY SITE OR THIRD PARTY SERVICE THROUGH THE APPLICATION. YOU ACKNOWLEDGE THAT THIRD PARTY SITES AND THIRD PARTY SERVICES MAY BE SUBJECT TO THE APPLICABLE THIRD PARTY PROVIDER'S TERMS OF SERVICE, AND YOU ARE SOLELY RESPONSIBLE FOR REVIEWING AND COMPLYING WITH ANY SUCH TERMS OF SERVICE. IN NO EVENT SHALL ANY REFERENCE WITHIN THE APPLICATION TO ANY THIRD PARTY, THIRD PARTY WEBSITE OR THIRD PARTY PRODUCT OR SERVICE BE CONSTRUED AS AN APPROVAL OR ENDORSEMENT BY Aavya LabTech OF THAT THIRD PARTY, THIRD PARTY WEBSITE OR OF ANY PRODUCT OR SERVICE PROVIDED BY A THIRD PARTY.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                13. Limitation of Liability
                            </h1>
                            <p>
                                WE ARE NOT LIABLE TO YOU OR ANY OTHER PERSON FOR DAMAGES OF ANY KIND, INCLUDING WITHOUT LIMITATION ANY PUNITIVE, EXEMPLARY, CONSEQUENTIAL, INCIDENTAL, INDIRECT OR SPECIAL DAMAGES (INCLUDING, WITHOUT LIMITATION, ANY PERSONAL INJURY, LOST PROFITS, BUSINESS INTERRUPTION, LOSS OF PROGRAMS OR OTHER DATA ON YOUR COMPUTER OR OTHERWISE) ARISING FROM OR IN CONNECTION WITH USE OF THE SERVICES, APPLICATIONS, THE MATERIALS, CUSTOMER DATA, THE COMMERCIAL PRODUCTS OR ANY THIRD PARTY USER GENERATED CONTENT AVAILABLE ON OR THROUGH THE SERVICES OR APPLICATIONS, WHETHER UNDER A THEORY OF BREACH OF CONTRACT, NEGLIGENCE, STRICT LIABILITY, MALPRACTICE OR OTHERWISE, EVEN IF Aavya LabTech HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. YOU HEREBY RELEASE Aavya LabTech AND HOLD Aavya LabTech AND ITS PARENTS, SUBSIDIARIES, AFFILIATES, LICENSORS, AND THEIR OFFICERS, DIRECTORS, TRUSTEES, AFFILIATES, SUBCONTRACTORS, AGENTS AND EMPLOYEES, HARMLESS FROM ANY AND ALL CLAIMS, DEMANDS, AND DAMAGES OF EVERY KIND AND NATURE (INCLUDING, WITHOUT LIMITATION, ACTUAL, SPECIAL, INCIDENTAL AND CONSEQUENTIAL), KNOWN AND UNKNOWN, SUSPECTED AND UNSUSPECTED, DISCLOSED AND UNDISCLOSED, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF THE SERVICES, MATERIALS, APPLICATIONS, YOUR CONTENT, COMMERCIAL PRODUCTS OR ANY THIRD PARTY USER GENERATED CONTENT AVAILABLE ON OR THROUGH THE APPLICATION. Aavya LabTech'S AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THIS AGREEMENT SHALL BE LIMITED TO THE GREATER OF $10 OR THE AMOUNTS PAID BY YOU TO Aavya LabTech FOR 1 MONTH OF THE SERVICES THAT ARE THE SUBJECT OF THE LIABILITY. YOU HEREBY WAIVE THE PROVISIONS OF ANY STATE OR LOCAL LAW LIMITING OR PROHIBITING A GENERAL RELEASE.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                14. Indemnification.
                            </h1>
                            <ul>
                                <li>
                                    14.1 By Customer. Unless prohibited by applicable law, Customer will indemnify, defend, and hold harmless Aavya LabTech from and against all liabilities, damages, and costs (including settlement costs and reasonable attorneys' fees) arising out of a third party claim: (i) regarding any Application, Project, Instance, Customer Data or Customer Brand Features; or (ii) regarding Customer's, or its End Users', use of the Services in violation of the Acceptable Use Policy.
                                </li>
                                <li>
                                    14.2 By Aavya LabTech. Aavya LabTech will indemnify, defend, and hold harmless Customer from and against all liabilities, damages, and costs (including settlement costs and reasonable attorneys' fees) arising out of a third party claim that Aavya LabTech's technology used to provide the Services (excluding any open source software) or any Aavya LabTech Brand Feature infringes or misappropriates any patent, copyright, trade secret or trademark of such third party. Notwithstanding the foregoing, in no event will Aavya LabTech have any obligations or liability under this Section arising from: (i) use of any Service or Aavya LabTech Brand Features in a modified, unauthorized, or unintended form or in combination with materials not furnished by Aavya LabTech, (ii) Customer's violation of this Agreement, (iii) use of non-current versions of the Services or Aavya LabTech Brand Features, and (iv) any Customer Data.
                                </li>
                                <li>
                                    14.3 Possible Infringement.
                                    a. Repair, Replace, or Modify. If Aavya LabTech reasonably believes the Services infringe a third party's Intellectual Property Rights, then Aavya LabTech may, at its sole option and expense: (a) obtain the right for Customer to continue using the Services; (b) provide a non-infringing functionally equivalent replacement; or (c) modify the Services so that they no longer infringe.
                                </li>
                                <li>
                                    b. Suspension or Termination. If Aavya LabTech does not believe the foregoing options are commercially reasonable, then Aavya LabTech may suspend or terminate Customer's use of the impacted Services.
                                </li>
                                <li>
                                    14.4 General. As a condition to indemnification for a claim, the party seeking indemnification must promptly notify the other party of the claim in writing and cooperate with the other party in defending the claim. The indemnifying party has full control and authority over the defense, except that: (a) any settlement requiring the party seeking indemnification to admit liability or to pay any money will require that party's prior written consent, such consent not to be unreasonably withheld or delayed; and (b) the other party may join in the defense with its own counsel at its own expense. Notwithstanding the foregoing, if the indemnified party settles without the prior written consent of the indemnifying party, the indemnifying party has no obligation of contribution. THE INDEMNITIES ABOVE ARE THE ONLY REMEDY UNDER THIS AGREEMENT FOR VIOLATION OF A THIRD PARTY'S INTELLECTUAL PROPERTY RIGHTS.
                                </li>
                            </ul>

                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                15. Federal Agency Users
                            </h1>
                            <p>
                                The Services were developed solely at private expense and are commercial computer software and related documentation within the meaning of the applicable Federal Acquisition Regulation and agency supplements thereto.
                            </p>
                            <h1 className="text-secondary-veryDark text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4 font-bold">
                                16. Miscellaneous
                            </h1>
                            <ul>
                                <li>
                                    16.1 Notices. All notices must be in writing and addressed to the other party's legal department and primary point of contact as maintained by Customer in their Account settings. The email address for notices being sent to Aavya LabTech's Legal Department is legal-notices@aavyalabtech.com. Notice will be treated as given on receipt as verified by written or automated receipt or by electronic log (as applicable).
                                </li>
                                <li>
                                    16.2 Assignment. Neither party may assign any part of this Agreement without the written consent of the other, except to an Affiliate where: (a) the assignee has agreed in writing to be bound by the terms of this Agreement; (b) the assigning party remains liable for obligations under the Agreement if the assignee defaults on them; and (c) the assigning party has notified the other party of the assignment. Any other attempt to assign is void.
                                </li>
                                <li>

                                    16.3 Change of Control. If a party experiences a change of Control (for example, through a stock purchase or sale, merger, or other form of corporate transaction): (a) that party will give written notice to the other party within thirty days after the change of Control; and (b) the other party may immediately terminate this Agreement any time between the change of Control and thirty days after it receives that written notice.
                                </li>
                                <li>
                                    16.4 Force Majeure. Neither party will be liable for failure or delay in performance to the extent caused by circumstances beyond its reasonable control.
                                </li>
                                <li>
                                    16.5 No Agency. This Agreement does not create any agency, partnership or joint venture between the parties.
                                </li>
                                <li>
                                    16.6 No Waiver. Neither party will be treated as having waived any rights by not exercising (or delaying the exercise of) any rights under this Agreement.
                                </li>
                                <li>
                                    16.7 Severability. If any term (or part of a term) of this Agreement is invalid, illegal, or unenforceable, the rest of the Agreement will remain in effect.
                                </li>
                                <li>
                                    16.8 No Third-Party Beneficiaries. This Agreement does not confer any benefits on any third party unless it expressly states that it does.
                                </li>
                                <li>
                                    16.9 Equitable Relief. Nothing in this Agreement will limit either party's ability to seek equitable relief.
                                </li>
                                <li>
                                    16.10 Governing Law.
                                </li>
                                <li>
                                    a. For City, County, and State Government Entities. If Customer is a city, county or state government entity, then the parties agree to remain silent regarding governing law and venue.
                                </li>
                                <li>
                                    b. For Federal Government Entities. If Customer is a federal government entity then the following applies: ALL CLAIMS ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE SERVICES WILL BE GOVERNED BY THE LAWS OF THE UNITED STATES OF AMERICA, EXCLUDING ITS CONFLICT OF LAWS RULES. SOLELY TO THE EXTENT PERMITTED BY FEDERAL LAW: (I) THE LAWS OF THE STATE OF CALIFORNIA (EXCLUDING CALIFORNIA'S CONFLICT OF LAWS RULES) WILL APPLY IN THE ABSENCE OF APPLICABLE FEDERAL LAW; AND (II) FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE SERVICES, THE PARTIES CONSENT TO PERSONAL JURISDICTION IN, AND THE EXCLUSIVE VENUE OF, THE COURTS IN ALAMEDA COUNTY, CALIFORNIA.
                                </li>
                                <li>
                                    c. For All Other Entities. If Customer is any entity not set forth in Section 16.10(a) or (b) then the following applies: ALL CLAIMS ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE SERVICES WILL BE GOVERNED BY CALIFORNIA LAW, EXCLUDING THAT STATE'S CONFLICT OF LAWS RULES, AND WILL BE LITIGATED EXCLUSIVELY IN THE FEDERAL OR STATE COURTS OF SANTA CLARA COUNTY, CALIFORNIA, USA; THE PARTIES CONSENT TO PERSONAL JURISDICTION IN THOSE COURTS.
                                </li>
                            </ul>
                            <p>
                                16.11 Amendments. Any amendment must be in writing, signed by both parties, and expressly state that it is amending this Agreement.
                            </p>
                            <p>
                                16.12 Survival. The following Sections will survive expiration or termination of this Agreement: 6.1 (Intellectual Property Rights), 8 (Confidential Information), 9.5 (Effects of Termination), 13 (Limitation of Liability), 14 (Indemnification) and 16 (Miscellaneous).
                            </p>
                            <p>
                                16.13 Entire Agreement. This Agreement sets out all terms agreed between the parties and supersedes all other agreements between the parties relating to its subject matter. In entering into this Agreement, neither party has relied on, and neither party will have any right or remedy based on, any statement, representation or warranty (whether made negligently or innocently), except those expressly set out in this Agreement. The terms located at a URL referenced in this Agreement and the Documentation are hereby incorporated by this reference. After the Effective Date, Aavya LabTech may provide Customer with an updated URL in place of any URL in this Agreement.
                            </p>
                            <p>
                                16.14 Conflicting Terms. If there is a conflict between the documents that make up this Agreement, the documents will control in the following order: the Agreement, and the terms located at any URL.
                            </p>
                            <p>
                                16.15 Monitoring What You Provide Us; Notices.
                                a. Aavya LabTech may, but has no obligation to, monitor Content on the Application created using our Services. We may disclose any information necessary or appropriate to satisfy our legal obligations, protect Aavya LabTech or its customers, or operate the Services properly. Aavya LabTech, in its sole discretion, may refuse to post, remove, or require you to remove, any Content, in whole or in part, alleged to be unacceptable, undesirable, inappropriate, or in violation of this Agreement. Aavya LabTech may, in its discretion, also require you to place all or any portion of the Content behind password protection. If Aavya LabTech has requested Content be placed or has placed Content behind password protection, you may not publish the password or similar information in any way that limits the effectiveness of the password. If Aavya LabTech requests that you place any Content behind password protection and you fail to do so promptly, Aavya LabTech may (a) place such Content behind password protection itself, or (b) immediately terminate this Agreement.
                            </p>
                            <p>
                                b. By using the Services, you consent to receiving electronic communications from us. These electronic communications may include notices about applicable fees and charges, transactional information and other information concerning or related to the Services. These electronic communications are part of your relationship with us. You agree that any notices, agreements, disclosures or other communications that we send you electronically will satisfy any legal communication requirements, including that such communications be in writing.
                            </p>
                            <p>
                                16.16 Template License. where appropriate, Aavya LabTech shall grant you a personal, non-transferable, revocable, non-exclusive, non-sublicensable limited license "Template License" to (i) download, copy, modify, and display the Template, (ii) create Template Works, and (iii) distribute the object code versions of Template Works to third party Template Users.
                            </p>
                            <p>
                                All rights not expressly granted are reserved by the Aavya LabTech and no licenses are granted by implication or estoppel.
                            </p>
                            <p>
                                16.17 Template Conditions and Limitations.
                                a. Use - The Template and any Template Works may only be operated, run, and installed on the Services, and all Template Users of the Template and any Template Works.
                            </p>
                            <p>
                                b. Ownership - This Template License does not grant you any rights to the Aavya LabTech's name, logo, or trademarks. As stated in Distribution, you have the right under this Template License to create and distribute the Template Works to third parties. You own the Template Works you create, but the Aavya LabTech retains all ownership, title and interest in the Template. Use of any Template Work is subject to the restrictions contained in this Template License. All rights not expressly granted in this Template License are reserved by the Aavya LabTech and no licenses are granted by implication or estoppel.
                            </p>
                            <p>
                                c. Restrictions on Use - You shall not, directly or indirectly, (i) use the Template or any Template Work for any purpose which may be deemed by the Aavya LabTech, in its sole discretion, to be competitive or in conflict with the Aavya LabTech's business or the Services, or (ii) disable or circumvent any access control or related device, process or procedure established with respect to the Template.
                            </p>
                            <p>
                                d. Distribution - If you distribute a Template Work, you must, in connection with such distribution, (i) display a prominent link to this license, (ii) retain all copyright, trademark, and attribution notices that are present in the Template, any Template Work and any associated files, and (iii) require that all Template Users agree to be bound by the terms of this Template License with respect to such Template Work prior to using, downloading or installing any Template Work.
                            </p>
                            <p>
                                16.18 Definitions.
                            </p>
                            <p>
                                "Account" means Customer's Aavya LabTech Platform account used to login and access and use the Services. Information contained within the account includes, but is not limited to: corporate information and corporate POC information including email, phone, address, and billing information.
                            </p>
                            <p>
                                "Admin Console" means the Aavya LabTech online console(s) and/or tool(s) provided by Aavya LabTech for access by Customer for administering the Services.
                            </p>
                            <p>
                                "Affiliate" means any entity that directly or indirectly Controls, is Controlled by, or is under common Control with a party.
                            </p>
                            <p>
                                "Application(s)" means any website or other web application Customer creates using the Services, including any source code written by Customer to be used with the Services, or hosted in an Instance.
                            </p>
                            <p>
                                "Brand Features" means the trade names, trademarks, service marks, logos, domain names, and other distinctive brand features of each party, respectively, as secured by such party from time to time.
                            </p>
                            <p>
                                "Committed Purchase(s)" have the meaning set forth in the Service Specific Terms.
                            </p>
                            <p>
                                "Confidential Information" means information that one party (or an Affiliate) discloses to the other party under this Agreement, and which is marked as confidential or would normally under the circumstances be considered confidential information. It does not include information that the recipient already rightfully knew, that becomes public through no fault of the recipient, that was independently developed by the recipient, or that was lawfully given to the recipient by a third party. Customer Data is considered Customer's Confidential Information.
                            </p>
                            <p>
                                "Content" has the meaning set forth in the Service Specific Terms.
                            </p>
                            <p>
                                "Control" means control of greater than fifty percent of the voting rights or equity interests of a party.
                            </p>
                            <p>
                                "Customer Data" means Content provided, transmitted, or displayed via the Services by Customer or its End Users, including but not limited to any credit card information of End Users; but excluding any data provided as part of the Account.
                            </p>
                            <p>
                                "Device" means each of a computer, workstation, terminal, handheld PC, pager, telephone, personal digital assistant, "smart phone," server or other electronic device.
                            </p>
                            <p>
                                "Emergency Security Issue" means either: (a) Customer's or its End User's use of the Services in violation of the Acceptable Use Policy, which could disrupt: (i) the Services; (ii) other customers' or any End Users' use of the Services; or (iii) the Aavya LabTech network or servers used to provide the Services; or (b) unauthorized third party access to the Services.
                            </p>
                            <p>
                                "End Users" means the individuals Customer permits to use the Services or Applications.
                            </p>
                            <p>
                                "High Risk Activities" means uses such as the operation of nuclear facilities, air traffic control, or life support systems, where the use or failure of the Services could lead to death, personal injury, or environmental damage.
                            </p>
                            <p>
                                "HIPAA" means the Health Insurance Portability and Accountability Act of 1996 as it may be amended from time to time, and any regulations issued thereunder.
                            </p>
                            <p>
                                "Instance" means a virtual instance, which runs on the Services. Instances are more fully described in the Documentation.
                            </p>
                            <p>
                                "Intellectual Property Rights" means current and future worldwide rights under patent law, copyright law, trade secret law, trademark law, moral rights law, and other similar rights.
                            </p>
                            <p>
                                "Legal Process" means a request for disclosure of data made pursuant to law, governmental regulation, court order, subpoena, warrant, governmental regulatory or agency request, or other valid legal authority, legal procedure, or similar process.
                            </p>
                            <p>
                                "License Term" means the term of the Agreement, which will begin on the Effective Date and continue until the Agreement is terminated as set forth herein.
                            </p>
                            <p>
                                "Package Purchase" has the meaning set forth in the Service Specific Terms.

                                "Privacy Policy" means Aavya LabTech's privacy policy located at: https://aavyalabtech.com/legal/privacy.
                            </p>
                            <p>
                                "Project" means a grouping of computing, storage, and API resources for Customer, and via which Customer may use the Services. Projects are more fully described in the Documentation.
                            </p>
                            <p>
                                "Reserved Unit Term" has the meaning set forth in the Service Specific Terms.
                            </p>
                            <p>
                                "Reserved Units" have the meaning set forth in the Service Specific Terms.
                            </p>
                            <p>
                                "Services" mean (a) the Aavya LabTech platform services available from time to time as described here: https://aavyalabtech.com/services (including any associated application program interfaces and web services) and (b) TS. Unless the context dictates otherwise, all references to "Services" in this Agreement shall refer to only those Services that you have elected to purchase and receive from Aavya LabTech through your selections in the Admin Console. Solely for purposes of Sections 12 (Disclaimer of Warranty) and 13 (Limitation of Liability), all references to "Services" in those sections shall include Templates
                            </p>
                            <p>
                                "Service Specific Terms" means the terms applicable to a specific Service as set forth here: https://aavyalabtech.com/services.
                            </p>
                            <p>
                                "Software" means any downloadable tools, online accessible, software development kits or other such proprietary computer software provided by Aavya LabTech in connection with the Services, which may be downloaded by Customer, and any updates Aavya LabTech may make to such Software from time to time.
                            </p>
                            <p>
                                "Taxes" means any duties, customs fees, or taxes (other than Aavya LabTech's income tax) associated with the purchase of the Services, including any related penalties or interest.
                            </p>
                            <p>
                                "Template" means pre-defined and pre-designed User Interface Files, Data Files and Content Files provided by Aavya LabTech or its Affiliates that a Customer can modify and use.
                            </p>
                            <p>
                                "Token" means an alphanumeric key that is uniquely associated with Customer's Account.
                            </p>
                            <p>
                                "Template User" is any user of the Template or a Template Work.
                            </p>
                            <p>
                                "Template Work" means any derivative work based upon the Template.
                            </p>
                            <p>
                                "TS" means the technical support service provided by Aavya LabTech to the administrators pursuant to the TS Guidelines.
                            </p>
                            <p>
                                "Updates" means the periodic software updates provided by Aavya LabTech to Customer from time to time. Updates are designed to improve, enhance and further develop the Services and may take the form of bug fixes, enhanced functions, new software modules and completely new versions.
                            </p>
                            <p>
                                The terms "reproduce," "reproduction," "derivative works," "distribute," and "distribution" have the same meaning here as under United States Copyright Act of 1976, as amended.
                            </p>
                            <p>
                                You, the Template Users and your company may be referred to in this Template License individually as a "party" and collectively as the "parties."
                            </p>
                            <p>
                                All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default TermsOfService;
