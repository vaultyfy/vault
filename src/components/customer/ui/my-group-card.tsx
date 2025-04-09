import {
  Card,
  CardBody,
  VStack,
  Flex,
  Box,
  Text,
  HStack,
  ChakraProps,
  Stack,
} from "@chakra-ui/react";
import { CurrencyNgn } from "@phosphor-icons/react";
import { RefreshCcw } from "lucide-react";
import { StackedAvatars } from "./stacked-avatars";
import { Status, GlobalStatus } from "@components/ui";
import { Group } from "@utils/types";
import { bgs, randomBg } from "@utils/constants";
import { dicebear, formatPrice } from "@utils/misc";
import { SetStateAction } from "react";

export interface MyGroupCardProps extends Partial<ChakraProps> {
  bgColor?: string;
  data: Partial<Group>;
  acceptanceStatus?: GlobalStatus;
  setActiveGroup: React.Dispatch<SetStateAction<Partial<Group>>>;
}

export const MyGroupCard = ({
  data,
  bgColor,
  acceptanceStatus,
  setActiveGroup,
  ...props
}: MyGroupCardProps) => {
  const groupData = data;
  const avatars = data?.participants?.map((member, index) => {
    const memberBg = bgs[index % bgs.length];
    return `${member.customer?.profilePicture || `${dicebear}?seed=${member?.customer?.name?.split(" ")?.[0]}&size=48&flip=true&backgroundColor=${memberBg}`}`;
  });

  return (
    <Card
      boxShadow="none"
      width="full"
      height="full"
      maxWidth="100%"
      rounded="10px"
      position="relative"
      bg={bgColor || "#ffffff"}
      _hover={{ cursor: "pointer" }}
      {...props}
      onClick={() => setActiveGroup(data)}
    >
      <CardBody px={{ lg: "1em", md: ".8em", base: ".6em" }} py="23px" w="full">
        {acceptanceStatus && (
          <Box mb="3rem">
            <Status status={acceptanceStatus as GlobalStatus} />
          </Box>
        )}
        <Stack direction="column" gap=".8em">
          <Flex width="full" height="143px">
            <Box flex={1} px="8px">
              <Text
                as="h5"
                fontSize={{ base: "16px", lg: "20px" }}
                fontFamily="var(--poppins)"
                color={"#000000"}
                fontWeight="medium"
                textTransform="capitalize"
              >
                {groupData?.name}
              </Text>
              <HStack spacing="3px" mt="2px">
                <Box
                  py={1}
                  rounded="full"
                  bg="var(--grey-007)"
                  px={{ lg: ".8em", base: ".4em", md: ".6em" }}
                >
                  <Text
                    fontSize={{ base: "12px", lg: "14px" }}
                    fontWeight="400"
                    color="var(--main)"
                    whiteSpace="nowrap"
                    textTransform="lowercase"
                  >
                    {formatPrice(Number(groupData?.contributionAmount))}/
                    {groupData?.contributionFrequency}
                  </Text>
                </Box>
                <HStack
                  gap=".2em"
                  px={2}
                  rounded="full"
                  py={1}
                  bg="var(--grey-007)"
                  alignItems="center"
                >
                  <RefreshCcw
                    size={16}
                    strokeWidth={2.5}
                    color="var(--text-1)"
                  />
                  <Text
                    fontSize={{ base: "12px", lg: "14px" }}
                    fontWeight="400"
                    color="var(--main)"
                  >
                    {groupData?.numberOfcircle}
                  </Text>
                </HStack>
              </HStack>
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
                  fontSize={{ base: "12px", lg: "14px" }}
                  fontWeight="400"
                  color="var(--grey)"
                  textAlign="end"
                >
                  Pay-out
                </Text>

                <Text
                  fontSize={{ base: "16px", lg: "20px" }}
                  color="var(--main)"
                  fontWeight="500"
                >
                  {formatPrice(Number(groupData?.payOutAmount))}
                </Text>
              </Box>

              <Box w="fit-content">
                <Text
                  fontSize={{ base: "12px", lg: "14px" }}
                  fontWeight="400"
                  color="var(--grey)"
                  textAlign="end"
                >
                  End date
                </Text>
                <Text
                  fontSize={{ base: "14px", lg: "18px" }}
                  fontWeight="400"
                  color="var(--dark)"
                >
                  {groupData?.endDate}
                </Text>
              </Box>
            </VStack>
          </Flex>
          <Text
            fontSize={{ base: "14px", lg: "16px" }}
            fontWeight="400"
            color="var(--dark)"
          >
            {groupData?.groupDescription}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
