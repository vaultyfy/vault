import { createFileRoute, useParams } from "@tanstack/react-router";
import { GroupDetails } from "@containers/app";
import { MetaData } from "@components/metadata";
import { AppLayout } from "@layouts/app-layout";
import { getGroup } from "@queries/groups";
import { Group } from "@utils/types";
import ProgressBar from '@badrap/bar-of-progress'

const progress = new ProgressBar({
  size: 2,
  delay: 80,
  color: "",
  className: "bar-of-progress"
})

export const Route = createFileRoute("/dashboard/explore/$groupId")({
  component: RouteComponent,
  loader: async ({params}) => {
    progress.start()

    try {
      const groupId: string = params.groupId || ""
      const response = await getGroup(groupId)
      return response?.payload
    } finally {
      progress.finish()
    }
  },
});

function RouteComponent() {
  const data: Partial<Group> = Route.useLoaderData();
  return (
    <>
      <MetaData
        url="vaultyfy.vercel.app"
        pageTitle="Explore &mdash; Vaultify"
      />

      <AppLayout routeTitle="Explore">
        <GroupDetails data={data} />
      </AppLayout>
    </>
  );
}
