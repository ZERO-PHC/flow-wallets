import React from "react";
import { Flex, Button, Heading, Container, chakra } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react"

export default function PreferenceCard({ title, AdvantageItem1, AdvantageItem2, AdvantageItem3, DisadvantageItem1, DisadvantageItem2, DisadvantageItem3 }) {
  return (
    <Container
      onClick={() => handleAction(target)}
      variant="preferenceCard"
    >
      <Flex justify={"center"} w={"100%"}>
        <Heading variant="primary"> {title} </Heading>
        <Checkbox marginLeft="auto"/>
      </Flex>
      <Flex justifyContent={'space-evenly'} gap="50px">
        <Flex flexDir={'column'}>
          <Heading variant="secondary">Advantages</Heading>
          <chakra.ul mt={1}>
            <chakra.li>{AdvantageItem1}</chakra.li>
            <chakra.li>{AdvantageItem2}</chakra.li>
            <chakra.li>{AdvantageItem3}</chakra.li>
          </chakra.ul>
        </Flex>
        <Flex flexDir={'column'}>
          <Heading variant="secondary">Disadvantages</Heading>
          <chakra.ul mt={1}>
            <chakra.li>{DisadvantageItem1}</chakra.li>
            <chakra.li>{DisadvantageItem2}</chakra.li>
            <chakra.li>{DisadvantageItem3}</chakra.li>
          </chakra.ul>
        </Flex>
      </Flex>
      <Button variant="bottomLine">Learn More</Button>
    </Container>
  );
}
