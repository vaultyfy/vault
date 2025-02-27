import { AuthLayout } from "@layouts/auth-layout";
import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@containers/auth";

export const Route = createFileRoute("/auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout>
      <LoginPage />
    </AuthLayout>
  );
}
