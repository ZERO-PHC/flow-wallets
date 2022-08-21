import {
  Table,
  Thead,
  Tbody,
  Tfoot,
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
import Image from "next/image";

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
          <Tr>
            <Th borderRight="1px solid" borderColor="white"></Th>
            <Th>Ease of use</Th>
            <Th>Security</Th>
            <Th>Swap</Th>
            <Th>Buy Crypto</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredWallets.map((wallet) => (
            <Tr key={wallet.id}>
              <Td borderRight="1px solid" borderColor="white">
                <Flex alignItems={"center"} gap={2}>
                  <Image
                    src={`/wallets/${wallet.logo}`}
                    alt={wallet.name}
                    layout="fixed"
                    width={30}
                    height={30}
                  />
                  <Heading fontSize="1.2rem">{wallet.name}</Heading>
                </Flex>
              </Td>
              <Td>
                <Bullets variant="bulletWhite" rank={wallet.specs.usability} />
              </Td>
              <Td>
                <Bullets variant="bulletWhite" rank={wallet.specs.security} />
              </Td>
              <Td>
                <Bullets variant="bulletWhite" rank={wallet.specs.swap} />
              </Td>
              <Td>
                <Bullets variant="bulletWhite" rank={wallet.specs.crypto} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
