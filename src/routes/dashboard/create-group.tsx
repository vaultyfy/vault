import { MetaData } from "@components/metadata";
import { useMobileScreens } from "@hooks/mobile-screen";
import { AppLayout } from "@layouts/app-layout";
import { CreateGroupContent } from "@layouts/modal-layout";
import { useNavigate } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { requireAuth } from "@utils/route-guard";
import React from "react";

export const Route = createFileRoute("/dashboard/create-group")({
  component: RouteComponent,
  beforeLoad: requireAuth()
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
