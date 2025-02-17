import { createFileRoute } from "@tanstack/react-router";
import { MetaData } from "@components/metadata";
import HelpSupportCard
  from "@containers/app/settings/helpSupport/HelpSupportCard";
import {Box} from "@chakra-ui/react";

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
      <Box>
        <HelpSupportCard />
      </Box>
    </>
  );
}
