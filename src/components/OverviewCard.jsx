import { Container, Text, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { handleAction } from '../utils/generalUtils'

export default function OverviewCard({title, subtitle, btnText}) {
  const router = useRouter()

  return (
    <Container flexDir="column" variant="overview" p={"15px 30px"} pr={12}>
        <Text>{title}</Text>
        <Text display="flex" gap={2}>{subtitle}<Button onClick={() => handleAction("guide", 0, router)}  variant="simpleBtn">{btnText}</Button></Text>
    </Container>
  )
}
