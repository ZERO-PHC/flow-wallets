import React from "react";
import styled from "styled-components";
import { Lorem } from "@chakra-ui/react"
// next router
import { useRouter } from "next/router";

export default function Guide() {
  const router = useRouter();
  const { guideId } = router.query;
   
  return (
    <Wrapper>
      <header>{guideId} img </header>
      <main>
        <section className="text">
          <h1> {guideId} guide</h1>
          {/* <Lorem /> */}
        </section>
        <section className="steps">
          steps
        </section>
      </main>
      <footer>
        <div>action 1</div>
        <div>action 2</div>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 92vh;
  width: 100%;

  header {
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
