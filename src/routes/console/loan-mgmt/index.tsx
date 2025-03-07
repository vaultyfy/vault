import { LoanManagement } from "@containers/console/loan-mgmt";
import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/console/loan-mgmt/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout routeTitle="Loan Management">
      <LoanManagement />
    </AppLayout>
  );
}
