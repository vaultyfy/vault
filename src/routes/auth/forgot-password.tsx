import { AuthLayout } from "@layouts/auth-layout";
import { createFileRoute } from "@tanstack/react-router";
import { Box, Text } from "@chakra-ui/react";
import { LoginPage } from "@containers/auth";

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
