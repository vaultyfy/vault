import { createFileRoute, useParams } from "@tanstack/react-router";
import { GroupDetails } from "@containers/app";
import { MetaData } from "@components/metadata";
import { AppLayout } from "@layouts/app-layout";
import { useGroup } from "@hooks/swr";
import { getGroup } from "@queries/groups";
import { Group } from "@utils/types";

export const Route = createFileRoute("/dashboard/explore/$groupId")({
  component: RouteComponent,
  loader: async ({params}) => {
    const groupId: string = params.groupId || ""
    const response = await getGroup(groupId)
    return response?.payload
  }
});

function RouteComponent() {
  const data: Partial<Group> = Route.useLoaderData();
  return (
    <>
      <MetaData
        url="vaultyfy.vercel.app"
        pageTitle="Explore &mdash; Vaultify"
      />

      <AppLayout routeTitle="My group details">
        <GroupDetails data={data} />
      </AppLayout>
    </>
  );
}
