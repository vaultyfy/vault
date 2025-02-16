import { createFileRoute } from "@tanstack/react-router";
import { MetaData } from "@components/metadata";
import { AppLayout } from "@layouts/app-layout";
import HelpSupportCard
  from "@containers/app/settings/helpSupport/HelpSupportCard";

export const Route = createFileRoute("/settings/help-support")({
  component: HelpSupportRouteComponent,
});

function HelpSupportRouteComponent() {
  return (
    <>
      <MetaData
        url="valutify.vercel.app"
        pageTitle="Help and support &mdash; Vaultify"
      />
      <AppLayout>
        <HelpSupportCard />
      </AppLayout>
    </>
  );
}
