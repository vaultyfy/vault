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
import { randomBg } from "@utils/constants";
import { dicebear } from "@utils/misc";

export interface MyGroupCardProps extends Partial<ChakraProps> {
  bgColor?: string;
  data: Partial<Group>;
  acceptanceStatus?: GlobalStatus;
}

export const MyGroupCard = ({
  data,
  bgColor,
  acceptanceStatus,
  ...props
}: MyGroupCardProps) => {
  const groupData = data;
  const groupMembersAvatar = groupData?.participants?.map(
    (members) =>
      `${members.customer?.profilePicture || `${dicebear}?seed=${members?.customer?.name}&size=48&flip=true&background=${randomBg}`}`,
  );

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
                <Flex
                  rounded="full"
                  px={{ lg: ".8em", base: ".4em", md: ".6em" }}
                  py={1}
                  bg="var(--grey-007)"
                  alignItems="center"
                >
                  <CurrencyNgn size={16} weight="bold" color="var(--text-1)" />
                  <Text
                    fontSize={{ base: "12px", lg: "14px" }}
                    fontWeight="400"
                    color="var(--main)"
                    whiteSpace="nowrap"
                    textTransform="lowercase"
                  >
                    {groupData?.contributionAmount}/
                    {groupData?.contributionFrequency}
                  </Text>
                </Flex>
                <HStack gap=".2em" px={2} rounded="full" py={1} bg="var(--grey-007)" alignItems="center">
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
                {groupMembersAvatar?.length === 0 ? (
                  <Text fontSize="12px" color="var(--grey)">
                    No members yet...
                  </Text>
                ) : (
                  <StackedAvatars images={groupMembersAvatar} maxVisible={3} />
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
                <HStack gap="0px">
                  <CurrencyNgn
                    size={20}
                    weight="bold"
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
                    {groupData?.payOutAmount}
                  </Text>
                </HStack>
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
