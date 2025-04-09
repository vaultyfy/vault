import { extendTheme } from "@chakra-ui/react";
import { menuTheme } from "./menu";

const theme = extendTheme({
  components: {
    Menu: menuTheme,
  },
});

export default theme;
