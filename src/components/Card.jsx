import React, { useState } from 'react'
import { Box, Button } from "@chakra-ui/react"
import { useTable } from '../providers/table/TableProvider'

// import brand theme from chakra-ui theme
export default function Card({  type, resource }) {
  const { handleAction, handleSelection, WalletPreference} = useTable()

  return (
    <>
      <Box position={"relative"} zIndex={0} background="white" onClick={() => handleAction(type, resource)} w={type === "wallets" ? "6rem" : "10rem"} h={type === "wallets" ? "12rem" : "6rem"} border="1px solid #eaeaea" borderRadius="lg" p={4} m={4}>
        {resource}
        {resource === "non-custodial" || resource === "custodial" ? <Button bgColor={resource === "custodial" &&  WalletPreference === "custodial" || resource === "non-custodial" &&  WalletPreference === "non-custodial" ?  "brand.900" : "brand.700"} position="absolute" zIndex={3} top={0} onClick={(e) =>  handleSelection(e, resource)}  variant="solid" size="sm" w="2rem" h="2rem" borderRadius="lg" border="1px solid" borderColor="brand.900" >{ }</Button> : null}
      </Box>
    </>
  )
}
