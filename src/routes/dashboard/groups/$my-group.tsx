import { createFileRoute, redirect } from "@tanstack/react-router";
import { GroupDetails } from "@containers/app";
import { MetaData } from "@components/metadata";
import { AppLayout } from "@layouts/app-layout";

export const Route = createFileRoute("/dashboard/groups/$my-group")({
  beforeLoad: () => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      throw redirect({
        to: "/dashboard/groups",
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <MetaData
        url="vaultyfy.vercel.app"
        pageTitle="Explore &mdash; Vaultify"
      />

      <AppLayout routeTitle="My group details">
        <GroupDetails />
      </AppLayout>
    </>
  );
}
