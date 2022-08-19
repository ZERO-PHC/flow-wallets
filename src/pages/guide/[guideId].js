import React from "react";
import styled from "styled-components";
import { Lorem } from "@chakra-ui/react";
// next router
import { useRouter } from "next/router";
import Image from "next/image"

export default function Guide() {
  const router = useRouter();
  const { guideId } = router.query;

  const handleNav = (increment ) => {
    increment ? router.push(`/guide/${parseInt(guideId) + 1}`) : router.push(`/guide/${parseInt(guideId) - 1}`)
  }

  const Step = styled.div`
    display: flex;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    border: 2px solid lightgray;
    background: ${(props) => props.done ?  "lightgreen" : "grey" };`

  const Steps = () => {
    // return an array of 7 elements
    return Array(7)
      .fill(0)
      .map((_, i) => {
        return <Step key={i} done={i <= guideId} />;
      });
  };

  return (
    <Wrapper>
      <header>
        <main style={{height:"10rem", width:"10rem", position:"relative"}}>
        <Image src={`/assets/guides/guide-${guideId}.png`} layout="fill" alt="illustration" />
        </main>
         </header>
      <main>
        <section className="text">
          <h1> {guideId} guide</h1>
          {/* <Lorem /> */}
        </section>
        <section className="steps">
          <Steps />
        </section>
      </main>
      <footer>
        <div onClick={() => handleNav(false)} className="nxt-btn">action 1</div>
        <div onClick={() => handleNav(true)} className="nxt-btn">action 2</div>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 92vh;
  width: 100%;

  .nxt-btn{
    background: #00bcd4;
    border-radius: 50px;
    width: 3rem;
    height: 3rem;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40%;
    width: 100%;
    background-color: #f5f5f5;
  }

  main {
    height: 40%;
    text-align: left;
    display: flex;
    justify-content: space-between;
  }

  footer {
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
