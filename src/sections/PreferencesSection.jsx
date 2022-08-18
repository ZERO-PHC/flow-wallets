import React from 'react'
import { Flex, Grid } from "@chakra-ui/react"
import Card from '../components/Card'

export default function PreferencesSection() {
    return (
        <Flex flexDirection={"column"} width="100%">
            <h2>Choose your Wallet Preferences</h2>
            <Flex w={"100%"} h="40vh" align="center" justify="space-around">
                    <Card type="guide" resource={0} />
                    <Card type="guide" resource={1} />
            </Flex>
        </Flex>

    )
}


