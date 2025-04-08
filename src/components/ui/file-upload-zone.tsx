import React, {
  useMemo,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useDropzone, Accept } from "react-dropzone";
import { useField } from "formik";
import { Box, Progress, Text, Image, Center } from "@chakra-ui/react";
import { useToastContext } from "@hooks/context";
// import { ParagraphText } from "./typography";

interface ReactDropzoneProps {
  name: string;
  accept: Accept | undefined;
  maxFiles?: number;
  maxSize?: number;
  borderColor?: string;
  borderRadius?: string | number;
  multiple?: boolean;
  children?: React.ReactNode;
  onImageUpload?: (file: File[] | File) => void;
}

export const ReusableDropzone = forwardRef(
  (
    {
      name,
      accept,
      maxFiles = 1,
      maxSize = 2048576,
      children,
      borderColor,
      borderRadius = "0.5rem",
      multiple,
      onImageUpload,
    }: ReactDropzoneProps,
    ref,
  ) => {
    const [field, meta, helpers] = useField(name); // Use Formik's useField hook
    const [uploading, setUploading] = useState(false);
    const [previews, setPreviews] = useState<string[]>([]);
    const { openToast } = useToastContext();
    // Prevent duplicate open calls
    const isOpening = useRef(false);

    const handleFilePreview = (files: File[]) => {
      const previewUrls = files.map((file) =>
        file.type.startsWith("image/") ? URL.createObjectURL(file) : file.name,
      );
      setPreviews(previewUrls);
      if (onImageUpload) onImageUpload(files);
      helpers.setValue(multiple ? files : files[0]);
    };

    const {
      getRootProps,
      getInputProps,
      open: dropzoneOpen,
      // fileRejections,
      // isFocused,
      isDragAccept,
      isDragReject,
      acceptedFiles,
    } = useDropzone({
      accept,
      multiple: multiple || false,
      maxFiles,
      maxSize,
      onDrop: (acceptedFiles) => {
        helpers.setTouched(true);
        setUploading(true);
        handleFilePreview(acceptedFiles);

        // Simulate upload progress
        // const uploadInterval = setInterval(() => {
        //   setUploadProgress((prev) => {
        //     if (prev >= 100) {
        //       clearInterval(uploadInterval);
        //       setUploading(false);
        //       return 100;
        //     }
        //     return prev + 10;
        //   });
        // }, 500);
      },
      onDropRejected: (rejections) => {
        const errorMessages = rejections
          .flatMap(({ file, errors }) =>
            errors.map((error) => `${file.name}: ${error.message}`),
          )
          .join("\n");
        helpers.setError(errorMessages); // Update Formik field error
        openToast(errorMessages, "error");
        setUploading(false);
      },
    });

    // Expose `open` function to parent components via ref
    useImperativeHandle(ref, () => ({
      open: () => {
        if (!isOpening.current) {
          isOpening.current = true;
          dropzoneOpen();
          setTimeout(() => (isOpening.current = false), 300);
        }
      },
    }));

    const baseStyle = {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderWidth: "1.5px",
      borderRadius: borderRadius,
      borderColor: borderColor,
      borderStyle: "dashed",
      backgroundColor: "var(--white)",
      outline: "none",
      transition: "border .24s ease-in-out",
    };

    const acceptStyle = { borderColor: "var(--primary)" };
    const rejectStyle = { borderColor: "var(--coral)" };

    const style = useMemo(
      () => ({
        ...baseStyle,
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {}),
      }),
      [isDragAccept, isDragReject],
    );

    return (
      <Box className="dropzone" height="full">
        <Box
          {...getRootProps({ style: style as any })}
          className={isDragReject ? "shake" : ""}
          height="100%"
        >
          <input {...getInputProps()} />
          {previews.length > 0 ? (
            <Center width="100%" height="100%" position="relative">
              {previews.map((preview, index) => (
                <Box
                  key={index}
                  display="inline-flex"
                  width="100%"
                  maxWidth="100%"
                  maxHeight="100%"
                  overflow="hidden"
                >
                  {preview.startsWith("blob:") ? (
                    <Image
                      src={preview}
                      alt={`Preview ${index}`}
                      maxWidth="100%"
                      maxHeight="100%"
                      objectFit="contain"
                      mr={2}
                      sx={{
                        width: "auto",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  ) : (
                    <Text>{preview}</Text>
                  )}
                </Box>
              ))}
            </Center>
          ) : (
            children
          )}
        </Box>

        {/* File Previews */}

        {/* Error Feedback */}
        {meta.touched && meta.error && (
          <Text color="var(--coral)" mt={2} fontSize="sm">
            {meta.error}
          </Text>
        )}
      </Box>
    );
  },
);
