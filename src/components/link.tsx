import { Link as TanStackLink, LinkProps } from "@tanstack/react-router";

export const Link = (props: LinkProps) => {
  const cleanSearchParams = props.search
    ? Object.fromEntries(
        Object.entries(props.search).filter(
          ([_, value]) => value !== "undefined" && value !== ""
        )
      )
    : props.search;

  return <TanStackLink {...props} search={cleanSearchParams} />;
};
