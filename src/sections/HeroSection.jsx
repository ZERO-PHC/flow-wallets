import React from "react";
import { chakra, Flex, Container, Heading } from "@chakra-ui/react";
import OverviewCard from "../components/OverviewCard";
import { Image } from '@chakra-ui/react'
// import Image from "next/image";


export default function HeroSection() {
  return (
    <main style={{ position: "relative", width: "100%" }}>
      <Container
        h={{sm: "50vh", md: "70vh" ,lg: "80vh"}}
        variant="heroBg"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        borderRadius="0"
      >
        <Heading fontSize={{sm: "2.3rem", md: "3.5rem", lg: "4.5rem"}}>
          Find your <chakra.span color="green.100">Flow</chakra.span> Wallet
        </Heading>
        <Image
          src="/walletsFlow.png"
          alt="Wallets Flow Blockchain"
          objectFit='cover'
        />
      </Container>
      <Flex position={"relative"} top={-38}  p="0 15%" gap={5} maxW="1200px" margin="auto">
        <OverviewCard
          title="Are you a new Flow User?"
          subtitle="Here is an overview to get you started."
          btnText="Flow User"
        />
        <OverviewCard
          title="Are you a new Flow Developer?"
          subtitle="Here is an overview to get you started."
          btnText="Flow Developer"
        />
      </Flex>
    </main>
  );
}
