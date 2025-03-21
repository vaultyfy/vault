import {
  Card,
  CardBody,
  Flex,
  Box,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import { CurrencyNgn, ArrowRight } from "@phosphor-icons/react";
import { StackedAvatars } from "./stacked-avatars";
import { useNavigate } from "@tanstack/react-router";
import { MyGroupCardProps } from "./my-group-card";
import { dicebear, formatPrice } from "@utils/misc";
import { bgs, State } from "@utils/constants";
import React from "react";
import { getReferalLink } from "@queries/groups";
import { useToastContext } from "@hooks/context";
import { Group } from "@utils/types";
import { useMobileScreens } from "@hooks/mobile-screen";

interface GroupCardProps extends Pick<MyGroupCardProps, "data"> {
  bgColor?: string;
  cardGradient?: string;
  hasGradient?: boolean;
  width?: string;
  height?: string;
  link?: string;
  groups?: Group[];
  groupType: "suggested" | "available";
}

const bgGradient = [
  "/img/frame-1.svg",
  "/img/frame-2.svg",
  "/img/frame-3.svg",
  "/img/frame-4.svg",
];

let currentIndex = 0;

export const GroupCard = ({
  bgColor,
  cardGradient,
  hasGradient,
  width,
  height,
  data,
  groups,
  groupType = "suggested",
}: GroupCardProps) => {
  const getNextGradient = () => {
    const gradient = bgGradient[currentIndex];
    currentIndex = (currentIndex + 1) % bgGradient.length; // Loop back after last item
    return gradient;
  };
  const gradient = getNextGradient();
  const navigate = useNavigate();
  const avatars = data?.participants?.map((member, index) => {
    const memberBg = bgs[index % bgs.length];
    return `${member.customer?.profilePicture || `${dicebear}?seed=${member?.customer?.name?.split(" ")?.[0]}&size=48&flip=true&backgroundColor=${memberBg}`}`;
  });

  const { openToast } = useToastContext();
  const { isSmallViewPort } = useMobileScreens();
  const [state, setState] = React.useState<State>("idle");
  const [selectedGroup, setSelectedGroup] = React.useState<Group>();

  const onShare = async (groupId: string) => {
    const found = groups?.find((group) => group.groupID === groupId);
    if (!found) return;
    setSelectedGroup(found);
    try {
      setState("loading");
      const request = await getReferalLink(groupId);
      const referalLink: string = request?.payload?.referalLink || "";
      if (request?.success && navigator) {
        if (isSmallViewPort) {
          await navigator.share({
            url: referalLink,
            title: `Join ${selectedGroup?.name} on Vaultyfy`,
            text: `Join ${selectedGroup?.name} on Vaultyfy\n\n${selectedGroup?.groupDescription}`,
          });
        } else {
          await navigator.clipboard.writeText(referalLink);
          openToast("The referal link has been copied.", "success");
        }
      }
    } catch (error) {
      console.error(`${(error as Error).message}`);
    } finally {
      setState("idle");
    }
  };

  return (
    <Card
      bgColor={bgColor || "#ffffff"}
      bgGradient={cardGradient}
      width={width || "100%"}
      height={height || "100%"}
      rounded="xl"
      sx={
        gradient && hasGradient
          ? { backgroundImage: `url(${gradient})`, backgroundSize: "cover" }
          : {}
      }
      minW={{ base: "364px", xl: "435px" }}
      px={{ lg: "1.2em", base: ".8em", md: ".6em" }}
    >
      <CardBody py="23px" px="0">
        <Flex w="full" h="full">
          <Flex
            flex={1}
            flexDirection="column"
            h="full"
            rowGap="15px"
            justifyContent="space-between"
          >
            <Box w="full">
              <Text
                fontSize={{ base: "16px", lg: "20px" }}
                fontFamily="var(--poppins)"
                color={hasGradient ? "#ffffff" : "#000000"}
                textTransform="capitalize"
              >
                {data?.name && data?.name?.length < 15
                  ? data?.name
                  : `${data?.name?.substring(0, 16)}...`}
              </Text>
              <HStack spacing="3px" mt="2px">
                <Flex
                  height="25px"
                  borderRadius="18px"
                  px="1em"
                  bg={
                    hasGradient ? "rgba(255, 255, 255, 0.2)" : "var(--grey-007)"
                  }
                  alignItems="center"
                >
                  <Text
                    as="p"
                    fontSize={{ base: "12px", lg: "14px" }}
                    fontWeight="medium"
                    color={hasGradient ? "#ffffff" : "var(--text-1)"}
                  >
                    {formatPrice(Number(data?.contributionAmount))}/
                    {data?.contributionFrequency}
                  </Text>
                </Flex>
              </HStack>
            </Box>
            <Box w="full">
              {avatars?.length === 0 ? (
                <Text
                  fontSize="12px"
                  color={hasGradient ? "#fff" : "var(--grey)"}
                >
                  {avatars?.length} members
                </Text>
              ) : (
                <StackedAvatars images={avatars} maxVisible={3} />
              )}
            </Box>
            <Box w="full">
              <Text
                fontWeight="400"
                fontSize={{ base: "12px", lg: "14px" }}
                color={hasGradient ? "#ffffff" : "var(--grey)"}
              >
                Start date
              </Text>
              <Text
                fontWeight="400"
                fontSize={{ base: "14px", lg: "18px" }}
                color={hasGradient ? "#ffffff" : "var(--text-1)"}
              >
                {data?.startDate}
              </Text>
            </Box>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="flex-end"
            flex={1}
            w="full"
            h="full"
            rowGap={{ lg: "15px", base: "22px" }}
          >
            <Flex
              flexDirection="column"
              h="full"
              justifyContent="space-between"
              w="full"
              flex={2}
              py="2px"
              alignItems="flex-end"
            >
              <Button
                bgColor={hasGradient ? "#ffffff" : "var(--main)"}
                width="66px"
                h="24px"
                rounded="full"
                fontFamily="var(--poppins)"
                fontWeight="regular"
                fontSize="12px"
                isLoading={
                  state === "loading" &&
                  selectedGroup?.groupID === data?.groupID
                }
                _hover={{
                  background: hasGradient ? "#fff" : "var(--main)",
                }}
                onClick={() => onShare(String(data?.groupID))}
                color={hasGradient ? "#4f4f4f" : "var(--text-2)"}
              >
                Share
              </Button>
              <Box w="fit-content">
                <Text
                  as="p"
                  fontSize={{ base: "12px", lg: "14px" }}
                  fontWeight="medium"
                  color={groupType === "suggested" ? "#fff" : "var(--grey)"}
                  textAlign="end"
                >
                  Pay-out
                </Text>
                <Text
                  as="h5"
                  fontSize={{ base: "24px", lg: "28px" }}
                  color={hasGradient ? "#ffffff" : "var(--main)"}
                  fontWeight="bold"
                >
                  {formatPrice(Number(data?.payOutAmount))}
                </Text>
              </Box>
            </Flex>
            <Button
              bg={
                hasGradient
                  ? "rgba(255, 255, 255, 0.2)"
                  : "var(--btn-secondary-7)"
              }
              width={"111px"}
              display="flex"
              columnGap="9px"
              height={{ base: "45px", lg: "52px" }}
              rounded="full"
              pl="31px"
              py="13px"
              pr="4px"
              fontFamily={"var(--poppins)"}
              fontWeight="medium"
              fontSize={"14px"}
              color="var(--main)"
              backdropFilter={hasGradient ? "blur(10px)" : "none"}
              _hover={{
                bg: hasGradient
                  ? "rgba(255, 255, 255, 0.3)"
                  : "var(--btn-secondary-7)",
              }}
              onClick={() =>
                navigate({ to: `/dashboard/explore/${data?.groupID}` })
              }
            >
              <Text color={groupType === "suggested" ? "#fff" : "var(--main)"}>
                Join
              </Text>
              <Box
                boxSize="39px"
                rounded="full"
                bg={hasGradient ? "var(--text-2)" : "var(--main)"}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <ArrowRight
                  size={16}
                  color={hasGradient ? "var(--grey)" : "#ffffff"}
                />
              </Box>
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};
