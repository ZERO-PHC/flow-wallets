import React from 'react'
import { Button } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function ToggleColorMode() {
    const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Button onClick={() => toggleColorMode()} m="1rem" variant="toggle">
        {colorMode === 'light' ? <MoonIcon w={6} h={6} /> : <SunIcon  w={6} h={6} />}
    </Button>
  )
}
