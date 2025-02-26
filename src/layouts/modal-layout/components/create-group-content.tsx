import { useNavigate } from "@tanstack/react-router";
import {
  HStack,
  VStack,
  Box,
  Flex,
  Text,
  Button,
  IconButton,
} from "@chakra-ui/react";
import {
  DatePicker,
  InputField,
  Option,
  SelectField,
  TextAreaField,
} from "@components/form";
import { Icon } from "@components/icon";
import { schema } from "@utils/validators";
import { Form, Formik } from "formik";

import { generateNoOfCycles, generateNoOfDays } from "@utils/misc";

const CONTRIBUTION_FREQUENCY: Option[] = [
  {
    label: "Daily",
    value: "daily",
  },
  {
    label: "Weekly",
    value: "weekly",
  },
  {
    label: "Monthly",
    value: "monthly",
  },
  {
    label: "Yearly",
    value: "yearly",
  },
];

export const CreateGroupContent = () => {
  const initialValues = {
    groupName: "",
    startDate: "",
    groupDescription: "",
    contributionAmount: "",
    constributionFrequency: "",
    noOfDays: "",
    noOfCycles: "",
    noOfContributors: "",
  };
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema.createGroup}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
          <Form>
            <VStack spacing="14px" width="100%">
              <HStack
                display={{ base: "flex", md: "none" }}
                width="100%"
                py={2}
                alignItems="center"
                gap=".2em"
              >
                <IconButton
                  aria-label="Back button"
                  icon={<Icon name="arrow-left" />}
                  bg="transparent"
                  onClick={() => navigate({ to: "/dashboard" })}
                  _hover={{ bg: "none" }}
                  size="sm"
                />
                <Text
                  fontSize="24px"
                  fontFamily="var(--clash-grotesk-500)"
                  fontWeight="500"
                  color="var(--text-1)"
                  textTransform="capitalize"
                >
                  Create group
                </Text>
              </HStack>
              <Flex
                flexDirection={{ base: "column", md: "row" }}
                gap="8px"
                width="100%"
                alignItems="stretch"
              >
                <Box flex={1}>
                  <InputField
                    name="groupName"
                    label="Group Name"
                    labelColor="var(--grey)"
                    placeholder="Enter the Group name"
                    height="50px"
                    my="0"
                  />
                </Box>
                <Box flex={1}>
                  <DatePicker
                    formik={formik}
                    fieldName="startDate"
                    color="var(--grey)"
                    inputField={{
                      isActive: true,
                      label: "start date",
                      placeholder: "yyyy/ mm/ dd",
                      icon: <Icon name="calendar-dots" />,
                    }}
                    iconPlacement="right"
                    height="50px"
                    borderColor={
                      formik.touched.startDate && formik.errors.startDate
                        ? "var(--deep-red)"
                        : "rgb(226, 232, 240)"
                    }
                  />
                  {formik.touched.startDate && formik.errors.startDate && (
                    <Box color="var(--deep-red)" mt={2}>
                      {formik.errors.startDate}
                    </Box>
                  )}
                </Box>
              </Flex>
              <Box w="full">
                <TextAreaField
                  name="groupDescription"
                  label="Group Description"
                  labelColor="var(--grey)"
                  placeholder="Add a detailed description here..."
                  height="75px"
                  my="0"
                />
              </Box>
            </VStack>
            <Box
              as="hr"
              borderColor="var(--grey-100)"
              borderWidth="1px"
              width="100%"
              my={3}
            />
            <VStack spacing="14px" width="100%">
              <Box flex={1} w="full">
                <InputField
                  name="contributionAmount"
                  label="Contribution Amount"
                  labelColor="var(--grey)"
                  placeholder="Enter the ticket name"
                  height="50px"
                  my="0"
                />
              </Box>
              <HStack
                spacing="8px"
                w="full"
                flexWrap={{ base: "wrap", md: "nowrap" }}
              >
                <Box width={{ base: "100%", md: "33.33%" }}>
                  <SelectField
                    name="contributionFrequency"
                    label="Contribution Frequency"
                    placeholder="Daily"
                    options={CONTRIBUTION_FREQUENCY}
                    fontSize="14px"
                    labelSize="12px"
                    background="var(--white)"
                    caretColor="var(--text-1)"
                    labelColor="var(--grey)"
                    outlineColor="rgb(226, 232, 240)"
                    height="50px"
                    color="var(--grey)"
                  />
                </Box>
                <Box flex="1 0 33.33%">
                  <SelectField
                    name="noOfDays"
                    label="No of Days/members"
                    placeholder="10 days"
                    options={generateNoOfDays()}
                    fontSize="14px"
                    background="var(--white)"
                    caretColor="var(--text-1)"
                    labelColor="var(--grey)"
                    labelSize="12px"
                    outlineColor="rgb(226, 232, 240)"
                    height="50px"
                    color="var(--grey)"
                  />
                </Box>
                <Box flex="1 0 33.33%">
                  <SelectField
                    name="noOfCycles"
                    label="No of cycles"
                    placeholder="1"
                    options={generateNoOfCycles()}
                    fontSize="14px"
                    labelSize="12px"
                    background="var(--white)"
                    caretColor="var(--text-1)"
                    labelColor="var(--grey)"
                    outlineColor="rgb(226, 232, 240)"
                    height="50px"
                    color="var(--grey)"
                  />
                </Box>
              </HStack>
            </VStack>
            <Box
              as="hr"
              borderColor="var(--grey-100)"
              borderWidth="1px"
              width="100%"
              my={3}
            />
            <Box flex={1} w="full">
              <InputField
                name="noOfContributors"
                label="State the number of contributors you have available to join your group"
                labelColor="var(--grey)"
                labelSize="12px"
                placeholder="6 members"
                height="50px"
                my="0"
              />
            </Box>
            <Flex
              justifyContent="space-between"
              h="fit-content"
              alignItems="end"
            >
              <Box>
                <Text
                  as="span"
                  fontSize="14px"
                  fontWeight="normal"
                  color="var(--grey)"
                >
                  Pay-out
                </Text>
                <Text
                  fontSize="24px"
                  lineHeight="19px"
                  color="var(--main)"
                  fontWeight="semibold"
                >
                  N100,000
                </Text>
              </Box>
              <Button
                mt="2em"
                textTransform="capitalize"
                _hover={{ background: "var(--main)" }}
                type="submit"
                background="var(--main)"
                height={{ base: "41px", md: "50px" }}
                fontWeight="500"
                fontSize="16px"
                lineHeight="22px"
                color="var(--white-fade)"
                width="230px"
                borderRadius="35px"
                // isLoading={formik.isSubmitting}
              >
                Submit request
              </Button>
            </Flex>
          </Form>
        );
      }}
    </Formik>
  );
};
