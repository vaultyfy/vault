import { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  Divider,
  Input,
} from "@chakra-ui/react";
import SuccessModal from "@containers/app/settings/loginSecurity/SuccessModal";

interface PasswordFields {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const LoginSecurityCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwords, setPasswords] = useState<PasswordFields>({
    oldPassword: "************",
    newPassword: "",
    confirmPassword: "",
  });

  const [editMode, setEditMode] = useState<{ [key: string]: boolean }>({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });


  const handleChange = (field: keyof PasswordFields, value: string) => {
    setPasswords((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleEdit = (field: keyof PasswordFields) => {
    setEditMode((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <Box width="482px">
      <Text fontSize="24px" fontWeight="400" mb={4} color={"#1C1C1C"}>
        Login & Security
      </Text>

      <Box
        border="1px solid #E2E8F0"
        borderRadius="8px"
        p={6}
        bg="white"
        boxShadow="sm"
      >

        {Object.keys(passwords).map((field) => (
          <Box key={field} py={4}>
            <Text fontSize="14px" fontWeight="400" color="#818181">
              {field === "oldPassword"
                ? "Old password"
                : field === "newPassword"
                  ? "New password"
                  : "Confirm new password"}
            </Text>

            <Flex align="center" gap={4} width="100%">
              {editMode[field as keyof PasswordFields] ? (
                <Input
                  type="password"
                  value={passwords[field as keyof PasswordFields]}
                  onChange={(e) =>
                    handleChange(field as keyof PasswordFields, e.target.value)
                  }
                  size="sm"
                  flex="1"
                />
              ) : (
                <Text fontSize="18px" fontWeight="400" color={"#1C1C1C"} flex="1">
                  {passwords[field as keyof PasswordFields] || "******"}
                </Text>
              )}

              <Button
                variant="link"
                size="sm"
                color="#1CCFBD"
                onClick={() => toggleEdit(field as keyof PasswordFields)}
              >
                {editMode[field as keyof PasswordFields] ? "Save" : "Edit"}
              </Button>
            </Flex>

            {field !== "confirmPassword" && <Divider mt={4} />}
          </Box>
        ))}
      </Box>

      <Flex justify="flex-end" mt={6}>
        <Button
          bg="#102634"
          color="white"
          borderRadius="36px"
          _hover={{ bg: "#102634" }} //this keeps the background color unchanged on hover
          _active={{ bg: "#102634" }} //this Prevents active click effect
          _focus={{ boxShadow: "none" }} //this Removes focus outline
          onClick={() => setIsModalOpen(true)}
        >
          Save settings
        </Button>
      </Flex>
      <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Box>
  );
};

export default LoginSecurityCard;
