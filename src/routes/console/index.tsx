import { AdminConsole } from "@containers/console";
import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/console/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout>
      <AdminConsole />
    </AppLayout>
  );
}
