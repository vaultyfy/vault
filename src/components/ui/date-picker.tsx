import { useState, useRef, useEffect } from "react";
import {
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  SimpleGrid,
  Flex,
  PopoverCloseButton,
  FormControl,
  Box,
} from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import dayjs from "dayjs";
import { FormikProps } from "formik";
import Select from "react-select";

interface DatePickerProps {
  formik: FormikProps<any>;
  fieldName: string;
  onDateChange: (date: Date) => void;
}

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export interface SelectProps {
  options: any[];
  defaultValue?: string;
  onChange: (option: any) => void;
  placeholder: string;
}

const CustomSelect = ({ options, onChange, placeholder }: SelectProps) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      styles={{
        control: (baseStyle) => ({
          ...baseStyle,
          border: "none",
          boxShadow: "none",
          background: "transparent",
        }),
        placeholder: (baseStyle) => ({
          ...baseStyle,
          color: "#000",
        }),
        singleValue: (baseStyle) => ({
          ...baseStyle,
          color: "#000",
        }),
        indicatorSeparator: (baseStyle) => ({
          ...baseStyle,
          display: "none",
        }),
        container: (baseStyle) => ({
          ...baseStyle,
          fontSize: "12px",
          paddingTop: "-2em",
          height: "25px",
          width: "100%",
        }),
        option: (baseStyle, state) => ({
          ...baseStyle,
          color: state.isSelected ? "#fff" : "#727272",
          backgroundColor: state.isSelected ? "var(--primary)" : "transparent",
          "&:hover": {
            backgroundColor: state.isSelected
              ? "var(--primary)"
              : "var(--pale)",
            color: state.isSelected ? "#fff" : "#727272",
          },
          padding: ".2em .8em",
          margin: ".3em 0",
          height: "fit-content",
          borderRadius: "6px",
        }),
        menu: (baseStyle) => ({
          ...baseStyle,
          backgroundColor: "var(--grey-100)",
        }),
      }}
    />
  );
};

export const DatePicker = ({
  formik,
  fieldName,
  onDateChange,
}: DatePickerProps) => {
  const [date, setDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const initialFocusRef = useRef<HTMLButtonElement>(null);

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
    setIsOpen(false);
    formik.setFieldValue(fieldName, newDate);
    onDateChange(newDate);
  };

  const generateDates = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const dates = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      const d = new Date(year, month, -i);
      dates.unshift({ date: d, isCurrentMonth: false });
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      const d = new Date(year, month, i);
      dates.push({ date: d, isCurrentMonth: true });
    }

    const remainingDays = 7 - (dates.length % 7);
    if (remainingDays < 7) {
      for (let i = 1; i <= remainingDays; i++) {
        const d = new Date(year, month + 1, i);
        dates.push({ date: d, isCurrentMonth: false });
      }
    }

    return dates;
  };

  const handleMonthChange = (selectedOption: { value: number }) => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), selectedOption.value, 1)
    );
  };

  const handleYearChange = (selectedOption: { value: number }) => {
    setCurrentMonth(new Date(selectedOption.value, currentMonth.getMonth(), 1));
  };

  useEffect(() => {
    if (isOpen && initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
  }, [isOpen]);

  const years = Array.from(
    { length: 11 },
    (_, i) => new Date().getFullYear() + i
  );

  const monthOptions = months.map((month, index) => ({
    value: index,
    label: month,
  }));

  const yearOptions = years.map((year) => ({
    value: year,
    label: year.toString(),
  }));

  return (
    <Popover
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      initialFocusRef={initialFocusRef}
      placement="bottom-start">
      <PopoverTrigger>
        <Flex
          alignItems="center"
          cursor="pointer"
          onClick={() => setIsOpen(true)}>
          <Text
            whiteSpace="nowrap"
            fontSize={{
              "2xl": "14px",
              xl: "14px",
              lg: "10px",
              md: "12px",
              base: "13px",
            }}
            fontWeight="500"
            mr={2}>
            {date
              ? dayjs(date).format("YYYY-MM-DD")
              : dayjs(new Date()).format("YYYY-MM-DD")}
          </Text>
          <ChevronDown color="var(--date-fil-txt-color)" size="14" />
        </Flex>
      </PopoverTrigger>

      <PopoverContent width="300px" background="#fff">
        <Flex
          gap="1"
          mx="2.4em"
          mt=".2em"
          justifyContent="center"
          alignItems="center"
          alignContent="center">
          <FormControl width={{ lg: "55%", md: "100%", base: "100%" }}>
            <CustomSelect
              options={monthOptions}
              defaultValue={String(new Date().getMonth())}
              onChange={handleMonthChange}
              placeholder={monthOptions[new Date().getMonth()].label}
            />
          </FormControl>
          <FormControl width={{ lg: "55%", md: "100%", base: "100%" }}>
            <CustomSelect
              defaultValue={String(new Date().getFullYear())}
              options={yearOptions}
              onChange={handleYearChange}
              placeholder={String(new Date().getFullYear())}
            />
          </FormControl>
        </Flex>

        <PopoverCloseButton color="var(--gray-500)" />

        <PopoverBody mx=".4em">
          <SimpleGrid columns={7} spacing={2} mb={4} mt={2}>
            {daysOfWeek.map((day) => (
              <Text
                key={day}
                textAlign="center"
                color="#252525"
                fontSize="12px"
                fontWeight="400">
                {day}
              </Text>
            ))}
          </SimpleGrid>

          <SimpleGrid columns={7} spacing={2} mb="1em">
            {generateDates(
              currentMonth.getFullYear(),
              currentMonth.getMonth()
            ).map(({ date: d, isCurrentMonth }, index) => (
              <Box
                as="button"
                height="26px"
                width="26px"
                borderRadius="100%"
                fontSize="12px"
                background={
                  date && dayjs(d).isSame(date, "day")
                    ? "var(--primary)"
                    : "none"
                }
                key={d.toISOString()}
                onClick={() => handleDateChange(d)}
                _hover={{
                  background: "var(--primary)",
                  color: "#fff",
                }}
                transition="all .1s ease-in"
                color={
                  date && dayjs(d).isSame(date, "day") ? "#fff" : "#252525"
                }
                opacity={isCurrentMonth ? 1 : 0.5}
                ref={index === 0 ? initialFocusRef : undefined}>
                {d.getDate()}
              </Box>
            ))}
          </SimpleGrid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
