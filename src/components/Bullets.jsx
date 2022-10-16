import React from "react";
import { Flex, Container } from "@chakra-ui/react";

export default function Bullets({ variant, rank }) {
  return (
    <Flex gap={{ sm: 1, md: 3, lg: 3 }} w="fit-content" m="auto">
      {rank == "-" ? (
        <span>Coming soon...</span>
      ) : (
        <>
          <Container variant={variant} />
          <Container
            variant={variant}
            backgroundColor={rank == "Low" && "transparent"}
          />
          <Container
            variant={variant}
            backgroundColor={rank != "High" && "transparent"}
          />
        </>
      )}
    </Flex>
  );
}
