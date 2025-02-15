import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Button,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { LayoutProps } from "@layouts/home-layout";
import { Sidebar } from "./sidebar";
import {
  OverviewCard,
  CalendarPopover,
  NotificationPopover,
} from "@components/customer/ui";
import { CreateGroupModal } from "@layouts/modal-layout/create-group";
import { CirclePlus, CalendarDays, Bell } from "lucide-react";
import { useLocation } from "@tanstack/react-router";

export const AppLayout = ({ children }: Readonly<LayoutProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  return (
    <Flex minH="100dvh" bgColor="#ffffff">
      <Sidebar />
      <Box
        marginLeft={{ xl: "13%", lg: "20%", base: 0 }}
        width="100%"
        minH="100vh"
        px={{ base: "0.5rem", lg: "0" }}
        pl={{ lg: "1.5rem" }}
        py={"2.5rem"}
      >
        <Box width={{ base: "100%", lg: "90%" }}>
          <Flex
            justifyContent="space-between"
            display={{ base: "none", lg: "flex" }}
            mb="1rem"
            width="100%"
          >
            {pathname === "/dashboard" ? (
              <Text
                as="h2"
                fontFamily={"var(--clash-grotesk-500)"}
                fontSize={"32px"}
              >
                Welcome back{" "}
                <Text
                  as="span"
                  color="transparent"
                  sx={{
                    background: "var(--main-gradient)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  fontFamily={"var(--clash-grotesk-600)"}
                >
                  Tom
                </Text>
              </Text>
            ) : (
              <Text
                as="h2"
                fontFamily="var(--clash-grotesk-500)"
                fontSize="32px"
                textTransform="capitalize"
              >
                {pathname.split("/").pop()}
              </Text>
            )}
            <Flex columnGap="1rem" alignItems="center">
              <Button
                bgColor="var(--button-secondary-lighten)"
                width="180px"
                height="52px"
                rounded="8px"
                px="9px"
                py="13px"
                leftIcon={<CirclePlus color="#292d32" size="24" />}
                fontFamily={"var(--poppins)"}
                fontWeight="medium"
                fontSize={"14px"}
                _hover={"var(--button-secondary-lighten)"}
                _focus={"var(--button-secondary-lighten)"}
                _active={"var(--button-secondary-lighten)"}
                onClick={() => setIsOpen(true)}
              >
                Create group
              </Button>
              {/* would have to make this into a reusable component */}
              <HStack columnGap="1rem">
                <CalendarPopover />
                <NotificationPopover />
              </HStack>
            </Flex>
          </Flex>

          <CreateGroupModal isOpen={isOpen} onClose={onClose} />

          {children}
        </Box>
      </Box>
    </Flex>
  );
};
