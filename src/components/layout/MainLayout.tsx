"use client";

import { PropsWithChildren, useEffect } from "react";
import { Header } from "./header/header";
import { Box, useColorScheme } from "@mui/material";
import { Footer } from "./footer";

export const Layout = ({ children }: PropsWithChildren) => {
  const { setMode } = useColorScheme();

  useEffect(() => {
    setMode("dark");
  }, [setMode]);

  return (
    <Box className="h-[100%]">
      <Header />
      <Box className="app-body pt-[70px]">{children}</Box>
      <Footer />
    </Box>
  );
};
