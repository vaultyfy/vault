import React, { useState } from "react";
import { Box, Flex, IconButton, SimpleGrid, Text } from "@chakra-ui/react";
import {
  CaretRight,
  CaretLeft,
  CaretDown,
  CaretUp,
} from "@phosphor-icons/react";
import {
  format,
  addMonths,
  subMonths,
  isAfter,
  isSameDay,
  startOfToday,
  parseISO,
  addYears,
} from "date-fns";

interface Props {
  width?: string;
}

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const Calendar: React.FC<Props> = ({ width }) => {
  const [date, setDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date());

  const formattedDate = date ? format(date, "PP") : "Select date";

  const generateDates = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const dates = [];
    const today = startOfToday();

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
          <Text fontWeight="500">{format(currentMonth, "MMMM")}</Text>
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

          <Text fontWeight="500">{format(currentYear, "yyyy")}</Text>
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
          >
            {day}
          </Text>
        ))}
      </SimpleGrid>

      <SimpleGrid columns={7} spacing={2}>
        {generateDates(currentMonth.getFullYear(), currentMonth.getMonth()).map(
          ({ date: d, isCurrentMonth, isPast }) => (
            <Flex
              key={d.toISOString()}
              boxSize="40px"
              justifyContent={"center"}
              p={0}
              borderRadius="md"
              background={date && isSameDay(d, date) ? "var(--coral)" : "white"}
              color={
                isPast ? "gray.400" : isCurrentMonth ? "black" : "gray.300"
              }
              _hover={{ background: isPast ? "none" : "var(--coral-400)" }}>
              <Text fontSize={"13px"} fontFamily={"var(--poppins)"}>
                {d.getDate()}
              </Text>
            </Flex>
          )
        )}
      </SimpleGrid>
    </Box>
  );
};
