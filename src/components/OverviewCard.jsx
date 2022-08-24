import { Container, Text, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useDialog } from '../providers/DialogProvider'
import { handleAction } from '../utils/generalUtils'

export default function OverviewCard({title, subtitle, btnText}) {
  const router = useRouter()
  const {setOpenSearch} = useDialog()

  return (
    <Container flexDir="column" variant="overview" p={"15px 30px"}>
        <Text>{title}</Text>
        <Text display="flex">{subtitle}
        </Text>
        <Button onClick={() => handleAction("guide", 0, router, setOpenSearch)}  variant="simpleBtn" p="4px">{btnText}</Button>
    </Container>
  )
}
