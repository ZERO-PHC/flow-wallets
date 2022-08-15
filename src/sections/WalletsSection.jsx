import { Flex } from '@chakra-ui/react'
import React from 'react'
import GridComponent from '../components/GridComponent'
import PrimaryButton from '../components/PrimaryButton'
import { wallets } from '../data/wallets'


export default function WalletsSection({ handleAction }) {

    return (
        <Flex direction={"column"} w={"100%"} h="70vh" align="center" justify="center">
            <main>
                Wallets
            </main>
            {/* <GridComponent target={"wallets"} data={wallets} handleAction={handleAction} /> */}

        </Flex>

    )
}


