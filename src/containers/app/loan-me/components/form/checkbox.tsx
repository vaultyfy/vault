import {
  Box,
  chakra,
  CheckboxProps,
  Flex,
  Text,
  useCheckbox,
} from "@chakra-ui/react";
import React from "react";
import { Check } from "@phosphor-icons/react";

interface CustomCheckboxProps extends CheckboxProps {
  label: string;
  value?: string;
  isChecked?: boolean;
  //   onChange?: (isChecked: boolean) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  spacing?: number | string;
  checkboxSize?: number | string;
  labelProps?: any;
  checkboxProps?: any;
}

export const CustomCheckbox = ({
  label,
  value,
  isChecked,
  onChange,
  spacing = 2,
  checkboxSize = 4,
  labelProps,
  checkboxProps,
  ...rest
}: CustomCheckboxProps) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps } = useCheckbox(
    {
      value,
      isChecked,
      onChange,
      ...rest,
    }
  );

  return (
    <chakra.label
      display="flex"
      flexDirection="row-reverse"
      alignItems="center"
      gridColumnGap={spacing}
      cursor="pointer"
      userSelect="none"
      justifyContent="space-between"
      {...rest}>
      <input {...getInputProps()} hidden />

      {/* Checkbox visual */}
      <Flex
        alignItems="center"
        justifyContent="center"
        border="1.5px solid var(--text-1)"
        borderRadius="md"
        w={checkboxSize}
        h={checkboxSize}
        transition="all 0.2s"
        _hover={{
          borderColor: "green.500",
        }}
        boxSize="24px"
        {...getCheckboxProps(checkboxProps)}>
        {state.isChecked && <Check size={14} color="var(--text-1)" />}
      </Flex>

      {/* Label text on the left */}
      <Text
        color={state.isChecked ? "green.700" : "gray.700"}
        fontWeight={state.isChecked ? "semibold" : "normal"}
        {...getLabelProps(labelProps)}>
        {label}
      </Text>
    </chakra.label>
  );
};
