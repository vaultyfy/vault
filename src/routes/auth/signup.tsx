import { createFileRoute } from "@tanstack/react-router";
import { AuthLayout } from "@layouts/auth-layout";
import Signup from "@containers/auth/signup";

export const Route = createFileRoute("/auth/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout>
      <Signup />
    </AuthLayout>
  );
}
