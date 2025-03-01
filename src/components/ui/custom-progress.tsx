import { Box, Progress as ChakraProgress } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ProgressProps {
  value: number;
  size?: number;
  height?: string | {};
  borderRadius?: string;
  type?: "linear" | "circular";
}

export const CustomProgress = ({
  value,
  size = 100,
  type = "linear",
  height = "8px",
  borderRadius = "10px",
}: ProgressProps) => {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  if (type === "circular") {
    return (
      <Box position="relative" width={size} height={size}>
        <Box
          as={motion.svg}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          position="absolute"
          transform="rotate(110deg)"
        >
          <defs>
            <linearGradient
              id="progressGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" style={{ stopColor: "#1ccfbd" }} />
              <stop offset="100%" style={{ stopColor: "#2c9bf0" }} />
            </linearGradient>
          </defs>

          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#42545F"
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={circumference * 1}
            strokeLinecap="round"
          />

          <motion.circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            initial={{ strokeDashoffset: circumference }}
            animate={{
              strokeDashoffset:
                circumference - (value / 100) * circumference * 0.9,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </Box>
      </Box>
    );
  }

  return (
    <Box
      position="relative"
      width="100%"
      height={height}
      bg="var(--grey-sec)"
      borderRadius={borderRadius}
      overflow="hidden"
    >
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          height: "100%",
          background: "linear-gradient(to right, #1ccfbd, #2c9bf0)",
          borderRadius: borderRadius,
        }}
      />
    </Box>
  );
};
