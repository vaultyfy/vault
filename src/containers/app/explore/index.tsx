import { useState } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { FilterDatePicker, FilterInput } from "@components/form";
import { GroupCard } from "@components/customer/ui";
import { Icon } from "@components/icon";
import { Formik, Form } from "formik";
import { schema } from "@utils/validators";
import { useMobileScreens } from "@hooks/mobile-screen";
import { FunnelSimple } from "@phosphor-icons/react";
import { ExploreFilter } from "@layouts/modal-layout/explore-filter";
import { useAllGroups } from "@hooks/swr";

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

  return (
    <Box>
      <Text as="p" fontSize="24px" color="var(--text-1)" mb="0.5rem">
        Suggested for you
      </Text>
      <Box
        width="100%"
        maxWidth={{ lg: "1360px", "2xl": "100%" }}
        height="246px"
        display="flex"
        alignItems="center"
        overflowX="auto"
        gap=".6em"
        _hover={{
          cursor: "grab",
        }}
      >
        {data?.slice(0, 4)?.map((group, index: React.Key) => {
          return (
            <GroupCard
              groupType="suggested"
              hasGradient
              link="my-group"
              key={index}
              data={group}
            />
          );
        })}
      </Box>
      <Box
        mt="1em"
        w="100%"
        sx={
          isMobile ? { display: "flex", justifyContent: "space-between" } : {}
        }
      >
        <Text
          fontFamily="var(--poppins)"
          color="var(--text-1)"
          fontSize="24px"
          fontWeight="medium"
        >
          More Groups
        </Text>
        {!isMobile ? (
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
        ) : (
          <IconButton
            aria-label="filter"
            icon={<FunnelSimple size={24} />}
            rounded="full"
            onClick={() => setIsMobileFilter(true)}
          />
        )}
      </Box>

      <SimpleGrid
        columns={{ md: 2, base: 1 }}
        rowGap="24px"
        columnGap="27px"
        width="100%"
        mt="17px"
      >
        {data?.map((group, index) => (
          <Box minHeight="240px" flex={1} key={index}>
            <GroupCard groupType="available" data={group} />
          </Box>
        ))}
      </SimpleGrid>

      <ExploreFilter
        isOpen={isMobileFilter}
        onClose={() => setIsMobileFilter(false)}
      />
    </Box>
  );
};
