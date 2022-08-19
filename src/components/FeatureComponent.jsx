import React from 'react'
import { useDialog } from "../providers/DialogProvider";
import { Checkbox, Icon, IconButton } from '@chakra-ui/react';
import { useTable } from '../providers/table/TableProvider';



export const FeatureComponent = ({ feature, handleAction, dialog, handleFeatureSelection }) => {
     const { handleDialogAction} = useDialog()
     const { SelectedFeatures } = useTable()
    return (
        <main className='feature-container' onClick={() => dialog ?  handleDialogAction("feature") :  handleAction("feature")}>
             <Checkbox isChecked={SelectedFeatures.includes(feature.id)} onChange={() => handleFeatureSelection(feature.id)} />  <h1>{feature.name}</h1>
        </main>
    )
}
