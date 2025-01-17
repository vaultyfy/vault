import { useEffect } from "react";
import { MotionBox, MotionImage } from "@config/motion";
import { useScroll, useTransform } from "motion/react";

const COIN_OFFSET = 100;
const AMOUNT_OF_EXPOSED_VIEW = 1;

const FALLING_TRANSITION = {
  type: "spring",
  duration: 0.6,
  bounce: 0.3,
  velocity: 400,
  stiffness: 150,
};

export const Coins = () => {
  const { scrollYProgress } = useScroll();

  const scrollTransform = useTransform(
    scrollYProgress,
    [0, 0.5],
    [COIN_OFFSET, -COIN_OFFSET],
  );

  return (
    <MotionBox
      position="relative"
      height="600px"
      backgroundImage="url(/img/lines.svg)"
    >
      <MotionImage
        position="absolute"
        top="40%"
        left="44%"
        src="/img/coin-2-center.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
        initial={{ y: -COIN_OFFSET * 2, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ...FALLING_TRANSITION }}
        style={{
          y: scrollTransform,
        }}
        viewport={{ once: true, amount: AMOUNT_OF_EXPOSED_VIEW }}
      />
      <MotionImage
        position="absolute"
        top="32%"
        right={{ lg: "-9%", md: "4%", base: "0%" }}
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
        src="/img/coin-5.svg"
        initial={{ y: -COIN_OFFSET * 2, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ...FALLING_TRANSITION, delay: 0.1 }}
        style={{
          y: scrollTransform,
        }}
        viewport={{ once: true, amount: AMOUNT_OF_EXPOSED_VIEW }}
      />
      <MotionImage
        position="absolute"
        bottom="1%"
        right="2%"
        src="/img/coin-12.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
        initial={{ y: -COIN_OFFSET * 2, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ...FALLING_TRANSITION, delay: 0.2 }}
        style={{
          y: scrollTransform,
        }}
        viewport={{ once: true, amount: AMOUNT_OF_EXPOSED_VIEW }}
      />
      <MotionImage
        position="absolute"
        bottom="3%"
        left="48%"
        src="/img/coin-7.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
        initial={{ y: -COIN_OFFSET * 2, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ...FALLING_TRANSITION, delay: 0.3 }}
        style={{
          y: scrollTransform,
        }}
        viewport={{ once: true, amount: AMOUNT_OF_EXPOSED_VIEW }}
      />
      <MotionImage
        position="absolute"
        bottom="10%"
        left="1%"
        src="/img/coin-4.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
        initial={{ y: -COIN_OFFSET * 2, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ...FALLING_TRANSITION, delay: 0.4 }}
        style={{
          y: scrollTransform,
        }}
        viewport={{ once: true, amount: AMOUNT_OF_EXPOSED_VIEW }}
      />
      <MotionImage
        position="absolute"
        bottom="30%"
        left="1%"
        src="/img/coin-1.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
        initial={{ y: -COIN_OFFSET * 2, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ...FALLING_TRANSITION, delay: 0.5 }}
        style={{
          y: scrollTransform,
        }}
        viewport={{ once: true, amount: AMOUNT_OF_EXPOSED_VIEW }}
      />
      <MotionImage
        position="absolute"
        bottom="16%"
        left="60%"
        src="/img/coin-9.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
        initial={{ y: -COIN_OFFSET * 2, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ...FALLING_TRANSITION, delay: 0.6 }}
        style={{
          y: scrollTransform,
        }}
        viewport={{ once: true, amount: AMOUNT_OF_EXPOSED_VIEW }}
      />
      <MotionImage
        position="absolute"
        top="16%"
        left="20%"
        src="/img/coin-7.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
        initial={{ y: -COIN_OFFSET * 2, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ...FALLING_TRANSITION, delay: 0.7 }}
        style={{
          y: scrollTransform,
        }}
        viewport={{ once: true, amount: AMOUNT_OF_EXPOSED_VIEW }}
      />
      <MotionImage
        position="absolute"
        top="1%"
        right="36%"
        src="/img/coin-11.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
        initial={{ y: -COIN_OFFSET * 2, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ...FALLING_TRANSITION, delay: 0.8 }}
        style={{
          y: scrollTransform,
        }}
        viewport={{ once: true, amount: AMOUNT_OF_EXPOSED_VIEW }}
      />
      <MotionImage
        position="absolute"
        top="-3%"
        right="6%"
        src="/img/coin-3.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
        initial={{ y: -COIN_OFFSET * 2, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ...FALLING_TRANSITION, delay: 0.9 }}
        style={{
          y: scrollTransform,
        }}
        viewport={{ once: true, amount: AMOUNT_OF_EXPOSED_VIEW }}
      />
      <MotionImage
        position="absolute"
        top="18%"
        right="8%"
        src="/img/coin-10.svg"
        boxSize={{ lg: "initial", md: "100px", base: "110px" }}
        initial={{ y: -COIN_OFFSET * 2, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ...FALLING_TRANSITION, delay: 1 }}
        style={{
          y: scrollTransform,
        }}
        viewport={{ once: true, amount: AMOUNT_OF_EXPOSED_VIEW }}
      />
    </MotionBox>
  );
};
