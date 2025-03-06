import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";
import { Text } from "@chakra-ui/react";

export const Route = createFileRoute("/console/rules")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout routeTitle="Rules and enforments">
      <Text>Rules</Text>
    </AppLayout>
  );
}
