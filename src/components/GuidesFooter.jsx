import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@iconify/react';

export default function GuidesFooter({ next, previous, title }) {
  return (
    <Flex justifyContent="space-between" p="50px 0" maxW={"1100px"} w="100%" >
      <Flex gap={4} alignItems="center">
        <Button onClick={previous} variant="guideBtn"><Icon icon="eva:arrow-ios-back-outline" width="30" /></Button>
        <Text fontFamily="Blinker Bold" fontSize="25px">Go Back</Text>
      </Flex>
      <Flex gap={4} alignItems="center">
        <Text fontFamily="Blinker Bold" fontSize="25px">{title}</Text>
        <Button onClick={next} variant="guideBtn"><Icon icon="eva:arrow-ios-forward-outline" width="30" /></Button>
      </Flex>
    </Flex>
  )
}
