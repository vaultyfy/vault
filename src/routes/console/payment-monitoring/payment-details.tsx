import { PaymentDetails } from "@containers/console/payment-monitoring/payment-details";
import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/console/payment-monitoring/payment-details",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout routeTitle="Payment Monitoring">
      <PaymentDetails />
    </AppLayout>
  );
}
