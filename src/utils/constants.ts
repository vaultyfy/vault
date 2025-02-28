import { OptionsType } from "cookies-next";

export const MAIN_GRADIENT = "linear(to-r, #1CCFBD, #2C9BF0)";
export const HEADER_API_KEY = {
  "X-API-Key": import.meta.env.VITE_API_KEY!,
};

export const cookieOptions = {
  path: "/",
  maxAge: 30 * 24 * 60 * 60,
  sameSite: "strict",
  secure: process.env.NODE_ENV === "production",
} as Partial<OptionsType>;

export const TOKEN_KEY = "t";

export type State =
  | "idle"
  | "loading"
  | "resendingOtp"
  | "verifyingOtp"
  | "error"
  | "success"
  | "deleting";

export const avatars = [
  "/img/person-1.svg",
  "/img/person-2.svg",
  "/img/person-3.svg",
  "/img/person-4.svg",
  "/img/person-1.svg",
  "/img/person-4.svg",
];

export const borderGradientStyle = {
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-2px",
    borderRadius: "full",
    border: "10px solid",
    borderColor: "transparent",
    padding: "10px",
    boxSize: "2px",
    background: "var(--main-gradient)",
    WebkitMask: "var(--main-gradient) content-box, var(--main-gradient)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    zIndex: -1,
  },
};

export const borderGradientStyle_2 = {
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-1px",
    left: "-2px",
    borderRadius: "full",
    border: "10px solid",
    borderColor: "transparent",
    padding: "10px",
    boxSize: "2px",
    background: "var(--main-gradient)",
    WebkitMask: "var(--main-gradient) content-box, var(--main-gradient)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    zIndex: -1,
  },
};
