import { useLocation } from "@tanstack/react-router";

export const useCurrentPath = () => {
  const location = useLocation();
  return location.pathname;
};
