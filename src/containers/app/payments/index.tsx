import {
  Box,
  Button,
  HStack,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Icon } from "@components/icon";
import { useWallet } from "@hooks/swr";
import { WithdrawalModal } from "@layouts/modal-layout";
import { formatPrice } from "@utils/misc";

export const Payments = () => {
  const { walletBalance } = useWallet();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        border="1px solid red"
        width={{ xl: "60%", lg: "70%", md: "70%", base: "100%" }}>
        <HStack justifyContent="space-between">
          <Stack direction="column">
            <Text fontSize="14px" fontWeight="500">
              Wallet Balance
            </Text>
            <Text fontSize="34px" fontFamily="var(--clash-grotesk-600)">
              {formatPrice(walletBalance || 0)}
            </Text>
          </Stack>
          <Button
            height="45px"
            color="#fff"
            leftIcon={<Icon name="money-send-light" />}
            background="var(--main)"
            fontWeight="500"
            borderRadius="36px"
            onClick={onOpen}
            _hover={{
              background: "var(--main)",
            }}>
            Cash out
          </Button>
        </HStack>

        <Box>
          <Text>Payment history go show up for here</Text>
        </Box>
      </Box>

      <WithdrawalModal
        isOpen={isOpen}
        onClose={onClose}
        balance={walletBalance || 0}
      />
    </>
  );
};
