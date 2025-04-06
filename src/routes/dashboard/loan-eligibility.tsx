import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@layouts/app-layout";
import { LoanEligibility } from "@containers/app";

export const Route = createFileRoute("/dashboard/loan-eligibility")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout routeTitle="Loan Me">
      <LoanEligibility />
    </AppLayout>
  );
}
