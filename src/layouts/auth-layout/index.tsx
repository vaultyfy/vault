import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FileRouteTypes } from "../../routeTree.gen";
import { AuthCarousel } from "./carousel";

export interface AuthLayoutProps {
  children: React.ReactNode;
  currentRoute?: FileRouteTypes["fullPaths"];
}

interface CarouselSlide {
  heading: string;
  description: string;
  image: string;
}

export const SLIDES: CarouselSlide[] = [
  {
    heading: "Reach your financial goals in short time",
    description:
      "Achieve your financial milestones faster with organized group savings",
    image: "/img/auth/woman-with-red-note.png",
  },
  {
    heading: "Smart matching system",
    description:
      "Our platform matches you with a thrift group that fits your savings goals",
    image: "/img/auth/people.png",
  },
  {
    heading: "Flexible contribution plan",
    description:
      "Choose a savings cycle that suits you—daily, weekly, or monthly.",
    image: "/img/auth/dashboard.png",
  },
];

export const AuthLayout = ({ children, currentRoute }: AuthLayoutProps) => {
  const isOTPPage = currentRoute === "/auth/otp";
  const hasSentResetLink =
    typeof window !== "undefined" &&
    localStorage.getItem("resetLinkSent") === "true";

  return (
    <Flex px="1em" py=".6em">
      <AuthCarousel currentRoute={currentRoute} />

      <Box
        width={{
          lg: currentRoute === "/auth/forgot-password" ? "100%" : "60%",
          md: "100%",
          base: "100%",
        }}
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Box>
    </Flex>
  );
};
