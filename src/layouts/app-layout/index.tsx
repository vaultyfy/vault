import { Box, Flex } from "@chakra-ui/react";
import { LayoutProps } from "@layouts/home-layout";
import { Sidebar } from "./sidebar";

export const AppLayout = ({ children }: Readonly<LayoutProps>) => {
  return (
    <Flex height="100vh">
      <Sidebar />

      <Box width="100%" background="#fff">{children}</Box>
    </Flex>
  );
};
