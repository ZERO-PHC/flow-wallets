import React, { useState, useEffect } from 'react';
import { Container, Heading, Text, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { guides } from "../../data/guides";
import StepsGuide from "../../components/StepsGuide";
import GuidesFooter from "../../components/GuidesFooter";
import { useMediaQuery } from "@chakra-ui/react"

export default function Guide() {
  const [isMobile] = useMediaQuery("(max-width: 900px)") 
  const router = useRouter();
  const { guideId } = router.query;
  const [guide, setGuide] = useState(null);
  let nextGuideId = parseInt(guideId) + 1;

  useEffect(() => {
   setGuide({
      ...guides[guideId],
   })
  }, [guideId])
  

  const handleNav = (increment) => {
    increment
      ? router.push(`/guide/${parseInt(guideId) + 1}`)
      : router.push(`/guide/${parseInt(guideId) - 1}`);
  };

  if (!guide) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container variant="guideBg">
        <Image
          src={`/assets/guides/guide-${guideId}.png`}
          layout="fixed"
          width={320}
          height={320}
          alt="illustration"
        />
      </Container>
      <Container p="5% 10%" variant="guideText" alignItems={"center"}>
        <Flex gap="80px" maxW={"1100px"}>
              <Flex
                flexDir="column"
                w={{lg: "80%"}}
                
              >
                <Heading w={"100%"} textAlign="left" pb="20px">{guide.name}</Heading>
                {guide.text.map((text, i) => {
                  return (
                    <>
                    <Heading variant="secondary" w={"100%"} textAlign={"left"} fontSize="20px" mb="5px">{text.title}</Heading>
                    <Text key={i} pb="20px">
                      {text.paragraph}
                    </Text>
                    </>
                  )}
              )}
              </Flex>
            {!isMobile &&
            <StepsGuide guides={guides} id={guideId} />
            }
        </Flex>
        <GuidesFooter
          next={nextGuideId == guides.length ? (() => router.push("/")) : (() => handleNav(true))}
          previous={nextGuideId != 1 ? (() => handleNav(false)) : (() => {})}
          title={nextGuideId == guides.length ? "Choose your wallet" : guides[nextGuideId].name}
        />
      </Container>
    </>
  );
}
