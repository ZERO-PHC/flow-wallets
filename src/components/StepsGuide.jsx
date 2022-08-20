import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

export default function StepsGuide({ guides, id }) {
  return (
    <Flex flexDir="column" w="30%" p={5}>
      <Heading variant="secondary" fontSize={"1.8rem"} ml={0}>Related Guides</Heading>
      {Array(guides.length)
        .fill(0)
        .map((_, i) => {
          return (
            <Flex key={i} mt={4}>
              <Step key={i} done={i <= id} />
              <Text>{guides[i].title}</Text>
            </Flex>
          );
        })}
    </Flex>
  );
}

const Step = styled.div`
  display: flex;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  border: 2px solid lightgray;
  background: ${(props) => (props.done ? "lightgreen" : "grey")};
`;
