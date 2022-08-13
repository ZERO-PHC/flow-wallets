import React,{useState} from 'react'
import { Box } from "@chakra-ui/react"


export default function Card({ handleAction, target }) {

  return (
    <>
      <Box onClick={() =>  handleAction(target)} w={target === "wallets" ? "6rem" : "10rem"} h={target === "wallets" ? "12rem" : "6rem"} border="1px solid #eaeaea" borderRadius="lg" p={4} m={4}>
        card
      </Box>
    </>
  )
}
