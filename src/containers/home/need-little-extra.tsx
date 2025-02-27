import { Box, Button, Text, VStack, Image } from "@chakra-ui/react";
import { ArrowRight } from "@phosphor-icons/react";
import {PrimaryButton} from "@components/ui";
import {useDomContentLoaded} from "@hooks/dom-content-loaded";


export default function LoanHeroSection() {
  const { contentLoaded } = useDomContentLoaded();
  return (
    <Box
      w="100vw"
      h="695px"
      bgGradient="linear(to-r, #2C9BF0, #1CCFBD)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      px={4}
    >
      <Box>
        <Text fontSize={'70px'} fontWeight="600" color="#FFFFFF" width={'498px'} lineHeight="62px"   marginBottom="20px">
          Need a little extra? We've got you!
        </Text>

        <Box position="relative" display="flex" justifyContent="center">
          <Text fontSize={'20px'} fontWeight={400} color="#FFFFFF" maxW="lg" textAlign="center" lineHeight={'30px'} marginBottom={'15px'}>
            Life happens, and we're here to support you. At Vaultify, your dedication and
            consistency earn you the trust to get extra when you need it.
          </Text>
          <Box>
            <Image
              src="img/RectangleGirl.svg"
              alt="Background Image"
              borderRadius="md"
              boxSize="173px"
              position="absolute"
              objectFit="contain"
              bottom="-20px"
              left="35%"
              zIndex="1"
            />
            <Image
              src="img/RectangleBoy.png"
              alt="Middle Image"
              borderRadius="md"
              boxSize="150px"
              position="absolute"
              objectFit="contain"
              bottom="-10px"
              left="37.5%"
              zIndex="2"
            />
            <Image
              src="img/RectangleWallet.png"
              alt="Top Image"
              borderRadius="md"
              boxSize="120px"
              position="absolute"
              objectFit="contain"
              bottom="5px"
              left="40.2%"
              zIndex="3"
            />
          </Box>
        </Box>
        <Box display={'flex'} justifyContent={'center'}><PrimaryButton text="get load" contentLoaded={contentLoaded} /></Box>
      </Box>
    </Box>
  );
}
