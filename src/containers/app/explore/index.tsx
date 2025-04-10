import { useState } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Button,
  IconButton,
  Center,
} from "@chakra-ui/react";
import {
  FilterDatePicker,
  FilterInput,
  FilterSelectField,
} from "@components/form";
import { GroupCard } from "@components/customer/ui";
import { Icon } from "@components/icon";
import { Formik, Form } from "formik";
import { schema } from "@utils/validators";
import { ContributionFrequency } from "@utils/types";
import { useMobileScreens } from "@hooks/mobile-screen";
import { FunnelSimple } from "@phosphor-icons/react";
import { ExploreFilter } from "@layouts/modal-layout/explore-filter";
import { useAllGroups, useFilteredGroups } from "@hooks/swr";
import { FilterGroupProps } from "@queries/groups";
import { CONTRIBUTION_FREQUENCY } from "@utils/constants";
import { ExploreCardSkeleton } from "@components/skeletons";
import { formatISO } from "date-fns";

const initialValues = {
  members: "",
  startDate: "",
  payout: "",
  interval: "",
};

export const Explore = () => {
  const { isMobile } = useMobileScreens();
  const { data, isLoading } = useAllGroups();
  const [isMobileFilter, setIsMobileFilter] = useState(false);
  const [filters, setFilters] = useState<FilterGroupProps | null>(null);

  const {
    data: filteredData,
    error,
    isLoading: isFiltering,
  } = useFilteredGroups(filters as FilterGroupProps);

  const handleSubmit = async (
    values: typeof initialValues,
    setSubmitting: (isSubmitting: boolean) => void,
  ) => {
    setSubmitting(true);

    let isoDateString: string = "";

    if (values.startDate !== "") {
      const parsedDate = new Date(values.startDate);
      isoDateString = formatISO(parsedDate);
    }

    setFilters({
      memberAmount: parseInt(values.members, 10),
      startDate: isoDateString,
      payout: parseInt(values.payout, 10),
      interval: values.interval as ContributionFrequency,
    });

    setSubmitting(false);
  };

  const handleClearFilters = () => {
    setFilters(null);
  };

  const groups = filteredData || data || [];

  return (
    <Box>
      <Text
        color="var(--text-1)"
        mb="0.5rem"
        fontSize={{ lg: "24px", md: "20px", base: "18px" }}
      >
        Suggested for you
      </Text>
      <Box
        width="100%"
        maxWidth={{ lg: "1360px", "2xl": "100%" }}
        height="255px"
        display="flex"
        alignItems="center"
        overflowX="auto"
        gap=".6em"
        _hover={{
          cursor: "grab",
        }}
      >
        {isLoading ? (
          <ExploreCardSkeleton />
        ) : (
          <>
            {data?.slice(0, 4)?.map((group, index: React.Key) => {
              return (
                <GroupCard
                  groupType="suggested"
                  hasGradient
                  link="my-group"
                  key={index}
                  data={group}
                  groups={data}
                />
              );
            })}
          </>
        )}
      </Box>
      <Box
        mt="1em"
        w="100%"
        alignItems="center"
        sx={
          isMobile ? { display: "flex", justifyContent: "space-between" } : {}
        }
      >
        <Text
          color="var(--text-1)"
          fontWeight="400"
          fontSize={{ lg: "24px", md: "20px", base: "18px" }}
        >
          More Groups
        </Text>
        {!isMobile ? (
          <Formik
            initialValues={initialValues}
            validationSchema={schema.exploreFilters}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(async () => {
                try {
                  await handleSubmit(values, setSubmitting);
                } catch (error) {
                  console.error("Submission failed:", error);
                } finally {
                  setSubmitting(false);
                }
              }, 600);
            }}
          >
            {(formik) => {
              return (
                <Flex
                  as={Form}
                  px="8px"
                  minHeight="54px"
                  rounded="5px"
                  background="var(--grey-100)"
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
                    {formik.touched.startDate && formik.errors.startDate && (
                      <Box color="var(--deep-red)" mt={2}>
                        {formik.errors.startDate}
                      </Box>
                    )}
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
                    <FilterSelectField
                      name="interval"
                      title="Interval"
                      placeholder="Interval"
                      icon={<Icon name="timer" />}
                      height="36px"
                      options={CONTRIBUTION_FREQUENCY}
                    />
                  </Box>
                  <Button
                    type="submit"
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
                  {formik.dirty ? (
                    <Button
                      type="button"
                      width="107px"
                      px="10px"
                      py="8px"
                      bgColor="var(--grey-200)"
                      border="1px solid var(--input-outline)"
                      fontFamily="var(--poppins)"
                      fontWeight="medium"
                      fontSize="11px"
                      color="var(--text-1)"
                      _hover={{ bgColor: "var(--grey-300)" }}
                      _active={{ bgColor: "var(--grey-300)" }}
                      _focus={{ bgColor: "var(--grey-300)" }}
                      onClick={() => {
                        formik.resetForm();
                        handleClearFilters();
                      }}
                    >
                      Clear
                    </Button>
                  ) : null}
                </Flex>
              );
            }}
          </Formik>
        ) : (
          <IconButton
            aria-label="filter"
            icon={<FunnelSimple size={24} />}
            rounded="full"
            background="var(--grey-100)"
            onClick={() => setIsMobileFilter(true)}
          />
        )}
      </Box>

      <SimpleGrid
        columns={{ "2xl": 3, xl: 2, lg: 2, md: 2, base: 1 }}
        rowGap="24px"
        columnGap="27px"
        width="100%"
        mt="17px"
      >
        {isLoading || isFiltering ? (
          <ExploreCardSkeleton />
        ) : (
          <>
            {groups?.length > 0 ? (
              groups?.map((group, index) => (
                <Box minHeight="240px" flex={1} key={index}>
                  <GroupCard groups={data} groupType="available" data={group} />
                </Box>
              ))
            ) : (
              <Box gridColumn="1 / -1" width="100%">
                <Center width="100%" height="500px">
                  <Text fontSize="md" color="var(--grey)">
                    No groups found
                  </Text>
                </Center>
              </Box>
            )}
          </>
        )}
      </SimpleGrid>

      <ExploreFilter
        isOpen={isMobileFilter}
        onClose={() => setIsMobileFilter(false)}
        handleSubmit={handleSubmit}
        handleClearFilters={handleClearFilters}
      />
    </Box>
  );
};
