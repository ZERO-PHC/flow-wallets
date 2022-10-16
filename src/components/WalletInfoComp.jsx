import React from "react";
import Image from "next/image";
import { Button, Flex, Divider, Heading, Text } from "@chakra-ui/react";
import WalletPlatformsIcons from "./WalletPlatformsIcons";

export default function WalletInfoComp({
  name,
  platforms,
  url,
  website,
  onClickFn,
  comingSoon
}) {
  return (
    <Flex
      flexDir="column"
      justify="space-between"
      gap={{ sm: 1, md: 4, lg: 6 }}
      mb={{ sm: "15px", md: 0, lg: 0 }}
    >
      <Flex gap={3}>
        <Image
          src={`/wallets/${url}`}
          alt={`${name} Wallet`}
          width={71}
          height={53}
          layout="fixed"
        />
        <Flex
          flexDir={{ md: "column", lg: "column" }}
          alignItems={{ sm: "center" }}
          gap={{ sm: 4, md: 1, lg: 1 }}
        >
          <Flex w={"100%"} flexDir="column">
            <Heading
              variant="primary"
              w={"100%"}
              textAlign="initial"
              fontSize={{ sm: 25, md: 20, lg: 26 }}
            >
              {name}
            </Heading>
            <Text fontSize={{ sm: 11, md: 13, lg: 15 }}>
              {comingSoon && "(Coming soon)"}
            </Text>
          </Flex>
          <WalletPlatformsIcons platforms={platforms} full="true"/>
        </Flex>
      </Flex>
      <Flex
        gap={2}
        alignItems="center"
        justifyContent={{ sm: "center", md: "normal", lg: "normal" }}
      >
        <Button
          variant={{ sm: "device", md: "semiBold", lg: "semiBold" }}
          onClick={onClickFn}
        >
          LEARN MORE
        </Button>
        <Divider
          w="2px"
          orientation="vertical"
          bg={"gray.500"}
          borderRadius={3}
          border="none"
        />
        <Button variant={{ sm: "device", md: "semiBold", lg: "semiBold" }}>
          <a href={website} target="_blank" rel="noopener noreferrer">
            SEE WEBSITE
          </a>
        </Button>
      </Flex>
    </Flex>
  );
}
