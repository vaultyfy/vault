import { ModalLayoutProps } from "@components/ui";
import { OptionsType } from "cookies-next";

export const MAIN_GRADIENT = "linear(to-r, #1CCFBD, #2C9BF0)";
export const HEADER_API_KEY = {
  "X-API-Key": import.meta.env.VITE_API_KEY!,
};

export const BANKS_LIST = "https://nigerianbanks.xyz/";
export const DEFAULT_REDIRECT_URL = "/auth/login";

export const CONTRIBUTION_FREQUENCY = Array.from([
  "Daily",
  "Weekly",
  "Monthly",
  "Yearly",
  "Three_Months",
  "Six_Months",
]).map((frequency) => ({
  label: frequency.replaceAll("_", " "),
  value: frequency,
}));

export interface BaseModalProps
  extends Pick<ModalLayoutProps, "isOpen" | "onClose"> {}

export const cookieOptions = {
  path: "/",
  maxAge: 30 * 24 * 60 * 60,
  sameSite: "strict",
  secure: process.env.NODE_ENV === "production",
} as Partial<OptionsType>;

export const swrOptions = {
  revalidateIfStale: true,
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
};

export const TOKEN_KEY = "t";

export type State =
  | "idle"
  | "loading"
  | "resendingOtp"
  | "verifyingOtp"
  | "error"
  | "success"
  | "deleting";

export const bgs = ["b6e3f4", "c0aede", "d1d4f9", "ffd5dc", "ffdfbf"];
const randomBgIndex = Math.floor(Math.random() * bgs.length);
export const randomBg = bgs[randomBgIndex];

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
