import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@layouts/app-layout";
import { Loan } from "@containers/app/loan-me";
import { MetaData } from "@components/metadata";

export const Route = createFileRoute("/dashboard/loan-me/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <MetaData
        pageTitle="Loan Me &mdash; Vaultyfy"
        url="vaultify.vercel.app"
      />
      <AppLayout routeTitle="Loan Me">
        <Loan />
      </AppLayout>
    </>
  );
}
