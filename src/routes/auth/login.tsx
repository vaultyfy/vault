import { AuthLayout } from "@layouts/auth-layout";
import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@containers/auth";

export const Route = createFileRoute("/auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const { referrer, redirect } = Route.useSearch();
  return (
    <AuthLayout>
      <LoginPage redirect={redirect} referrer={referrer} />
    </AuthLayout>
  );
}
