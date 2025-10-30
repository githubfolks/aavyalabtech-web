/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import Link from "next/link";
import { BiCalendar, BiChevronRight } from "react-icons/bi";

import { BsPerson } from "react-icons/bs";
import ImageWithFallback from "./common/next/NextImage";
import dayjs from "dayjs"

import Logo from "../../public/images/logo-color.png"
import { cn } from "@/utils";

interface IBlog {
  [k: string]: any;
}

const BlogsCard: React.FC<IBlog> = (props) => {
  const { Title, Slug, Author, BriefDescription, Image, PostedDate } = props;

  return (
    <div className="group">
      <div className="shadow-xl p-2  bg-white rounded-md relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 hover:before:w-full  before:bg-primary-main customtransition  overflow-hidden ">
        <div className="overflow-hidden bg-gray-light  rounded-md h-[200px] w-auto relative ">
          <ImageWithFallback
            src={Image?.src || Logo}
            alt={Title}
            fill={true}
            className={cn("object-contain group-hover:scale-105 group-hover:transition-all group-hover:duration-700  duration-500 rounded-md px-2", !Image?.src && "opacity-60 group-hover:scale-100")}
          />
        </div>
        <div className="py-5 px-2">
          <div className="flex justify-between items-center mb-3">

            <p className="text-secondary-main flex items-center text-sm font-semibold">
              <span className="w-[30px] h-[30px] rounded-full shadow-md flex items-center justify-center mr-2 border border-gray-100">

                <BiCalendar className="text-primary-main  text-xl" />
              </span>

              {PostedDate ? dayjs(PostedDate || "").format("DD-MMM-YYYY") : "-"}
            </p>
          </div>

          <h4 className="text-secondary-veryDark line-clamp-3     text-lg mb-2 font-semibold ">
            {Title}
          </h4>
          <p className="leading-6 text-secondary-dark line-clamp-3 text-sm font-medium">
            {BriefDescription}
          </p>
          <Link href={`/blogs/details?slug=${Slug}`} className="">
            <button
              type="button"
              className="overflow-y-hidden  mt-5 mx-auto bg-white py-2 px-6 border font-semibold rounded-full flex items-center relative  before:absolute before:bottom-0 before:left-0 before:bg-primary-main before:translate-y-12 group-hover:before:translate-y-0 before:transition-all before:w-full before:h-full before:rounded-full"
            >
              <p className="relative flex items-center group-hover:text-white text-sm">
                Read More <BiChevronRight className="text-xl" />
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
