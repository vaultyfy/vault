import { createFileRoute, useParams } from "@tanstack/react-router";
import { GroupDetails } from "@containers/app";
import { MetaData } from "@components/metadata";
import { AppLayout } from "@layouts/app-layout";
import { getGroup } from "@queries/groups";
import { Group } from "@utils/types";
import ProgressBar from "@badrap/bar-of-progress";
import { requireAuth } from "@utils/route-guard";
import { UiComponents } from "@store/ui";
import { DEFAULT_REDIRECT_URL } from "@utils/constants";

const progress = new ProgressBar({
  size: 2,
  delay: 80,
  color: "",
  className: "bar-of-progress",
});

type AppSearchParams = {
  ui: UiComponents;
  referrer: string;
  redirect: string;
};

export const Route = createFileRoute("/dashboard/explore/$groupId")({
  component: RouteComponent,
  loader: async ({ params }) => {
    progress.start();
    try {
      const groupId: string = params.groupId || "";
      const response = await getGroup(groupId);
      return response?.payload;
    } finally {
      progress.finish();
    }
  },
  validateSearch: (search: Record<string, unknown>): AppSearchParams => {
    return {
      ui: "",
      redirect: DEFAULT_REDIRECT_URL,
      referrer: String(search.referrer) || "",
    };
  },
  beforeLoad: ({ search }) => {
    search;
    requireAuth();
  },
});

function RouteComponent() {
  const data: Partial<Group> = Route.useLoaderData();
  const { referrer } = Route.useSearch();
  return (
    <>
      <MetaData
        url="vaultyfy.vercel.app"
        pageTitle={`Join ${data?.name} on Vaultify`}
      />

      <AppLayout routeTitle="Explore">
        <GroupDetails data={data} referrerId={referrer} />
      </AppLayout>
    </>
  );
}
