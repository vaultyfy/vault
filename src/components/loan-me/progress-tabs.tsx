import {
  Box,
  Tabs,
  TabList,
  Tab,
  useMultiStyleConfig,
  useStyleConfig,
} from "@chakra-ui/react";

export const ProgressTabs = () => {
  const tabStyles = useMultiStyleConfig("Tabs", { variant: "unstyled" });
  const activeStyle = useStyleConfig("Tab", { variant: "custom" });

  return (
    <Box width="fit-content" mx="auto">
      <Tabs variant="unstyled" index={1}>
        <TabList display="flex" width="100%" gap="5rem">
          <Tab
            maxWidth="280px"
            borderRadius="full"
            border="2px solid"
            borderColor="transparent"
            bg="white"
            position="relative"
            padding="12px 16px"
            fontFamily="var(--poppins)"
            fontSize="14px"
            width="238px"
            fontWeight="500"
            _after={{
              content: '""',
              position: "absolute",
              right: "-30%",
              top: "50%",
              transform: "translateY(-50%)",
              height: "2px",
              width: "60px",
              bgGradient:
                "linear-gradient(104.4deg, #1ccfbd 1.7%, #2c9bf0 105.41%)",
              zIndex: 0,
            }}
            _selected={{
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
            }}
            sx={{
              "&[aria-selected=true]": {
                color: "#2c9bf0",
              },
              // Fix for first tab gradient border
              "&:first-of-type": {
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
            }}
          >
            Loan purpose & amount
          </Tab>
          <Tab
            maxWidth="280px"
            borderRadius="full"
            border="2px solid"
            borderColor="transparent"
            bg="white"
            position="relative"
            padding="12px  16px"
            fontFamily="var(--poppins)"
            fontSize="14px"
            fontWeight="500"
            width="183px"
            // _after={{
            //   content: '""',
            //   position: "absolute",
            //   right: "-30%",
            //   top: "50%",
            //   transform: "translateY(-50%)",
            //   height: "2px",
            //   width: "60px",
            //   bg: "#E2E8F0",
            //   zIndex: 0,
            // }}
            _after={{
              content: '""',
              position: "absolute",
              right: "-40%",
              top: "50%",
              transform: "translateY(-50%)",
              height: "2px",
              width: "60px",
              bgGradient:
                "linear-gradient(104.4deg, #1ccfbd 1.7%, #2c9bf0 105.41%)",
              zIndex: 0,
            }}
            _selected={{
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
            }}
            sx={{
              "&[aria-selected=true]": {
                color: "#2c9bf0",
              },
            }}
          >
            Financial details
          </Tab>
          <Tab
            borderRadius="full"
            width="238px"
            border="2px solid"
            borderColor="transparent"
            bg="#F7FAFC" // Light gray background for inactive tab
            color="#718096" // Medium gray text for inactive tab
            fontWeight="500"
            fontFamily="var(--poppins)"
            fontSize="14px"
            padding="12px 16px"
            maxWidth="280px"
          >
            Eligibility & acceptances
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};
