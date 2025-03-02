import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { DatePicker } from "@components/ui/date-picker";
import { CalendarDays, Search, X } from "lucide-react";
import { useFormik } from "formik";
import { useAuthContext, useToastContext } from "@hooks/context";
import { useMediaQuery } from "react-responsive";
import { FilterInput } from "./filter-input";
import dayjs from "dayjs";
import { FilterSelect } from "./select";
import { Icon } from "@components/icon";

export const dateFilterStyle = {
  txt_ghost: {
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "16.5px",
  },
  txt_main: {
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: "500",
  },
};

export const PAY_OUT_CATEGORIES = [
  {
    label: "Today's Pay Out",
    value: "today's_pay_out",
  },
  {
    label: "Upcoming Pay Out",
    value: "upcoming_pay_out",
  },
  {
    label: "Delayed Pay Out",
    value: "delayed_pay_out",
  },
];

export const Filter = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 577px)" });

  const formik = useFormik({
    initialValues: {
      fromDate: "",
      toDate: "",
      payOutCategory: "",
      payOutValue: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      // Handle form submission
      setSubmitting(false);
    },
  });

  const handleFromDateChange = (date: Date) => {
    formik.setFieldValue("fromDate", date);
  };

  const handleToDateChange = (date: Date) => {
    formik.setFieldValue("toDate", date);
  };

  return (
    <Flex
      flexFlow={{ "2xl": "row", md: "row", base: "column", lg: "row" }}
      flexWrap={{ "2xl": "nowrap", xl: "nowrap", lg: "nowrap" }}
      py=".3em"
      px=".3em"
      background={"none"}
      height="100%"
      gap={{ lg: "1em", md: "1em", base: ".4em" }}
      borderRadius="5px"
      width={"100%"}
    >
      <Flex
        width="80%"
        bg={"var(--text-2)"}
        gap={{ lg: "5px", base: ".4em", md: ".6em" }}
        flexFlow={{ "2xl": "row", md: "row", base: "column", lg: "row" }}
        height="54px"
        justifyContent={"space-between"}
        padding={"10px"}
        alignItems={"center"}
        borderRadius={"10px"}
      >
        <Box width={"20%"} height={"41px"} alignItems={"center"}>
          <FilterSelect
            options={PAY_OUT_CATEGORIES}
            placeholder="Category"
            formik={formik}
            fieldName="payOutCategory"
          />
        </Box>

        <HStack
          background="#fff"
          borderRadius="3px"
          width="22%"
          height={{ base: "41px", lg: "41px", md: "100%" }}
          padding="8px 7px"
          justifyContent="space-between"
        >
          <CalendarDays
            color="#575757"
            size={!isMobile ? "18" : "16"}
            strokeWidth="1.8px"
          />
          <Text
            textTransform="capitalize"
            color="var(--date-fil-txt-color)"
            fontWeight="500"
            fontSize={{
              "2xl": "12px",
              xl: "12px",
              lg: "10px",
              md: "12px",
              base: "13px",
            }}
            lineHeight="16.5px"
          >
            From
          </Text>
          <DatePicker
            formik={formik}
            fieldName="fromDate"
            onDateChange={handleFromDateChange}
          />
        </HStack>

        <HStack
          background="#fff"
          borderRadius="3px"
          width="22%"
          height={{ base: "41px", lg: "41px", md: "100%" }}
          padding="8px 7px"
          justifyContent="space-between"
        >
          <CalendarDays
            color="#575757"
            size={!isMobile ? "18" : "16"}
            strokeWidth="1.8px"
          />
          <Text
            textTransform="capitalize"
            color="var(--date-fil-txt-color)"
            fontWeight="500"
            fontSize={{
              "2xl": "12px",
              xl: "12px",
              lg: "10px",
              md: "12px",
              base: "13px",
            }}
            lineHeight="16.5px"
          >
            To
          </Text>

          <DatePicker
            formik={formik}
            fieldName="toDate"
            onDateChange={handleToDateChange}
          />
        </HStack>
        <HStack
          width="22%"
          bg={"#fff"}
          padding={"8px 7px"}
          height="40px"
          borderRadius={"3px"}
        >
          <Text>
            <Icon name={"money-send-dark"} />
          </Text>
          <FilterInput
            formik={formik}
            fieldLabel="Pay Out"
            fieldName="payOutValue"
          />
        </HStack>
        <Button
          {...dateFilterStyle.txt_ghost}
          background="var(--main)"
          color={"var(--white-fade)"}
          textTransform="capitalize"
          borderRadius="3px"
          width="10%"
          padding="8px 10px"
          fontStyle={"11px"}
          fontWeight={"500"}
          // onClick={formik.handleSubmit()}
          _hover={{ cursor: "pointer", background: "var(--main)" }}
          isLoading={formik.isSubmitting}
        >
          Apply
        </Button>
      </Flex>

      <HStack
        width={"20%"}
        border="0.5px solid #8181816B"
        borderRadius={"31px"}
        padding="10px 21px"
        height="54px"
      >
        <Input
          outline={"none"}
          border="none"
          _focusVisible={{
            outline: "none",
            border: "none",
          }}
          placeholder="Search"
        />
        <Text>
          <Icon name={"search-normal"} />
        </Text>
      </HStack>
    </Flex>
  );
};
