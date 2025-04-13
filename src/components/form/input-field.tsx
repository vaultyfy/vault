import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useField } from "formik";

interface InputProps {
  name: string;
  type?: string;
  height?: string;
  label?: string;
  labelInfo?: string;
  labelColor?: string;
  labelSize?: string;
  required?: boolean;
  password?: boolean;
  placeholder?: string;
  size?: string;
  radius?: string | number | {};
  boldLabel?: boolean;
  my?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({
  name,
  label,
  type = "text",
  radius = "8px",
  placeholder,
  password,
  labelInfo,
  height,
  labelColor,
  labelSize,
  boldLabel = false,
  my,
  onChange,
  ...props
}: InputProps) => {
  const [field, meta] = useField(name);
  const [show, setShow] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const handleShow = React.useCallback(() => {
    setShow((prevShow) => !prevShow);
  }, []);

  const inputType = password && show ? "text" : type;
  const inputBorderRadius = typeof radius === "string" ? radius : `${radius}px`;

  const inputStyle = {
    fontSize: "14px",
    background: "#fff",
    height: height || "55px",
    borderRadius: inputBorderRadius,
    border:
      meta.touched && meta.error
        ? "1px solid var(--deep-blood)"
        : "1px solid var(--outline)",
    transition: "border-color 0.2s ease",
  };

  const errorStyle = {
    color: "var(--deep-blood)",
    fontSize: "12px",
    pt: ".3em",
  };

  const inputPropsWithStyle = {
    ...inputStyle,
    ...props,
    ...field,
  };

  const errorProps = meta.touched && meta.error ? errorStyle : null;

  return (
    <FormControl my={my || "1.4em"} width="100%">
      {label && (
        <FormLabel
          fontSize={labelSize || { base: "12px", md: "14px" }}
          lineHeight="20px"
          fontWeight="500"
          color={labelColor || "var(--grey)"}
        >
          {label}
        </FormLabel>
      )}

      <InputGroup>
        <Input
          autoComplete="true"
          type={password ? inputType : type}
          placeholder={label ? placeholder : ""}
          _placeholder={{
            fontWeight: "400",
            color: "var(--grey)",
            fontSize: "14px",
            lineHeight: "19px",
          }}
          _focus={{
            borderColor: !label ? "var(--primary)" : undefined,
            boxShadow: "none",
          }}
          className={meta.touched && meta.error ? "shake" : ""}
          {...inputPropsWithStyle}
          onFocus={(e) => {
            setIsFocused(true);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            inputPropsWithStyle.onBlur?.(e);
          }}
          onChange={(e) => {
            field.onChange(e);
            onChange?.(e);
          }}
        />

        {!label && (
          <Box
            position="absolute"
            left="16px"
            top="50%"
            transform={
              isFocused || field.value
                ? "translateY(-200%) scale(0.8)"
                : "translateY(-50%) scale(1)"
            }
            transition="all 0.2s ease-out"
            pointerEvents="none"
            bg="#fff"
            px="2px"
            color={isFocused ? "var(--primary)" : "var(--grey)"}
            fontSize="16px"
            lineHeight="19px"
            fontWeight="400"
            zIndex="1"
          >
            {placeholder}
          </Box>
        )}

        {password && (
          <InputRightElement width="3rem" mt=".5em">
            <Box onClick={handleShow} _hover={{ cursor: "pointer" }}>
              <Text fontSize="12px" color="var(--dark)">
                {show ? "Hide" : "Show"}
              </Text>
            </Box>
          </InputRightElement>
        )}
      </InputGroup>

      {errorProps && meta.error && <Text {...errorProps}>{meta.error}</Text>}
    </FormControl>
  );
};

export const TextAreaField = ({
  name,
  my,
  label,
  radius,
  placeholder,
  password,
  labelColor,
  labelSize,
  height,
  size,
  ...props
}: InputProps) => {
  const [field, meta] = useField(name);

  return (
    <>
      <FormControl my={my || "1.8em"} width="100%">
        <FormLabel
          fontSize={labelSize || { base: "12px", lg: "16px" }}
          lineHeight="22px"
          fontWeight="400"
          color={labelColor || "var(--grey)"}
        >
          {label}
        </FormLabel>

        <Textarea
          autoComplete="true"
          fontSize="14px"
          placeholder={placeholder}
          borderRadius={radius ? radius : "9px"}
          border="1px solid  var(--outline)"
          className={meta.touched && meta.error ? "shake" : ""}
          _placeholder={{
            fontWeight: "400",
            color: "var(--grey)",
            fontSize: "14px",
            lineHeight: "22px",
          }}
          height={height || "200px"}
          {...props}
          {...field}
        />

        {meta.touched && meta.error ? (
          <Text color="var(--deep-blood)" fontSize="sm" pt=".3em">
            {meta.error}
          </Text>
        ) : null}
      </FormControl>
    </>
  );
};
