import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
} from "@chakra-ui/react";
import { LayoutProps } from "@layouts/home-layout";
import { Sidebar } from "./sidebar";

import { AppHeader } from "./header";

export interface AppLayoutProps extends Readonly<LayoutProps> {
  routeTitle: string
}

export const AppLayout = ({ children, routeTitle }: AppLayoutProps) => {
  return (
    <Flex height="100vh" background="#fff">
      <Sidebar />

      <Box width="100%" height="100vh">
        <AppHeader routeTitle={routeTitle} />
        <Box
          width={{
            "2xl": "70%",
            xl: "88%",
            md: "100%",
            base: "100%",
            lg: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Flex>
  );
};
