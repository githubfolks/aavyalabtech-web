"use client"
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "./Headers";
import { theme } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
const Footer = dynamic(() => import("./Footer"))


const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {children}
      <Suspense fallback={<>Loading ...</>}><Footer /></Suspense>
    </ThemeProvider>
  );
};

export default Layout;
