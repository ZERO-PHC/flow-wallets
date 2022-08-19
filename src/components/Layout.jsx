import React from 'react'
import Navbar from './Navbar'
import { Flex } from '@chakra-ui/react'

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <Flex flexDir="column">{children}</Flex>
        </div>
    )
}
