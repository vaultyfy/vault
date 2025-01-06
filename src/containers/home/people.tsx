import { MotionBox, MotionImage } from "@config/motion";
import { useDomContentLoaded } from "@hooks/dom-content-loaded";

export type Variants = {
  x: number;
  y: number;
  scale: number;
};

const TRANSITION = {
  duration: 0.3,
  ease: "easeOut",
};

const containerVariants = {
  expanded: {
    scale: 1,
  },
  collapsed: {
    scale: 1,
  },
  hover: {
    scale: 1,
  },
};

const childVariants = {
  expanded: ({ x, y, scale = 1 }: Variants) => ({
    x: x * 1.3,
    y: y * 1.3,
    scale,
    transition: TRANSITION,
  }),
  collapsed: {
    x: 0,
    y: 0,
    scale: 1,
    transition: TRANSITION,
  },
  hover: ({ x, y, scale = 1 }: Variants) => ({
    x,
    y,
    scale,
    transition: TRANSITION,
  }),
};

export const People = () => {
  const { contentLoaded } = useDomContentLoaded();

  return (
    <MotionBox
      position="relative"
      height={{ lg: "471px", md: "380px", base: "450px" }}
      width={{ lg: "471px", md: "400px", base: "98%" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      layout
      variants={containerVariants}
      initial="expanded"
      animate={contentLoaded ? "collapsed" : "expanded"}
      whileHover="hover"
      _hover={{
        cursor: "pointer",
      }}
      mx="auto"
      mt={{ lg: "initial", base: ".4em" }}
    >
      <MotionImage
        layoutId="person-6"
        src="/img/person-6.svg"
        position="absolute"
        top="39%"
        left="40%"
        alt="Woman with curly hair smiling in a colorful blouse"
        custom={{ x: 0, y: 0, scale: 0.9 }}
        variants={childVariants}
        boxSize={{ md: "80px", base: "88px", lg: "initial" }}
      />
      <MotionImage
        layoutId="people-ring"
        src="/img/people-ring.svg"
        custom={{ x: 0, y: 0, scale: 1.2 }}
        variants={childVariants}
        boxSize={{ md: "220px", base: "80%", lg: "initial" }}
      />
      <MotionImage
        src="/img/person-1.svg"
        position="absolute"
        top="0"
        left="0"
        alt="Man with an afro with a yellow vest"
        layoutId="person-1"
        custom={{ x: -30, y: -10 }}
        variants={childVariants}
        boxSize={{ md: "130px", base: "150px", lg: "initial" }}
      />
      <MotionImage
        src="/img/person-2.svg"
        position="absolute"
        top="3%"
        right="20%"
        alt="Woman of african descent in a colorful blouse"
        layoutId="person-2"
        custom={{ x: 28, y: -20 }}
        variants={childVariants}
        boxSize={{ md: "100px", base: "100px", lg: "initial" }}
      />
      <MotionImage
        src="/img/person-3.svg"
        position="absolute"
        top="35%"
        right="-2%"
        alt="Woman with braids"
        layoutId="person-3"
        variants={childVariants}
        custom={{ x: 15, y: 15 }}
        boxSize={{ md: "110px", base: "125px", lg: "initial" }}
      />
      <MotionImage
        src="/img/person-4.svg"
        position="absolute"
        bottom="2%"
        right="34%"
        alt="Fresh kid painted his hair white/brown"
        layoutId="person-4"
        custom={{ x: 0, y: 30 }}
        variants={childVariants}
        boxSize={{ md: "98px", base: "115px", lg: "initial" }}
      />
      <MotionImage
        src="/img/person-5.svg"
        position="absolute"
        top="49%"
        left="1%"
        alt="Man with beard putting on a beanie"
        layoutId="person-5"
        custom={{ x: -40, y: 20 }}
        variants={childVariants}
        boxSize={{ md: "98px", base: "115px", lg: "initial" }}
      />
    </MotionBox>
  );
};
