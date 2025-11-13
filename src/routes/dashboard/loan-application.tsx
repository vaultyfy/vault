import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@layouts/app-layout";
import { LoanApplication } from "@containers/app";

export const Route = createFileRoute("/dashboard/loan-application")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout routeTitle="Loan Me">
      <LoanApplication />
    </AppLayout>
  );
}
