import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { cn } from "@/utils";

interface TLinks {
  href: string;
  title: string;
  target?: "_blank" | "_self";
  icon?: IconType;
  active?: boolean
}

interface TBreadcrumbProps {
  title: string;
  links: Array<TLinks>;
  image?: StaticImageData;
}

const Breadcrumb: React.FC<TBreadcrumbProps> = (props) => {
  const { title, links, image } = props;

  return (
    <div className={cn(`relative  bg-cover flex items-end bg-right lg:bg-center`, image ? "h-[300px]" : "h-[180px] md:h-[200px]")}>

      {image && <div
        style={{
          background: `linear-gradient(to bottom, transparent, white), url(${image.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'right',
          backgroundRepeat: "no-repeat"
        }}
        className="absolute inset-0 bg-cover"
      ></div>}
      <div className="relative container pb-0 pl-4 md:pl-0">
        <h2 className="text-2xl md:text-4xl text-text-main font-bold mb-3 md:mb-5">
          {title || ""}
        </h2>
        <ul className="flex flex-wrap gap-2 text-sm text-secondary-main text-text-main">
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <li key={l.href} className="flex items-center">
                <Link
                  href={l.href}
                  target={l.target || "_self"}
                  className={cn("flex items-center", l?.active && "text-primary-main")}
                >
                  {l.title}
                  {Icon && <span className="ml-2 text-primary-dark"><Icon /></span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
