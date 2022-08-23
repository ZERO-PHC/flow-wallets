import React from "react";
import { chakra, Flex, Container, Heading } from "@chakra-ui/react";
import OverviewCard from "../components/OverviewCard";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main style={{ position: "relative", height: "90vh", width: "100%" }}>
      <Container
        h="80vh"
        variant="heroBg"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Heading fontSize="4.5rem">
          Find your <chakra.span color="green.100">Flow</chakra.span> Wallet
        </Heading>
        <Image
          src="/walletsFlow.png"
          alt="Wallets Flow Blockchain"
          layout="fixed"
          width={800}
          height={150}
        />
      </Container>
      <Flex position={"relative"} top={-38} w={"100%"} p="0 15%" gap={10}>
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
