import { Box } from "@chakra-ui/react"

interface ChartTooltipProps {
  active?: boolean;
  payload?: any[];
}

export const ChartTooltip = ({ active, payload }: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <Box position="relative">
        <Box
          bg="linear-gradient(104.4deg, #1CCFBD 1.7%, #2C9BF0 105.41%)"
          px={4}
          py={2}
          borderRadius="full"
          color="white"
          textAlign="center"
          minW="80px"
          transform="translateX(-50%)"
          boxShadow="lg"
          filter="drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
        >
          {`${payload[0].value / 1000}k`}
        </Box>
      </Box>
    );
  }
  return null;
};
