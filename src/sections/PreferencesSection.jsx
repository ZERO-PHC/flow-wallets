import React from 'react'
import { Flex, Grid, Heading } from "@chakra-ui/react"
import Card from '../components/Card'
import PreferenceCard from '../components/PreferenceCard'

export default function PreferencesSection() {
    return (
        <Flex w={"100%"} h="60vh" align="center" justify="center" flexDir={'column'}>
            <Heading mb={8} mr={"auto"}>Choose your wallet preferences</Heading>
            <Grid gap={20} autoFlow="column dense">
                <PreferenceCard title="Non-Custodial"/>
                <PreferenceCard title="Custodial"/>
                {/* <Card handleAction={handleAction} target="users" />
                <Card handleAction={handleAction} target="devs" /> */}
            </Grid>
        </Flex>

    )
}


