import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Avatar,
  Text,
} from "@chakra-ui/react";

type AvatarSizes = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface DonutProgressProps {
  percentage: number;
  avatarSrc: string;
  size?: string;
  avatarSize?: AvatarSizes | string;
  thickness?: string;
  color?: string;
}

export const DonutProgress: React.FC<DonutProgressProps> = ({
  percentage,
  avatarSrc,
  avatarSize,
  color = "#fff",
  size = "120px",
  thickness = "8px",
}) => {
  return (
    <Box position="relative" display="inline-block" textAlign="center">
      {/* Circular Progress (Donut) */}
      <CircularProgress
        value={percentage}
        size={size}
        thickness={thickness}
        color={color && percentage !== 100 ? color : undefined}
        trackColor="var(--pale-grey)"
        capIsRound
        sx={
          percentage === 100
            ? { "& circle": { stroke: "url(var(--main-gradient))" } }
            : {}
        }
        zIndex={10}
      >
        {/* Avatar in the center */}
        <Avatar
          src={avatarSrc}
          name="User"
          size={avatarSize || "md"}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        />
      </CircularProgress>

      {/* Progress Label Outside */}
      {/* <Text
        fontWeight="bold"
        fontSize="lg"
        bgColor="var(--main)"
        width="fit-content"
        rounded="full"
        mx="auto"
        px="1rem"
        position="absolute"
        transform="translate(-50%, -50%)"
        left="50%"
        bottom="-0.5rem"
        sx={{
          color: percentage === 100 ? "transparent" : "#fff",
          background: "var(--main)",
          ...(percentage === 100 && {
            backgroundImage: "var(--main-gradient)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }),
        }}
        zIndex={20}
      >
        {percentage}%
      </Text> */}

      <Box
        position="absolute"
        left="50%"
        bottom="-0.5rem"
        transform="translate(-50%, -50%)"
        width="fit-content"
        mx="auto"
        px="0.5rem"
        bgColor="var(--main)"
        rounded="full"
        zIndex={20}
      >
        <Text
          fontWeight="bold"
          fontSize="lg"
          sx={{
            color: percentage === 100 ? "transparent" : "#fff",
            ...(percentage === 100 && {
              backgroundImage: "var(--main-gradient)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }),
          }}
        >
          {percentage}%
        </Text>
      </Box>
    </Box>
  );
};
