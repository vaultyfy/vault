import React from "react";
import { HStack, Input, InputGroup, Text } from "@chakra-ui/react";
import { FormikProps } from "formik";

interface OrderIdField {
  fieldName: string;
  fieldLabel: string;
  formik: FormikProps<any>;
}

export const FilterInput = ({
  formik,
  fieldName,
  fieldLabel,
}: OrderIdField) => {
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    formik.setFieldValue(fieldName, e.target.value);
  };

  // React.useEffect(() => {
  //   if (!isFiltered) {
  //     formik.resetForm();
  //   }
  // }, [fieldName, isFiltered]);

  return (
    <HStack
      background="#fff"
      borderRadius="3px"
      width="100%"
      px={{ lg: ".6em", base: ".4em", md: ".6em" }}
      justifyContent="space-between"
      height={"40px"}
    >
      <Text
        whiteSpace="nowrap"
        width={{ "2xl": "30%", xl: "fit-content", lg: "fit-content" }}
        textTransform="capitalize"
        color="var(--date-fil-txt-color)"
        fontWeight="500"
        fontSize={{ lg: "12px", md: "12px", base: "11px" }}
        lineHeight="16.5px"
      >
        {fieldLabel}
      </Text>
      <InputGroup width="70%">
        <Input
          border="none"
          px="0"
          placeholder={"100,000"}
          name="orderId"
          value={inputValue}
          onChange={handleChange}
          onBlur={formik.handleBlur}
          _focusVisible={{
            border: "none",
            background: "none",
          }}
          _placeholder={{
            color: "#dcdcdc",
          }}
          background="none"
          fontSize="12px"
        />
      </InputGroup>
    </HStack>
  );
};
