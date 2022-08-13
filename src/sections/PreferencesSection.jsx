import React from 'react'
import { Flex, Grid } from "@chakra-ui/react"
import Card from '../components/Card'

export default function PreferencesSection({handleAction}) {
    return (
        <Flex w={"100%"} h="60vh" align="center" justify="center">
            <Grid gap={20} w="50%" autoFlow="column dense">
                <Card handleAction={handleAction} target="users" />
                <Card handleAction={handleAction} target="devs" />
            </Grid>
        </Flex>
    )
}


