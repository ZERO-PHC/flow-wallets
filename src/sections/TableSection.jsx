import React, { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react'
import styled from 'styled-components'
import PrimaryButton from '../components/PrimaryButton'
import TableComponent from '../components/TableComponent'
import TabsComponent from '../components/TabsComponent'
import { wallets } from '../data/wallets'
import { categories } from '../data/categories'

export default function TableSection({ handleAction }) {
    const [tabIndex, setTabIndex] = useState(0)
    const [Wallets, setWallets] = useState(wallets);

    const handleTabsChange = (index) => {
        setTabIndex(index)
        console.log("index", index)

        switch (index) {
            case 0:
                setWallets(wallets)
                break;
            case 1:
                setWallets(getSecurityWallets())
                break;
            case 2:
                setWallets(getAnonWallets())
                break;
            case 3:
                setWallets(getEaseWallets())
                break;
        
            default:
                break;
        }

    }

    const getSecurityWallets = () => {
        return wallets.filter(wallet => wallet.category === 'security')
    }
    const getAnonWallets = () => {
        return wallets.filter(wallet => wallet.category === 'anon')
    }
    const getEaseWallets = () => {
        return wallets.filter(wallet => wallet.category === 'ease')
    }

    const tabsProps = {
        categories,
        tabIndex,
        setTabIndex,
        handleAction,
        handleTabsChange,
    }

    const tableProps = {
        categories,
        tabIndex,
        setTabIndex,
        handleAction,
    }

    return (
        <Flex display="flex" pb="6rem"  direction={"column"} w={"100%"} h="100vh" align="center" justify="center">
            <TabsComponent {...tabsProps} />
            <TableComponent  wallets={Wallets} {...tableProps} handleAction={handleAction} />
        </Flex>
    )
}


