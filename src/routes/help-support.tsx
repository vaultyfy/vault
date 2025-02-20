import { createFileRoute } from "@tanstack/react-router";
import { MetaData } from "@components/metadata";
import { Box } from "@chakra-ui/react";
import HelpSupportCard from "@containers/app/settings/components/help-support";
import { HomeLayout } from "@layouts/home-layout";

export const Route = createFileRoute("/help-support")({
  component: HelpSupportRouteComponent,
});

function HelpSupportRouteComponent() {
  return (
    <>
      <MetaData
        url="valutify.vercel.app"
        pageTitle="Help and support &mdash; Vaultify"
      />
      <HomeLayout>
        <HelpSupportCard />
      </HomeLayout>
    </>
  );
}
