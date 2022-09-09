import React, { useState, useEffect } from "react";
import styled from "styled-components";
// next router
import { useRouter } from "next/router";
import { Image } from '@chakra-ui/react'
import { wallets } from "../../data/wallets";
import { Avatar, Container, Flex, Heading, Divider } from "@chakra-ui/react";
import WalletPlatformsIcons from "../../components/WalletPlatformsIcons";
import WalletsBulletsRank from "../../sections/WalletsBulletsRank";
import SimilarWalletsSection from "../../sections/SimilarWalletsSection";
import WalletPageFooter from "../../components/WalletPageFooter";
import WalletWrapper from "../../components/3dWalletWrapper";

export default function WalletView() {
  const router = useRouter();
  const { walletId } = router.query;
  const [Wallet, setWallet] = useState(null);

  useEffect(() => {
    walletId &&
      setWallet({
        ...wallets[walletId],
      });
  }, [walletId]);

  const handleNav = (increment, url) => {
    !increment ? router.back() : window.open(url, "_blank");
  };

  const Lorem = ({ text }) => {
    // return a long string of -container
    return <p>{text[0].paragraph}</p>;
  };

  if (!Wallet) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Container variant="walletPage" justifyContent={"flex-start"} h="auto" alignItems={"center"}>
        <Container
          h="auto"
          p="110px 15% 0"
          alignItems="center"
          boxShadow={0}
          bg={Wallet.linearBg}
        >
          <Flex w="100%" justifyContent="space-between">
            <Flex alignItems={"center"} gap={3}>
              <Avatar src={`/wallets/${Wallet.logo}`} size={{sm: "sm", md: "md", lg: "md"}}/>
              <Heading fontSize={{sm: "1.5rem", lg: "2.5rem"}}>{Wallet.name}</Heading>
            </Flex>
            <WalletPlatformsIcons platforms={Wallet.platforms} size={25} />
          </Flex>
          {/* height */}
          <Flex>
            {/* <Image
              src={`/wallets/${Wallet.urlBig}`}
              objectFit='cover'
              alt="illustration"
            /> */}
            <WalletWrapper path={Wallet.path} wallet={Wallet} />
          </Flex>
        </Container>
        <WalletsBulletsRank specs={Wallet.specs} />
        <Flex p={{sm: "5%, 0", lg: "5% 10%"}} flexDir="column" gap={{lg: 12}} fontSize={{lg: "1rem"}}>
          <Flex p={8} flexDir="column">
            <Lorem text={Wallet.text}/>
            <Lorem text={Wallet.text}/>
          </Flex>
          <SimilarWalletsSection ids={Wallet.similarWallets}/>
        </Flex>
        <WalletPageFooter website={Wallet.website}/>
      </Container>
      
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 92vh;
  width: 100%;
`;
