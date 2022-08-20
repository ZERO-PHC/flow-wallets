import React from "react";
import { Container, Heading, Text, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { guides } from "../../data/guides";
import StepsGuide from "../../components/StepsGuide";
import GuidesFooter from "../../components/GuidesFooter";

export default function Guide() {
  const router = useRouter();
  const { guideId } = router.query;
  let nextGuideId = parseInt(guideId) + 1;
  console.log(nextGuideId)
  console.log(guides.length)

  const handleNav = (increment) => {
    increment
      ? router.push(`/guide/${parseInt(guideId) + 1}`)
      : router.push(`/guide/${parseInt(guideId) - 1}`);
  };

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
          {guides.map((guide, i) => {
            return (
              <Flex
                key={i}
                style={{ display: i === parseInt(guideId) ? "block" : "none" }}
                flexDir="column"
                w="80%"
              >
                <Heading pb="20px">{guide.title}</Heading>
                {guide.text.map((text, i) => {
                  return (
                    <>
                    <Heading variant="secondary" textAlign={"left"} fontSize="20px" mb="5px">{text.title}</Heading>
                    <Text key={i} pb="20px">
                      {text.paragraph}
                    </Text>
                    </>
                  )}
              )}
              </Flex>
            );
          })}
          <StepsGuide guides={guides} id={guideId} />
        </Flex>
        <GuidesFooter
          next={nextGuideId == guides.length ? (() => router.push("/")) : (() => handleNav(true))}
          previous={nextGuideId != 1 ? (() => handleNav(false)) : (() => {})}
          title={nextGuideId == guides.length ? "Choose your wallet" : guides[nextGuideId].title}
        />
      </Container>
    </>
  );
}
