"use client";
import React from "react";
import dynamic from "next/dynamic";
const CountUpComponentWithSSR = dynamic(() => import("react-countup"), {
  ssr: true,
});

const CountUp: React.FC<{ value: number }> = (props) => {
  const { value } = props;
  return (
    <CountUpComponentWithSSR
      scrollSpyOnce={true}
      enableScrollSpy={true}
      end={value}
    />
  );
};

export default CountUp;
