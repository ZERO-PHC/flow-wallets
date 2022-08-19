import { Container, Text, Button } from '@chakra-ui/react'
import React from 'react'

export default function OverviewCard({title, subtitle, btnText}) {
  return (
    <Container flexDir="column" variant="overview" p={"15px 30px"} pr={12}>
        <Text>{title}</Text>
        <Text display="flex" gap={2}>{subtitle}<Button variant="simpleBtn">{btnText}</Button></Text>
    </Container>
  )
}
