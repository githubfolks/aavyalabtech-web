/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React, { Fragment } from "react";
import { IconType } from "react-icons";

interface IContactCard {
  icon: IconType;
  title: string;
  detail: any;
  detail2?: any;
  link?: string;
}

const ContactCard: React.FC<IContactCard> = ({ icon, title, detail, detail2, link }) => {
  const Icon = icon;

  const CardContent = (
    <div className="shadow-xl  backdrop-blur-lg rounded-lg md:p-7 md:mb-0 mb-8 relative group h-full hover:shadow-primary-main transition-all cursor-pointer">
      <div
        className="before:w-full before:h-20 before:rounded-lg before:group-hover:h-full
    before:opacity-0 before:group-hover:opacity-100 before:absolute before:left-0 before:top-0 before:bg-gradient-to-tr from-primary-dark to-primary-main"
      >
        <div className="after:content-[''] md:after:left-[41%] after:left-[41%] md:after:top-[9%] after:top-[8%] group-hover:after:opacity-20 after:absolute md:after:w-[25%] after:w-[19%] after:h-[100%] after:bg-no-repeat after:bg-contain my-4">
          <Icon className="text-6xl mx-auto z-[2] text-primary-main relative opacity-75 group-hover:text-white group-hover:opacity-100 hover:scale-[101%]" />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl relative group-hover:text-white text-secondary-dark font-bold text-center">
            {title}
          </h3>

          <p className="relative group-hover:text-white text-secondary-light text-sm font-medium m-2">
            {detail}<br />
            {detail2}
          </p>
        </div>
      </div>
    </div>
  );

  return link ? (
    <Link href={link}>{CardContent}</Link>
  ) : (
    <Fragment>{CardContent}</Fragment>
  );
};

export default ContactCard;
