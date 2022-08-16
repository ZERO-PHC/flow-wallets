import React, { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react'
import styled from 'styled-components'
import PrimaryButton from '../components/PrimaryButton'
import TableComponent from '../components/TableComponent'
import TabsComponent from '../components/TabsComponent'

export default function TableSection(props) {

   
    

    return (
        <Flex display="flex" pb="6rem" direction={"column"} w={"100%"} h="100vh" align="center" justify="center">
            <TabsComponent {...props} />
            <TableComponent {...props}  />
        </Flex>
    )
}


