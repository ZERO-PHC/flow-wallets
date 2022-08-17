import React from 'react'
import { useDialog } from "../providers/DialogProvider";
import { Checkbox, Icon, IconButton } from '@chakra-ui/react';



export const FeatureComponent = ({ feature, handleAction, dialog, handleFeatureSelection }) => {
     const { handleDialogAction} = useDialog()
    return (
        <main className='feature-container' onClick={() => dialog ?  handleDialogAction("feature") :  handleAction("feature")}>
             
             
             <Checkbox onChange={() => handleFeatureSelection(feature.id)} />  <h1>{feature.title}</h1>
        </main>
    )
}
