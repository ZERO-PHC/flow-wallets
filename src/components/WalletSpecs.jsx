import { Heading, Text, Flex, Divider } from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@iconify/react';

export default function WalletSpecs({ wallet, view }) {
    return (
        <Flex gap={4} alignItems="center">
            <Flex flexDir="column" alignItems={"center"}>
                <Text alignSelf={"end"}>{wallet.specs.security}</Text>
                <Icon icon="clarity:shield-solid"  color="green"/>
            </Flex>
            <Divider w="2px" h="70%" orientation='vertical' bg={"gray.500"} borderRadius={3} border="none"/>
            <Flex flexDir="column">
                <Text alignSelf={"end"}>{wallet.specs.anonymity}</Text>
                <Heading variant="primary">Medium</Heading>
            </Flex>
            <Divider w="2px" h="70%" orientation='vertical' bg={"gray.500"} borderRadius={3} border="none"/>
            <Flex flexDir="column">
                <Text alignSelf={"end"}>{wallet.specs.usability}</Text>
                <Heading variant="primary">Medium</Heading>
            </Flex>
        </Flex>
        )
}
