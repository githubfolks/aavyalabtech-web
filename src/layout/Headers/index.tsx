"use client";
import React from "react";
import DesktopHeader from "./desktop/DesktopHeader";
import MobileHeader from "./mobile/MobileHeader";

const Header = () => {
  return (
    <>
      <div className="hidden xl:block  ">
        <DesktopHeader />
      </div>
      <div className="xl:hidden">
        <MobileHeader />
      </div>
    </>
  );
};

export default Header;
