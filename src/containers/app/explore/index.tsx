import { Box, SimpleGrid, Text, Flex, Button } from "@chakra-ui/react";
import { FilterDatePicker, FilterInput } from "@components/form";
import { GroupCard } from "@components/customer/ui";
import { Carousel } from "@components/ui";
import { EmblaOptionsType } from "embla-carousel";
import { Icon } from "@components/icon";
import { Formik, Form } from "formik";
import { schema } from "@utils/validators";
import { interval } from "date-fns";

const carouselSettings: EmblaOptionsType = {
  loop: true,
  align: "start",
  dragFree: true,
};

const initialValues = {
  members: "",
  startDate: "",
  payout: "",
  interval: "",
};

export const Explore = () => {
  return (
    <Box width="100%" minH="100dvh">
      <Text as="p" fontSize="24px" color="var(--text-1)" mb="0.5rem">
        Suggested for you
      </Text>

      {/* Carousel Section */}
      <Box
        width="100%"
        maxWidth={{ lg: "1360px" }}
        height="246px"
        display="flex"
        alignItems="center"
        overflow="hidden"
      >
        <Carousel options={carouselSettings}>
          {Array.from({ length: 5 }).map((_, index) => (
            <GroupCard key={index} cardGradient="var(--main-gradient)" />
          ))}
        </Carousel>
      </Box>

      <Box w="100%">
        <Text
          fontFamily="var(--poppins)"
          color="var(--text-1)"
          fontSize="24px"
          fontWeight="medium"
        >
          More Groups
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={schema.exploreFilters}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <Flex
              as={Form}
              px="8px"
              minHeight="54px"
              rounded="5px"
              bgColor="#f6f6f6"
              alignItems="center"
              gap="0.5em"
            >
              <Box flex={1}>
                <FilterInput
                  name="members"
                  title="members"
                  icon={<Icon name="users" />}
                  placeholder="10"
                  height="36px"
                />
              </Box>
              <Box flex={1}>
                <FilterDatePicker
                  formik={formik}
                  fieldName="startDate"
                  title="Start dates"
                  placeholder="06-10-2025"
                  icon={<Icon name="calendar-dots" />}
                  height="36px"
                />
              </Box>
              <Box flex={1}>
                <FilterInput
                  name="payout"
                  title="Pay-outs"
                  icon={<Icon name="money-send" />}
                  placeholder="100,000"
                  height="36px"
                />
              </Box>
              <Box flex={1}>
                <FilterInput
                  name="interval"
                  title="Interval"
                  icon={<Icon name="timer" />}
                  placeholder="weekly"
                  height="36px"
                />
              </Box>
              <Button
                width="107px"
                px="10px"
                py="8px"
                bgColor="var(--main)"
                fontFamily="var(--poppins)"
                fontWeight="medium"
                fontSize="11px"
                color="#ffffff"
                _hover={{ bgColor: "var(--main)" }}
                _active={{ bgColor: "var(--main)" }}
                _focus={{ bgColor: "var(--main)" }}
                isLoading={formik.isSubmitting}
              >
                Apply
              </Button>
            </Flex>
          )}
        </Formik>
      </Box>

      {/* Grid Section */}
      <SimpleGrid
        columns={{ md: 2, base: 1 }}
        rowGap="24px"
        columnGap="27px"
        width="100%"
        mt="17px"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Box height="240px" flex={1} key={index}>
            <GroupCard />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
