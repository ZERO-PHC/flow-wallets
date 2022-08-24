import React, { useState, useRef, useEffect } from "react";
import HeroSection from "../sections/HeroSection";
import PreferencesSection from "../sections/PreferencesSection";
import TableSection from "../sections/TableSection";
import DialogComponent from "../components/DialogComponent";
import Footer from "../components/Footer";
import { Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react"

export default function Home() {
  const [isMobile] = useMediaQuery("(max-width: 780px)") 
  return (
    <>
    {
      !isMobile ?
      <>
      <DialogComponent />
      <HeroSection />
      <Flex flexDir={"column"} p={"10%"} py={{sm: "12%", md: "12%", lg: "6%"}}>
        <PreferencesSection />
        <TableSection />
      </Flex>
      <Footer />
      </>

      : <Flex h="100vh" w="100%" color="black" fontSize={"2rem"} justifyContent={"center"} alignItems="center"><h1>Mobile soon</h1></Flex>
      }
    </>
  );
}
