import { borderGradient } from "@utils/constants";
import { Box } from "@chakra-ui/react";
export const GradientContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Box sx={borderGradient}>
      <Box>{children}</Box>
    </Box>
  );
};
