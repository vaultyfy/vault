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
  Stack,
} from "@chakra-ui/react";
import { CurrencyNgn } from "@phosphor-icons/react";
import { MyGroupCardProps, StackedAvatars } from "@components/customer/ui";
import React, { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useToastContext } from "@hooks/context";
import { bgs, State } from "@utils/constants";
import dayjs from "dayjs";
import { dicebear } from "@utils/misc";
import { CaretLeft } from "@phosphor-icons/react";
import { joinGroup } from "@mutations/groups";
import { ref } from "yup";
import { Response } from "@utils/types";

interface GroupDetailProps extends Pick<MyGroupCardProps, "data"> {}

export const GroupDetails = ({ data }: GroupDetailProps) => {
  const [approval, setApproval] = useState(false);
  const navigate = useNavigate();
  const { openToast } = useToastContext();
  const [state, setState] = React.useState<State>("idle");

  const avatars = data?.participants?.map((member, index) => {
    const memberBg = bgs[index % bgs.length];
    return `${member.customer?.profilePicture || `${dicebear}?seed=${member?.customer?.name}&size=48&flip=true&backgroundColor=${memberBg}`}`;
  });

  const handleJoinGroup = async () => {
    const groupId: string = data?.groupID || "";
    if (!approval) {
      openToast("Please agree before proceeding.", "warning");
      return;
    }

    try {
      setState("loading");
      const request = await joinGroup(groupId);
      const response: Response = await request?.json();
      if (request?.ok) {
        openToast(response.message, "success");
        navigate({ to: "/dashboard/explore" });
      } else {
        openToast("Failed to join group. Please try again.", "error");
      }
    } catch (error) {
      openToast("An error occurred while joining the group.", "error");
    } finally {
      setState("idle");
    }
  };

  return (
    <Box width="100%" minH="100dvh">
      <HStack gap="0">
        <IconButton
          aria-label="back button"
          icon={<CaretLeft size="20" />}
          bg="transparent"
          _hover={{
            background: "none",
          }}
          onClick={() => navigate({ to: ".." })}
        />
        <Text
          fontSize={{ base: "16px", xl: "24px", lg: "20px" }}
          fontWeight="400"
          color="var(--text-1)"
          _firstLetter={{ textTransform: "capitalize" }}
        >
          {data?.name}
        </Text>
      </HStack>
      <Box pl={{ lg: 6 }} mt="8px" maxWidth="594px">
        <Card
          width="full"
          height="full"
          border="0.5px solid var(--border-muted)"
          rounded="xl"
        >
          <CardBody px="19px" py="23px" w="full">
            <Stack direction="column" gap=".8em">
              <Flex width="full">
                <Box flex={1}>
                  <Text
                    fontSize={{ base: "16px", xl: "18px", lg: "17px" }}
                    color="#000000"
                    fontWeight="500"
                    textTransform="capitalize"
                  >
                    {data?.name && data?.name?.length > 15
                      ? `${data?.name?.substring(0, 16)}...`
                      : data?.name}
                  </Text>
                  <Flex
                    rounded="full"
                    px={4}
                    py={1}
                    bg="var(--main)"
                    width="fit-content"
                    alignItems="center"
                  >
                    <CurrencyNgn size={16} color="white" />
                    <Text
                      fontSize={{ base: "12px", lg: "14px" }}
                      fontWeight=""
                      color="white"
                    >
                      {data?.contributionAmount}/{data?.contributionFrequency}
                    </Text>
                  </Flex>

                  <Box w="full" mt="28px">
                    {avatars?.length === 0 ? (
                      <Text fontSize="12px" color="var(--grey)">
                        {avatars?.length} members
                      </Text>
                    ) : (
                      <StackedAvatars images={avatars} maxVisible={3} />
                    )}
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
                    <HStack gap="0">
                      <CurrencyNgn
                        size={20}
                        weight="duotone"
                        color="var(--main)"
                        style={{
                          fontWeight: "bold",
                        }}
                      />
                      <Text
                        fontSize={{ base: "16px", lg: "20px" }}
                        color="var(--main)"
                        fontWeight="500"
                      >
                        {data?.payOutAmount}
                      </Text>
                    </HStack>
                  </Box>
                  <Box w="fit-content">
                    <Text
                      as="p"
                      fontSize={{ base: "12px", lg: "14px" }}
                      fontWeight="400"
                      color="var(--grey)"
                      textAlign="right"
                    >
                      Start date
                    </Text>
                    <Text
                      as="p"
                      fontSize={{ base: "14px", lg: "18px" }}
                      fontWeight="400"
                      color="var(--dark)"
                    >
                      {dayjs(data?.startDate).format("DD MMM, YYYY")}
                    </Text>
                  </Box>
                </VStack>
              </Flex>
              <Text
                mt=".8em"
                fontSize={{ base: "14px", lg: "16px" }}
                fontWeight="400"
                color="var(--text-1)"
              >
                {data?.groupDescription}
              </Text>
            </Stack>
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
            fontWeight="400"
            fontSize={{ base: "12px", lg: "14px" }}
            color="#ffffff"
            _hover={{ bgColor: "var(--main)" }}
            onClick={handleJoinGroup}
            isLoading={state === "loading"}
          >
            Proceed to join
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
