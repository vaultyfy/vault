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
    opacity: 0,
    scale,
    transition: TRANSITION,
  }),
  collapsed: {
    x: 0,
    y: 0,
    opacity: 1,
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
      mt={{ lg: "initial", base: ".6em" }}>
      <MotionImage
        layoutId="person-6"
        src="/img/person-6.svg"
        position="absolute"
        top={{ lg: "39%", md: "39%", base: "41%" }}
        left={{ lg: "40%", md: "40%", base: "42%" }}
        alt="Woman with curly hair smiling in a colorful blouse"
        custom={{ x: 0, y: 0, scale: 0.9 }}
        variants={childVariants}
        boxSize={{ md: "80px", base: "70px", lg: "initial" }}
      />
      <MotionImage
        layoutId="people-ring"
        src="/img/people-ring.svg"
        custom={{ x: 0, y: 0, scale: 1.2 }}
        variants={childVariants}
        boxSize={{ md: "220px", base: "70%", lg: "initial" }}
      />
      <MotionImage
        src="/img/person-1.svg"
        position="absolute"
        top={{ lg: "0", md: "0", base: "11%" }}
        left={{ lg: "0", md: "0", base: "12%" }}
        alt="Man with an afro with a yellow vest"
        layoutId="person-1"
        custom={{ x: -30, y: -10 }}
        variants={childVariants}
        boxSize={{ md: "130px", base: "100px", lg: "initial" }}
      />
      <MotionImage
        src="/img/person-2.svg"
        position="absolute"
        top={{ lg: "3%", md: "3%", base: "14%" }}
        right={{ lg: "20%", md: "20%", base: "20%" }}
        alt="Woman of african descent in a colorful blouse"
        layoutId="person-2"
        custom={{ x: 28, y: -20 }}
        variants={childVariants}
        boxSize={{ md: "100px", base: "75px", lg: "initial" }}
      />
      <MotionImage
        src="/img/person-3.svg"
        position="absolute"
        top={{ lg: "35%", md: "35%", base: "42%" }}
        right={{ lg: "-2%", md: "-2%", base: "4%" }}
        alt="Woman with braids"
        layoutId="person-3"
        variants={childVariants}
        custom={{ x: 15, y: 15 }}
        boxSize={{ md: "110px", base: "85px", lg: "initial" }}
      />
      <MotionImage
        src="/img/person-4.svg"
        position="absolute"
        bottom={{ lg: "2%", md: "2%", base: "10%" }}
        right={{ lg: "34%", md: "34%", base: "40%" }}
        alt="Fresh kid painted his hair white/brown"
        layoutId="person-4"
        custom={{ x: 0, y: 30 }}
        variants={childVariants}
        boxSize={{ md: "98px", base: "78px", lg: "initial" }}
      />
      <MotionImage
        src="/img/person-5.svg"
        position="absolute"
        top="49%"
        left={{ lg: "1%", md: "1%", base: "3%" }}
        alt="Man with beard putting on a beanie"
        layoutId="person-5"
        custom={{ x: -40, y: 20 }}
        variants={childVariants}
        boxSize={{ md: "98px", base: "80px", lg: "initial" }}
      />
    </MotionBox>
  );
};
