import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import WalletsTable from '../components/WalletsTable'

export default function SimilarWalletsSection({ids}) {
  return (
    <Flex flexDir="column" gap={4} pb={8}>
        <Heading fontSize={"1.5rem"}>Similar Wallets</Heading>
        <WalletsTable ids={ids}/>
    </Flex>
  )
}
