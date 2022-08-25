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
    <Flex gap={4} alignItems="flex-start" justifyContent={{sm: "center"}}>
      <Flex flexDir="column" alignItems={"center"} gap={{sm: 1,md: 3,lg: 3}}>
        <Flex alignItems={"center"} gap={1}>
          <Text alignSelf={"end"} fontSize={{sm: "15px", md: "18px", lg: "22px"}}>Security</Text>
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
        <Text alignSelf={"end"} fontSize={{sm: "14px", md: "16px", lg: "16px"}}>Anonimity</Text>
        <Heading variant="primary" fontSize={{sm: "18px", md: "20px", lg: "20px"}}>Medium</Heading>
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
        <Text alignSelf={"end"} fontSize={{sm: "14px", md: "16px", lg: "16px"}}>Ease of use</Text>
        <Heading variant="primary" fontSize={{sm: "18px", md: "20px", lg: "20px"}}>Medium</Heading>
      </Flex>
    </Flex>
  );
}
