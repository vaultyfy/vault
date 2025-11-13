import { MotionBox } from "@config/motion";
import { MapPin } from "@phosphor-icons/react";

export const Marker = () => {
  return (
    <MotionBox
      position="absolute"
      bottom="16%"
      left="27%"
      _hover={{ cursor: "pointer" }}>
      <MapPin color="var(--map-pin)" size="35" weight="fill" />
    </MotionBox>
  );
};
