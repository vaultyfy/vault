import { useLocation } from "@tanstack/react-router"
import { FileRouteTypes } from "src/routeTree.gen";

export const useCurrentPath = () => {
  const location = useLocation();
  return location.pathname as unknown as FileRouteTypes["fullPaths"];
}