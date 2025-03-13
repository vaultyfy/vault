import React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { MetaData } from "@components/metadata";
import { Box } from "@chakra-ui/react";
import { PaymentsPayouts } from "@containers/app/settings/components";
import { useMobileScreens } from "@hooks/mobile-screen";

export const Route = createFileRoute("/dashboard/settings/payments-payouts")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isMobile } = useMobileScreens();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isMobile) navigate({ to: "/dashboard/settings" });
  }, [isMobile]);
  return (
    <>
      <MetaData
        url="valutify.vercel.app"
        pageTitle="Settings &mdash; Vaultify"
      />

      <Box width="100%" px="1rem" background="#fff" pb="2rem">
        <PaymentsPayouts />
      </Box>
    </>
  );
}
