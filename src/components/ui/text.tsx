import { MotionText } from "@config/motion";
import { textVariants } from "@containers/home/hero";

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <MotionText
      fontFamily="var(--clash-grotesk-600)"
      textTransform="capitalize"
      lineHeight={{
        xl: "70px",
        lg: "55px",
        md: "46px",
        base: "40px",
      }}
      variants={textVariants}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true, amount: 0.5 }}
      textAlign={{ lg: "left", md: "left", base: "center" }}
      fontSize={{ xl: "70px", lg: "58px", md: "45px", base: "48px" }}
    >
      {title}
    </MotionText>
  );
};
