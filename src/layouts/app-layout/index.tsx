import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { LayoutProps } from "@layouts/home-layout";
import { Sidebar } from "./sidebar";

export const AppLayout = ({ children }: Readonly<LayoutProps>) => {
  return (
    <Flex minH="100dvh">
      <Sidebar />
      <Box
        marginLeft={{ lg: "256px", base: 0 }}
        width="100%"
        minH="100vh"
        border="2px solid black"
      >
        {children}
      </Box>
    </Flex>
  );
};
