import { Box, ChakraProps, Text } from "@chakra-ui/react";

export interface TextProps extends ChakraProps {
  value: string;
  weight?: string;
  family?: string;
  color?: string;
  spanText?: string;
  spanColor?: string;
  align?: "left" | "center" | "right";
}

export const HeaderText = ({ family, value, align }: TextProps) => {
  return (
    <Text fontSize="34px" fontFamily="var(--clash-grotesk-600)">
      {value}
    </Text>
  );
};

<Text fontSize="34px" fontFamily="var(--clash-grotesk-600)">
  Create account
</Text>;

export const ParagraphText = ({
  weight,
  value,
  align,
  color,
  spanText,
  spanColor,
  ...props
}: TextProps) => {
  return (
    <Text
      fontWeight={weight || "500"}
      fontSize="14px"
      lineHeight="20px"
      textAlign={align || "left"}
      color={color || "var(--input-placeholder)"}
      {...props}
    >
      {value}{" "}
      <Box color={spanColor || "#000"} as="span" fontWeight="700">
        {spanText}
      </Box>
    </Text>
  );
};
