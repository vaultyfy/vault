import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  tablist: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    width: "100%",
  },
  tab: {
    fontWeight: "medium",
    borderRadius: "full",
    transition: "all 0.2s ease-in-out",
    _focus: {
      boxShadow: "none",
    },
  },
  tabpanel: {
    padding: "4",
  },
});

const variants = {
  progress: definePartsStyle({
    tablist: {
      border: "none",
    },
    tab: {
      flex: "1",
      border: "2px solid",
      borderColor: "transparent",
      bg: "white",
      position: "relative",
      _selected: {
        color: "#2c9bf0",
        bg: "white",
        border: "2px solid",
        borderColor: "transparent",
        position: "relative",
        _before: {
          content: '""',
          position: "absolute",
          top: "-2px",
          right: "-2px",
          bottom: "-2px",
          left: "-2px",
          borderRadius: "full",
          padding: "2px",
          bgGradient:
            "linear-gradient(104.4deg, #1ccfbd 1.7%, #2c9bf0 105.41%)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
        },
      },
      _disabled: {
        bg: "#F7FAFC",
        color: "#718096",
        opacity: 1,
        cursor: "not-allowed",
      },
    },
  }),
  custom: definePartsStyle({
    tab: {
      _selected: {
        color: "#2c9bf0",
      },
    },
  }),
};

export const tabsTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: "progress",
    colorScheme: "blue",
  },
});
