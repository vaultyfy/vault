import {
  Box,
  HStack,
  PinInput,
  PinInputField,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useTimer } from "react-timer-hook";
import { cookieOptions, State } from "@utils/constants";
import { setCookie } from "cookies-next";
import { useToastContext } from "@hooks/context";
import { useNavigate } from "@tanstack/react-router";
import { resendOtp, verifyOtp, verifyResetOtp } from "src/mutations";
import { HeaderText } from "@components/typography";
import { useCurrentPath } from "@hooks/current-path";
import { Response } from "@utils/types";

export const OtpScreen = () => {
  const { openToast } = useToastContext();
  const [state, setState] = React.useState<State>("idle");
  const navigate = useNavigate({ from: "/auth/signup" });
  const pathname = useCurrentPath();

  const timeMinute = new Date();
  timeMinute.setMinutes(timeMinute.getMinutes() + 2);

  const [pin, setPin] = React.useState<string[]>(Array(6).fill(""));
  const { minutes, seconds } = useTimer({ expiryTimestamp: timeMinute });

  const email =
    typeof window !== "undefined" ? localStorage.getItem("email") : "";

  const resendOTP = async () => {
    try {
      setState("resendingOtp");
      const request = await resendOtp(email!);
      const response: Response = await request?.json();
      if (request?.ok) openToast("OTP sent successfully", "success");
      else openToast(response.message, "error");
    } catch (error) {
      openToast("Failed to resend OTP", "error");
    } finally {
      setState("idle");
    }
  };

  const onPinChange = (value: string) => {
    setPin(value.split(""));
  };

  const verifyEmail = async () => {
    try {
      setState("verifyingOtp");
      const pinString = pin.join("");
      const request = await (pathname === "/auth/forgot-password"
        ? verifyResetOtp(pinString)
        : verifyOtp(pinString));

      const response: Omit<Response, "payload"> = await request?.json();

      if (request?.ok) {
        // we still need the email field in the payload when users try to reset their password
        // so we should only remove email from LS on other routes except forgot password
        pathname !== "/auth/forgot-password" &&
          localStorage.removeItem("email");

        openToast(response.message || "Email verified successfully", "success");
        navigate({
          to:
            pathname === "/auth/forgot-password"
              ? "/auth/reset-password"
              : "/auth/signup",
        });
      } else {
        openToast(response.message, "error");
      }
    } catch (error) {
      openToast("Something went wrong. Try again!", "error");
    } finally {
      setState("idle");
    }
  };

  React.useEffect(() => {
    const isPinComplete = pin.every((value) => value !== "");
    if (isPinComplete) verifyEmail();
  }, [pin]);

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    const pastedValue = pastedText.slice(0, 6);
    setPin(pastedValue.split(""));
  };

  return (
    <Box
      px="1em"
      py="2em"
      width={{ lg: "385px", md: "100%", base: "100%" }}
      height="fit-content"
      background="var(--pale-white)"
      backdropFilter="blur(10px)"
    >
      <HeaderText value="Verify email" />
      <Text
        fontSize="16px"
        fontWeight="400"
        lineHeight="24px"
        color="var(--dark)"
      >
        We sent a mail to {email}, check your inbox
      </Text>

      <Box my="1em">
        <HStack spacing={4} justifyContent="center" onPaste={handlePaste}>
          <PinInput
            otp
            placeholder=""
            isDisabled={state === "verifyingOtp"}
            value={pin.join("")}
            onChange={onPinChange}
          >
            {Array(6)
              .fill("")
              .map((_, index) => (
                <PinInputField
                  key={index}
                  height="60px"
                  width="50px"
                  borderRadius="4px"
                  border="1px solid var(--input-outline)"
                  opacity={state === "verifyingOtp" ? 0.5 : 1}
                  background="#fff"
                  _hover={{
                    border: "2px solid var(--primary)",
                    cursor: "pointer",
                  }}
                  _focusVisible={{ border: "1px solid var(--primary)" }}
                  disabled={state === "verifyingOtp"}
                />
              ))}
          </PinInput>
        </HStack>

        {minutes + seconds === 0 ? (
          <Text mt="1em" color="var(--dark)">
            Didn't receive a code?{" "}
            <Text
              as="span"
              color="var(--primary)"
              cursor="pointer"
              onClick={resendOTP}
            >
              Resend{" "}
              {state === "resendingOtp" && (
                <Spinner color="var(--grey)" size="xs" ml={2} />
              )}
            </Text>
          </Text>
        ) : (
          <Text pt="1.2em" color="var(--primary)">
            Resend{" "}
            <Text as="span" color="var(--dark)">
              code in {minutes.toString().padStart(2, "0")}:
              {seconds.toString().padStart(2, "0")}
            </Text>
          </Text>
        )}
      </Box>
    </Box>
  );
};
