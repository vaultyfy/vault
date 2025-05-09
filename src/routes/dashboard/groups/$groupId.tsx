import { createFileRoute, redirect } from "@tanstack/react-router";
import { GroupDetails } from "@containers/app";
import { MetaData } from "@components/metadata";
import { AppLayout } from "@layouts/app-layout";
import { useParams } from "@tanstack/react-router";
import { useGroup } from "@hooks/swr";
import { requireAuth } from "@utils/route-guard";

export const Route = createFileRoute("/dashboard/groups/$groupId")({
  beforeLoad: () => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      throw redirect({
        to: "/dashboard/groups",
      });
    }
    return requireAuth();
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { groupId } = useParams({ strict: false });
  const { data } = useGroup(String(groupId));
  return (
    <>
      <MetaData
        url="vaultyfy.vercel.app"
        pageTitle="Explore &mdash; Vaultify"
      />
      <AppLayout routeTitle="My group details">
        <GroupDetails data={{ ...data }} />
      </AppLayout>
    </>
  );
}
