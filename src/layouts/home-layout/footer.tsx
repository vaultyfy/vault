import {
  Box,
  Divider,
  Flex,
  Image,
  HStack,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@components/icon";
import { SectionContainer } from "@components/ui";
import { useMediaQuery } from "react-responsive";

const COMPANY_ITEMS = ["About Us", "How it works", "Features", "Faq"].map(
  (item) => ({
    name: item,
    path: item.replaceAll(" ", "-"),
  }),
);

const CONTACT_ITEMS = [
  "info@vaultify.com",
  "+234 304 304 349",
  "Press Conferences",
];

export const Footer = () => {
  const isMobile = useMediaQuery({ query: "max-width: 576px" });
  const isTablet = useMediaQuery({ query: "max-width: 992px" });

  const isSmallViewPort = isMobile || isTablet;

  const SOCIAL = [
    isSmallViewPort ? "insta-mob" : "instagram",
    isSmallViewPort ? "face-mob" : "facebook",
    isSmallViewPort ? "twi-mob" : "twitter",
  ].map((social) => ({
    name: social,
    url: "#",
  }));

  return (
    <Box background="var(--main)" py="6em">
      <SectionContainer>
        <Flex
          justifyContent="space-between"
          flexWrap={{ lg: "nowrap", md: "wrap", base: "wrap" }}
          mb="5em"
          gap="2em"
        >
          <Flex
            justifyContent="space-between"
            color="#fff"
            width={{ lg: "40%", base: "100%", md: "100%" }}
            flexWrap={{ lg: "nowrap", md: "wrap", base: "wrap" }}
          >
            <Flex flexFlow="column" gap=".4em">
              <Text fontSize="20px" fontWeight="500" lineHeight="30px">
                Company
              </Text>
              <Flex flexFlow="column" gap=".4em">
                {COMPANY_ITEMS.map((item, index) => {
                  return (
                    <List key={index}>
                      <ListItem
                        fontSize={{ lg: "18px", md: "16px", base: "14px" }}
                        fontWeight="400"
                      >
                        {item.name}
                      </ListItem>
                    </List>
                  );
                })}
              </Flex>
            </Flex>

            <Flex flexFlow="column" gap=".4em">
              <Text fontSize="20px" fontWeight="500" lineHeight="30px">
                Contact
              </Text>
              <Flex flexFlow="column" gap=".4em">
                {CONTACT_ITEMS.map((item, index) => {
                  return (
                    <List key={index}>
                      <ListItem
                        fontWeight="400"
                        lineHeight="24px"
                        fontSize={{ lg: "18px", md: "16px", base: "14px" }}
                      >
                        {item}
                      </ListItem>
                    </List>
                  );
                })}
              </Flex>
            </Flex>

            <Flex flexFlow="column" gap=".4em">
              <Text fontSize="20px" fontWeight="500" lineHeight="30px">
                Address
              </Text>
              <Flex flexFlow="column" gap=".4em">
                <List>
                  <ListItem
                    fontWeight="400"
                    lineHeight="24px"
                    fontSize={{ lg: "18px", md: "16px", base: "14px" }}
                  >
                    Lagos
                  </ListItem>
                </List>
              </Flex>
            </Flex>
          </Flex>

          <Box
            height="241px"
            width="420px"
            borderRadius="24px"
            border="1.49px solid #FFFFFF3D"
            background="var(--pale-grey)"
          ></Box>
        </Flex>

        <Divider color="var(--pale-grey)" my="4em" />

        <Box my="6em" display="flex" flexFlow="column" gap="4em">
          <Flex justifyContent="space-between">
            <HStack
              gap={{ lg: "1.4em", md: "1em", base: ".6em" }}
              alignItems="center"
            >
              <Image src="/vultifier-set.svg" />
              <Text
                fontWeight="600"
                fontSize="24px"
                lineHeight="36px"
                color="#fff"
              >
                Vultifier, 2024.
              </Text>
            </HStack>

            <HStack gap="1.4em">
              {SOCIAL.map((item, index) => {
                return (
                  <Box
                    key={index}
                    boxSize={{ lg: "66px", base: "44px", md: "44px" }}
                    background="#FFFFFF1A"
                    border="1.49px solid #FFFFFF3D"
                    borderRadius="50%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Icon name={item.name} />
                  </Box>
                );
              })}
            </HStack>
          </Flex>

          <Flex flexFlow="column" gap="1.4em">
            <Text
              fontSize="14px"
              lineHeight="21px"
              fontWeight="400"
              color="var(--text-secon)"
            >
              At Vaultyfy, we are revolutionizing the way people save and
              achieve their financial goals. Rooted in the age-old tradition of
              communal thrift savings, we bring innovation, trust, and
              flexibility to the forefront by leveraging modern technology to
              create a platform that works for everyone. Whether you’re looking
              to save for your next rent payment, fund your education, or
              achieve a personal milestone, Vaultyfy is designed to empower you
              to reach your goals faster and smarter.{" "}
            </Text>

            <Text
              fontSize="14px"
              lineHeight="21px"
              fontWeight="400"
              color="var(--text-secon)"
            >
              Our mission is simple: to build a supportive, transparent, and
              reliable savings ecosystem where individuals and groups can thrive
              financially. Vaultyfy connects savers from diverse backgrounds,
              matching them with the right groups to collaborate and grow
              together. By integrating features such as flexible contributions,
              automated tracking, and instant notifications, we ensure that your
              saving experience is seamless, secure, and stress-free. At the
              heart of Vaultyfy lies a strong community ethos. We believe that
              collective effort drives individual success. That’s why we’ve
              built tools to encourage consistency, reward participation, and
              celebrate milestones. Through features like referral programs,
              group leaderboards, and saver rewards, we aim to foster an
              environment where saving becomes a shared journey rather than an
              isolated task.
            </Text>
          </Flex>
        </Box>
      </SectionContainer>
    </Box>
  );
};
