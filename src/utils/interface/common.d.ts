import { ReactElement, ReactNode } from "react";
import { Settings } from "react-slick";
import { IconType } from "react-icons";
import { StaticImageData } from "next/image";

export interface ISlickCarouselProps {
  setting: Settings;
  children: ReactNode;
}

interface FormValues {
  [key: string]: string;
}

export interface IWhyChooseUsCard {
  title: string;
  icon: IconType;
  detail: string[];
}

export interface IServices {
  title: string;
  icon: IconType;
  detail: string;
}

export interface ITestimonialCard {
  ID: number;
  Name: string;
  Description: string;
  UserDetails: string;
  Image: string;
}

export interface IUserInRoles {
  ID: number;
  UserId: number;
  RoleId: number;
  Role: {
    ID: number;
    Name: string;
    Description: string;
  };
}

export interface IUsersInfo {
  ID: number;
  Name: string;
  Email: string;
  Phone: string;
  Image: string;
  IsActive: boolean;
  IsApproved: boolean;
  UserInRoles: IUserInRoles[];
}

export interface TLink {
  href: string;
  title: string;
  active?: boolean;
  icon?: IconType;
}

export interface IBreadCrumb {
  pageTitle: string;
  pageDescription?: string | React.JSX.Element;
  links: Array<TLink>;
  image?: any;
}

export type TAccordionData = {
  Question: string;
  Answer: string;
};

export interface TAccordion<T> {
  data: Array<{ [k in keyof T]: T[k] }>;
}

export interface IApiRes<T> {
  status: boolean;
  message: string;
  data: T;
}

export interface IFee {
  ID: number;
  Charge: number;
  Taxes: number;
  Discount: number;

  [key: srting]: any;
}

export interface IFAQ {
  Section: string;
  Question: string;
  Answer: string;

  [key: srting]: any;
}

export interface IServices {
  ID: number;
  CategoryID: number;
  Name: string;
  Details: string;
  BriefDetails: string;
  Image: string;
  Slug: string;
  Fees?: IFee;
  [key: srting]: any;
}

export interface ICourse {
  ID: number;
  CategoryID: number;
  Name: string;
  Details: string;
  BriefDetails: string;
  Image?: string;
  Slug: string;
  Duration?: string;
  variant?: "small" | "medium";
  Fees:number;
  Discount?:number;
  Taxes?:number;
  [key: srting]: any;
}

export interface ICategory {
  ID: number;
  CategoryID: number;
  Name: string;
  Details?: string;
  BriefDetails?: string;
  Image?: string;
  Slug: string;
  courses?: ICourse[];
  services?:IService[];
  [key: srting]: any;
}

export interface IService {
  ID: number;
  CategoryID: number;
  Name: string;
  Details: string;
  BriefDetails: string;
  Image?: string;
  Slug: string;
  [key: srting]: any;
}
export interface INextPageProps {
  params: {
    [key:string]: string;
  };
}

export interface IContactWrapper {
  children?: React.ReactNode;
  title: string;
  subTitle?: string;
}
