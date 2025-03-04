import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Flex } from "@chakra-ui/react";

type CarouselProps = {
  children: React.ReactNode;
  options?: EmblaOptionsType;
  className?: string;
};

export const Carousel = ({
  children,
  options = { loop: true },
  className = "",
}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  return (
    <Box
      className="embla__viewport"
      ref={emblaRef}
      overflow="hidden"
      width="100%"
    >
      <Flex className="embla__container" w="full">
        {React.Children.map(children, (child, index) => (
          <Box
            key={index}
            className={`embla__slide ${className}`}
            scrollSnapAlign="start"
          >
            {child}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
