import React from "react";
import { Icon, IconButton, Container, Divider, Flex } from "@chakra-ui/react";
import WalletSpecs from "./WalletSpecs";
import WalletInfoComp from "./WalletInfoComp";
// next useRouter 
import { useRouter } from "next/router";

export const WalletComponent = ({ handleAction, wallet }) => {
  const router = useRouter();
  return (
    <Container
      boxShadow={0}
      onClick={() => handleAction("wallet", wallet.id, router)}
      display="flex"
      height={"auto"}
    >
      <Flex justify="space-between" p={5}>
        <WalletInfoComp name={wallet.name} platforms={wallet.platforms} url={wallet.url}/>
        <WalletSpecs wallet={wallet} view={"home"} />
      </Flex>
      <Divider h="2px" bg={"gray.500"} borderRadius={3} border="none" />
    </Container>
  );
};
