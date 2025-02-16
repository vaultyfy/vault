import { createFileRoute } from "@tanstack/react-router";
import { GroupDetails } from "@containers/app";
import { MetaData } from "@components/metadata";
import { AppLayout } from "@layouts/app-layout";

export const Route = createFileRoute("/dashboard/explore/$groups")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <MetaData
        url="vaultify.vercel.app"
        pageTitle="Explore &mdash; Vaultify"
      />

      <AppLayout>
        <GroupDetails />
      </AppLayout>
    </>
  );
}
