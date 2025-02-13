import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { AuthLayoutProps, SLIDES } from ".";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useMobileScreens } from "@hooks/mobile-screen";
import { useNavigate } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

interface AuthCarouselProps extends Pick<AuthLayoutProps, "currentRoute"> {}

export const AuthCarousel = ({ currentRoute }: AuthCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { isSmallViewPort } = useMobileScreens();
  const navigate = useNavigate();

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(intervalId);
    };
  }, [emblaApi, onSelect]);

  React.useEffect(() => {
    if (!isSmallViewPort && currentRoute === "/auth")
      navigate({ to: "/auth/login" });
  }, [isSmallViewPort]);

  return (
    <>
      {currentRoute === "/auth/reset-password" ? null : (
        <>
          <Box
            height={isSmallViewPort ? "100vh" : "98vh"}
            width={{ lg: "60%", md: "100%", base: "100%" }}
            position="relative"
            display={{
              lg: "block",
              md: currentRoute === "/auth" ? "block" : "none",
              base: currentRoute === "/auth" ? "block" : "none",
            }}
            overflow="hidden"
            background="var(--main)"
            borderRadius={isSmallViewPort ? "0" : "22px"}
          >
            <Box
              ref={emblaRef}
              overflow="hidden"
              backgroundImage="/img/auth/coins.png"
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
              backgroundPosition="center"
            >
              <Box style={{ display: "flex" }}>
                {SLIDES.map((slide, index) => (
                  <Box key={index} flex="0 0 100%" minWidth="0">
                    <Box position="relative" height="100vh">
                      <Box
                        bgImage={slide.image}
                        backgroundRepeat="no-repeat"
                        height="100%"
                        width="100%"
                        backgroundSize={
                          isSmallViewPort && index !== 0 ? "contain" : ""
                        }
                        bgPosition={index !== 0 ? "center" : ""}
                        position="absolute"
                        left={index === 0 ? "-120px" : ""}
                        bottom={
                          index === 0
                            ? {
                                "2xl": "-150px",
                                xl: "-200px",
                                lg: "-80px",
                                md: "-80px",
                                sm: "-50px",
                                base: "-80px",
                              }
                            : ""
                        }
                      />

                      <Box
                        position="absolute"
                        color="#fff"
                        left="50%"
                        transform="translateX(-50%)"
                        display="flex"
                        justifyContent="center"
                        flexFlow="column"
                        gap=".8em"
                        top={{
                          "2xl": "10%",
                          xl: "10%",
                          lg: "4%",
                          md: "6%",
                          base: "4%",
                        }}
                        textAlign="center"
                        width={{
                          "2xl": "400px",
                          xl: "70%",
                          lg: "80%",
                          md: "80%",
                          base: "80%",
                        }}
                      >
                        <Text
                          fontSize={{ lg: "34px", md: "28px", base: "24px" }}
                          lineHeight={{ lg: "34px", md: "28px", base: "24px" }}
                          fontFamily="var(--clash-grotesk-600)"
                        >
                          {slide.heading}
                        </Text>
                        <Text
                          py=".1em"
                          fontWeight="400"
                          fontSize={{ lg: "20px", md: "18px", base: "16px" }}
                          lineHeight={{ lg: "30px", md: "28px", base: "24px" }}
                        >
                          {slide.description}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            <Flex
              position="absolute"
              bottom="20"
              justifyContent="center"
              left="50%"
              transform="translateX(-50%)"
              flexFlow="column"
              gap="2em"
              alignItems="center"
            >
              <Flex gap=".2em">
                {SLIDES.map((_, index) => (
                  <Box
                    key={index}
                    h="2"
                    bg="white"
                    cursor="pointer"
                    transition="all 0.3s ease"
                    width={selectedIndex === index ? "24px" : "8px"}
                    borderRadius="full"
                    background={
                      selectedIndex === index ? "#fff" : "var(--primary)"
                    }
                    onClick={() => emblaApi?.scrollTo(index)}
                  />
                ))}
              </Flex>

              {isSmallViewPort && (
                <Link to="/auth/login">
                  <Button
                    width="160px"
                    borderRadius="36px"
                    height="50px"
                    background="#fff"
                    color="var(--dark)"
                    _hover={{ background: "#fff" }}
                    textTransform="capitalize"
                    fontWeight="500"
                    fontSize="14px"
                  >
                    continue
                  </Button>
                </Link>
              )}
            </Flex>
          </Box>
        </>
      )}
    </>
  );
};
