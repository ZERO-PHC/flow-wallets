import React, { useState, useRef, useEffect } from "react";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import PreferencesSection from "../sections/PreferencesSection";
import TableSection from "../sections/TableSection";
import DialogComponent from "../components/DialogComponent";
import Footer from "../components/Footer";
import SearchDialogComponent from "../components/SearchDialogComponent";

export default function Home() {
  return (
    <>
      <SearchDialogComponent />
      <DialogComponent />
      <HeroSection />
      <PreferencesSection />
      <TableSection />
      <Footer />
    </>
  );
}
