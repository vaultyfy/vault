import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/console/payments")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout>
      <div>Hello "/console/payments"!</div>
    </AppLayout>
  );
}
