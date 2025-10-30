import React from "react";

const MainTitle: React.FC<{ title: String }> = (props) => {
  const { title } = props;
  return (
    <div className="mb-[80px] relative before:absolute before:-bottom-[50%] before:left-[48%] before:w-[3%] before:h-[2px] before:bg-primary-main after:absolute after:-bottom-[50%] after:left-[51.5%] after:w-[0.2%] after:h-[2px] after:bg-primary-main">
      <h2 className="text-secondary-veryDark text-4xl font-bold text-center">{title}</h2>
    </div>
  );
};

export default MainTitle;
