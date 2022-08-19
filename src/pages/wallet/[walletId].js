import React, { useState, useEffect } from "react";
import styled from "styled-components";
// next router
import { useRouter } from "next/router";
import Image from "next/image";
import { WalletComponent } from "../../components/WalletComponent";
import { wallets } from "../../data/wallets";
import { Avatar, Flex } from "@chakra-ui/react";
import { WalletPlatforms } from "../../components/WalletPlatforms";
import WalletSpecs from "../../components/WalletSpecs";

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
    !increment
      ? router.back()
      : window.open(url, "_blank");
  };

  const Lorem = ({ text }) => {
    // return a long string of -container
    return <p>{text}</p>;
  };

  const SimilarWallets = ({ ids }) => {
    // filter out the wallets that doesn't have the ids
    const filteredWallets = wallets.filter((wallet) => ids.includes(wallet.id));
    console.log("filteredWallets", filteredWallets);

    return (
        filteredWallets.map((wallet, i) => (
          <div className="similar-container" key={i}>
            <WalletComponent wallet={wallet} />
          </div>
        ))
    );
  };

  if (!Wallet) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <header>
        <section
          style={{ height: "10rem", width: "10rem", position: "relative" }}
        >
          <Image
            src={`/assets/wallets/wallet-${walletId}.png`}
            layout="fill"
            alt="illustration"
          />
        </section>
        <section className="wallet-branding">
          <div className="logo">
            <Avatar />
          </div>
          <div className="name">{Wallet.name}</div>
        </section>
        <WalletSpecs wallet={Wallet} />
      
        <section className="wallet-platforms">
          {<WalletPlatforms wallet={Wallet} />}
        </section>
      </header>
      <main>
        <section className="text-container">
          <Lorem text={Wallet.text} />
        </section>
        <section className="name">
          <h2>Similar Wallets</h2>
        </section>
        <section className="wallets-container">
          <SimilarWallets ids={Wallet.similarWallets} />
        </section>
      </main>
      <footer>
        <section className="action">
          <div onClick={() => handleNav(false)} className="nxt-btn"></div>
          <span>Compare wallets</span>
        </section>
        <section className="action">
          <span>See website</span>
          <div onClick={() => handleNav(true, Wallet.url)} className="nxt-btn"></div>
        </section>
      </footer>
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
  .similar-container{
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
    padding:0.5rem; 1rem;
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
