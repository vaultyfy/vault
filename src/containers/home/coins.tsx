import { MotionBox, MotionImage } from "@config/motion";

export const Coins = () => {
  return (
    <MotionBox
      position="relative"
      height="600px"
      backgroundImage="url(/img/lines.svg)"
    >
      <MotionImage
        position="absolute"
        top="40%"
        left="44%"
        src="/img/coin-2-center.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
      />

      <MotionImage
        position="absolute"
        top="32%"
        right={{ lg: "-9%", md: "4%", base: "0%" }}
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
        src="/img/coin-5.svg"
      />

      <MotionImage
        position="absolute"
        bottom="1%"
        right="2%"
        src="/img/coin-12.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
      />

      <MotionImage
        position="absolute"
        bottom="3%"
        left="48%"
        src="/img/coin-7.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
      />

      <MotionImage
        position="absolute"
        bottom="10%"
        left="1%"
        src="/img/coin-4.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
      />

      <MotionImage
        position="absolute"
        bottom="30%"
        left="1%"
        src="/img/coin-1.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
      />

      <MotionImage
        position="absolute"
        bottom="16%"
        left="60%"
        src="/img/coin-9.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
      />

      <MotionImage
        position="absolute"
        top="16%"
        left="20%"
        src="/img/coin-7.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
      />

      <MotionImage
        position="absolute"
        top="1%"
        right="36%"
        src="/img/coin-11.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
      />

      <MotionImage
        position="absolute"
        top="-3%"
        right="6%"
        src="/img/coin-3.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
      />

      <MotionImage
        position="absolute"
        top="18%"
        right="8%"
        src="/img/coin-10.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
      />
    </MotionBox>
  );
};
