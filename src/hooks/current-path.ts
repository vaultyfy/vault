import { useLocation } from "@tanstack/react-router";
import { FileRouteTypes } from "@tanstack/react-router";

export const useCurrentPath = () => {
  const location = useLocation();
  const currentRoute: FileRouteTypes["fullPaths"] = location.pathname;
  return currentRoute;
};

export const useConsolePath = () => {
  const pathname = useCurrentPath();
  return pathname.includes("/console");
};
