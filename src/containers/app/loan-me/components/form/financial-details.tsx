import { Container } from "../container";
import { Flex, Text, Divider, Button, HStack } from "@chakra-ui/react";
import { BankStatementDropzone } from "../bank-statement-dropzone";
import { useRef } from "react";
import { InputField } from "@components/form";
import { useFormikContext } from "formik";
import { useLoanStepFlow } from "@hooks/context";

export const FinancialDetails = () => {
  const dropzoneRef = useRef<{ open: () => void }>(null);
  const formik = useFormikContext();
  const { setActiveStep } = useLoanStepFlow();

  const handleSubmit = () => {
    formik.submitForm();
  };

  return (
    <Container>
      <Flex flexDirection="column" rowGap="14px" width="full">
        <Text fontSize="20px" color="var(--main)" fontWeight="500">
          Financial details
        </Text>
        <BankStatementDropzone
          name="bank_statement"
          dropzoneRef={dropzoneRef}
          onImageUpload={(file: File | File[]) =>
            formik.setFieldValue("event_banner", file)
          }
        />
        <Divider
          width="full"
          backgroundColor="var(--border-muted)"
          height="0.5px"
        />
        <InputField
          name="job_business"
          label="Job/Business"
          radius="6px"
          labelColor="var(--grey)"
          placeholder="Business or Job"
          my="0px"
        />
        <InputField
          name="annual_income"
          label="state your annual Income"
          radius="6px"
          labelColor="var(--grey)"
          placeholder="N500,000"
          my="0px"
        />
        <Divider
          width="full"
          backgroundColor="var(--border-muted)"
          height="0.5px"
        />
        <HStack justifyContent="space-between" width="full">
          <Button
            width="87px"
            height="34px"
            rounded="36px"
            py="1rem"
            px="0.25rem"
            fontFamily="var(--poppins)"
            fontSize="12px"
            fontWeight="500"
            color="var(--main)"
            backgroundColor="#F6F6F6"
            onClick={() => {
              setActiveStep("loan-purpose");
            }}>
            Back
          </Button>
          <Button
            type="submit"
            width="87px"
            height="34px"
            rounded="36px"
            py="1rem"
            px="0.25rem"
            fontSize="12px"
            fontWeight="500"
            color="white"
            backgroundColor="var(--main)"
            _hover={{
              backgroundColor: "var(--main)",
            }}
            _focus={{
              backgroundColor: "var(--main)",
            }}
            isLoading={formik.isSubmitting}
            onClick={handleSubmit}
            disabled={formik.isSubmitting || !formik.isValid}>
            Submit
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};
