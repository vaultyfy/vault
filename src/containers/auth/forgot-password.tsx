import {MetaData} from "@components/metadata";
import React from "react";
import {Box, Button, Center, Flex, Image, Stack, Text} from "@chakra-ui/react";
import {Form, Formik} from "formik";
import {schema} from "@utils/validators";
import {Link} from "@tanstack/react-router";
import {InputField} from "@components/form";
import {auth} from "@utils/endpoints";
import {ForgotPasswordResponse, Response} from "@utils/types";
import {setCookie} from "cookies-next";
import {cookieOptions, TOKEN_KEY} from "@utils/constants";
import {useToastContext} from "@hooks/context";

export default function ForgotPassword(){
    const { openToast } = useToastContext();

    return(
        <>
            <MetaData
                pageTitle="Sign Up &mdash; Vaultyfy"
                url="livenormad.com"
                previewImage="/img/preview.png"
                description="Over 3000+ unique pieces of home decor from around the globe"
            />

            <Center>
                <Formik
                    initialValues={{
                        email: "",
                    }}
                    validationSchema={schema.forgotPassword}
                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            console.log(values, "hello me");

                            const request = await fetch(auth.customer.forgotPassword, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ email: values.email }),
                            });

                            const response: Response<ForgotPasswordResponse> = await request.json();

                            if (request.ok && response) {
                                if (response.payload?.token) {
                                    setCookie(TOKEN_KEY, JSON.stringify(response.payload.token), {
                                        ...cookieOptions,
                                    });
                                }

                                openToast(response.message || "Check your email for reset link", "success");
                            } else {
                                openToast(response.message || "Forgot Password failed", "error");
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
            </Center>
        </>
    )
}