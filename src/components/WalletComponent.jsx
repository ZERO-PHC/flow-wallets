import React from 'react';
import { Icon, IconButton } from '@chakra-ui/react';
import WalletSpecs from './WalletSpecs';


export const WalletComponent = ({ handleAction, wallet }) => {
    return (
        <main className='wallet-container' onClick={() => handleAction("wallet", wallet.id)}>
            <h1>{wallet.name}</h1>
            <WalletSpecs wallet={wallet} view={"home"} />
        </main>
    )
}


