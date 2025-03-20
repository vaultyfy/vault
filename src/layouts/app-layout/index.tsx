import { Box, Flex, HStack, Button, Text } from "@chakra-ui/react";
import { LayoutProps } from "@layouts/home-layout";
import { Sidebar } from "./sidebar";

import { AppHeader } from "./header";

export interface AppLayoutProps extends Readonly<LayoutProps> {
  routeTitle: string;
}

export const AppLayout = ({ children, routeTitle }: AppLayoutProps) => {
  return (
    <Flex height="100vh" background="#fff">
      <Sidebar />
      <Box
        width={{
          "2xl": "70%",
          xl: "84%",
          md: "100%",
          base: "100%",
          lg: "100%",
        }}
        overflowY="auto"
        height="100vh"
        pb="1em"
      >
        <AppHeader routeTitle={routeTitle} />
        <Box
          pt={{ xl: "1.4em", lg: "1em", md: "-.6em", base: "-1em" }}
          px={{ base: ".6em", "2xl": "2em", xl: "1em", md: ".4em", lg: ".8em" }}
        >
          {children}
        </Box>
      </Box>
    </Flex>
  );
};
