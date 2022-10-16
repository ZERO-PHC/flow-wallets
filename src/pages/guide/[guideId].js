import React, { useState, useEffect } from "react";
import { Container, Heading, Text, Flex, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { guides } from "../../data/guides";
import StepsGuide from "../../components/StepsGuide";
import GuidesFooter from "../../components/GuidesFooter";
import { useMediaQuery } from "@chakra-ui/react";
import Footer from "../../components/Footer";

export default function Guide() {
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  const router = useRouter();
  const { guideId } = router.query;
  const [guide, setGuide] = useState(null);
  // let nextGuideId = parseInt(guideId) + 1;

  useEffect(() => {
    const guide = guides.find((guide) => guide.path === guideId);
    console.log("guide", guide);
    setGuide(guide);
  }, [guideId]);

  const handleNav = (increment) => {
    increment
      ? router.push(guides[guide.id + 1].path)
      : router.push(guides[guide.id - 1].path);
  };

  if (!guide) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container h="40vh" variant="guideBg">
        <Box position={"relative"} h="14rem" width="14rem">
          <Image src={guide.src} layout="fill" alt="illustration" />
        </Box>
      </Container>
      <Container p="5% 10%" variant="guideText" alignItems={"center"}>
        <Flex gap="80px" maxW={"1100px"}>
          <Flex flexDir="column" w={{ lg: "80%" }}>
            <Heading w={"100%"} textAlign="left" pb="20px">
              {guide.name}
            </Heading>
            {guide.text.map((text, i) => {
              return (
                <>
                  <Heading
                    variant="secondary"
                    w={"100%"}
                    textAlign={"left"}
                    fontSize="20px"
                    mb="5px"
                  >
                    {text.title}
                  </Heading>
                  <Text key={i} pb="20px">
                    {text.paragraph}
                  </Text>
                </>
              );
            })}
          </Flex>
          {!isMobile && <StepsGuide guides={guides} id={guide.id} />}
        </Flex>
        <GuidesFooter
          next={
            guide.id + 1 == guides.length
              ? () => router.push("/")
              : () => handleNav(true)
          }
          previous={
            guide.id !== 0 ? () => handleNav(false) : () => router.push("/")
          }
          title={
            guide.id + 1 == guides.length
              ? "Choose your wallet"
              : guides[guide.id + 1].name
          }
        />
      </Container>
      <Footer />
    </>
  );
}
