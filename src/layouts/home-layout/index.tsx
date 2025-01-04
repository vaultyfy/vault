import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Box, Container } from "@chakra-ui/react";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: Readonly<HomeLayoutProps>) => {
  return (
    <>
      <Header />
      <Box height="fit-content" py=".2rem">
        {children}
      </Box>
      <Footer />
    </>
  );
};
