import { AdminOverView } from "@containers/console/overview";
import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/console/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout routeTitle="Dashboard">
      <AdminOverView />
    </AppLayout>
  );
}
