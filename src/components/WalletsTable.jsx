import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import React from 'react'
import Bullets from './Bullets'
  
  export default function WalletsTable() {
    return (
        <TableContainer borderColor={"white"} border="1px solid" borderRadius={"10px"} p={2}>
        <Table variant='walletTable'>
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Ease of use</Th>
              <Th>Security</Th>
              <Th>Swap</Th>
              <Th>Buy Crypto</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Dapper</Td>
              <Td><Bullets variant="bulletWhite"/></Td>
              <Td><Bullets variant="bulletWhite"/></Td>
              <Td><Bullets variant="bulletWhite"/></Td>
              <Td><Bullets variant="bulletWhite"/></Td>
            </Tr>
            <Tr>
              <Td>Blocto</Td>
              <Td><Bullets variant="bulletWhite"/></Td>
              <Td><Bullets variant="bulletWhite"/></Td>
              <Td><Bullets variant="bulletWhite"/></Td>
              <Td><Bullets variant="bulletWhite"/></Td>
            </Tr>
             <Tr>
              <Td>Lilico</Td>
              <Td><Bullets variant="bulletWhite"/></Td>
              <Td><Bullets variant="bulletWhite"/></Td>
              <Td><Bullets variant="bulletWhite"/></Td>
              <Td><Bullets variant="bulletWhite"/></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    )
  }
  