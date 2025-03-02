import { GroupDetails } from "@containers/console/thrift-group-mgmt/group-details";
import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/console/group-mgmt/group-details")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout>
      <GroupDetails />
    </AppLayout>
  );
}
