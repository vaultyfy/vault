import {
  Box,
  Divider,
  Flex,
  Image,
  HStack,
  List,
  ListItem,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { Icon } from "@components/icon";
import { SectionContainer } from "@components/ui";
import { useMobileScreens } from "@hooks/mobile-screen";
import { BetweenHorizonalStartIcon } from "lucide-react";

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
  const { isSmallViewPort } = useMobileScreens();

  const SOCIAL = [
    isSmallViewPort ? "insta-mob" : "instagram",
    isSmallViewPort ? "face-mob" : "facebook",
    isSmallViewPort ? "twi-mob" : "twitter",
  ].map((social) => ({
    name: social,
    url: "#",
  }));

  return (
    <Box background="var(--main)" py={{ lg: "6em", base: "2em", md: "3em" }}>
      <SectionContainer>
        <Flex
          justifyContent="space-between"
          flexWrap={{ lg: "nowrap", md: "wrap", base: "wrap" }}
          mb="5em"
          gap="2em"
        >
          <SimpleGrid
            columns={{ lg: 3, md: 3, base: 2 }}
            gap="3em"
            color="#fff"
            width={{ lg: "56%", base: "100%", md: "100%" }}
          >
            <Flex flexFlow="column" gap="1.2em">
              <Text
                fontSize={{ lg: "20px", base: "16px", md: "16px" }}
                fontWeight={{ lg: "500", md: "400", base: "400" }}
                lineHeight="30px"
              >
                Company
              </Text>
              <Flex flexFlow="column" gap="1em">
                {COMPANY_ITEMS.map((item, index) => {
                  return (
                    <List key={index}>
                      <ListItem
                        fontSize={{ lg: "16px", md: "16px", base: "14px" }}
                        fontWeight="300"
                      >
                        {item.name}
                      </ListItem>
                    </List>
                  );
                })}
              </Flex>
            </Flex>

            <Flex flexFlow="column" gap="1.2em">
              <Text
                fontSize={{ lg: "20px", base: "16px", md: "16px" }}
                fontWeight={{ lg: "500", md: "400", base: "400" }}
                lineHeight="30px"
              >
                Contact
              </Text>
              <Flex flexFlow="column" gap="1em">
                {CONTACT_ITEMS.map((item, index) => {
                  return (
                    <List key={index}>
                      <ListItem
                        fontWeight="300"
                        lineHeight="24px"
                        fontSize={{ lg: "16px", md: "16px", base: "14px" }}
                      >
                        {item}
                      </ListItem>
                    </List>
                  );
                })}
              </Flex>
            </Flex>

            <Flex flexFlow="column" gap="1.2em">
              <Text
                fontSize={{ lg: "20px", base: "16px", md: "16px" }}
                fontWeight={{ lg: "500", md: "400", base: "400" }}
                lineHeight="30px"
              >
                Address
              </Text>
              <Flex flexFlow="column" gap="1em">
                <List>
                  <ListItem
                    fontWeight="300"
                    lineHeight="24px"
                    fontSize={{ lg: "16px", md: "16px", base: "14px" }}
                  >
                    Lagos
                  </ListItem>
                </List>
              </Flex>
            </Flex>
          </SimpleGrid>

          <Box
            height="fit-content"
            width="420px"
            borderRadius="24px"
            border="1.49px solid #FFFFFF3D"
            background="var(--pale-grey)"
            px="1.8em"
            py="1.6em"
            display="flex"
            flexFlow="column"
            gap="1.6em"
          >
            <HStack justifyContent="space-between" alignItems="center">
              <HStack gap=".8em">
                <Box
                  boxSize="60px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="100%"
                  background="var(--white-fade)"
                >
                  <Image src="/favicon.svg" />
                </Box>

                <Flex flexFlow="column" gap=".2em">
                  <Text
                    fontWeight="500"
                    color="#fff"
                    fontSize="20px"
                    lineHeight="30px"
                  >
                    Vaultify
                  </Text>
                  <Text color="#FFFFFFCC" fontSize="16px" fontWeight="400">
                    @vaultify
                  </Text>
                </Flex>
              </HStack>

              <Icon name="twitter" />
            </HStack>

            <Text
              fontSize={{ lg: "20px", md: "16px", base: "14px" }}
              fontWeight="400"
              lineHeight={{ lg: "30px", md: "26px", base: "21px" }}
              color="#fff"
            >
              We just announced new feature that would help you increase your
              experience of using Vultifier!
            </Text>
          </Box>
        </Flex>

        <Divider
          color="var(--pale-grey)"
          my={{ lg: "4em", md: "2em", base: "2em" }}
        />

        <Box
          my={{ lg: "6em", base: "2em", md: "4em" }}
          display="flex"
          flexFlow="column"
          gap={{ lg: "4em", base: "2em", md: "4em" }}
        >
          <Flex justifyContent="space-between">
            <HStack
              gap={{ lg: "1.4em", md: "1em", base: ".6em" }}
              alignItems="center"
            >
              <Image
                src="/img/vaulty-foot.svg"
                boxSize={{ lg: "initial", md: "initial", base: "30px" }}
              />
              <Text
                fontWeight="600"
                fontSize={{ lg: "24px", md: "20px", base: "" }}
                lineHeight={{ lg: "36px", base: "24px", md: "30px" }}
                color="#fff"
              >
                Vaultyfy, 2024.
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
                    _hover={{
                      cursor: "pointer",
                    }}
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
