import { Container, Text, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useDialog } from '../providers/DialogProvider'
import { handleAction } from '../utils/generalUtils'

export default function OverviewCard({ title, subtitle, btnText }) {
  const router = useRouter()
  const { setOpenSearch } = useDialog()

  return (
    <Container flexDir="column" variant="overview" p={{ sm: "10px", md: "10px 20px", lg: "15px 30px" }} w="auto" _hover={{ transform: "scale(1.05)", cursor: "pointer" }}>
      <Text>{title}</Text>
      <Text display="flex">{subtitle}
      </Text>
      <Button onClick={() => handleAction("guide", "_", router, setOpenSearch, "_", "_", "what-is-a-wallet")} variant="simpleBtn" p="4px">{btnText}</Button>
    </Container>
  )
}
