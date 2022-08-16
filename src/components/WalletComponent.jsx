import React from 'react';
import { Icon, IconButton } from '@chakra-ui/react';


export const WalletComponent = ({ handleAction, wallet }) => {
    return (
        <main className='wallet-container' onClick={() => handleAction("wallet", wallet.id)}>
            <h1>{wallet.title}</h1>
        </main>
    )
}


