import {
  Text,
  Box,
  Button,
  Center,
  Image,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { schema } from "@utils/validators";
import { InputField } from "@components/form";
import { MetaData } from "@components/metadata";
import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants";
import { useToastContext } from "@hooks/context";
import { setCookie } from "cookies-next";
import { Link, useNavigate } from "@tanstack/react-router";
import { auth } from "@utils/endpoints";
import { LoginResponse, Response } from "@utils/types";

export const LoginPage = () => {
  const { openToast } = useToastContext();
  const navigate = useNavigate();

  return (
    <>
      <MetaData
        pageTitle="Sign In &mdash; Vaultyfy"
        previewImage="/img/preview.png"
        url="vultifier.vercel.app"
      />

      <Center>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={schema.login}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              try {
                const request = await fetch(auth.customer.login, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                  }),
                });

                const response: Response<LoginResponse> = await request.json();

                if (request.ok) {
                  setCookie(
                    TOKEN_KEY,
                    JSON.stringify(response.payload?.token),
                    {
                      ...cookieOptions,
                    },
                  );
                  openToast(response.message, "success");
                  navigate({ to: "/dashboard" });
                } else {
                  openToast(response.message || "Login failed", "error");
                }
              } catch (error) {
                console.error("Login error:", error);
                openToast("An error occurred. Please try again.", "error");
              }

              setSubmitting(false);
            }, 600);
          }}
        >
          {(formik) => (
            <Form>
              <Flex flexFlow="column" gap="4em">
                <Link to="/">
                  <Image
                    src="/img/logo.svg"
                    alt="Vaultyfy logo"
                    height="41px"
                    width="151px"
                  />
                </Link>

                <Box>
                  <Stack direction="column" gap="0">
                    <Text fontSize="34px" fontFamily="var(--clash-grotesk-600)">
                      Sign in
                    </Text>
                    <Text
                      fontSize="16px"
                      color="var(--dark)"
                      lineHeight="18px"
                      fontWeight="400"
                    >
                      Enter your details to login to your account.
                    </Text>
                    f
                  </Stack>
                  <InputField type="email" name="email" placeholder="Email" />
                  <InputField
                    password
                    type="password"
                    name="password"
                    placeholder="Password"
                  />

                  <Link to="/auth/forgot-password">
                    <Text
                      float="right"
                      color="var(--grey)"
                      fontWeight="400"
                      lineHeight="21px"
                      cursor="pointer"
                      mt="-1em"
                      py=".6em"
                      fontSize="14px"
                      textDecoration="underline"
                    >
                      Forgot password?
                    </Text>
                  </Link>

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
                    Sign in
                  </Button>

                  <Text
                    textAlign="center"
                    fontWeight="400"
                    color="var(--dark)"
                    py=".4em"
                    fontSize={{ lg: "16px", md: "16px", base: "14px" }}
                    textTransform="capitalize"
                  >
                    Don’t have an account?{" "}
                    <Link to="/auth/signup">
                      <Box
                        cursor="pointer"
                        as="span"
                        color="var(--primary)"
                        fontWeight="400"
                      >
                        Sign up
                      </Box>
                    </Link>
                  </Text>
                </Box>
              </Flex>
            </Form>
          )}
        </Formik>
      </Center>
    </>
  );
};
