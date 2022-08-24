import React from 'react'
import Image from 'next/image'
import { Button, Flex, Divider, Heading } from '@chakra-ui/react'
import WalletPlatformsIcons from './WalletPlatformsIcons';

export default function WalletInfoComp({name, platforms, url}) {
  return (
    <Flex flexDir="column" justify="space-between" gap={{sm: 1, md: 4, lg: 6}}>
        <Flex gap={3}>
            <Image src={`/wallets/${url}`} alt={`${name} Wallet`} width={71} height={53} />
            <Flex flexDir={{md: "column", lg: "column"}} alignItems={{sm: "center"}} gap={{sm: 4, md: 1, lg: 1}}>
                <Heading variant="primary" w={"100%"} textAlign="initial" fontSize={{sm: 25, md: 20 ,lg:26}} >{name}</Heading>
                <WalletPlatformsIcons platforms={platforms} />
            </Flex>
        </Flex>
        <Flex gap={2} alignItems="center" justifyContent={{sm: "center", md: "normal", lg: "normal"}}>
            <Button variant="semiBold">LEARN MORE</Button>
            <Divider w="2px" orientation='vertical' bg={"gray.500"} borderRadius={3} border="none"/>
            <Button  variant="semiBold">SEE WEBSITE</Button>
        </Flex>
    </Flex>
  )
}
