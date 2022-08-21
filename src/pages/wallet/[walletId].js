import React, { useState, useEffect } from "react";
import styled from "styled-components";
// next router
import { useRouter } from "next/router";
import Image from "next/image";
import { WalletComponent } from "../../components/WalletComponent";
import { wallets } from "../../data/wallets";
import { Avatar, Container, Flex, Heading, Divider } from "@chakra-ui/react";
import { WalletPlatforms } from "../../components/WalletPlatforms";
import WalletSpecs from "../../components/WalletSpecs";
import WalletPlatformsIcons from "../../components/WalletPlatformsIcons";
import SpecsBulletsView from "../../components/SpecsBulletsView";
import WalletsBulletsRank from "../../sections/WalletsBulletsRank";
import SimilarWalletsSection from "../../sections/SimilarWalletsSection";
import WalletPageFooter from "../../components/WalletPageFooter";

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
    return <p>{text}</p>;
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
              <Avatar src={`/wallets/${Wallet.logo}`}/>
              <Heading>{Wallet.name}</Heading>
            </Flex>
            <WalletPlatformsIcons platforms={Wallet.platforms} size={30} />
          </Flex>
          <Flex>
            <Image
              src={`/wallets/${Wallet.urlBig}`}
              layout="fixed"
              width={400}
              height={280}
              alt="illustration"
            />
          </Flex>
        </Container>
        <WalletsBulletsRank specs={Wallet.specs} />
        <Flex p={"5% 15%"} flexDir="column" gap={12}>
          <Flex p={5} flexDir="column">
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
