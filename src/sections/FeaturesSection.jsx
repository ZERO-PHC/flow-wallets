import { Flex } from '@chakra-ui/react'
import React from 'react'
import GridComponent from '../components/GridComponent'
import PrimaryButton from '../components/PrimaryButton'
import { features } from '../data/features'


export default function FeaturesSection({ handleAction }) {

    return (
        <Flex direction={"column"} w={"100%"} h="50%" align="center" justify="center">
            <main>
                tabs
            </main>
            <GridComponent data={features} handleAction={handleAction}  />
        <PrimaryButton />
        </Flex>

    )
}


