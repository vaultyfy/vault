import { createFileRoute } from "@tanstack/react-router";
import { MetaData } from "@components/metadata";
import { AppLayout } from "@layouts/app-layout";
import MobileGroupCalendar from "@containers/app/calendar";

export const Route = createFileRoute("/dashboard/calendar")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <MetaData
        url="vaultify.vercel.app"
        pageTitle="Notification &mdash; Vaultify"
      />

      <AppLayout routeTitle={"Calendar"}>
        <MobileGroupCalendar />
      </AppLayout>
    </>
  );
}
