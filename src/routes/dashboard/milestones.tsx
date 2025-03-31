import { MetaData } from "@components/metadata";
import { Milestones } from "@containers/app";
import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";
import { requireAuth } from "@utils/route-guard";

export const Route = createFileRoute("/dashboard/milestones")({
  component: RouteComponent,
  beforeLoad: requireAuth(),
});

function RouteComponent() {
  return (
    <>
      <MetaData
        url="vultifier.vercel.app"
        pageTitle="Milestones &mdash; Vaultyfy"
      />
      <AppLayout routeTitle="Welcome back">
        <Milestones />
      </AppLayout>
    </>
  );
}
