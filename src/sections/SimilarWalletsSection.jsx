import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import WalletsTable from '../components/WalletsTable'

export default function SimilarWalletsSection({ids}) {
  return (
    <Flex flexDir="column" gap={{sm: 2, lg: 4}} p={{sm: 3, lg: 8}}>
        <Heading fontSize={{sm: "1.1rem", md: "1.3rem", lg: "1.5rem"}}>Similar Wallets</Heading>
        <WalletsTable ids={ids}/>
    </Flex>
  )
}
