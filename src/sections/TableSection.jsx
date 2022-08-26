import React from 'react';
import { Flex } from '@chakra-ui/react'
import TableComponent from '../components/TableComponent'
import TabsComponent from '../components/TabsComponent'

export default function TableSection() {
    return (
        <Flex display="flex" pb="3rem" pt={{sm: "3rem", md: "5rem", lg: "1rem"}} flexDir={"column"} w={"100%"} align="center" justify="start">
            <TabsComponent  />
            <TableComponent />
        </Flex>
    )
}