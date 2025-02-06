import { AuthLayout } from "@layouts/auth-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/forgot-password")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout>
      hello forgot password
    </AuthLayout>
  );
}
