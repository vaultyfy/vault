import { MetaData } from "@components/metadata";
import { AuthCarousel } from "@layouts/auth-layout/carousel";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <MetaData pageTitle="Get Started &mdash; Vaultyfy" url="" />
      <AuthCarousel currentRoute="/auth" />
    </>
  );
}
