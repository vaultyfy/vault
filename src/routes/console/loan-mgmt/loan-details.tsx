import { LoanManagement } from "@containers/console/loan-mgmt";
import { LoanDetails } from "@containers/console/loan-mgmt/loan-details";
import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/console/loan-mgmt/loan-details")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout routeTitle="Loan Management">
      <LoanDetails />
    </AppLayout>
  );
}
