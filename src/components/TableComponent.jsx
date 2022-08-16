import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { features } from '../data/features';
import { useDialog } from '../providers/DialogProvider';
import { FeatureComponent } from './FeatureComponent';
import { WalletComponent } from './WalletComponent';

export default function TableComponent({ Wallets, handleAction,  }) {

    return (<Wrapper >
        <main className='wallets-container'>
            {Wallets.map((wallet, i) => (<WalletComponent key={i} wallet={wallet} handleAction={handleAction} />))}
        </main>
        <main className='features-container'>
            <header> FEATURES </header>
            {features.map((feature, i) => <FeatureComponent key={i} feature={feature} handleAction={handleAction} dialog={true} />)}
        </main>
    </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 70%;
height: 100%;
background-color: #f5f5f5;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

.feature-container {
    padding: 1rem;
}

.wallets-container {
    width: 80%;
    height: 100%;
    border-right: 1px solid #e0e0e0;
}

.wallet-container {
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}

.wallet {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 0.5rem;
}

.features-container {
    width: 20%;
    height: 100%;
`