import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/console/users")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout>
      <div>Hello "/console/users"!</div>
    </AppLayout>
  );
}
