import { createFileRoute, useParams } from "@tanstack/react-router";
import { GroupDetails } from "@containers/app";
import { MetaData } from "@components/metadata";
import { AppLayout } from "@layouts/app-layout";
import { Group } from "@utils/types";
import { requireAuth } from "@utils/route-guard";
import { UiComponents } from "@store/ui";
import { useGroup } from "@hooks/swr";

export type AppSearchParams = {
  ui: UiComponents;
  referrer: string;
  redirect: string;
};

export const Route = createFileRoute("/dashboard/explore/$groupId")({
  component: RouteComponent,
  beforeLoad: requireAuth(),
});

function RouteComponent() {
  const { referrer } = Route.useSearch();
  const { groupId } = Route.useParams();
  const { data, isLoading } = useGroup(groupId);
  return (
    <>
      <MetaData
        url="vaultyfy.vercel.app"
        pageTitle={`Join ${data?.name} on Vaultify`}
      />

      <AppLayout routeTitle="Explore">
        <GroupDetails
          data={data as Partial<Group>}
          referrerId={referrer}
          loading={isLoading}
        />
      </AppLayout>
    </>
  );
}
