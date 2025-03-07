import { PaymentMonitoring } from "@containers/console/payment-monitoring";
import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/console/payment-monitoring/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout routeTitle="Payment Monitoring">
      <PaymentMonitoring />
    </AppLayout>
  );
}
