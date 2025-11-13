import { MetaData } from "@components/metadata";
import { Settings } from "@containers/app";
import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";
import { requireAuth } from "@utils/route-guard";

export const Route = createFileRoute("/dashboard/settings/")({
  component: RouteComponent,
  beforeLoad: requireAuth(),
});

function RouteComponent() {
  return (
    <>
      <MetaData
        url="valutify.vercel.app"
        pageTitle="Settings &mdash; Vaultify"
      />

      <AppLayout routeTitle="Settings">
        <Settings />
      </AppLayout>
    </>
  );
}
