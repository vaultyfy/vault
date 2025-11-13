import { useRef, useState } from "react";
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
import { ModalLayout, ModalLayoutProps } from "@components/ui";
import { BaseModalProps, CONTRIBUTION_FREQUENCY } from "@utils/constants";
import { parseISO } from "date-fns";

interface ExploreFilterProps extends BaseModalProps {
  handleSubmit: (
    values: typeof defaultValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => Promise<void>;
  handleClearFilters: () => void;
  initialFilters?: typeof defaultValues;
}

const defaultValues = {
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
  initialFilters = defaultValues,
}: ExploreFilterProps) => {
  const [savedValues, setSavedValues] = useState<typeof defaultValues>({
    ...initialFilters,
  });

  const formikRef = useRef<any>(null);

  const handleModalClose = () => {
    if (formikRef.current) {
      const { startDate, ...rest } = formikRef.current.values;

      const parsedStartDate =
        typeof startDate === "string" && startDate.trim() !== ""
          ? parseISO(startDate)
          : null;

      const newValues = { ...rest, startDate: parsedStartDate };
      setSavedValues(newValues);
    }
    onClose();
  };

  const handleClear = () => {
    if (formikRef.current) {
      formikRef.current.resetForm({ values: defaultValues });
    }
    setSavedValues({ ...defaultValues });
    handleClearFilters();
  };

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={handleModalClose}
      size="full"
      px="4px"
      py="48px"
      noCloseButton={true}>
      <Box w="full" h="90vh">
        <IconButton
          aria-label="close-modal"
          icon={<XCircle size={24} color="var(--main)" />}
          bg="transparent"
          onClick={handleModalClose}
        />
        <Formik
          innerRef={formikRef}
          initialValues={savedValues}
          validationSchema={schema.exploreFilters}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              try {
                await handleSubmit(values, setSubmitting);
                // Save values after successful submission
                setSavedValues(values);
              } catch (error) {
                console.error("Submission failed:", error);
              } finally {
                setSubmitting(false);
                onClose();
              }
            }, 600);
          }}
          enableReinitialize={true}>
          {(formik) => {
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
                </Flex>
                <Flex columnGap={2} w="full" alignItems="center">
                  <Box flex={1}>
                    <Button
                      type="submit"
                      width="100%"
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
                      isLoading={formik.isSubmitting}>
                      Apply
                    </Button>
                  </Box>
                  {formik.dirty ? (
                    <Box flex={1}>
                      <Button
                        type="button"
                        width="100%"
                        height="50px"
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
                        onClick={handleClear}>
                        Clear
                      </Button>
                    </Box>
                  ) : null}
                </Flex>
              </VStack>
            );
          }}
        </Formik>
      </Box>
    </ModalLayout>
  );
};
