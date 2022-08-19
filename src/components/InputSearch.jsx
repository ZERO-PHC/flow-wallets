import React from 'react'
import { Input, InputLeftElement, InputGroup } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

export default function InputSearch({placeholder, size}) {
  return (
    <InputGroup size={size}>
        <InputLeftElement pointerEvents="none">{<Search2Icon color="gray.200" />}</InputLeftElement>
    <Input placeholder={placeholder} size={size} borderColor="gray.200" border="2px solid" borderRadius={20}/>
    </InputGroup>
  )
}
