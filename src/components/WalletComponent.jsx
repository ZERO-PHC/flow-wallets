import React from "react";
import { Icon, IconButton, Container, Divider, Flex } from "@chakra-ui/react";
import WalletSpecs from "./WalletSpecs";
import WalletInfoComp from "./WalletInfoComp";
// import useDialog from the providers folder
import { useDialog } from "../providers/DialogProvider";

import { useRouter } from "next/router";

export const WalletComponent = ({ handleAction, wallet }) => {
  const router = useRouter();
  const { setOpenSearch } = useDialog()

  return (
    <Container
      boxShadow={0}
      onClick={() => handleAction("wallet", wallet.id, router, setOpenSearch)}
      display="flex"
      height={"auto"}
    >
      <Flex justify="space-between" p={{sm: "20px 10px", md: 5,lg: 5}} flexDir={{sm: "column", md: "row", lg: "row"}}>
        <WalletInfoComp name={wallet.name} platforms={wallet.platforms} url={wallet.url}/>
        <WalletSpecs wallet={wallet} view={"home"} />
      </Flex>
      <Divider h="2px" bg={"gray.500"} borderRadius={3} border="none" />
    </Container>
  );
};
