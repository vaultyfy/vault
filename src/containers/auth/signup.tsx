import {Box, Button, Center, Flex, Image, Stack, Text} from "@chakra-ui/react";
import {Link} from "@tanstack/react-router";
import {InputField} from "@components/form";
import {Form, Formik} from "formik";
import {schema} from "@utils/validators";

export default function Signup() {

    const handleSubmit = (values: { email: string; username: string; password: string; }) => {
        // Handle form submission
        console.log(values);
    };

    return (
        <>
            <Center>
                <Formik
                    initialValues={{
                        email: "",
                        username:"",
                        password: "",
                    }}
                    validationSchema={schema.signUp}
                    onSubmit={handleSubmit}
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
                                            Create account
                                        </Text>
                                        <Text
                                            fontSize="16px"
                                            color="var(--dark)"
                                            lineHeight="18px"
                                            fontWeight="400"
                                        >
                                            Enter your details to create an account.
                                        </Text>
                                        f
                                    </Stack>
                                    <InputField type="email" name="email" placeholder="Email" />
                                    <InputField
                                        username
                                        type="username"
                                        name="username"
                                        placeholder="Username"
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
                                        textTransform="capitalize"
                                    >
                                        Already have an account?{" "}
                                        <Link to="/auth/signup">
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
                    )}
                </Formik>
            </Center>
        </>
    );
};
