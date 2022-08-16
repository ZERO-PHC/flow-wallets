import React from 'react'
import { Flex, Grid } from "@chakra-ui/react"
import Card from '../components/Card'

export default function PreferencesSection({ handleAction, handleSelection, walletPref }) {
    return (
        <Flex w={"100%"} h="60vh" align="center" justify="center">
            <Grid gap={20} w="50%" autoFlow="column dense">
                <Card handleAction={handleAction} handleSelection={handleSelection} type="guide" resource="custodial"  walletPref={walletPref} />
                <Card handleAction={handleAction} handleSelection={handleSelection} type="guide" resource="non-custodial" walletPref={walletPref} />
            </Grid>
        </Flex>
    )
}


