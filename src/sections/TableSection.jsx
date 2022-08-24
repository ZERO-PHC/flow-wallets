import React, { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react'
import styled from 'styled-components'
import PrimaryButton from '../components/PrimaryButton'
import TableComponent from '../components/TableComponent'
import TabsComponent from '../components/TabsComponent'

export default function TableSection() {
    return (
        <Flex display="flex" pb="6rem" pt={{sm: "5rem", md: "5rem", lg: "1rem"}} flexDir={"column"} w={"100%"} align="center" justify="start">
            <TabsComponent  />
            <TableComponent />
        </Flex>
    )
}


