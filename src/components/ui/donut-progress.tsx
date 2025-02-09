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
    <Box
      position="relative"
      display="inline-block"
      textAlign="center"
      border="2px solid white"
    >
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
      <Text
        fontWeight="bold"
        fontSize="lg"
        color={percentage === 100 ? undefined : "#fff"}
        bgColor="var(--main)"
        border="2px solid white"
        width="fit-content"
        mx="auto"
        px="1rem"
        sx={
          percentage === 100
            ? {
                background: "var(--main-gradient)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
              }
            : {}
        }
        position={"absolute"}
        transform="translate(-50%, -50%)"
        left="50%"
        bottom={"-0.5rem"}
      >
        {percentage}%
      </Text>
    </Box>
  );
};

// import {
//   Box,
//   CircularProgress,
//   CircularProgressLabel,
//   Avatar,
//   Text,
// } from "@chakra-ui/react";

// type AvatarSizes = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

// interface DonutProgressProps {
//   percentage: number;
//   avatarSrc: string;
//   size?: string;
//   avatarSize?: AvatarSizes | string;
//   thickness?: string;
//   color?: string;
// }

// export const DonutProgress: React.FC<DonutProgressProps> = ({
//   percentage,
//   avatarSrc,
//   avatarSize,
//   size = "120px",
//   thickness = "8px",
//   color = "#fff",
// }) => {
//   return (
//     <Box position="relative" display="inline-block" textAlign="center">
//       {/* SVG Gradient Definition */}
//       <svg width="0" height="0">
//         <defs>
//           <linearGradient id="gradientColor" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#ff416c" />
//             <stop offset="100%" stopColor="#ff4b2b" />
//           </linearGradient>
//         </defs>
//       </svg>

//       {/* Circular Progress (Donut) */}
//       <CircularProgress
//         value={percentage}
//         size={size}
//         thickness={thickness}
//         color={percentage === 100 ? "url(#gradientColor)" : color}
//         trackColor="gray.200"
//         capIsRound
//         sx={
//           percentage === 100
//             ? { "& circle": { stroke: "url(#gradientColor)" } }
//             : {}
//         }
//       >
//         {/* Avatar in the center */}
//         <Avatar
//           src={avatarSrc}
//           name="User"
//           size={avatarSize || "md"}
//           position="absolute"
//           top="50%"
//           left="50%"
//           transform="translate(-50%, -50%)"
//           border="2px solid white"
//         />
//       </CircularProgress>

//       {/* Progress Label Outside */}
//       <Text
//         fontWeight="bold"
//         fontSize="lg"
//         color={percentage === 100 ? "#ff4b2b" : "#fff"}
//         bgColor={percentage === 100 ? "transparent" : "var(--main)"}
//         border="2px solid white"
//         width="fit-content"
//         mx="auto"
//         px="1rem"
//         mt="8px"
//       >
//         {percentage}%
//       </Text>
//     </Box>
//   );
// };
