import {
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Flex,
  IconButton,
  PopoverHeader,
  PopoverCloseButton,
  PopoverArrow,
  HStack,
  Box,
  VStack,
} from "@chakra-ui/react";
import { CaretRight, CaretLeft } from "@phosphor-icons/react";
import { CalendarDays } from "lucide-react";
import { Calendar } from "./calendar";

interface Props {
  height?: string;
  borderColor?: string;
  color?: string;
  iconColor?: string;
}

export const CalendarPopover = ({
  height = "40px",
  borderColor,
  color,
  iconColor,
}: Props) => {
  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Button
          bgGradient="var(--main-gradient-lighten)"
          boxSize={"50px"}
          rounded="full"
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          _hover={"var(--main-gradient-lighten)"}
          _focus={"var(--main-gradient-lighten)"}
          _active={"var(--main-gradient-lighten)"}
        >
          <Box boxSize="27px" position={"relative"}>
            <CalendarDays color="#292d32" size={27} />
            <Box
              boxSize={"8px"}
              bgColor={"var(--deep-blood)"}
              rounded={"full"}
              position={"absolute"}
              top="0"
              right="0"
            />
          </Box>
        </Button>
      </PopoverTrigger>

      <PopoverContent width="450px" pt={6}>
        <PopoverHeader borderBottom="none">
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            px={"1em"}
          >
            <IconButton
              aria-label="Previous saving groups"
              icon={<CaretLeft color="#000" weight="bold" />}
              // onClick={() => changeMonth(-1)}
              size="sm"
              bgColor={"transparent"}
              _hover={{
                bgColor: "transparent",
              }}
            />
            <VStack spacing={2}>
              <Text
                fontSize={"20px"}
                fontWeight="medium"
                textTransform={"capitalize"}
                color="#000000"
              >
                unity savers
              </Text>
              <Text
                fontSize={"14px"}
                fontWeight="light"
                color="#ffffff"
                px={5}
                rounded="3xl"
                bgColor={"var(--main)"}
              >
                N10000/week
              </Text>
            </VStack>
            <IconButton
              aria-label="Next saving groups"
              icon={<CaretRight color="#000" weight="bold" />}
              // onClick={() => changeMonth(-1)}
              size="sm"
              bgColor={"transparent"}
              _hover={{
                bgColor: "transparent",
              }}
            />
          </Flex>
        </PopoverHeader>

        <PopoverCloseButton />
        <PopoverArrow />

        <PopoverBody pt="1rem">
          <Flex columnGap={4} w="full" px="1em">
            <Box flex="1">
              <Text
                as="span"
                fontSize="14px"
                fontWeight={"normal"}
                color="var(--grey)"
              >
                Due date
              </Text>
              <HStack spacing={2}>
                <Text
                  as="p"
                  fontFamily={"poppins"}
                  fontSize={"44px"}
                  fontWeight={"light"}
                  bgClip="text"
                  bgGradient={"var(--main-gradient)"}
                >
                  23
                </Text>
                <Box>
                  <Text
                    as="p"
                    fontFamily="var(--poppins)"
                    fontSize={"18px"}
                    fontWeight={"medium"}
                    color="#000"
                  >
                    November - 2025
                  </Text>
                  <Text
                    as="span"
                    fontFamily="var(--poppins)"
                    fontSize={"14px"}
                    fontWeight={"normal"}
                    color="var(--grey)"
                  >
                    Saturay
                  </Text>
                </Box>
              </HStack>
            </Box>
            <VStack justifyContent={"space-between"} pb={2}>
              <Text
                fontSize={"20px"}
                color="#000"
                textAlign={"right"}
                fontFamily="var(--poppins)"
                fontWeight={"medium"}
              >
                N100,000
              </Text>
              <Button
                py="13px"
                px="4px"
                width="122px"
                rounded={"3xl"}
                bgGradient={"var(--main-gradient)"}
                _hover={{ bgGradient: "var(--main-gradient)" }}
              >
                <Text
                  fontFamily={"var(--poppins)"}
                  fontWeight={"medium"}
                  fontSize="14px"
                  color={"#ffffff"}
                >
                  Pay now
                </Text>
              </Button>
            </VStack>
          </Flex>
          <Box
            px={"1em"}
            borderTop="2px solid var(--main)"
            mt={"1rem"}
            pt={"1rem"}
          >
            <Calendar />
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
