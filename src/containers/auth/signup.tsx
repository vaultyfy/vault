import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import { InputField } from "@components/form";
import { Form, Formik } from "formik";
import { schema } from "@utils/validators";
import { useToastContext } from "@hooks/context";
import { auth } from "@utils/endpoints";
import React from "react";
import { MetaData } from "@components/metadata";
import { HeaderText } from "@components/typography";
import { OtpScreen } from "./otp";
import { SignupResponse } from "@utils/types";
import { SignupFormValues } from "@utils/validators/auth-schemas";

export default function Signup() {
  const { openToast } = useToastContext();
  const [otpScreen, setOtpScreen] = React.useState<boolean>(false);

  return (
    <>
      <MetaData
        pageTitle="Sign Up &mdash; Vaultyfy"
        url="livenormad.com"
        previewImage="/img/preview.png"
        description="Over 3000+ unique pieces of home decor from around the globe"
      />

      {otpScreen ? (
        <OtpScreen />
      ) : (
        <Formik<SignupFormValues>
          initialValues={{
            email: "",
            fullname: "",
            password: "",
          }}
          validationSchema={schema.signUp}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const { email, fullname, password } = values;
              const request = await fetch(auth.customer.signup, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email,
                  name: fullname,
                  password,
                }),
              });

              const response: SignupResponse = await request.json();

              if (request.ok) {
                setOtpScreen(true);
                typeof window !== "undefined" &&
                  localStorage.setItem("email", email);
                openToast(response.message || "Signup successful!", "success");
              } else {
                openToast(response.message || "Signup failed", "error");
              }
            } catch (error) {
              openToast("An error occurred. Please try again.", "error");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {(formik) => (
            <Box position="relative">
              <Form>
                <Flex flexFlow="column" gap="4em" position="relative">
                  <Link to="/">
                    <Image
                      src="/img/logo.svg"
                      alt="Vaultyfy logo"
                      height="41px"
                      width="151px"
                    />
                  </Link>

                  <Box width={{ lg: "380px", md: "100%", base: "100%" }}>
                    <Stack direction="column" gap="0">
                      <HeaderText value="Create account" />
                      <Text
                        fontSize="16px"
                        color="var(--dark)"
                        lineHeight="18px"
                        fontWeight="400"
                      >
                        Enter your details to create an account.
                      </Text>
                    </Stack>
                    <InputField type="email" name="email" placeholder="Email" />
                    <InputField
                      type="text"
                      name="fullname"
                      placeholder="Fullname"
                    />
                    <InputField
                      password
                      type="password"
                      name="password"
                      placeholder="Password"
                    />

                    <Button
                      mt="2em"
                      textTransform="capitalize"
                      _hover={{ background: "var(--main)" }}
                      type="submit"
                      background="var(--main)"
                      height="50px"
                      fontWeight="500"
                      fontSize="16px"
                      lineHeight="22px"
                      color="var(--white-fade)"
                      width="100%"
                      borderRadius="35px"
                      isLoading={formik.isSubmitting}
                    >
                      Sign Up
                    </Button>

                    <Text
                      textAlign="center"
                      fontWeight="400"
                      color="var(--dark)"
                      py=".4em"
                      fontSize={{ lg: "16px", md: "16px", base: "14px" }}
                    >
                      Already have an account?{" "}
                      <Link to="/auth/login">
                        <Box
                          cursor="pointer"
                          as="span"
                          color="var(--primary)"
                          fontWeight="400"
                        >
                          Sign in
                        </Box>
                      </Link>
                    </Text>
                  </Box>
                </Flex>
              </Form>

              <Text
                position="absolute"
                bottom="-200px"
                left="0"
                right="0"
                textAlign="center"
                width="100%"
                color="var(--dark)"
              >
                By signing up you have agreed to our{" "}
                <Text as="span" color="var(--primary)">
                  terms of services
                </Text>
              </Text>
            </Box>
          )}
        </Formik>
      )}
    </>
  );
}
