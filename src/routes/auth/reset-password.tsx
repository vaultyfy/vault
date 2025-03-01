import { ResetPassword } from "@containers/auth";
import { AuthLayout } from "@layouts/auth-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/reset-password")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout currentRoute="/auth/reset-password">
      <ResetPassword />
    </AuthLayout>
  );
}
