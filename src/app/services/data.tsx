import Link from "next/link";
import { BiChevronsRight } from "react-icons/bi";

const routes = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about-us",
    icon: BiChevronsRight,
  },
];
 
const accordionData = [
  {
    Title: "Build Robust, Scalable, and Secure Applications with .NET",
    description: "",

    Component: (
      <p className="text-justify   text-sm leading-7 text-secondary-dark">
        With our .NET development services, you can leverage the full
        capabilities of this platform to create applications that are not only
        robust and scalable but also secure and easy to maintain. Whether you're
        looking to modernize existing systems or develop new solutions, our team
        of .NET experts is here to help.
        <span className="font-bold">
          <Link href={"/platform/dot-net-development"}> ...more</Link>
        </span>
      </p>
    ),
  },

  {
    Title: "Transform Your Ideas into Engaging Mobile Experiences",
    description: "",

    Component: (
      <p className="text-justify   text-sm leading-7 text-secondary-dark">
        Our mobile app development services are designed to deliver innovative
        and user-centric solutions. We specialize in building high-performance
        mobile apps that offer seamless experiences across all devices and
        platforms.
        <span className="font-bold">
          <Link href={"/platform/mobile-app-development"}> ...more</Link>
        </span>
      </p>
    ),
  },

  {
    Title: "Crafting Dynamic, Responsive, and User-Centric Web Applications",
    description: "",

    Component: (
      <p className="text-justify   text-sm leading-7 text-secondary-dark">
        Our front-end development services leverage the power of Angular and
        React, two of the most popular frameworks, to build modern,
        high-performance web applications that offer exceptional user
        experiences.{" "}
        <span className="font-bold">
          <Link href={"/services/enterprise-solution"}> ...more</Link>
        </span>
      </p>
    ),
  },
];

export { routes, accordionData };
