import React from 'react';
import { Icon, IconButton } from '@chakra-ui/react';
import WalletSpecs from './WalletSpecs';
// import router from 'next/router';
import { useRouter } from 'next/router';


export const WalletComponent = ({ handleAction, wallet }) => {
    const router = useRouter();

    return (
        <main className='wallet-container' onClick={() => handleAction("wallet", wallet.id, router)}>
            <h1>{wallet.name}</h1>
            <WalletSpecs wallet={wallet} view={"home"} />
        </main>
    )
}


