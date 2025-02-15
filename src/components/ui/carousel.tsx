import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Flex } from "@chakra-ui/react";

type CarouselProps = {
  children: React.ReactNode;
  autoPlayInterval?: number;
  options?: EmblaOptionsType;
  className?: string;
};

export const Carousel = ({
  children,
  autoPlayInterval = 3000,
  options = { loop: true },
  className = "",
}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <Box className="embla__viewport" ref={emblaRef}>
      <Flex className="embla__container" gap={4} w="100%">
        {React.Children.map(children, (child, index) => (
          <Box
            key={index}
            className={`embla__slide ${className}`}
            flex="0 0 auto"
          >
            {child}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
