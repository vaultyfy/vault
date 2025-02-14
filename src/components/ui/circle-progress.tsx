import { Box, Image, Text } from "@chakra-ui/react";
import { MAIN_GRADIENT } from "@utils/constants";
import { motion } from "motion/react";
import React from "react";

interface CircleProgressProps {
  progress?: number;
  size?: number;
  strokeWidth?: number;
  imageUrl?: string;
  backgroundColor?: string;
  progressColor?: string;
}

export const CircleProgress = ({
  progress = 100,
  size = 200,
  strokeWidth = 8,
  imageUrl = "/img/user-default-avatar.svg",
  backgroundColor = "#1e293b",
}: CircleProgressProps) => {
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

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
          stroke={backgroundColor}
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
              circumference - (progress / 100) * (circumference * 0.9),
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
      </Box>

      <Box
        position="absolute"
        borderRadius="full"
        overflow="hidden"
        width={size - strokeWidth * 8}
        height={size - strokeWidth * 8}
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Image
          src={imageUrl}
          alt="User avatar"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>

      <Box
        position="absolute"
        bottom="-8px"
        left="48.5%"
        transform="translateX(-50%)"
        width="60px"
      >
        <Text
          fontSize="15px"
          fontWeight="500"
          textAlign="center"
          bgClip="text"
          bgGradient={MAIN_GRADIENT}
        >
          {progress}%
        </Text>
      </Box>
    </Box>
  );
};
