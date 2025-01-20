import { createFileRoute } from "@tanstack/react-router";
import { MetaData } from "@components/metadata";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <>
      <MetaData
        pageTitle="About us"
        previewImage=""
        url="vultifier.vercel.app"
      />
      <div className="p-2">
        <h3>About</h3>
      </div>
    </>
  );
}
