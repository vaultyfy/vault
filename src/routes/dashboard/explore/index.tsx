import { MetaData } from "@components/metadata";
import { Explore } from "@containers/app";
import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";
import { requireAuth } from "@utils/route-guard";

export const Route = createFileRoute("/dashboard/explore/")({
  component: RouteComponent,
  beforeLoad: requireAuth(),
});

function RouteComponent() {
  return (
    <>
      <MetaData
        url="vaultyfy.vercel.app"
        pageTitle="Explore &mdash; Vaultify"
      />
      <AppLayout routeTitle="Explore">
        <Explore />
      </AppLayout>
    </>
  );
}
