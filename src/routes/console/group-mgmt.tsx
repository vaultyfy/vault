import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/console/group-mgmt")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout>
      <div>Hello "/console/group-mgmt"!</div>
    </AppLayout>
  );
}
