import { Heading, Text, Flex, Divider } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Tooltip } from "@chakra-ui/react";

export default function WalletSpecs({ wallet, view }) {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (wallet.specs.security == "High") {
      setColor("green");
    } else if (wallet.specs.security == "Medium") {
      setColor("yellow");
    } else if (wallet.specs.security == "Low") {
      setColor("red");
    }
    // Dont add a dependency here , it was creating a ssr bug
  }, []);
  
  return (
    <Flex gap={4} alignItems="flex-start">
      <Flex flexDir="column" alignItems={"center"} gap={3}>
        <Flex alignItems={"center"} gap={1}>
          <Text alignSelf={"end"}>Security</Text>
          <Tooltip label={`Green - High security, Yellow - Medium security and Red - Low security.`} aria-label='A tooltip'>
            <Icon icon="bx:info-circle" width="15" />
          </Tooltip>
        </Flex>
        <Icon icon="clarity:shield-solid" color={color} width="20" />
      </Flex>
      <Divider
        w="2px"
        h="70%"
        orientation="vertical"
        bg={"gray.500"}
        borderRadius={3}
        border="none"
      />
      <Flex flexDir="column" gap={1}>
        <Text alignSelf={"end"}>Anonimity</Text>
        <Heading variant="primary">Medium</Heading>
      </Flex>
      <Divider
        w="2px"
        h="70%"
        orientation="vertical"
        bg={"gray.500"}
        borderRadius={3}
        border="none"
      />
      <Flex flexDir="column" gap={1}>
        <Text alignSelf={"end"}>Ease of use</Text>
        <Heading variant="primary">Medium</Heading>
      </Flex>
    </Flex>
  );
}
