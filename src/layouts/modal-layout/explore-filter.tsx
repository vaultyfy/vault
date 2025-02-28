import { Box, Flex, VStack, Button, IconButton } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { FilterDatePicker, FilterInput } from "@components/form";
import { schema } from "@utils/validators";
import { Icon } from "@components/icon";
import { XCircle } from "@phosphor-icons/react";
import { ModalLayout } from "@components/ui";

interface ExploreFilterProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialValues = {
  members: "",
  startDate: "",
  payout: "",
  interval: "",
};

export const ExploreFilter = ({ isOpen, onClose }: ExploreFilterProps) => {
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
          initialValues={initialValues}
          validationSchema={schema.exploreFilters}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
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
                    />
                  </Box>
                  <Box flex={1}>
                    <FilterInput
                      name="interval"
                      title="Interval"
                      icon={<Icon name="timer" />}
                      placeholder="weekly"
                      height="50px"
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
                    />
                  </Box>
                  <Button
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
