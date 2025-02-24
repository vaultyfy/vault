import { MetaData } from "@components/metadata";
import { useMobileScreens } from "@hooks/mobile-screen";
import { AppLayout } from "@layouts/app-layout";
import { CreateGroupContent } from "@layouts/modal-layout/components";
import { useNavigate } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/dashboard/create-group")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isMobile } = useMobileScreens();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isMobile)
      navigate({ to: "/dashboard", search: { ui: "create-group" } });
  }, [isMobile, navigate]);

  return (
    <>
      <MetaData pageTitle="Groups &mdash; Vaultify" url="vaultify.vercel.app" />

      <AppLayout routeTitle="">
        <CreateGroupContent />
      </AppLayout>
    </>
  );
}
