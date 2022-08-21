import React from 'react'
import { Input, InputLeftElement, InputGroup } from '@chakra-ui/react'
import { useDialog } from '../providers/DialogProvider'
import { Icon } from '@iconify/react';

export default function InputSearch({ placeholder, size }) {
  const { handleDialogAction, handleChange, Value } = useDialog()
  return (
    <InputGroup size={size}>
      <InputLeftElement pointerEvents="none"><Icon icon="akar-icons:search" color="gray" width="20" /></InputLeftElement>
      <Input value={Value} onChange={handleChange} onFocus={() => handleDialogAction("search")} placeholder={placeholder} size={size} borderColor="gray.200" border="2px solid" borderRadius={20} />
    </InputGroup>
  )

}