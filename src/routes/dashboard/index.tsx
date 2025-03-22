import { MetaData } from "@components/metadata";
import { Dashboard } from "@containers/app";
import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";
import { requireAuth } from "@utils/route-guard";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
  beforeLoad: requireAuth(),
});

function RouteComponent() {
  return (
    <>
      <MetaData
        pageTitle="Dashboard &mdash; Vaultify"
        url="vaultify.vercel.app"
      />
      <AppLayout routeTitle="Welcome back">
        <Dashboard />
      </AppLayout>
    </>
  );
}
