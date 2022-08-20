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

  console.log("Wallet", { ...wallets[walletId] });

  const handleNav = (increment, url) => {
    !increment ? router.back() : window.open(url, "_blank");
  };

  const Lorem = ({ text }) => {
    // return a long string of -container
    return <p>{text}</p>;
  };

  const SimilarWallets = ({ ids }) => {
    // filter out the wallets that doesn't have the ids
    const filteredWallets = wallets.filter((wallet) => ids.includes(wallet.id));
    console.log("filteredWallets", filteredWallets);

    return filteredWallets.map((wallet, i) => (
      <div className="similar-container" key={i}>
        <WalletComponent wallet={wallet} />
      </div>
    ));
  };

  if (!Wallet) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Container variant="walletPage" justifyContent={"flex-start"} h="auto">
        <Container
          h="auto"
          p="110px 15% 0"
          alignItems="center"
          boxShadow={0}
          variant="lilicoBg"
        >
          <Flex w="100%" justifyContent="space-between">
            <Flex alignItems={"center"} gap={3}>
              <Avatar />
              <Heading>{Wallet.name}</Heading>
            </Flex>
            <WalletPlatformsIcons platforms={Wallet.platforms} size={30} />
          </Flex>
          <Flex>
            <Image
              src={`/assets/wallets/wallet-${walletId}.png`}
              layout="fixed"
              width={300}
              height={300}
              alt="illustration"
            />
          </Flex>
        </Container>
        <WalletsBulletsRank specs={Wallet.specs} />
        <Flex p={"3% 15%"} flexDir="column" gap={12}>
          <Lorem text={Wallet.text} />
          <SimilarWalletsSection />
        </Flex>
      </Container>
      
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 92vh;
  width: 100%;

  header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40%;
    width: 100%;
    background-color: #f5f5f5;
  }

  footer {
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50%;
  }
  .similar-container {
    width: 50%;
  }

  .wallet-branding {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 8rem;
    left: 10%;
    width: 10rem;
    height: 10rem;
  }
  .action {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 18%;
  }

  .name {
    font-size: 1.5rem;
    width: 60%;
    text-align: left;
  }
  .wallet-platforms {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    position: absolute;
    bottom: 0;
    right: 10%;
  }
  .nxt-btn {
    background: lightgrey;
    border-radius: 50px;
    width: 3rem;
    height: 3rem;
  }

  .text-container {
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
  }

  .wallets-container {
    display: flex;
    flex-direction: row;
    width: 60%;
    border-radius: 10px;
    min-height: 4rem;
    padding: 0.5rem 1rem;
    background-color: lightgray;
  }

  .wallet-specs {
    position: absolute;
    bottom: 0px;
    left: 10%;
    display: flex;
    padding: 2rem 0rem;
    width: 10rem;
    justify-content: space-between;
  }

  .spec {
    font-size: 1.6rem;
  }

  .nxt-btn {
    background: grey;
    border-radius: 50px;
    width: 3rem;
    height: 3rem;
  }
`;
