import React from "react";
import { Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export default function WalletPlatformsIcons({platforms, size}) {
  return (
    <Flex gap={1}>
      {platforms.includes("web") && <Icon icon="bi:globe" width={size && size}/>}
      {platforms.includes("chrome") && (
        <Icon icon="ant-design:chrome-outlined" width={size && size} />
      )}
      {platforms.includes("playstore") && <Icon icon="fa-brands:app-store" width={size && size} />}
      {platforms.includes("appstore") && (
        <Icon icon="teenyicons:google-play-store-outline" width={size && size}/>
      )}
    </Flex>
  );
}
