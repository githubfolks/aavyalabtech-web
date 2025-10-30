import React from "react";
import { IconType } from "react-icons";

interface ICardProps {
  icon: IconType;
  title: string;
  detail: string[];
}
const AvyaCard: React.FC<ICardProps> = ({ icon, title, detail }) => {
  const Icon = icon;
  return (
    <div className="shadow-xl drop-shadow-lg rounded-lg md:p-7 md:mb-0 mb-5 border border-gray-300  bg-white/25 backdrop-blur-md p-5">
      <Icon className="text-6xl mb-3 md:mb-0 text-primary-main" />

      <h3 className="text-2xl md:pl-3 md:mt-2 text-secondary-dark font-bold ">
        {title}
      </h3>

      <ul className="list-outside list-disc pl-3 mt-3 leading-8 md:text-xl">
        {detail?.map((d) => {
          return (
            <li key={d} className="text-secondary-light">
              {d}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AvyaCard;
