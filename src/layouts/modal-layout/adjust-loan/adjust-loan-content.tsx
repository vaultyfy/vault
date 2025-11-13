import { Box, VStack, Text, HStack, Badge, Button } from "@chakra-ui/react";
import { InputField } from "@components/form";
import { schema } from "@utils/validators";
import { Form, Formik } from "formik";
import React from "react";

export const AdjustLoanContent = () => {
  const initialValues = {
    approvableAmount: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema.adjustLoan}
      onSubmit={(values, { setSubmitting }) => {}}>
      {(formik) => {
        return (
          <Form>
            <VStack width="100%" gap="15px">
              <Box
                width={"100%"}
                height={"120px"}
                borderBottom="0.5px solid var(--border-muted)"
                paddingY={"10px"}>
                <InputField
                  name="approvableAmount"
                  label="Approvable amount"
                  labelColor="var(--grey)"
                  placeholder="Enter the amount"
                  height="57px"
                  my="0"
                />
              </Box>
              <VStack width={"100%"} alignItems={"start"} gap="15px">
                <Text color="var(--grey)"> You will return</Text>
                <HStack
                  width="281px"
                  height="40px"
                  background={"var(--card-bg-active)"}
                  padding="3px 5px"
                  borderRadius={"36px"}
                  justifyContent={"space-evenly"}
                  alignItems={"center"}>
                  <Text
                    width="124px"
                    height="34px"
                    background={"var(--main)"}
                    color="var(--white-fade)"
                    fontWeight={"500"}
                    fontSize={"12px"}
                    lineHeight={"19px"}
                    padding="16px 4px"
                    borderRadius={"39px"}
                    display="flex"
                    justifyContent={"center"}
                    alignItems={"center"}>
                    Spread payment
                  </Text>
                  <Text
                    width="124px"
                    height="34px"
                    color={"var(--main)"}
                    background="var(--card-bg-active)"
                    fontWeight={"500"}
                    fontSize={"12px"}
                    lineHeight={"19px"}
                    padding="16px 4px"
                    borderRadius={"39px"}
                    display="flex"
                    justifyContent={"center"}
                    alignItems={"center"}>
                    Outright payment
                  </Text>
                </HStack>
                <VStack
                  width="100%"
                  gap="15px"
                  height={"130px"}
                  borderBottom="0.5px solid var(--border-muted)"
                  paddingY={"10px"}>
                  <Text
                    color="var(--grey)"
                    fontWeight={"500"}
                    fontSize={"12px"}
                    lineHeight={"19px"}>
                    Spread your loan over several months with a base interest
                    rate of{" "}
                    <Text as="span" color={"var(--main)"}>
                      8% per month
                    </Text>
                    , increasing by{" "}
                    <Text as="span" color={"var(--main)"}>
                      1.5%
                    </Text>{" "}
                    every three months.
                  </Text>
                  <HStack
                    height="53px"
                    width={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"center"}>
                    <Text
                      height={"53px"}
                      width="164px"
                      padding={"8px 19px"}
                      borderRadius={"6px"}
                      border="0.5px solid var(--border-muted)"
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      fontWeight={"400"}
                      fontSize={"16px"}>
                      3 months
                    </Text>
                    <Text
                      height={"53px"}
                      width="100%"
                      padding={"8px 19px"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      fontWeight={"600"}
                      fontSize={"26px"}
                      color={"var(--main)"}>
                      N54,000
                    </Text>
                  </HStack>
                </VStack>
                <Button
                  width={"130px"}
                  height="34px"
                  padding="16px 4px"
                  borderRadius={"36px"}
                  loadingText="sending"
                  background="var(--main)"
                  _hover={{ background: "var(--main)" }}
                  type="submit"
                  textTransform="capitalize"
                  color="var(--white-fade)"
                  fontWeight="500"
                  fontSize="12px"
                  lineHeight="19px"
                  marginX={"auto"}
                  // isLoading={formik.isSubmitting}
                >
                  Send feedback
                </Button>
              </VStack>
            </VStack>
          </Form>
        );
      }}
    </Formik>
  );
};
