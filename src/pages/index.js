import React, { useState, useRef, useEffect } from "react";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import PreferencesSection from "../sections/PreferencesSection";
import TableSection from "../sections/TableSection";
import DialogComponent from "../components/DialogComponent";
import Footer from "../components/Footer";
import SearchDialogComponent from "../components/SearchDialogComponent";
import styled from "styled-components";


export default function Home() {
  return (
    <Wrapper>
      <SearchDialogComponent />
      <DialogComponent />
      <HeroSection />
      <section className="main-content">
         <PreferencesSection />
      <TableSection />
      </section>
     
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  .main-content {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    
  }

  `;
