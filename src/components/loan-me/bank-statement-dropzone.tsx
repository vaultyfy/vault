import { Flex, Box, Text, IconButton } from "@chakra-ui/react";
import { ReusableDropzone } from "@components/ui";
import { Accept } from "react-dropzone";
import { Icon } from "@components/icon";

interface BankStatementDropzoneProps {
  dropzoneRef: React.RefObject<{ open: () => void }>;
  maxFileNumber?: number;
  fileType?: Accept | undefined;
  name: string;
  type?: "primary" | "secondary";
  height?: string;
  onImageUpload?: (file: File[] | File) => void;
}

export const BankStatementDropzone = ({
  dropzoneRef,
  fileType = {
    "application/*": [".pdf", ".docx", ".doc"],
  },
  maxFileNumber = 1,
  name,
  onImageUpload,
}: BankStatementDropzoneProps) => {
  return (
    <Box width="full" height="63px" rounded="8px">
      <ReusableDropzone
        name={name}
        accept={fileType}
        maxFiles={maxFileNumber}
        onImageUpload={onImageUpload}
      >
        <Flex
          justifyContent="space-between"
          py="3px"
          px="10px"
          minHeight="full"
          width="full"
          backgroundColor="#f6f6f6"
          alignItems="center"
          cursor="pointer"
        >
          <Box width="fit-content" fontFamily="var(--poppins)">
            <Text fontWeight="400" fontSize="14px" color="var(--grey)">
              Bank statement
            </Text>
            <Text fontWeight="400" fontSize="14px" color="var(--dark)">
              A statement not older than 6months
            </Text>
          </Box>
          <IconButton
            variant="ghost"
            boxSize="26px"
            icon={<Icon name="document-upload" type="app" />}
            onClick={() => dropzoneRef.current?.open()}
            aria-label="Upload Document"
          />
        </Flex>
      </ReusableDropzone>
    </Box>
  );
};
