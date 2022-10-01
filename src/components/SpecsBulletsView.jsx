import { Flex, Container, Heading } from "@chakra-ui/react";
import React from "react";
import Bullets from "./Bullets";

export default function SpecsBulletsView({ rank, title }) {
  return (
    <Flex gap={3} w="fit-content" flexDir="column">
      <Heading fontSize={{sm: ".7rem", md: "1.2rem", lg: "1.5rem"}}>{title}</Heading>
      <Bullets variant="bullet" rank={rank} />
    </Flex>
  );
}