import { useEffect, useRef } from "react";
import { Box, Flex, VStack, Button, IconButton } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import {
  FilterDatePicker,
  FilterInput,
  FilterSelectField,
} from "@components/form";
import { schema } from "@utils/validators";
import { Icon } from "@components/icon";
import { XCircle } from "@phosphor-icons/react";
import { ModalLayout } from "@components/ui";
import { CONTRIBUTION_FREQUENCY } from "@utils/constants";

interface ExploreFilterProps {
  isOpen: boolean;
  onClose: () => void;
  handleSubmit: (
    values: typeof initialValues,
    setSubmitting: (isSubmitting: boolean) => void,
  ) => Promise<void>;
  handleClearFilters: () => void;
}

const initialValues = {
  members: "",
  startDate: "",
  payout: "",
  interval: "",
};

export const ExploreFilter = ({
  isOpen,
  onClose,
  handleSubmit,
  handleClearFilters,
}: ExploreFilterProps) => {
  // Use useRef to persist form values
  const formValuesRef = useRef<typeof initialValues>(initialValues);

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      px="4px"
      py="48px"
      noCloseButton={true}
    >
      <Box w="full" h="90vh">
        <IconButton
          aria-label="close-modal"
          icon={<XCircle size={24} color="var(--main)" />}
          bg="transparent"
          onClick={onClose}
        />
        <Formik
          initialValues={formValuesRef.current}
          validationSchema={schema.exploreFilters}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              try {
                await handleSubmit(values, setSubmitting);
              } catch (error) {
                console.error("Submission failed:", error);
              } finally {
                setSubmitting(false);
                onClose();
              }
            }, 600);
          }}
        >
          {(formik) => {
            useEffect(() => {
              formValuesRef.current = formik.values;
            }, [formik.values]);

            useEffect(() => {
              const areAllFieldsEmpty = Object.values(formik.values).every(
                (value) => value === "",
              );

              if (areAllFieldsEmpty) {
                handleClearFilters();
              }
            }, [formik.values]);

            return (
              <VStack as={Form} w="full" spacing="14px" alignItems="stretch">
                <Box w="full">
                  <FilterDatePicker
                    formik={formik}
                    fieldName="startDate"
                    title="Start dates"
                    placeholder="06-10-2025"
                    icon={<Icon name="calendar-dots" />}
                    height="50px"
                    my="0"
                  />
                  {formik.touched.startDate && formik.errors.startDate && (
                    <Box color="var(--deep-red)" mt={2}>
                      {formik.errors.startDate}
                    </Box>
                  )}
                </Box>
                <Flex columnGap={2} w="full">
                  <Box width="45%">
                    <FilterInput
                      name="members"
                      title="members"
                      icon={<Icon name="users" />}
                      placeholder="10"
                      height="50px"
                      my="0"
                    />
                  </Box>
                  <Box flex={1}>
                    <FilterSelectField
                      name="interval"
                      title="Interval"
                      placeholder="Interval"
                      icon={<Icon name="timer" />}
                      height="50px"
                      options={CONTRIBUTION_FREQUENCY}
                    />
                  </Box>
                </Flex>
                <Flex columnGap={2} w="full" alignItems="center">
                  <Box flex={1}>
                    <FilterInput
                      name="payout"
                      title="Pay-outs"
                      icon={<Icon name="money-send" />}
                      placeholder="100,000"
                      height="50px"
                      my="0"
                    />
                  </Box>
                  <Button
                    type="submit"
                    width="85px"
                    height="50px"
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
              </VStack>
            );
          }}
        </Formik>
      </Box>
    </ModalLayout>
  );
};
