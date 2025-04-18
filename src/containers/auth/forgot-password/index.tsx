import { MetaData } from "@components/metadata";
import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { schema } from "@utils/validators";
import { Link } from "@components/link";
import { InputField } from "@components/form";
import { auth } from "@utils/endpoints";
import { Response } from "@utils/types";
import { useToastContext } from "@hooks/context";
import { OtpScreen } from "../otp";
import { useUiComponentStore } from "@store/ui";
import { AuthPageProps } from "../login";

export const ForgotPassword = ({ redirect, referrer }: AuthPageProps) => {
  const { openToast } = useToastContext();
  const { store } = useUiComponentStore();
  const [otpScreen, setOtpScreen] = React.useState<boolean>(false);

  return (
    <>
      <MetaData
        pageTitle="Forgot Password &mdash; Vaultyfy"
        url="vultifier.vercel.app"
        previewImage=""
      />

      <Center>
        {otpScreen ? (
          <OtpScreen redirect={redirect} referrer={referrer} />
        ) : (
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={schema.forgotPassword}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const request = await fetch(auth.customer.forgotPassword, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: values.email }),
                });
                const response: Response = await request.json();

                if (request.ok || response.status === 200) {
                  setOtpScreen(true);
                  localStorage.setItem("email", values.email);
                  openToast(
                    response.message || "Check your email for the OTP",
                    "success",
                  );
                } else {
                  openToast(
                    response.message ||
                      "Something went wrong. Please try again!",
                    "error",
                  );
                }
              } catch (error) {
                openToast("An error occurred. Please try again.", "error");
              }
              setSubmitting(false);
            }}
          >
            {(formik) => (
              <Form>
                <Flex flexFlow="column" gap="4em">
                  <Link
                    to="/"
                    search={{
                      ui: store.ui,
                      redirect: String(redirect),
                      referrer: String(referrer),
                    }}
                  >
                    <Image
                      src="/img/logo.svg"
                      alt="Vaultyfy logo"
                      height="41px"
                      width="151px"
                    />
                  </Link>

                  <Box>
                    <Stack direction="column" gap="0">
                      <Text
                        fontSize="34px"
                        fontFamily="var(--clash-grotesk-600)"
                      >
                        Forgot password
                      </Text>
                      <Text
                        fontSize="16px"
                        color="var(--dark)"
                        lineHeight="18px"
                        fontWeight="400"
                      >
                        Enter the email you registered with
                      </Text>
                      f
                    </Stack>
                    <InputField type="email" name="email" placeholder="Email" />

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
                      Send reset link
                    </Button>
                  </Box>
                </Flex>
              </Form>
            )}
          </Formik>
        )}
      </Center>
    </>
  );
};
