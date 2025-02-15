import {
  Card,
  CardBody,
  HStack,
  VStack,
  Box,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  Menu,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Icon } from "@components/icon";
import { CurrencyNgn } from "@phosphor-icons/react";
import { ChevronDown } from "lucide-react";
import { CustomProgress } from "@components/ui";

interface Props {
  bgColor?: string;
  cardGradient?: string;
  hasProgress?: boolean;
  progressLevel?: number;
  progressColor?: string;
  cardIcon: string;
  cardTitle: string;
  amount?: number | string;
  cycle?: number;
  hasFilter?: boolean;
  paidDate?: string;
  height?: string | number;
  width?: string | number;
  iconBg?: string;
  paidMonths?: number;
}

export const OverviewCard: React.FC<Props> = ({
  bgColor,
  cardGradient,
  hasProgress,
  progressLevel,
  progressColor,
  cardIcon,
  cardTitle,
  amount,
  cycle,
  hasFilter,
  paidDate,
  width,
  height,
  iconBg,
  paidMonths,
}) => {
  return (
    <Card
      bgColor={bgColor || undefined}
      bgGradient={cardGradient}
      width={width || "100%"}
      height={height || "100%"}
      rounded={"lg"}
    >
      <CardBody py="1.2rem" pl="17px" pr="10px">
        <VStack
          justifyContent="space-between"
          alignItems="stretch"
          height="100%"
        >
          <HStack justifyContent={"space-between"}>
            <Flex
              rounded={"full"}
              px={"10px"}
              py={"8px"}
              boxSize={"48px"}
              bgColor={iconBg || "transparent"}
              justifyContent="center"
              alignItems="center"
              shadow={!iconBg ? "lg" : undefined}
            >
              <Icon name={cardIcon} />
            </Flex>
            {hasFilter ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDown color="#f8f8f8" size={14} />}
                  px="16px"
                  py="8px"
                  bgColor="var(--overview-card-secondary)"
                  rounded="20px"
                  color="#fff"
                  _hover={{
                    bgColor: "var(--overview-card-secondary)",
                    color: "#fff",
                  }}
                  _focus={{
                    bgColor: "var(--overview-card-secondary)",
                    color: "#fff",
                  }}
                  _active={{
                    bgColor: "var(--overview-card-secondary)",
                    color: "#fff",
                  }}
                >
                  month
                </MenuButton>
                <MenuList
                  px="10px"
                  py="8px"
                  border="none"
                  bgColor="var(--overview-card-secondary)"
                >
                  <MenuItem bgColor="transparent" color="#ffffff">
                    month
                  </MenuItem>
                  <MenuItem bgColor="transparent" color="#ffffff">
                    year
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Box
                px="16px"
                py="8px"
                rounded="20px"
                bgColor={cardGradient || "transparent"}
                shadow={"lg"}
              >
                <Text
                  fontFamily={"var(--poppins)"}
                  fontWeight={"semibold"}
                  fontSize={"12px"}
                  lineHeight={"17px"}
                  color="#fff"
                >
                  Paid | {paidDate}
                </Text>
              </Box>
            )}
          </HStack>
          {hasProgress && (
            <HStack spacing={"0.5rem"}>
              <CustomProgress value={progressLevel!} />
              {paidMonths && (
                <Box
                  bgColor="var(--overview-card-secondary)"
                  py={1}
                  px={4}
                  rounded={"10px"}
                >
                  <Text
                    fontFamily={"var(--poppins)"}
                    fontSize={"12px"}
                    color="#fff"
                    fontWeight={"medium"}
                  >
                    {paidMonths} | 12
                  </Text>
                </Box>
              )}
            </HStack>
          )}
          <VStack
            h="fit-content"
            color="#fff"
            minH="79.5px"
            alignItems="space-between"
          >
            <Text
              as="p"
              fontFamily={"var(--poppins)"}
              fontSize={{ base: "12px", lg: "16px" }}
              fontWeight={"medium"}
            >
              {cardTitle}
            </Text>
            {amount && (
              <Flex alignItems="center">
                <CurrencyNgn size={28} color="#ffffff" weight="duotone" />
                <Text
                  as="h4"
                  fontFamily="var(--clash-grotesk-700)"
                  fontSize="28px"
                >
                  {amount}
                </Text>
              </Flex>
            )}
            {cycle && (
              <Text
                as="h4"
                display="flex"
                alignItems="center"
                fontFamily="var(--clash-grotesk-variable)"
                fontWeight={700}
                fontSize="28px"
              >
                {cycle}
                <Box as="sub" fontWeight={200}>
                  cycle completed
                </Box>
              </Text>
            )}
          </VStack>
        </VStack>
      </CardBody>
    </Card>
  );
};
