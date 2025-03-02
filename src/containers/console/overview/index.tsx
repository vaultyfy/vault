import { Box, Text, Stack, Button, HStack, VStack } from "@chakra-ui/react";
import { BellDot, CirclePlus } from "lucide-react";
import { ActivitiesTable } from "./activities-table";
import { OverviewCardSection } from "./overview-card";
import { PageHeader } from "../page-header";

export const AdminOverView = () => {
  return (
    <VStack
      width={"100%"}
      gap={"40px"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
    >
      <PageHeader title="Dashboard" />

      <OverviewCardSection />
      <ActivitiesTable />
    </VStack>
  );
};
