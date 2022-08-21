import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function WalletPageFooter({ website }) {
  return (
    <Flex justifyContent="space-between" p="50px 0" maxW={"1100px"} w="100%">
      <Flex gap={4} alignItems="center">
        <Link href="/">
          <Button onClick={() => {}} variant="guideBtn">
            <Icon icon="eva:arrow-ios-back-outline" width="30" />
          </Button>
        </Link>
        <Text fontFamily="Blinker Bold" fontSize="25px">
          Go Back
        </Text>
      </Flex>
      <Flex gap={4} alignItems="center">
        <Text fontFamily="Blinker Bold" fontSize="25px">
          See Website
        </Text>
        <a href={website} target="_blank" rel="noopener noreferrer">
          <Button onClick={() => {}} variant="guideBtn">
            <Icon icon="bx:link-alt" width="30" />
          </Button>
        </a>
      </Flex>
    </Flex>
  );
}
