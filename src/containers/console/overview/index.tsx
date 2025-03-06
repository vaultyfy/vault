import { VStack } from "@chakra-ui/react";

import { ActivitiesTable } from "./activities-table";
import { OverviewCardSection } from "./overview-card";

export const AdminOverView = () => {
  return (
    <VStack
      width={"100%"}
      gap={"40px"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
    >
      <OverviewCardSection />
      <ActivitiesTable />
    </VStack>
  );
};
