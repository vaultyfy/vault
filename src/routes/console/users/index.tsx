import { Users } from "@containers/console/users";
import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/console/users/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout routeTitle="Users">
      <Users />
    </AppLayout>
  );
}
