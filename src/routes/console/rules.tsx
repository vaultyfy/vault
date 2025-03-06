import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/console/rules")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout routeTitle="">
      <div>Hello "/console/rules"!</div>
    </AppLayout>
  );
}
