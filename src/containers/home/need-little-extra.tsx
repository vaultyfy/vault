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
              boxSize="200px"
              position="absolute"
              objectFit="contain"
              bottom="-40px"
              left="29%"
              zIndex="1"
            />
            <Image
              src="img/RectangleBoy.png"
              alt="Middle Image"
              borderRadius="md"
              boxSize="190px"
              position="absolute"
              objectFit="contain"
              bottom="-35px"
              left="30%"
              zIndex="2"
            />
            <Image
              src="img/RectangleWallet.png"
              alt="Top Image"
              borderRadius="md"
              boxSize="170px"
              position="absolute"
              objectFit="contain"
              bottom="-27px"
              left="32%"
              zIndex="3"
            />
          </Box>
        </Box>
        <Box display={'flex'} justifyContent={'center'} mt={'30px'}>
          <PrimaryButton text="get load" contentLoaded={contentLoaded} />
        </Box>
      </Box>
    </Box>
  );
}
