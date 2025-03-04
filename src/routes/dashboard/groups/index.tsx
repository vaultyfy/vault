import { MetaData } from "@components/metadata";
import { Groups } from "@containers/app";
import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/groups/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <MetaData pageTitle="Groups &mdash; Vaultyfy" url="vaultify.vercel.app" />

      <AppLayout routeTitle="My groups">
        <Groups />
      </AppLayout>
    </>
  );
}
