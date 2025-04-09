import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FileRouteTypes } from "../../routeTree.gen";
import { AuthCarousel } from "./carousel";
import { useCurrentPath } from "@hooks/current-path";

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
  const pathname = useCurrentPath();

  return (
    <Flex px="1em" py=".6em">
      <AuthCarousel currentRoute={currentRoute} />

      <Box
        position="relative"
        width={{
          lg: ["/auth/forgot-password", "/auth/reset-password"].includes(
            String(currentRoute),
          )
            ? "100%"
            : "60%",
          md: "100%",
          base: "100%",
        }}
        height={{ lg: "100vh", base: "96vh", md: "98vh" }}
        display="flex"
        justifyContent="center"
        alignItems={{ lg: "center", md: "center", base: "start" }}
      >
        {children}
        <Box
          left="0"
          right="0"
          bottom={{ lg: "20", md: "20", base: "10" }}
          position="absolute"
          display="flex"
          justifyContent="center"
        >
          <Text
            fontSize="14px"
            width={{ lg: "300px", md: "100%", base: "100%" }}
            whiteSpace="wrap"
            textAlign="center"
            color="var(--dark)"
          >
            By signing up you have agreed to our{" "}
            <Text as="span" color="var(--primary)">
              terms of services
            </Text>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};
