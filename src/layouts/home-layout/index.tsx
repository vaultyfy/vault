import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Box, Container } from "@chakra-ui/react";

export interface LayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: Readonly<LayoutProps>) => {
  return (
    <>
      <Header />
      <Box height="fit-content" py=".2rem" pb="2rem">
        {children}
      </Box>
      <Footer />
    </>
  );
};
