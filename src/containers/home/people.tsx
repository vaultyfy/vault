import { Box, Text, Image } from "@chakra-ui/react";
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
      _hover={{ cursor: "pointer" }}
      mx="auto"
      mt={{ lg: "initial", base: ".6em" }}
    >
      <MotionImage
        layoutId="handsome-young-african-american"
        src="/img/handsome-young-african-american.png"
        position="absolute"
        custom={{ x: 0, y: 0, scale: 0.9 }}
        variants={childVariants}
        boxSize={{ lg: "100%", md: "90%", base: "100%" }}
        top={'-92px'}
        objectFit="cover"
      />


      <Box
        position="absolute"
        top="2%"
        left="-17%"
        bg="#E0FBFF"
        p={3}
        borderRadius="lg"
        boxShadow="md"
        maxW="50%"
        fontWeight="medium"
        borderTopLeftRadius={'15px'}
        borderBottomRightRadius={'15px'}
        borderBottomLeftRadius={'15px'}
        padding={'20px'}
      >
        <Text fontSize="14px" fontWeight={600}>I need to meet a payment deadline</Text>
      </Box>

      <Box
        position="absolute"
        bottom="26%"
        left="-1%"
        bg="#E0FBFF75"
        p={3}
        borderRadius="lg"
        boxShadow="md"
        maxW="215px"
        height={'82px'}
        fontWeight="medium"
        borderTopLeftRadius={'15px'}
        borderBottomRightRadius={'15px'}
        borderBottomLeftRadius={'15px'}
        padding={'20px'}
      >
        <Text fontSize="14px" fontWeight={600} color={'#222020'}>Hmm, my rent will be due in 5 months</Text>
      </Box>

      <Box
        position="absolute"
        top="5.5%"
        right="-10%"
        bg="white"
        p={3}
        borderRadius="lg"
        boxShadow="lg"
        display="flex"
        alignItems="center"
        maxW="228px"
        height={'82px'}
        border="1px solid #cfd8dc"
        gap={'10px'}
        borderTopRightRadius={'15px'}
        borderBottomRightRadius={'15px'}
        borderBottomLeftRadius={'15px'}
        padding={'20px'}
      >
        <Image
          src="/img/GroupLogo.svg"
          alt="GroupLogo"
          height="41px"
          width="41.93px"
        />
        <Text fontSize="14" fontWeight="600" color={'#222020'}>
          Vaultify has got you covered
        </Text>
      </Box>
    </MotionBox>
  );
};

