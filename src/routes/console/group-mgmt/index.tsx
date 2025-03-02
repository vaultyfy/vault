import { ThriftGroupManagement } from "@containers/console/thrift-group-mgmt";
import { AppLayout } from "@layouts/app-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/console/group-mgmt/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout>
      <ThriftGroupManagement />
    </AppLayout>
  );
}
