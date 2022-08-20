import { Container, Heading } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { features } from '../data/features';
import { useTable } from '../providers/table/TableProvider';
import { handleAction } from '../utils/generalUtils';
import { handleFeatureSelection } from '../utils/tableUtils';
import { FeatureComponent } from './FeatureComponent';
import { WalletComponent } from './WalletComponent';

export default function TableComponent() {
    const { Wallets, SelectedFeatures, setSelectedFeatures  } = useTable()
    return (
    <Container flexDir="row" alignItems={"stretch"} w="100%" p={0}>
        <Container p={0} boxShadow={0} >
            <Container p={2} borderRadius={"10px 0 0 10px"} boxShadow={0} justifyContent="flex-start">
            {Wallets.map((wallet, i) => (<WalletComponent key={i} wallet={wallet} handleAction={handleAction} />))}
            </Container>
        </Container>
        <Container variant="tableFeatures">
            <Heading fontSize={"18px"} pb={3} textAlign="center" fontFamily={"Blinker Bold"} borderBottom="1px solid" borderColor={"purple.100"}> 
            FEATURES 
            </Heading>
            {features.map((feature, i) => <FeatureComponent key={i} feature={feature} handleAction={handleAction} dialog={true} handleFeatureSelection={(feature) => handleFeatureSelection(feature, SelectedFeatures, setSelectedFeatures)} />)}
        </Container>
    </Container>
    )
}