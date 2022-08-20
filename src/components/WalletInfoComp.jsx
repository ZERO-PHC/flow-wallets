import React from 'react'
import Image from 'next/image'
import { Button, Flex, Divider, Heading } from '@chakra-ui/react'
import { Icon } from '@iconify/react';

export default function WalletInfoComp({name, platforms}) {
    console.log("PLATFORMS",platforms)
  return (
    <Flex flexDir="column" justify="space-between" gap={6}>
        <Flex gap={3}>
            <Image src="/wallets/lilicoWallet.png" alt="Lilico Wallet" width={60} height={53} />
            <Flex flexDir="column" gap={1}>
                <Heading variant="primary" w={"100%"} textAlign="initial">{name}</Heading>
                <Flex gap={1}>
                    {platforms.includes("web") && <Icon icon="bi:globe" />}
                    {platforms.includes("chrome") && <Icon icon="ant-design:chrome-outlined" />}
                    {platforms.includes("playstore") && <Icon icon="fa-brands:app-store" />}
                    {platforms.includes("appstore") && <Icon icon="teenyicons:google-play-store-outline" />}
                </Flex>
            </Flex>
        </Flex>
        <Flex gap={2} alignItems="center">
            <Button variant="semiBold">LEARN MORE</Button>
            <Divider w="2px" orientation='vertical' bg={"gray.500"} borderRadius={3} border="none"/>
            <Button  variant="semiBold">SEE WEBSITE</Button>
        </Flex>
    </Flex>
  )
}
