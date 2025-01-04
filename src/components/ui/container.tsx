import { Container } from "@chakra-ui/react";

export const SectionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Container
      maxW={{
        base: "100%",
        md: "100%",
        lg: "95%",
        xl: "1600px",
      }}
      px="0"
    >
      {children}
    </Container>
  );
};
