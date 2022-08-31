import React from "react";
import { Flex, Grid, Heading } from "@chakra-ui/react";
import Card from "../components/Card";
import PreferenceCard from "../components/PreferenceCard";

export default function PreferencesSection() {
  return (
    <Flex
      w={"100%"}
      align="center"
      justify="center"
      flexDir={"column"}
      mb={{sm: 3, md: 5, lg: 14}}
    >
      <Heading mb={8} mr={{sm: "inherit", md: "inherit", lg: "auto"}} fontSize={{sm: "1.4rem", md: "2rem", lg: "2.5rem"}}>
        Choose your wallet preferences
      </Heading>
      <Flex gap={{sm: 10, md: 5, lg: 10}} flexWrap={{sm: "wrap", md: "wrap", lg: "nowrap"}}>
        <PreferenceCard
          id="non-custodial"
          title="Non-Custodial"
          AdvantageItem1="Full control"
          AdvantageItem2="Better Security"
          AdvantageItem3="High Privacy"
          DisadvantageItem1="No account recovery"
          DisadvantageItem2="Harder to handle"
          DisadvantageItem3="Less convenient"
        />
        <PreferenceCard
          id="custodial"
          title="Custodial"
          AdvantageItem1="Security service"
          AdvantageItem2="Account recovery"
          AdvantageItem3="Convenience"
          DisadvantageItem1="Lack of control"
          DisadvantageItem2="Prone to hacking"
          DisadvantageItem3="Low privacy"
        />
      </Flex>
    </Flex>
  );
}
