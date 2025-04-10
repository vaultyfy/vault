import { extendTheme } from "@chakra-ui/react";
import { menuTheme } from "./menu";
import { tabsTheme } from "./tab";

const theme = extendTheme({
  components: {
    Menu: menuTheme,
    Tabs: tabsTheme,
  },
});

export default theme;
