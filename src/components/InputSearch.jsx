import React from 'react'
import { Input, InputLeftElement, InputGroup } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { useDialog } from '../providers/DialogProvider'

export default function InputSearch({placeholder, size}) {
  const { handleDialogAction, handleChange, Value } = useDialog()
  return (
    <InputGroup size={size}>
        <InputLeftElement pointerEvents="none">{<Search2Icon color="gray.200" />}</InputLeftElement>
        <Input value={Value} onChange={handleChange} onFocus={() =>  handleDialogAction("search")} placeholder={placeholder} size={size} borderColor="gray.200" border="2px solid" borderRadius={20}/>
    </InputGroup>
  )

}