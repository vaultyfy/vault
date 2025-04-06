import { Box, BoxProps } from "@chakra-ui/react";

interface ContainerProps extends BoxProps {
  width?: string;
  height?: string;
  children: React.ReactNode;
}

export const Container = ({
  width = "447px",
  height,
  children,
  ...props
}: ContainerProps) => {
  return (
    <Box
      width={width}
      py="15px"
      px="15px"
      rounded="10px"
      background="#ffffff"
      shadow="md"
    >
      {children}
    </Box>
  );
};
