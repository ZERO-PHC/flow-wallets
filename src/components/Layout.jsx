import React from 'react'
import Navbar from './Navbar'
import { Flex } from '@chakra-ui/react'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Flex flexDir="column">{children}</Flex>
        </>
    )
}
