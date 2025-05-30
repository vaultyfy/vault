import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Text,
  Flex,
  Button,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import SuccessModal from "@containers/app/settings/components/success-modal";
import { PasswordPayload } from "@utils/types";
import { changePassword } from "@mutations/change-password";
import { useNavigate } from "@tanstack/react-router";
import { useUiComponentStore } from "@store/ui";
import { SettingsHeader } from "./settings-header";

interface PasswordFields
  extends Pick<PasswordPayload, "newPassword" | "oldPassword"> {
  confirmPassword: string;
}

export const LoginSecurityCard = () => {
  const navigate = useNavigate();
  const { updateUiStore } = useUiComponentStore();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [editMode, setEditMode] = React.useState<Record<string, boolean>>({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });
  const [showPasswords, setShowPasswords] = React.useState<
    Record<string, boolean>
  >({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const formik = useFormik<PasswordFields>({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await changePassword({
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
          confirmNewPassword: values.confirmPassword,
        });
        setIsModalOpen(true);
        setEditMode({
          oldPassword: false,
          newPassword: false,
          confirmPassword: false,
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  const toggleEdit = (field: keyof PasswordFields) => {
    setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const togglePasswordVisibility = (field: keyof PasswordFields) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleNavigation = () => {
    navigate({ to: "/dashboard/settings" });
  };

  return (
    <Box maxWidth="482px">
      <SettingsHeader
        title="Login & Security"
        handleNavigation={handleNavigation}
      />

      <Box
        border="1px solid var(--outline)"
        borderRadius="8px"
        p={6}
        bg="white"
        boxShadow="sm"
      >
        {Object.keys(formik.values).map((field) => (
          <Box key={field} py={4}>
            <Text fontSize="14px" fontWeight="400" color="var(--grey)">
              {field === "oldPassword"
                ? "Old password"
                : field === "newPassword"
                  ? "New password"
                  : "Confirm new password"}
            </Text>

            <Flex align="center" gap={4} width="100%">
              {editMode[field] ? (
                <InputGroup>
                  <Input
                    name={field}
                    type={showPasswords[field] ? "text" : "password"}
                    variant="unstyled"
                    value={formik.values[field as keyof PasswordFields]}
                    onChange={formik.handleChange}
                    size="sm"
                    flex="1"
                    autoFocus
                    height="45px"
                    py=".6em"
                  />
                  <InputRightElement width="fit-content" mt=".1em" mr={1}>
                    <IconButton
                      aria-label={
                        showPasswords[field] ? "Hide password" : "Show password"
                      }
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        togglePasswordVisibility(field as keyof PasswordFields)
                      }
                      icon={
                        showPasswords[field] ? (
                          <EyeSlash color="var(--grey)" size={18} />
                        ) : (
                          <Eye color="var(--grey)" size={18} />
                        )
                      }
                    />
                  </InputRightElement>
                </InputGroup>
              ) : (
                <Text
                  fontSize="18px"
                  fontWeight="400"
                  color="var(--dark)"
                  flex="1"
                >
                  {field === "oldPassword" ? "************" : "******"}
                </Text>
              )}

              <Button
                variant="link"
                size="sm"
                fontWeight="400"
                bgGradient="var(--main-gradient)"
                bgClip="text"
                onClick={() => toggleEdit(field as keyof PasswordFields)}
              >
                {editMode[field] ? "Save" : "Edit"}
              </Button>
            </Flex>

            {field !== "confirmPassword" && <Divider mt={4} />}
          </Box>
        ))}
      </Box>

      <Flex justify="flex-end" mt={6}>
        <Button
          bg="var(--main)"
          color="white"
          borderRadius="36px"
          fontWeight="400"
          _hover={{ bg: "var(--main)" }}
          onClick={() => formik.handleSubmit()}
          isLoading={formik.isSubmitting}
        >
          Save settings
        </Button>
      </Flex>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Box>
  );
};
