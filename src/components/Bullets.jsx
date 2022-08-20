import React from 'react'
import { Flex, Container } from "@chakra-ui/react";

export default function Bullets({variant, rank}) {
  return (
    <Flex gap={3} w="fit-content">
      <Container variant={variant} />
      <Container variant={variant} backgroundColor={rank == "Low" && "transparent"}/>
      <Container variant={variant} backgroundColor={rank != "High" && "transparent"}/>
    </Flex>
  )
}
