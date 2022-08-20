import React from 'react'
import { Button } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
import { Icon } from '@iconify/react';

export default function ToggleColorMode() {
    const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Button onClick={() => toggleColorMode()} m="1rem" variant="toggle">
        {colorMode === 'light' ? <Icon icon="bi:moon-fill" width="20" /> : <Icon icon="charm:sun" width="20" />}
    </Button>
  )
}
