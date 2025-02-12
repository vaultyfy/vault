import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { InputField, PrimaryButton } from "@components/form";
import { MetaData } from "@components/metadata";
import { useToastContext } from "@hooks/context";
import { Link, useNavigate } from "@tanstack/react-router";
import { auth } from "@utils/endpoints";
import { Response } from "@utils/types";
import { schema } from "@utils/validators";
import { Form, Formik } from "formik";

export const ResetPassword = () => {
  const { openToast } = useToastContext();
  const navigate = useNavigate();
  const email =
    typeof window !== "undefined" ? localStorage.getItem("email") : "";

  return (
    <>
      <MetaData
        pageTitle="Forgot Password &mdash; Vaultyfy"
        url="vultifier.vercel.app"
        previewImage=""
      />

      <Center>
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={schema.newPassword}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              try {
                const request = await fetch(auth.customer.resetPassword, {
                  method: "PATCH",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    email,
                    password: values.password,
                    confirmPassword: values.confirmPassword,
                  }),
                });

                const response: Response = await request.json();

                if (request.ok) {
                  openToast(response.message, "success");
                  navigate({ to: "/auth/login" });
                } else {
                  openToast(response.message, "error");
                }
              } catch (error) {
                console.error(error);
                openToast("Something went wrong. Please try again!", "error");
              }
              setSubmitting(false);
            }, 600);
          }}
        >
          {(formik) => (
            <Form>
              <Flex flexFlow="column" gap="4em">
                <Link to="/">
                  <Center>
                    <Image
                      src="/img/logo.svg"
                      alt="Vaultyfy logo"
                      height="41px"
                      width="151px"
                    />
                  </Center>
                </Link>

                <Flex flexFlow="column" gap=".6em">
                  <Stack direction="column" gap="0">
                    <Text
                      textAlign="center"
                      fontSize="34px"
                      fontFamily="var(--clash-grotesk-600)"
                    >
                      Reset password
                    </Text>
                    <Text
                      fontSize="16px"
                      color="var(--dark)"
                      lineHeight="18px"
                      fontWeight="400"
                      textAlign="center"
                    >
                      Enter new password
                    </Text>
                  </Stack>

                  <Box>
                    <InputField
                      name="password"
                      password
                      placeholder="New password"
                      type="password"
                    />
                    <InputField
                      password
                      name="confirmPassword"
                      placeholder="Confirm password"
                      type="password"
                    />

                    <PrimaryButton
                      mt="1em"
                      value="Update password"
                      loading={formik.isSubmitting}
                    />
                  </Box>
                </Flex>
              </Flex>
            </Form>
          )}
        </Formik>
      </Center>
    </>
  );
};
