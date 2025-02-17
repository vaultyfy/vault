import React, { useState, useRef, useEffect } from "react";
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
} from "@chakra-ui/react";
import { useField } from "formik";
import { CaretRight, CaretLeft } from "@phosphor-icons/react";
import { FormikProps } from "formik";
import { format, addMonths, isAfter, isSameDay, startOfToday } from "date-fns";

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
        : "1px solid #E2E8F0",
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
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const initialFocusRef = useRef<HTMLButtonElement>(null);

  const inputBorderRadius = typeof radius === "string" ? radius : `${radius}px`;

  const inputStyle = {
    fontSize: "12px",
    background: "#fff",
    height: height,
    borderRadius: inputBorderRadius,
    border: "1px solid #E2E8F0",
    transition: "border-color 0.2s ease",
    paddingLeft: "16px",
    cursor: "pointer",
  };

  const handleDateChange = (newDate: Date) => {
    if (isAfter(newDate, startOfToday())) {
      setDate(newDate);
      setIsOpen(false);
      formik.setFieldValue(fieldName, newDate);
    }
  };

  const formattedDate = date ? format(date, "dd-MM-yyyy") : "";

  const generateDates = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const dates = [];
    const today = startOfToday();

    for (let i = 0; i < firstDay.getDay(); i++) {
      const d = new Date(year, month, -i);
      dates.unshift({ date: d, isCurrentMonth: false, isPast: d < today });
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      const d = new Date(year, month, i);
      dates.push({ date: d, isCurrentMonth: true, isPast: d < today });
    }

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

  return (
    <FormControl my={my || "1em"} width="100%">
      <Popover
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(true)}
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
            <Flex justifyContent="space-between" alignItems="center" mb={2}>
              <IconButton
                aria-label="Previous month"
                icon={<CaretLeft />}
                onClick={() => changeMonth(-1)}
                size="sm"
              />
              <Text fontWeight="500">{format(currentMonth, "MMMM yyyy")}</Text>
              <IconButton
                aria-label="Next month"
                icon={<CaretRight />}
                onClick={() => changeMonth(1)}
                size="sm"
              />
            </Flex>

            <SimpleGrid columns={7} spacing={2} mb={4}>
              {daysOfWeek.map((day) => (
                <Text key={day} textAlign="center" fontWeight="bold">
                  {day}
                </Text>
              ))}
            </SimpleGrid>

            <SimpleGrid columns={7} spacing={2}>
              {generateDates(
                currentMonth.getFullYear(),
                currentMonth.getMonth(),
              ).map(({ date: d, isCurrentMonth, isPast }) => (
                <Button
                  key={d.toISOString()}
                  height="32px"
                  p={0}
                  borderRadius="md"
                  background={
                    date && isSameDay(d, date) ? "var(--coral)" : "white"
                  }
                  color={
                    isPast ? "gray.400" : isCurrentMonth ? "black" : "gray.300"
                  }
                  _hover={{ background: isPast ? "none" : "var(--coral-400)" }}
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
