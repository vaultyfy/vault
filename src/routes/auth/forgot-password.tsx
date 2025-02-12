import { createFileRoute } from "@tanstack/react-router";
import { AuthLayout } from "@layouts/auth-layout";
import { ForgotPassword } from "@containers/auth";

export const Route = createFileRoute("/auth/forgot-password")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout currentRoute="/auth/forgot-password">
      <ForgotPassword />
    </AuthLayout>
  );
}
