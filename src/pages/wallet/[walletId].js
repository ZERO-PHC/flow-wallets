import React from "react";
import styled from "styled-components";
// next router
import { useRouter } from "next/router";
import Image from "next/image";
import { WalletComponent } from "../../components/WalletComponent";
import { wallets } from "../../data/wallets";
import { Flex } from "@chakra-ui/react";

export default function Wallet() {
  const router = useRouter();
  const { walletId } = router.query;

  const handleNav = (increment) => {
    increment
      ? router.push(`/wallet/${parseInt(walletId) + 1}`)
      : router.push(`/wallet/${parseInt(walletId) - 1}`);
  };

  const Lorem = () => {
    // return a long string of -container
    return (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod,
        nisi eget consectetur consectetur, nisi nisi consectetur nisi, eget
        consectetur nisi nisi eget consectetur consectetur, nisi nisi
        consectetur nisi, eget consectetur nisi nisi eget consectetur
        consectetur consectetur nisi, eget consectetur nisi nisi eget
        consectetur consectetur, nisi nisi consectetur nisi, eget consectetur
        nisi nisi eget consectetur consectetur
      </p>
    );
  };

  const WalletPlatforms = () => {
    // return an array of 4 icon components
    return (
      <Flex>
        <Image
          src={"/assets/wallets/platform-0.png"}
          key="0"
          height={30}
          width={30}
          alt="img"
        />
        <Image
          src={"/assets/wallets/platform-1.png"}
          key="0"
          height={30}
          width={30}
          alt="img"
        />
        <Image
          src={"/assets/wallets/platform-2.png"}
          key="0"
          height={30}
          width={30}
          alt="img"
        />
        <Image
          src={"/assets/wallets/platform-3.png"}
          key="0"
          height={30}
          width={30}
          alt="img"
        />
      </Flex>
    );
  };

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
          <div className="name">Name</div>
          <div className="logo">Logo</div>
        </section>
        <section className="wallet-specs">
          <div className="spec">spec 1</div>
          <div className="spec">spec 2</div>
          <div className="spec">spec 3</div>
        </section>
        <section className="wallet-platforms">
          <WalletPlatforms />
        </section>
      </header>
      <main>
        <section className="text-container">
          <Lorem />
        </section>
        <section className="title">
          <h2>Similar Wallets</h2>
        </section>

        <section className="wallets-container">
          <WalletComponent wallet={wallets[0]} />
          <WalletComponent wallet={wallets[1]} />
        </section>
      </main>
      <footer>
        <section className="action">
          <div onClick={() => handleNav(false)} className="nxt-btn">
          </div>
            <span>Compare wallets</span>
        </section>
        <section className="action">
            <span>See website</span>
          <div onClick={() => handleNav(true)} className="nxt-btn">
          </div>
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

  .title {
    width: 80%;
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
    width: 80%;
  }

  .wallets-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 80%;
    justify-content: center;
    align-items: center;
    height: 50%;
    border-radius: 10px;
    background-color: lightgray;
  }

  .wallet-specs {
    position: absolute;
    bottom: 0;
    left: 10%;
    display: flex;
    padding: 2rem 0rem;
    justify-content: space-evenly;
    alignitems: center;
  }

  .spec {
    font-size: 1.6rem;
    width: 33.3%;
    -container-align: center;
  }

  .nxt-btn {
    background: grey;
    border-radius: 50px;
    width: 3rem;
    height: 3rem;
  }
`;
