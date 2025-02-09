import { AuthLayout } from "@layouts/auth-layout";
import { createFileRoute } from "@tanstack/react-router";
import ForgotPassword from "@containers/auth/forgot-password";

export const Route = createFileRoute("/auth/forgot-password")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout>
      <ForgotPassword/>
    </AuthLayout>
  );
}
