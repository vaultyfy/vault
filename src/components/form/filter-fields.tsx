import React, { useState, useRef } from "react";
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputLeftAddon,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  SimpleGrid,
  Flex,
  IconButton,
  PopoverHeader,
  PopoverCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useField } from "formik";
import { FormikProps } from "formik";
import { Option } from "./select-field";
import {
  CaretLeft,
  CaretRight,
  CaretUp,
  CaretDown,
} from "@phosphor-icons/react";
import {
  format,
  isAfter,
  isSameDay,
  addMonths,
  addYears,
  startOfToday,
  parseISO,
} from "date-fns";
import { borderGradientStyle } from "@utils/constants";

interface FilterInputProps {
  name: string;
  title: string;
  icon?: React.ReactNode;
  height?: string;
  placeholder?: string;
  radius?: string | number | {};
  fontSize?: string;
  my?: string;
}

export const FilterInput = ({
  name,
  title,
  icon,
  placeholder,
  fontSize,
  radius = "8px",
  height = "40px",
  my,
  ...props
}: FilterInputProps) => {
  const [field, meta] = useField(name);

  const [isFocused, setIsFocused] = React.useState(false);

  const inputBorderRadius = typeof radius === "string" ? radius : `${radius}px`;

  const inputStyle = {
    fontSize: fontSize || "12px",
    fontWeight: "500",
    background: "#fff",
    height: height,
    borderRadius: inputBorderRadius,
    border:
      meta.touched && meta.error
        ? "1px solid var(--deep-blood)"
        : "1px solid var(--outline)",
    transition: "border-color 0.2s ease",
    padding: "7px 8px",
  };

  const inputPropsWithStyle = {
    ...inputStyle,
    ...props,
    ...field,
  };

  return (
    <FormControl my={my || "1em"} width="100%">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          height="100%"
          children={icon}
          width="auto"
          paddingLeft="3"
        />
        <InputLeftAddon
          pl="2.5rem"
          bgColor="#ffffff"
          width="auto"
          height={height}
        >
          <Text
            color="#575757"
            fontSize="11px"
            borderRight="none"
            fontWeight="medium"
            whiteSpace="nowrap"
          >
            {title}
          </Text>
        </InputLeftAddon>
        <Input
          type="text"
          placeholder={placeholder || ""}
          _placeholder={{
            fontWeight: "medium",
            color: "var(--grey)",
            fontSize: "12px",
            lineHeight: "19px",
          }}
          {...inputPropsWithStyle}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            inputPropsWithStyle.onBlur?.(e);
          }}
          textAlign="right"
        />
      </InputGroup>

      {meta.touched && meta.error && (
        <Text color="var(--deep-blood)" fontSize="12px" pt=".3em">
          {meta.error}
        </Text>
      )}
    </FormControl>
  );
};

interface DatePickerProps {
  formik: FormikProps<any>;
  fieldName: string;
  title?: string;
  icon?: React.ReactNode;
  height?: string;
  radius?: string | number | {};
  placeholder?: string;
  my?: string;
}

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const FilterDatePicker = ({
  formik,
  fieldName,
  title = "Date",
  icon,
  height = "40px",
  radius = "8px",
  placeholder,
  my,
  ...props
}: DatePickerProps) => {
  const [date, setDate] = useState<Date | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date());
  const initialFocusRef = useRef<HTMLButtonElement>(null);
  const today = startOfToday();

  const inputBorderRadius = typeof radius === "string" ? radius : `${radius}px`;

  const inputStyle = {
    fontSize: "12px",
    background: "#fff",
    height: height,
    borderRadius: inputBorderRadius,
    border: "1px solid var(--outline)",
    transition: "border-color 0.2s ease",
    paddingLeft: "16px",
    cursor: "pointer",
  };

  const handleDateChange = (newDate: Date) => {
    if (isAfter(newDate, today)) {
      setDate(newDate);
      onClose();
      formik.setFieldValue(fieldName, newDate);
    }
  };

  const isDateSelected = (d: Date) =>
    date && isSameDay(d, parseISO(format(date, "yyyy-MM-dd")));

  const formattedDate = date ? format(date, "dd-MM-yyyy") : "Select date";

  const generateDates = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const dates = [];

    // Previous month padding
    for (let i = 0; i < firstDay.getDay(); i++) {
      const d = new Date(year, month, -i);
      dates.unshift({ date: d, isCurrentMonth: false, isPast: d < today });
    }

    // Current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const d = new Date(year, month, i);
      dates.push({ date: d, isCurrentMonth: true, isPast: d < today });
    }

    // Next month padding
    const remainingDays = 7 - (dates.length % 7);
    if (remainingDays < 7) {
      for (let i = 1; i <= remainingDays; i++) {
        const d = new Date(year, month + 1, i);
        dates.push({ date: d, isCurrentMonth: false, isPast: false });
      }
    }

    return dates;
  };

  const changeMonth = (increment: number) => {
    setCurrentMonth((prevMonth) => addMonths(prevMonth, increment));
  };

  const changeYear = (increment: number) => {
    setCurrentYear((prevYear) => addYears(prevYear, increment));
  };

  return (
    <FormControl my={my || "1em"} width="100%">
      <Popover
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialFocusRef}
        placement="bottom-start"
      >
        <PopoverTrigger>
          <InputGroup>
            {icon && (
              <InputLeftElement
                pointerEvents="none"
                children={icon}
                height="100%"
                width="auto"
                paddingLeft="3"
              />
            )}
            <InputLeftAddon
              pl="2.5rem"
              bgColor="#ffffff"
              width="auto"
              height={height}
            >
              <Text
                color="#575757"
                fontSize="11px"
                borderRight="none"
                fontWeight="400"
                whiteSpace="nowrap"
              >
                {title}
              </Text>
            </InputLeftAddon>
            <Input
              readOnly
              value={formattedDate}
              placeholder={placeholder || ""}
              _placeholder={{
                fontWeight: "medium",
                color: "var(--grey)",
                fontSize: "12px",
                lineHeight: "19px",
              }}
              onClick={onOpen}
              {...inputStyle}
              _focus={{
                borderColor: "var(--primary)",
                boxShadow: "none",
              }}
              textAlign="right"
            />
          </InputGroup>
        </PopoverTrigger>

        <PopoverContent width="360px">
          <PopoverHeader borderBottom="none">
            <Text textAlign="center" fontWeight="medium">
              Select Date
            </Text>
          </PopoverHeader>

          <PopoverCloseButton />

          <PopoverBody mx="1em">
            <Flex columnGap={4} alignItems="center" mb={4}>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                mb={2}
                flex={1}
              >
                <IconButton
                  aria-label="Previous month"
                  icon={<CaretLeft color="#000" weight="bold" />}
                  onClick={() => changeMonth(-1)}
                  size="sm"
                  bgColor={"transparent"}
                  _hover={{
                    bgColor: "transparent",
                  }}
                />
                <Text fontWeight="400" fontSize="14px">
                  {format(currentMonth, "MMMM")}
                </Text>
                <IconButton
                  aria-label="Next month"
                  icon={<CaretRight color="#000" weight="bold" />}
                  onClick={() => changeMonth(1)}
                  size="sm"
                  bgColor={"transparent"}
                  _hover={{
                    bgColor: "transparent",
                  }}
                />
              </Flex>
              <Flex justifyContent="space-between" alignItems="center" mb={2}>
                <IconButton
                  aria-label="Previous year"
                  icon={<CaretUp color="#000" weight="fill" />}
                  onClick={() => changeYear(-1)}
                  size="sm"
                  bgColor={"transparent"}
                  _hover={{
                    bgColor: "transparent",
                  }}
                />
                <Text fontWeight="400" fontSize="14px">
                  {format(currentYear, "yyyy")}
                </Text>
                <IconButton
                  aria-label="Next year"
                  icon={<CaretDown color="#000" weight="fill" />}
                  onClick={() => changeYear(1)}
                  size="sm"
                  bgColor={"transparent"}
                  _hover={{
                    bgColor: "transparent",
                  }}
                />
              </Flex>
            </Flex>

            <SimpleGrid columns={7} spacing={2} mb={4}>
              {daysOfWeek.map((day) => (
                <Text
                  key={day}
                  textAlign="center"
                  fontWeight="semibold"
                  fontSize={"13px"}
                  color="var(--grey)"
                  fontFamily="var(--maven-pro-500)"
                >
                  {day}
                </Text>
              ))}
            </SimpleGrid>
            <SimpleGrid columns={7} spacing={2} mb="16px">
              {generateDates(
                currentYear.getFullYear(),
                currentMonth.getMonth(),
              ).map(({ date: d, isCurrentMonth, isPast }) => (
                <Button
                  key={d.toISOString()}
                  boxSize="40px"
                  borderRadius={
                    isDateSelected(d) ||
                    !!isDateSelected(d) ||
                    isSameDay(d, today)
                      ? "full"
                      : "md"
                  }
                  border="1px solid"
                  borderColor="transparent"
                  background={
                    isDateSelected(d) ||
                    (isDateSelected(d) === null && isSameDay(d, today))
                      ? "var(--main)"
                      : "white"
                  }
                  sx={
                    isDateSelected(d) ||
                    (isDateSelected(d) === null && isSameDay(d, today))
                      ? borderGradientStyle
                      : {
                          _hover: !isPast
                            ? { ...borderGradientStyle, borderRadius: "full" }
                            : {},
                        }
                  }
                  _hover={{ background: "var(--main)" }}
                  fontFamily="var(--poppins)"
                  fontSize="14px"
                  fontWeight="400"
                  color={
                    isPast
                      ? "var(--calendar-days-color)"
                      : isDateSelected(d) ||
                          (isDateSelected(d) === null &&
                            isCurrentMonth &&
                            isSameDay(d, today))
                        ? "white"
                        : "var(--text-1)"
                  }
                  isDisabled={isPast}
                  onClick={() => handleDateChange(d)}
                >
                  {d.getDate()}
                </Button>
              ))}
            </SimpleGrid>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </FormControl>
  );
};

interface SelectFieldProps {
  name: string;
  placeholder?: string;
  options: Option[];
  onChange?: (selectedOption: Option) => void;
  defaultValue?: Option | undefined;
  outlineColor?: string;
  width?: string;
  height?: string;
  caretColor?: string;
  background?: string;
  fontSize?: string;
  menuBg?: string;
  labelColor?: string;
  label?: string;
  labelSize?: string;
  radius?: string;
  menuWidth?: string;
  noBorder?: boolean;
  fontWeight?: string;
  color?: string;
  labelInfo?: string;
  multi?: "yes" | "no";
  isDisabled?: boolean;
  title: string;
  icon?: React.ReactElement;
  customCaret?: boolean;
}

export const FilterSelectField = ({
  options,
  placeholder,
  onChange,
  defaultValue,
  outlineColor,
  width,
  height = "40px",
  caretColor,
  background,
  fontSize = "12px",
  menuBg,
  label,
  labelColor,
  labelSize,
  menuWidth,
  radius = "8px",
  name,
  labelInfo,
  noBorder,
  multi,
  fontWeight,
  color,
  icon,
  customCaret,
  title,
  ...props
}: SelectFieldProps) => {
  const [field, meta, helpers] = useField(name);
  const { value } = meta;
  const { setValue } = helpers;
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (selectedOption: Option) => {
    setValue(selectedOption.value);
    if (onChange) {
      onChange(selectedOption);
    }
    setIsOpen(false);
  };

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <FormControl width={width || "100%"} my={{ base: "0", md: "1em" }}>
      {label && (
        <Text
          fontSize={labelSize || "11px"}
          fontWeight={fontWeight || "medium"}
          color={labelColor || "#575757"}
          mb="0.5em"
        >
          {label}{" "}
          {labelInfo && (
            <Text as="span" color="var(--deep-blood)">
              *{labelInfo}
            </Text>
          )}
        </Text>
      )}

      <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PopoverTrigger>
          <InputGroup>
            {icon && (
              <InputLeftElement
                pointerEvents="none"
                height="100%"
                children={icon}
                width="auto"
                paddingLeft="3"
              />
            )}
            <InputLeftAddon
              pl="2.5rem"
              bgColor="#ffffff"
              width="auto"
              height={height}
            >
              <Text
                color="#575757"
                fontSize="11px"
                borderRight="none"
                fontWeight="medium"
                whiteSpace="nowrap"
              >
                {title}
              </Text>
            </InputLeftAddon>
            <Input
              type="text"
              placeholder={placeholder || ""}
              _placeholder={{
                fontWeight: "medium",
                color: "var(--grey)",
                fontSize: "12px",
                lineHeight: "19px",
              }}
              height={height}
              borderRadius={radius}
              border={
                meta.touched && meta.error
                  ? "1px solid var(--deep-blood)"
                  : "1px solid var(--outline)"
              }
              bg={background || "#fff"}
              fontSize={fontSize}
              onClick={() => setIsOpen(!isOpen)}
              cursor="pointer"
              readOnly
              value={selectedOption ? selectedOption.label : ""}
            />
          </InputGroup>
        </PopoverTrigger>

        <PopoverContent width={menuWidth || "auto"}>
          <PopoverBody>
            <SimpleGrid columns={1} spacing={2}>
              {options.map((option) => (
                <Button
                  key={option.value}
                  variant="ghost"
                  justifyContent="flex-start"
                  onClick={() => handleChange(option)}
                  leftIcon={option.icon}
                  fontSize={fontSize}
                  fontWeight="500"
                  color={color || "var(--text-primary)"}
                  _hover={{ bg: "var(--grey-100)" }}
                >
                  {option.label}
                </Button>
              ))}
            </SimpleGrid>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      {meta.touched && meta.error && (
        <Text color="var(--deep-blood)" fontSize="12px" pt=".3em">
          {meta.error}
        </Text>
      )}
    </FormControl>
  );
};
