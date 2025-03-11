import React from "react";
import {
  Box,
  Text,
  Divider,
  Flex,
  Image,
  Badge,
  Input,
  Button,
} from "@chakra-ui/react";
import { useUser } from "@hooks/swr";
import { updateUserInfo } from "@mutations/user";
import { bnvVerification, ninVerification } from "@mutations/kyc";
import { UserPayload, User, Response } from "@utils/types";
import { mutate } from "swr";
import { Formik, Form, Field, FieldProps } from "formik";
import { useToastContext } from "@hooks/context";

type SafeUserPayload = Omit<UserPayload, "acceptTermsAndConditions">;
type VerificationFields = "nin" | "bvn";

interface UserDetail {
  label: string;
  field: keyof SafeUserPayload;
}

interface VerificationDetail {
  label: string;
  field: VerificationFields;
  svgPath?: string;
  editable: boolean;
}

interface StatusDetail {
  label: string;
  status: string;
  success: boolean;
  svgPath: string;
}

const statusFields: StatusDetail[] = [
  {
    label: "Face verification",
    status: "Successful",
    success: true,
    svgPath: "/img/verification.svg",
  },
  {
    label: "Address verification",
    status: "Successful",
    success: true,
    svgPath: "/img/address-verification.svg",
  },
];

const userInfoFields: UserDetail[] = [
  { label: "Email", field: "email" },
  { label: "Full name", field: "name" },
  { label: "Phone number", field: "phoneNumber" },
  { label: "Address", field: "address" },
];

const verificationFields: VerificationDetail[] = [
  {
    label: "Government issued ID",
    field: "nin",
    editable: true,
  },
  {
    label: "BVN",
    field: "bvn",
    editable: true,
  },
];

export const PersonalInfo = () => {
  const { data: user } = useUser();
  const { openToast } = useToastContext();
  const [editModes, setEditModes] = React.useState<
    Record<VerificationFields, boolean>
  >({
    nin: false,
    bvn: false,
  });
  const [tempValues, setTempValues] = React.useState<
    Record<VerificationFields, string>
  >({
    // @ts-ignore
    nin: user?.nin || "",
    // @ts-ignore
    bvn: user?.bvn || "",
  });
  const [isSaving, setIsSaving] = React.useState<
    Record<VerificationFields, boolean>
  >({
    nin: false,
    bvn: false,
  });

  React.useEffect(() => {
    if (user) {
      setTempValues({
        // @ts-ignore
        nin: user.nin || "",
        // @ts-ignore
        bvn: user.bvn || "",
      });
    }
  }, [user]);

  const handleEditToggle = (field: VerificationFields) => {
    setEditModes((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleVerificationUpdate = async (field: VerificationFields) => {
    setIsSaving((prev) => ({ ...prev, [field]: true }));
    try {
      if (field === "nin") {
        const ninRequest = await ninVerification(tempValues.nin);
        if (ninRequest) {
          const ninResponse: Response = await ninRequest.json();
          if (ninRequest.ok) {
            openToast(ninResponse.message, "success");
          } else {
            openToast(ninResponse.message, "error");
          }
        }
      } else if (field === "bvn") {
        const bvnRequest = await bnvVerification(tempValues.bvn);
        if (bvnRequest) {
          const bvnResponse: Response = await bvnRequest.json();
          if (bvnRequest.ok) {
            openToast(bvnResponse.message, "success");
          } else {
            openToast(bvnResponse.message, "error");
          }
        }
      }

      mutate("user");
      setEditModes((prev) => ({ ...prev, [field]: false }));
    } catch (error) {
      console.error(`${field} verification failed:`, error);
    } finally {
      setIsSaving((prev) => ({ ...prev, [field]: false }));
    }
  };

  const initialValues: SafeUserPayload = {
    email: user?.email || "",
    name: user?.name || "",
    phoneNumber: user?.phoneNumber || "",
    address: user?.address || "",
  };

  const handleSubmitUserInfo = async (values: SafeUserPayload) => {
    try {
      const payload: UserPayload = {
        ...values,
        acceptTermsAndConditions: true,
      };

      const request = await updateUserInfo(payload);
      const response = await request?.json();
      if (request?.ok) {
        openToast(response.message, "success");
        mutate("user");
      } else {
        openToast(response.message, "error");
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <Box width={{ xl: "482px", lg: "100%", md: "100%", base: "100%" }}>
      <Text fontSize="24px" fontWeight="400" mb={4} color="var(--dark)">
        Personal Info
      </Text>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitUserInfo}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form>
            <Box
              border="0.5px solid var(--border-muted)"
              borderRadius="6px"
              px={{ lg: "1em", base: ".4em", md: ".6em" }}
              width="100%"
              mb={4}
            >
              {userInfoFields.map((item, index) => (
                <Box key={index}>
                  <Flex
                    px={3}
                    py="1.4em"
                    justify="space-between"
                    align="center"
                    borderRadius="6px"
                  >
                    <Flex align="center" gap={3} width="100%">
                      <Box flex="1">
                        <Text
                          fontSize="14px"
                          fontWeight="400"
                          color="var(--grey)"
                        >
                          {item.label}
                        </Text>
                        <Field name={item.field}>
                          {({ field }: FieldProps) => (
                            <Input
                              {...field}
                              variant="unstyled"
                              fontSize={{lg: "18px", md: "16px", base: "14px"}}
                              fontWeight="400"
                              color="var(--dark)"
                              placeholder={`Enter your ${item.label.toLowerCase()}`}
                              _placeholder={{
                                color: "var(--grey)",
                                fontSize: "14px",
                              }}
                            />
                          )}
                        </Field>
                      </Box>
                    </Flex>
                  </Flex>
                  {index !== userInfoFields.length - 1 && <Divider />}
                </Box>
              ))}
              <Flex justify="flex-end" p={3}>
                <Button
                  type="submit"
                  background="var(--main)"
                  isLoading={isSubmitting}
                  borderRadius="25px"
                  color="#fff"
                  fontWeight="400"
                  fontSize="14px"
                  _hover={{
                    cursor: "pointer",
                    background: "var(--main)",
                  }}
                >
                  Update Info
                </Button>
              </Flex>
            </Box>
          </Form>
        )}
      </Formik>

      <Box
        border="0.5px solid var(--border-muted)"
        borderRadius="6px"
        px={{ lg: "1em", base: ".4em", md: ".6em" }}
        width="100%"
      >
        {verificationFields.map((item, index) => (
          <Box key={index}>
            <Flex
              px={3}
              py="1.4em"
              justify="space-between"
              align="center"
              borderRadius="6px"
              transition="all .3s ease-out"
              _hover={{ bg: "var(--grey-100)" }}
              cursor="pointer"
            >
              <Flex align="center" gap={3} width="100%">
                <Box flex="1">
                  <Text fontSize="14px" fontWeight="400" color="var(--grey)">
                    {item.label}
                  </Text>

                  {editModes[item.field] ? (
                    <Input
                      value={tempValues[item.field] || ""}
                      onChange={(e) =>
                        setTempValues((prev) => ({
                          ...prev,
                          [item.field]: e.target.value,
                        }))
                      }
                      variant="unstyled"
                      fontSize="14px"
                      fontWeight="500"
                      color="var(--gray)"
                      autoFocus
                    />
                  ) : (
                    <Text
                      fontWeight="400"
                      // @ts-ignore
                      fontSize={user?.[item.field] ? "18px" : "14px"}
                      // @ts-ignore
                      color={user?.[item.field] ? "var(--dark)" : "var(--grey)"}
                    >
                      {/* @ts-ignore */}
                      {user?.[item.field] || "Not provided"}
                    </Text>
                  )}
                </Box>

                {item.svgPath && (
                  <Image src={item.svgPath} alt={item.label} boxSize="24px" />
                )}
              </Flex>

              {editModes[item.field] ? (
                <Flex gap={2}>
                  <Text
                    fontSize="14px"
                    color="gray.500"
                    onClick={() => handleEditToggle(item.field)}
                    cursor="pointer"
                  >
                    Cancel
                  </Text>
                  <Text
                    fontSize="14px"
                    color="var(--btn-secondary)"
                    onClick={() => handleVerificationUpdate(item.field)}
                    cursor="pointer"
                  >
                    {isSaving[item.field] ? "Saving..." : "Save"}
                  </Text>
                </Flex>
              ) : (
                <Text
                  fontSize="14px"
                  color="var(--btn-secondary)"
                  cursor="pointer"
                  onClick={() => handleEditToggle(item.field)}
                >
                  Edit
                </Text>
              )}
            </Flex>
            <Divider />
          </Box>
        ))}

        {statusFields.map((item, index) => (
          <Box key={index}>
            <Flex
              px={3}
              py="1.4em"
              justify="space-between"
              align="center"
              borderRadius="6px"
            >
              <Flex align="center" gap={3} width="100%">
                <Box flex="1">
                  <Text fontSize="14px" fontWeight="400" color="var(--grey)">
                    {item.label}
                  </Text>

                  <Badge
                    fontSize="14px"
                    fontWeight="400"
                    color="#13AD60"
                    borderRadius="19px"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="#2CF08E21"
                    px={4}
                    minW="91px"
                    height="26px"
                    lineHeight="26px"
                    textAlign="center"
                    textTransform="capitalize"
                    mt=".6em"
                  >
                    {item.status}
                  </Badge>
                </Box>

                {item.svgPath && (
                  <Image src={item.svgPath} alt={item.label} boxSize="24px" />
                )}
              </Flex>
            </Flex>
            {index !== statusFields.length - 1 && <Divider />}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
