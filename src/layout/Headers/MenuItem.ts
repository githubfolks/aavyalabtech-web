import { BiHome } from "react-icons/bi";
import { FaGlobe } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { GrCloudComputer } from "react-icons/gr";

const MenuItems = [
  {
    id: "1",
    name: "Home",
    href: "/",
    icon: BiHome,
  },
  {
    id: "2",
    name: "Platform",
    href: "/platform/",
    icon: GrCloudComputer,
    child: [
      {
        id: "2.3",
        name: "Microsoft",
        icon: FaGlobe,
        href: "/platform/dot-net-development",
        child: [
          {
            id: "2.3.1",
            name: ".NET Development",
            icon: FaGlobe,
            href: "/platform/dot-net-development",
          },
        ],
      },
      {
        id: "2.4",
        name: "React Native",
        icon: FaGlobe,
        href: "/platform/mobile-app-development",
        child: [
          {
            id: "2.4.1",
            name: "Mobile App Development",
            icon: FaGlobe,
            href: "/platform/mobile-app-development",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Services",
    href: "/services/",
    icon: FaGear,
    child: [
      {
        id: "3.2",
        name: "AWS Cloud Computing",
        icon: FaGlobe,
        href: "/services/aws-cloud-computing",
      },
      {
        id: "3.3",
        name: "Azure Development",
        icon: FaGlobe,
        href: "/services/azure-development",
      },
      {
        id: "3.5",
        name: "Enterprise Software Development",
        icon: FaGlobe,
        href: "/services/enterprise-application-development",
      },
      {
        id: "3.6",
        name: "Generative AI",
        icon: FaGlobe,
        href: "/services/generative-ai",
      },
    ],
  },
  {
    id: "4",
    name: "Products",
    href: "#",
    icon: FaGear,
    child: [
      {
        id: "4.1",
        name: "Maitil.ai",
        icon: FaGlobe,
        href: "/maitil-ai/",
      },
      {
        id: "4.2",
        name: "MPM Systems",
        icon: FaGlobe,
        href: "/mpm-systems/",
      },
    ],
  },
  {
    id: "5",
    name: "Company",
    href: "#",
    icon: FaGlobe,
    child: [
      {
        id: "5.1",
        name: "About Us",
        href: "/about-us/",
        icon: FaGlobe,
      },
    ],
  },
];

export { MenuItems };
