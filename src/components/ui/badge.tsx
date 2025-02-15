import { Badge, Box, Text } from "@chakra-ui/react";


export type GlobalStatus = "successful" | "pending" | "failed" | "inactive" | "active";
export interface StatusProps {
  dot?: boolean;
  width?: string;
  active?: boolean;
  onClick?: () => void;
  status: GlobalStatus;
}

const getStatusStyles = (status: GlobalStatus) => {
  // switch (status) {
  //   case "sucessful":
  //     return {
  //       background: "var(--success-50)",
  //       color: "var(--success-700)",
  //       border: "1px solid var(--success-700)",
  //     };
  //
  //   default:
  //     return {
  //       background: "var(--gray-100)",
  //       color: "var(--gray-700)",
  //       border: "1px solid var(--gray-700)",
  //     };
  // }

  const statusStyles: Record<GlobalStatus, { background: string; color: string; border: string }> = {
    successful: {
      background: "var(--success-50)",
      color: "var(--success-700)",
      border: "1px solid var(--success-700)",
    },
    pending: {
      background: "var(--warning-50)",
      color: "var(--warning-700)",
      border: "1px solid var(--warning-700)",
    },
    failed: {
      background: "var(--error-50)",
      color: "var(--error-700)",
      border: "1px solid var(--error-700)",
    },
    inactive: {
      background: "var(--gray-100)",
      color: "var(--gray-700)",
      border: "1px solid var(--gray-700)",
    },
    active: {
      background: "var(--primary-50)",
      color: "var(--primary-700)",
      border: "1px solid var(--primary-700)",
    },
  };

  return statusStyles[status] || statusStyles.inactive;
};

export const Status = ({width, status, dot = true, active = false, onClick,}: StatusProps) => {
  // const statusText: GlobalStatus = status;

  //NOTE:: This extra variable (statusText) is unnecessary because status is already typed as GlobalStatus (from StatusProps).
  // Instead of creating a new variable just to pass it to getStatusStyles(), I directly used status

  const styles = getStatusStyles(status);

  return (
    <Badge
      display="flex"
      height="22px"
      width={width || "85px"}
      px={dot === false ? ".6em" : ".2em"}
      borderRadius={dot === false ? "12px" : "10px"}
      textTransform="none"
      background={styles.background}
      color={styles.color}
      border={styles.border}
      onClick={onClick}
      _hover={{
        cursor: "pointer",
      }}
    >
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
        textTransform="capitalize"
      >
        {status?.includes("_")
          ? status?.replaceAll("_", " ").toLowerCase()
          : status}
      </Text>
    </Badge>
  );
};



