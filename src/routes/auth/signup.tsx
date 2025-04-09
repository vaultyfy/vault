import { createFileRoute } from "@tanstack/react-router";
import { AuthLayout } from "@layouts/auth-layout";
import Signup from "@containers/auth/signup";

export const Route = createFileRoute("/auth/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  const { referrer, redirect } = Route.useSearch();
  return (
    <AuthLayout>
      <Signup referrer={referrer} redirect={redirect} />
    </AuthLayout>
  );
}
