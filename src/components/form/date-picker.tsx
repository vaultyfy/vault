import React, { useState } from "react";
import {
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
  HStack,
  Select,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import {
  CaretRight,
  CaretLeft,
  CaretUp,
  CaretDown,
} from "@phosphor-icons/react";
import {
  format,
  addMonths,
  isAfter,
  isSameDay,
  startOfToday,
  addYears,
  parseISO,
} from "date-fns";
import { ParagraphText } from "@components/typography";
import { FormikProps } from "formik";
import { borderGradientStyle } from "@utils/constants";

interface DatePickerProps {
  formik: FormikProps<any>;
  fieldName: string;
  inputField?: {
    label?: string;
    isActive?: boolean;
    placeholder?: string;
    icon?: React.ReactElement;
  };
  height?: string;
  borderColor?: string;
  color?: string;
  iconPlacement?: "left" | "right";
}

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const DatePicker = ({
  formik,
  fieldName,
  inputField = {
    isActive: false,
  },
  height = "40px",
  borderColor,
  color,
  iconPlacement = "left",
}: DatePickerProps) => {
  const [date, setDate] = useState<Date | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date());
  const today = startOfToday();

  const isDateSelected = (d: Date) =>
    date && isSameDay(d, parseISO(format(date, "yyyy-MM-dd")));

  const handleDateChange = (newDate: Date) => {
    if (isAfter(newDate, today)) {
      setDate(newDate);
      onClose();
      formik.setFieldValue(fieldName, newDate);
    }
  };

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
    <Popover isOpen={isOpen} onClose={onClose} placement="bottom-start">
      <PopoverTrigger>
        {inputField && inputField.isActive ? (
          <Box tabIndex={-1}>
            <ParagraphText
              value={inputField?.label ?? "start date"}
              color="var(--grey)"
              weight="500"
              textTransform="capitalize"
              fontSize={{ base: "12px", md: "14px" }}
            />
            <HStack
              py={"8px"}
              px={"12px"}
              bgColor="var(--white)"
              borderRadius={"6px"}
              border={`1px solid ${borderColor || "var(--neutral-200)"}`}
              display="flex"
              spacing={1}
              onClick={onOpen}
              mt={2}
              height={height}
              cursor="pointer"
            >
              {iconPlacement === "left" && inputField?.icon && inputField?.icon}
              <ParagraphText
                value={
                  formattedDate !== "Select date" ? formattedDate : "dd-mm-yyyy"
                }
                color={color || "var(--grey)"}
                weight="400"
                flex={1}
              />
              {iconPlacement === "right" &&
                inputField?.icon &&
                inputField?.icon}
            </HStack>
          </Box>
        ) : (
          <Text
            cursor="pointer"
            onClick={onOpen}
            textDecor={date ? "none" : "underline"}
            color={date ? "gray.500" : "blue.500"}
          >
            {formattedDate}
          </Text>
        )}
      </PopoverTrigger>

      <PopoverContent width="360px">
        <PopoverHeader borderBottom="none">
          <Text textAlign="center" fontWeight="medium">
            Create group date
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
  );
};

// TimePicker abstraction
interface TimePickerProps {
  formik: FormikProps<any>;
  fieldName: string;
  hideCaret?: boolean;
  placeholder: string;
  icon?: React.ReactNode;
  timeFormat?: "24-hour" | "12-hour";
  height?: string;
  borderColor?: string;
}

export const TimePicker = ({
  formik,
  fieldName,
  hideCaret,
  placeholder,
  icon,
  timeFormat = "24-hour",
  height = "40px",
  borderColor,
}: TimePickerProps) => {
  // Generate time options based on format
  const generateTimeOptions = () => {
    if (timeFormat === "24-hour") {
      return Array.from({ length: 24 }, (_, i) => ({
        value: `${i.toString().padStart(2, "0")}:00`,
        label: `${i.toString().padStart(2, "0")}:00`,
      }));
    } else {
      return Array.from({ length: 24 }, (_, i) => {
        const hour = i % 12 || 12; // Convert to 12-hour format
        const suffix = i < 12 ? "AM" : "PM";
        return {
          value: `${hour.toString().padStart(2, "0")}:00 ${suffix}`,
          label: `${hour.toString().padStart(2, "0")}:00 ${suffix}`,
        };
      });
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    formik.setFieldValue(fieldName, e.target.value); // Update formik state
  };

  const timeOptions = generateTimeOptions();

  // Sync with Formik value on mount or field value change

  return (
    <HStack>
      {icon ? (
        <Box
          position="relative"
          display="inline-flex"
          alignItems="center"
          border={`1px solid ${borderColor || "var(--neutral-200)"}`}
          borderRadius="6px"
          bgColor="#fff"
          w="100%"
          height={height}
        >
          {icon && (
            <Box
              position="absolute"
              left="8px"
              pointerEvents="none"
              display="flex"
              alignItems="center"
            >
              {icon}
            </Box>
          )}
          <Select
            onChange={handleTimeChange}
            placeholder={placeholder}
            pl={icon ? "32px" : "12px"}
            icon={hideCaret ? undefined : undefined}
            border="none"
            _focus={{
              outline: "none",
              boxShadow: "none",
            }}
            _focusWithin={{
              outline: "none",
              boxShadow: "none",
            }}
            _hover={{
              border: "none",
            }}
            sx={{
              appearance: "none",
              "&::-ms-expand": {
                display: "none",
              },
            }}
          >
            {timeOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </Box>
      ) : (
        <Select
          onChange={handleTimeChange}
          placeholder={placeholder}
          pl="12px"
          icon={hideCaret ? undefined : undefined}
          border="none"
          _focus={{
            outline: "none",
            boxShadow: "none",
          }}
          _focusWithin={{
            outline: "none",
            boxShadow: "none",
          }}
          _hover={{
            border: "none",
          }}
          sx={{
            appearance: "none",
            "&::-ms-expand": {
              display: "none",
            },
          }}
        >
          {timeOptions.map((option, index) => (
            <option key={index} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </Select>
      )}
    </HStack>
  );
};
