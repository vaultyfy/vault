import { MetaData } from "@components/metadata";
import { Settings } from "@containers/app";
import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <MetaData
        url="valutify.vercel.app"
        pageTitle="Settings &mdash; Vaultify"
      />

      <AppLayout>
        <Settings />
      </AppLayout>
    </>
  );
}
