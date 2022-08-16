import React from 'react'
import { useDialog } from "../providers/DialogProvider";
import { Icon, IconButton } from '@chakra-ui/react';



export const FeatureComponent = ({ feature, handleAction, dialog }) => {
     const { handleDialogAction} = useDialog()
    return (
        <main className='feature-container' onClick={() => dialog ?  handleDialogAction("feature") :  handleAction("feature")}>
            <h1>{feature.title}</h1>
        </main>
    )
}
