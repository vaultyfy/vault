import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { InputField, SelectField } from "@components/form";
import { ModalLayout, ModalLayoutProps } from "@components/ui";
import { useToastContext } from "@hooks/context";
import { useGoals } from "@hooks/swr";
import { GoalPayload, setGoal } from "@mutations/user";
import { schema } from "@utils/validators";
import { Form, Formik } from "formik";

export const GOAL_DURATIONS = ["6 months", "1 month", "5 months"].map(
  (value) => ({
    value,
    label: value,
  }),
);

export const CreateGoalModal = ({
  isOpen,
  onClose,
}: Pick<ModalLayoutProps, "isOpen" | "onClose">) => {
  const { mutate } = useGoals();
  const { openToast } = useToastContext();
  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} noCloseButton size="md">
      <Formik<GoalPayload>
        initialValues={{
          duration: "",
          name: "",
          taget: 0,
        }}
        validationSchema={schema.createGoal}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            try {
              const request = await setGoal({
                ...values,
              });
              const response = await request?.json();
              if (request?.ok) {
                mutate();
                openToast(response.message, "success");
                onClose();
              } else {
                openToast(response.message, "error");
              }
            } catch (error) {
              console.error(error);
            }

            setSubmitting(false);
          }, 600);
        }}
      >
        {(formik) => (
          <Form>
            <Button
              type="submit"
              background="none"
              _hover={{
                background: "none",
              }}
              position="absolute"
              top="0"
              right="2"
              fontSize="14px"
              fontWeight="500"
              color="#706E6E"
              textDecor="underline"
              isLoading={formik.isSubmitting}
              loadingText="Setting goal..."
            >
              Done
            </Button>

            <Box mt="1em">
              <HStack
                gap=".3em"
                alignItems="center"
                width={{ lg: "50%", md: "50%", base: "60%" }}
              >
                <Text
                  fontWeight="400"
                  textTransform="capitalize"
                  color="#706E6E"
                  fontSize="14px"
                >
                  duration
                </Text>
                <SelectField
                  options={GOAL_DURATIONS}
                  name="duration"
                  radius="20px"
                  height="20"
                  fontSize="13px"
                  menuWidth="100%"
                  outlineColor="var(--primary)"
                  defaultValue={GOAL_DURATIONS?.[0]}
                />
              </HStack>

              <InputField
                name="name"
                type="text"
                label="Goal title"
                placeholder="House rent"
              />
              <InputField
                name="taget"
                type="number"
                label="Goal target"
                placeholder="N500,000"
              />
            </Box>
          </Form>
        )}
      </Formik>
    </ModalLayout>
  );
};
