import React, { useState } from "react";
import { Box, Flex, IconButton, SimpleGrid, Text } from "@chakra-ui/react";
import {
  CaretRight,
  CaretLeft,
  CaretDown,
  CaretUp,
} from "@phosphor-icons/react";
import { format, addMonths, isSameDay, startOfToday, addYears } from "date-fns";
import { borderGradientStyle_2 } from "@utils/constants";

interface CalendarProps {
  width?: string;
}

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const Calendar = ({ width }: CalendarProps) => {
  const [date, setDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date());
  const today = startOfToday();

  const formattedDate = date ? format(date, "PP") : "Select date";

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
    <Box width={width || "full"}>
      <Flex columnGap={4} alignItems="center" mb={4}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          flex={1}>
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
            fontFamily="var(--maven-pro-500)">
            {day}
          </Text>
        ))}
      </SimpleGrid>

      <SimpleGrid columns={7} spacing={2} mb="16px">
        {generateDates(currentMonth.getFullYear(), currentMonth.getMonth()).map(
          ({ date: d, isCurrentMonth, isPast }) => {
            return (
              <Flex
                key={d.toISOString()}
                boxSize="40px"
                alignItems="center"
                justifyContent="center"
                borderRadius={isSameDay(d, today) ? "full" : "md"}
                border="1px solid"
                borderColor="transparent"
                background={isSameDay(d, today) ? "var(--main)" : "white"}
                sx={
                  isSameDay(d, today)
                    ? borderGradientStyle_2
                    : {
                        _hover: !isPast
                          ? isSameDay(d, today)
                            ? {
                                ...borderGradientStyle_2,
                              }
                            : {
                                ...borderGradientStyle_2,
                                borderRadius: "full",
                              }
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
                    : isCurrentMonth && isSameDay(d, today)
                      ? "white"
                      : "var(--text-1)"
                }
                opacity={isPast ? 0.5 : 1}
                position="relative">
                <Text
                  fontSize="13px"
                  fontFamily="var(--poppins)"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  margin="0"
                  lineHeight="1">
                  {d.getDate()}
                </Text>
              </Flex>
            );
          }
        )}
      </SimpleGrid>
    </Box>
  );
};
