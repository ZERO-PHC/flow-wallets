import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import Bullets from "./Bullets";
import { wallets } from "../data/wallets";
// import Image from "next/image";
import { Image } from '@chakra-ui/react'

export default function WalletsTable({ ids }) {
  const filteredWallets = wallets.filter((wallet) => ids.includes(wallet.id));
  return (
    <TableContainer
      borderColor={"white"}
      border="1px solid"
      borderRadius={"10px"}
    >
      <Table variant="walletTable">
        <Thead borderBottom="1px solid" borderColor="white">
          <Tr p={0} m={0} gap={0}>
            <Th borderRight="1px solid" borderColor="white" p={0}></Th>
            <Th fontSize={{sm: "8px", md: ".8rem"}} textAlign="center" p={{sm: 1, md: 4}}>Ease of use</Th>
            <Th fontSize={{sm: "8px", md: ".8rem"}} textAlign="center" p={{sm: 1, md: 4}}>Security</Th>
            <Th fontSize={{sm: "8px", md: ".8rem"}} textAlign="center" p={{sm: 1, md: 4}}>Swap</Th>
            <Th fontSize={{sm: "8px", md: ".8rem"}} textAlign="center" p={{sm: 1, md: 4}}>Buy Crypto</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredWallets.map((wallet) => (
            <Tr key={wallet.id}>
              <Td borderRight="1px solid" borderColor="white" p={{sm: 1, md: 2, lg: 4}}>
                <Flex alignItems={"center"} gap={{sm: 1, md: 3 , lg: 3}} >
                  <Image
                    src={`/wallets/${wallet.logo}`}
                    alt={wallet.name}
                    // layout="fixed"
                    // width={30}
                    // height={30}
                    boxSize='20px'
                    objectFit='cover'
                  />
                  <Heading fontSize={{sm: ".7rem", md: "1rem",lg: "1.7rem"}}>{wallet.name}</Heading>
                </Flex>
              </Td>
              <Td displey="flex" justifyContent="center">
                <Bullets variant="bulletWhite" rank={wallet.specs.usability} />
              </Td>
              <Td displey="flex" justifyContent="center">
                <Bullets variant="bulletWhite" rank={wallet.specs.security} />
              </Td>
              <Td displey="flex" justifyContent="center">
                <Bullets variant="bulletWhite" rank={wallet.specs.swap} />
              </Td>
              <Td displey="flex" justifyContent="center">
                <Bullets variant="bulletWhite" rank={wallet.specs.crypto} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
