import React from 'react'
import { Input, InputLeftElement, InputGroup } from '@chakra-ui/react'
import { Icon } from '@iconify/react';

export default function InputSearch({placeholder, size}) {
  return (
    <InputGroup size={size}>
        <InputLeftElement pointerEvents="none">{<Icon icon="akar-icons:search" color="gray" width="20" />}</InputLeftElement>
    <Input placeholder={placeholder} size={size} borderColor="gray.200" border="2px solid" borderRadius={20}/>
    </InputGroup>
  )
}
