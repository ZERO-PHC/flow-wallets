import React from 'react'
import Image from 'next/image'
import { useColorMode } from '@chakra-ui/react'

export default function Logo() {
    const {colorMode} = useColorMode()
  return (
    <Image 
    src={ colorMode === 'light' ? "/logos/flowWalletsBlack.png" : "/logos/flowWalletsWhite.png"}
    width={137} height={48} alt="logo" />
  )
}
