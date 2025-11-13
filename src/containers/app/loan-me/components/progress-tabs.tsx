import { Box, Tabs, TabList, Tab, useMediaQuery } from "@chakra-ui/react";
import { useLoanStepFlow } from "@hooks/context";
import { LoanStep } from "@utils/types";
import { useEffect, useRef } from "react";

const stepToIndex: Record<LoanStep, number> = {
  "loan-purpose": 0,
  "financial-details": 1,
  "eligibility-acceptance": 2,
};

const indexToStep = (index: number): LoanStep =>
  (Object.keys(stepToIndex) as LoanStep[]).find(
    (key) => stepToIndex[key] === index
  ) as LoanStep;

export const ProgressTabs = () => {
  const { activeStep, completedSteps, setActiveStep } = useLoanStepFlow();

  const activeIndex = stepToIndex[activeStep];
  const isStepCompleted = (step: LoanStep) => completedSteps.includes(step);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (tabsRef.current && isMobile) {
      const tabList = tabsRef.current.querySelector("[role='tablist']");
      const activeTab = tabsRef.current.querySelector(
        `[data-index="${activeIndex}"]`
      );

      if (tabList && activeTab) {
        const tabListRect = tabList.getBoundingClientRect();
        const activeTabRect = activeTab.getBoundingClientRect();
        const targetScrollLeft =
          activeTabRect.left +
          activeTabRect.width / 2 -
          tabListRect.left -
          tabListRect.width / 2;

        (tabList as HTMLElement).scrollLeft += targetScrollLeft;
      }
    }
  }, [activeIndex, isMobile]);

  const stepAlignment = {
    "loan-purpose": "flex-start",
    "financial-details": "center",
    "eligibility-acceptance": "flex-end",
  } as const;

  return (
    <Box
      width={{ base: "full", md: "fit-content" }}
      mx="auto"
      ref={tabsRef}
      overflowX={isMobile ? "auto" : "visible"}>
      <Tabs
        variant="unstyled"
        index={activeIndex}
        onChange={(index) => {
          if (!isStepCompleted("eligibility-acceptance")) {
            if (isStepCompleted(indexToStep(index))) {
              setActiveStep(indexToStep(index));
            }
          } else {
            return;
          }
        }}>
        <TabList
          display="flex"
          width="100%"
          gap="5rem"
          justifyContent={stepAlignment[activeStep] ?? "flex-start"}>
          {/* Tab 1 - step_1 */}
          <Tab
            maxWidth="280px"
            borderRadius="full"
            border="2px solid"
            borderColor={
              isStepCompleted("loan-purpose") ? "transparent" : "gray.200"
            }
            cursor={
              isStepCompleted("loan-purpose") &&
              !isStepCompleted("eligibility-acceptance")
                ? "pointer"
                : "not-allowed"
            }
            bg="white"
            position="relative"
            padding="12px 16px"
            fontFamily="var(--poppins)"
            fontSize="14px"
            width="238px"
            fontWeight="500"
            flexShrink={0}
            _selected={{
              color: "#2c9bf0",
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
              ...(isStepCompleted("loan-purpose") &&
              activeStep !== "loan-purpose"
                ? {
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
                    _after: {
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
                    },
                  }
                : {
                    _after: {
                      content: '""',
                      position: "absolute",
                      right: "-30%",
                      top: "50%",
                      transform: "translateY(-50%)",
                      height: "2px",
                      width: "60px",
                      backgroundColor: "gray.400",
                      zIndex: 0,
                    },
                  }),
            }}>
            Loan purpose & amount
          </Tab>

          {/* Tab 2 - step_2 */}
          <Tab
            maxWidth="280px"
            borderRadius="full"
            border="2px solid"
            borderColor={
              isStepCompleted("financial-details") ? "transparent" : "gray.200"
            }
            bg="white"
            position="relative"
            padding="12px 16px"
            fontFamily="var(--poppins)"
            fontSize="14px"
            fontWeight="500"
            width="183px"
            flexShrink={0}
            cursor={
              isStepCompleted("financial-details") &&
              !isStepCompleted("eligibility-acceptance")
                ? "pointer"
                : "not-allowed"
            }
            opacity={isStepCompleted("financial-details") ? 1 : 0.6}
            _selected={{
              color: "#2c9bf0",
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
              ...(isStepCompleted("financial-details") &&
              activeStep !== "financial-details"
                ? {
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
                    _after: {
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
                    },
                  }
                : {
                    _after: {
                      content: '""',
                      position: "absolute",
                      right: "-40%",
                      top: "50%",
                      transform: "translateY(-50%)",
                      height: "2px",
                      width: "60px",
                      backgroundColor: "gray.400",
                      zIndex: 0,
                    },
                  }),
            }}>
            Financial details
          </Tab>

          {/* Tab 3 - step_3 */}
          <Tab
            borderRadius="full"
            width="238px"
            border="2px solid"
            borderColor={
              isStepCompleted("eligibility-acceptance")
                ? "transparent"
                : "gray.200"
            }
            bg="white"
            position="relative"
            padding="12px 16px"
            maxWidth="280px"
            fontFamily="var(--poppins)"
            fontSize="14px"
            fontWeight="500"
            flexShrink={0}
            cursor={
              isStepCompleted("eligibility-acceptance")
                ? "pointer"
                : "not-allowed"
            }
            opacity={isStepCompleted("eligibility-acceptance") ? 1 : 0.6}
            _selected={{
              color: "#2c9bf0",
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
              ...(isStepCompleted("eligibility-acceptance") &&
              activeStep !== "eligibility-acceptance"
                ? {
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
                  }
                : {}),
            }}>
            Eligibility & acceptances
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};
