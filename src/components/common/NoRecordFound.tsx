import React from "react";
import { MdOutlineWarning } from "react-icons/md";

const NoRecordFound: React.FC<{ title?: String }> = (props) => {
  const { title } = props;
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full my-5">
        <MdOutlineWarning className="text-primary-main" size={35}/>
      <h2 className="text-secondary-veryDark text-lg font-bold text-center">{title || "No Record Found"}</h2>
    </div>
  );
};

export default NoRecordFound;
