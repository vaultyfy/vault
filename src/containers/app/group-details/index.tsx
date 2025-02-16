import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Text,
  VStack,
  OrderedList,
  ListItem,
  Checkbox,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { Icon } from "@components/icon";
import { CurrencyNgn } from "@phosphor-icons/react";
import { StackedAvatars } from "@components/customer/ui";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useToastContext } from "@hooks/context";

const avatars = [
  "/img/person-1.svg",
  "/img/person-2.svg",
  "/img/person-3.svg",
  "/img/person-4.svg",
  "/img/person-1.svg",
  "/img/person-4.svg",
];

export const GroupDetails = () => {
  const [approval, setApproval] = useState(false);
  const navigate = useNavigate();

  const { openToast } = useToastContext();

  return (
    <Box width="100%" minH="100dvh">
      <HStack>
        <IconButton
          aria-label="back button"
          icon={<Icon name="arrow-left" />}
          bg="transparent"
          onClick={() => navigate({ to: ".." })}
        />
        <Text
          fontSize={{ base: "20px", lg: "24px" }}
          fontWeight="400"
          color="var(--text-1)"
          _firstLetter={{ textTransform: "capitalize" }}
        >
          Unity savers
        </Text>
      </HStack>
      <Box pl={{ lg: 6 }} mt="8px">
        <Card
          width="full"
          minHeight="312px"
          maxWidth="594px"
          border="0.5px solid #8181816B"
          rounded="xl"
        >
          <CardBody px="19px" py="23px" w="full">
            <VStack spacing="42px" w="full">
              <Flex width="full">
                <Box flex={1}>
                  <Text
                    as="h5"
                    fontSize={{ base: "16px", lg: "20px" }}
                    fontFamily="var(--poppins)"
                    color={"#000000"}
                    fontWeight="medium"
                    textTransform="capitalize"
                  >
                    Unity Saver
                  </Text>
                  <HStack spacing="3px" mt="2px">
                    <Flex
                      rounded="full"
                      px={4}
                      py={1}
                      bg="var(--main)"
                      alignItems="center"
                    >
                      <CurrencyNgn size={16} weight="duotone" color="white" />
                      <Text
                        as="p"
                        fontSize={{ base: "12px", lg: "14px" }}
                        fontWeight="medium"
                        color="white"
                      >
                        10,000/week
                      </Text>
                    </Flex>
                  </HStack>
                  <Box w="full" mt="28px">
                    <StackedAvatars images={avatars} maxVisible={3} />
                  </Box>
                </Box>
                <VStack spacing="28px" alignItems="flex-end" flex={1}>
                  <Box w="fit-content">
                    <Text
                      as="p"
                      fontSize={{ base: "12px", lg: "14px" }}
                      fontWeight="medium"
                      color="var(--grey)"
                      textAlign="end"
                    >
                      Pay-out
                    </Text>
                    <HStack spacing={2}>
                      <CurrencyNgn
                        size={20}
                        weight="duotone"
                        color="var(--main)"
                        style={{
                          fontWeight: "bold",
                        }}
                      />
                      <Text
                        as="h5"
                        fontSize={{ base: "16px", lg: "20px" }}
                        color="var(--main)"
                        fontWeight="medium"
                      >
                        100,000
                      </Text>
                    </HStack>
                  </Box>
                  <Box w="fit-content">
                    <Text
                      as="p"
                      fontSize={{ base: "12px", lg: "18px" }}
                      fontWeight="medium"
                      color="var(--grey)"
                    >
                      Start date
                    </Text>
                    <Text
                      as="p"
                      fontSize={{ base: "14px", lg: "18px" }}
                      fontWeight="medium"
                      color="var(--text-1)"
                    >
                      24th Nov 2025
                    </Text>
                  </Box>
                </VStack>
              </Flex>
              <Text
                as="p"
                fontSize={{ base: "14px", lg: "16px" }}
                fontWeight="medium"
                color="var(--text-1)"
              >
                This group is designed for parents and guardians saving for
                school fees and supplies. Let’s plan ahead and make the
                back-to-school season stress-free
              </Text>
            </VStack>
          </CardBody>
        </Card>
        <VStack
          w="full"
          minHeight="368px"
          maxWidth="594px"
          rounded="xl"
          bgGradient="var(--main-gradient)"
          mt="1rem"
          color="white"
          px="10px"
          py="21px"
          spacing="18px"
          alignItems="stretch"
        >
          <Text
            fontFamily="var(--clash-grotesk-500)"
            fontSize="21px"
            fontWeight="medium"
          >
            Note
          </Text>
          <OrderedList spacing="18px">
            <ListItem>
              <Text
                fontFamily="var(--poppins)"
                fontWeight="medium"
                fontSize={{ base: "14px", lg: "16px" }}
              >
                If a participant misses two payment deadlines, a 5% penalty will
                be applied to their next contribution, and their payout will be
                delayed by the same number of days, weeks, or months missed
              </Text>
            </ListItem>
            <ListItem>
              <Text
                fontFamily="var(--poppins)"
                fontWeight="medium"
                fontSize={{ base: "14px", lg: "16px" }}
              >
                Missing three payment deadlines will result in a temporary
                account suspension, preventing the user from joining or creating
                new thrift groups until all outstanding contributions are
                settled.
              </Text>
            </ListItem>
            <ListItem>
              <Text
                fontFamily="var(--poppins)"
                fontWeight="medium"
                fontSize={{ base: "14px", lg: "16px" }}
              >
                If a participant misses two payment deadlines, a 5% penalty will
                be applied to their next contribution, and their payout will be
                delayed by the same number of days, weeks, or months
                missedFailure to meet four payment deadlines will lead to the
                forfeiture of all previously contributed funds and a permanent
                account block.
              </Text>
            </ListItem>
          </OrderedList>
          <Checkbox
            colorScheme="whiteAlpha"
            iconColor="white"
            borderColor="white"
            bg="transparent"
            display="flex"
            alignItems="center"
            sx={{
              ".chakra-checkbox__control": {
                border: "2px solid white",
                borderRadius: "6px",
                width: "24px",
                height: "24px",
                background: "transparent",
              },
              ".chakra-checkbox__control[data-checked]": {
                bg: "transparent",
                borderColor: "white",
              },
              ".chakra-checkbox__control[data-checked] svg": {
                stroke: "white",
                width: "12px",
                height: "12px",
              },
              ".chakra-checkbox__label": {
                color: "white",
                fontSize: "12.5px",
                fontWeight: "normal",
                fontFamily: "var(--open-sans)",
              },
            }}
            onChange={(e) => setApproval(e.target.checked)}
          >
            Yes I understand
          </Checkbox>
        </VStack>

        <Flex
          width="full"
          maxWidth="594px"
          sx={{
            justifyContent: { base: "center", lg: "flex-end" },
          }}
          mt="1.5rem"
        >
          <Button
            width={{ base: "158px", lg: "230px" }}
            px="4px"
            py="16px"
            height="50px"
            rounded="full"
            bgColor="var(--main)"
            fontFamily="var(--poppins)"
            fontWeight="medium"
            fontSize={{ base: "12px", lg: "14px" }}
            color="#ffffff"
            _hover={{ bgColor: "var(--main)" }}
            _active={{ bgColor: "var(--main)" }}
            _focus={{ bgColor: "var(--main)" }}
            onClick={() => {
              approval
                ? navigate({ to: "/dashboard/explore" })
                : openToast("Please agree before proceeding.", "warning");
            }}
          >
            Proceed to join
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
