import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { LayoutProps } from "@layouts/home-layout";
import { Sidebar } from "./sidebar";

export const AppLayout = ({ children }: Readonly<LayoutProps>) => {
  return (
    <Flex minH="100dvh">
      <Sidebar />

      <Box width="100%">{children}</Box>
    </Flex>
  );
};
