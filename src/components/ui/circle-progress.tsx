import { Box, Image, Text } from "@chakra-ui/react";
import { MAIN_GRADIENT } from "@utils/constants";
import { motion } from "motion/react";

interface CircleProgressProps {
  progress?: number;
  size?: number;
  strokeWidth?: number;
  imageUrl?: string;
  backgroundColor?: string;
  progressColor?: string;
  imgSize?: string;
  gradient?: `${string},${string}`;
  isMilestoneProgress?: boolean;
}

export const CircleProgress = ({
  progress = 100,
  size = 200,
  strokeWidth = 8,
  gradient = "#1ccfbd,#2c9bf0",
  imageUrl = "/img/user-default-avatar.svg",
  imgSize = "100%",
  isMilestoneProgress = false,
  backgroundColor = "#1e293b",
}: CircleProgressProps) => {
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [gradientStart, gradientEnd] = gradient.split(",").map(color => color.trim());
  return (
    <Box position="relative" width={size} height={size}>
      <Box
        as={motion.svg}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        position="absolute"
        transform={isMilestoneProgress ? "rotate(-110deg)" : "rotate(110deg)"}
      >
        <defs>
          <linearGradient
            id={`progressGradient-${gradientStart}-${gradientEnd}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={gradientStart} />
            <stop offset="100%" stopColor={gradientEnd} />
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
          stroke={`url(#progressGradient-${gradientStart}-${gradientEnd})`}
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
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width={`calc(${size}px * ${isMilestoneProgress ? "0.5" : "0.8"})`}
        height={`calc(${size}px * ${isMilestoneProgress ? "0.5" : "0.8"})`}
        zIndex="1"
      >
        <Image
          src={imageUrl}
          alt="User avatar"
          width={imgSize}
          height={imgSize}
          objectFit="cover"
          borderRadius="100%"
        />
      </Box>

      {isMilestoneProgress ? (
        <Box
          position="absolute"
          bottom={`calc(${size}px * 0.125)`}
          left="50%"
          transform="translateX(-50%)"
          textAlign="center"
          zIndex="1"
        >
          <Text
            fontSize={`calc(${size}px * 0.12)`}
            fontWeight="500"
            bgClip="text"
            bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
          >
            {progress}%
          </Text>
        </Box>
      ) : (
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
      )}
    </Box>
  );
};
