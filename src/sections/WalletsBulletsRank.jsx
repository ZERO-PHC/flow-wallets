import React from "react";
import { Flex, Divider } from "@chakra-ui/react";
import SpecsBulletsView from "../components/SpecsBulletsView";

export default function WalletsBulletsRank({specs}) {
  return (
    <Flex gap={{sm: 3, md: 6, lg: 8}} justifyContent="center" alignItems="flex-end" p={12}>
      <SpecsBulletsView title="Ease of use" rank={specs.usability} />
      <Divider
        w="1px"
        h={{sm: "40px", md: "55px", lg: "63px"}}
        orientation="vertical"
        bg={"white.100"}
        borderRadius={3}
      />
      <SpecsBulletsView title="Security" rank={specs.security} />
      <Divider
        w="1px"
        h={{sm: "40px", md: "55px", lg: "63px"}}
        orientation="vertical"
        bg={"white.100"}
        borderRadius={3}
      />
      <SpecsBulletsView title="Anonymity" rank={specs.anonymity} />
      <Divider
        w="1px"
        h={{sm: "40px", md: "55px", lg: "63px"}}
        orientation="vertical"
        bg={"white.100"}
        borderRadius={3}
      />
      <SpecsBulletsView title="Buy Crypto" rank={specs.crypto} />
    </Flex>
  );
}
