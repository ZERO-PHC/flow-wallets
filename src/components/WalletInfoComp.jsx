import React from 'react'
import Image from 'next/image'
import { Button, Flex, Divider, Heading } from '@chakra-ui/react'
import WalletPlatformsIcons from './WalletPlatformsIcons';

export default function WalletInfoComp({name, platforms, url}) {
  return (
    <Flex flexDir="column" justify="space-between" gap={6}>
        <Flex gap={3}>
            <Image src={`/wallets/${url}`} alt={`${name} Wallet`} width={71} height={53} />
            <Flex flexDir="column" gap={1}>
                <Heading variant="primary" w={"100%"} textAlign="initial">{name}</Heading>
                <WalletPlatformsIcons platforms={platforms} />
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
