import { createFileRoute } from "@tanstack/react-router";
import ForgotPassword from "@containers/auth/forgot-password";
import { Box, Center} from "@chakra-ui/react";

export const Route = createFileRoute("/auth/forgot-password")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
      <Box height="100vh" display="flex" justifyContent="center">
          <Center>
              <ForgotPassword />
          </Center>
      </Box>
  );
}
