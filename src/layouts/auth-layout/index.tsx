import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {useLocation} from "@tanstack/react-router";

interface AuthLayoutProps {
    children: React.ReactNode;
}

interface CarouselSlide {
    heading: string;
    description: string;
    image: string;
}

const slides: CarouselSlide[] = [
    {
        heading: "Reach your financial goals in short time",
        description:
            "Achieve your financial milestones faster with organized group savings",
        image: "/img/auth/woman-with-red-note.png",
    },
    {
        heading: "Smart matching system",
        description:
            "Our platform matches you with a thrift group that fits your savings goals",
        image: "/img/auth/people.png",
    },
    {
        heading: "Flexible contribution plan",
        description:
            "Choose a savings cycle that suits you—daily, weekly, or monthly.",
        image: "/img/auth/dashboard.png",
    },
];

export const AuthLayout = ({children}: AuthLayoutProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const location = useLocation();
    const isForgotPassword = location.pathname === "/auth/forgot-password";

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

    return (
        <Flex px="1em" py=".6em">
            {!isForgotPassword && (
                <Box
                    height="98vh"
                    width={{lg: "60%", md: "100%", base: "100%"}}
                    position="relative"
                    display={{lg: "block", md: "block", base: "none", sm: "none"}}
                    overflow="hidden"
                    background="var(--main)"
                    borderRadius="22px"
                >
                    <Box
                        ref={emblaRef}
                        overflow="hidden"
                        backgroundImage="/img/auth/coins.png"
                        backgroundRepeat="no-repeat"
                        backgroundSize="contain"
                        backgroundPosition="center"
                    >
                        <Box style={{display: "flex"}}>
                            {slides.map((slide, index) => (
                                <Box key={index} flex="0 0 100%" minWidth="0">
                                    <Box position="relative" height="100vh">
                                        <Box
                                            bgImage={slide.image}
                                            backgroundRepeat="no-repeat"
                                            height="100%"
                                            width="100%"
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
                                                fontSize={{lg: "34px", md: "28px", base: "24px"}}
                                                lineHeight={{lg: "34px", md: "28px", base: "24px"}}
                                                fontFamily="var(--clash-grotesk-600)"
                                            >
                                                {slide.heading}
                                            </Text>
                                            <Text
                                                py=".1em"
                                                fontWeight="400"
                                                fontSize={{lg: "20px", md: "18px", base: "16px"}}
                                                lineHeight={{lg: "30px", md: "28px", base: "24px"}}
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
                        gap=".2em"
                        left="50%"
                        transform="translateX(-50%)"
                    >
                        {slides.map((_, index) => (
                            <Box
                                key={index}
                                h="2"
                                bg="white"
                                cursor="pointer"
                                transition="all 0.3s ease"
                                width={selectedIndex === index ? "24px" : "8px"}
                                borderRadius="full"
                                background={selectedIndex === index ? "#fff" : "var(--primary)"}
                                onClick={() => emblaApi?.scrollTo(index)}
                            />
                        ))}
                    </Flex>
                </Box>
            )}

            <Box
                width={{lg: isForgotPassword ? "100%" : "60%", md: "100%", base: "100%"}}
                height="100vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >

                {children}
            </Box>
        </Flex>
    );
};
