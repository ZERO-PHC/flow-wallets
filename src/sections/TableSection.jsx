import React, { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react'
import styled from 'styled-components'
import PrimaryButton from '../components/PrimaryButton'
import TableComponent from '../components/TableComponent'
import TabsComponent from '../components/TabsComponent'

export default function TableSection() {
    return (
        <Flex display="flex" pb="6rem" direction={"column"} w={"100%"} h="70vh" align="center" justify="start">
            <TabsComponent  />
            <TableComponent   />
        </Flex>
    )
}


