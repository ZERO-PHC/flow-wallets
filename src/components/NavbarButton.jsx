import React from 'react'
import { Button } from '@chakra-ui/react'

export default function NavbarButton({title, path}) {

  return (
    <Button variant="navbarButton">{title}</Button>
  )
}
