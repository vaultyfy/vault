import { Badge, Box, Text } from "@chakra-ui/react";

export type GlobalStatus = "sucessful" | "pending_approval";

export interface StatusProps {
  dot?: boolean;
  width?: string;
  active?: boolean;
  onClick?: () => void;
  status: GlobalStatus;
}

const getStatusStyles = (status: GlobalStatus) => {
  switch (status) {
    case "sucessful":
      return {
        background: "var(--success-50)",
        color: "var(--success-700)",
        border: "1px solid var(--success-700)",
      };
    case "pending_approval":
      return {
        background: "#ED9A1514",
        color: "#ED9A15",
      };
    default:
      return {
        background: "var(--grey-100)",
        color: "var(--text-grey-200)",
        border: "1px solid var(--gray-700)",
      };
  }
};

export const Status = ({
  width,
  status,
  dot = false,
  active = false,
  onClick,
}: StatusProps) => {
  const statusText: GlobalStatus = status;
  const styles = getStatusStyles(statusText);

  return (
    <Badge
      display="flex"
      height="22px"
      width={width || "85px"}
      px={dot === false ? ".6em" : ".2em"}
      borderRadius={dot === false ? "12px" : "10px"}
      justifyContent={dot === false ? "center" : "flex-start"}
      alignItems="center"
      textTransform="none"
      background={styles.background}
      color={styles.color}
      border={styles.border}
      onClick={onClick}
      _hover={{
        cursor: "pointer",
      }}>
      {dot && (
        <Box
          my="auto"
          height="6px"
          width="6px"
          mx=".6em"
          borderRadius="100%"
          background={styles.color}
        />
      )}

      <Text
        textAlign="center"
        fontSize="12px"
        fontWeight="500"
        fontFamily="var(--inter)"
        my="auto"
        pr=".2em"
        textTransform="capitalize">
        {statusText?.includes("_")
          ? statusText?.replaceAll("_", " ").toLowerCase()
          : statusText}
      </Text>
    </Badge>
  );
};
