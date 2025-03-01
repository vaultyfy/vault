import { Button, ChakraProps } from "@chakra-ui/react";

interface PrimaryBtnProps extends ChakraProps {
  value: string;
  loading: boolean;
}

export const PrimaryButton = ({
  value,
  loading,
  ...props
}: PrimaryBtnProps) => {
  return (
    <Button
      textTransform="capitalize"
      _hover={{ background: "var(--main)" }}
      type="submit"
      background="var(--main)"
      height="50px"
      fontWeight="500"
      fontSize="16px"
      lineHeight="22px"
      color="var(--white-fade)"
      width="100%"
      borderRadius="35px"
      isLoading={loading}
    >
      {value}
    </Button>
  );
};
