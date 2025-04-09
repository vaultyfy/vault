import { Container } from "@chakra-ui/react";

export const SectionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Container
      maxW={{
        base: "96%",
        md: "96%",
        lg: "97%",
        xl: "1200px",
      }}
      px="0"
    >
      {children}
    </Container>
  );
};
