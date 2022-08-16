import React, { useState, useRef } from "react";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import PreferencesSection from "../sections/PreferencesSection";
import TableSection from "../sections/TableSection";
import DialogComponent from "../components/DialogComponent";
import SearchDialogComponent from "../components/SearchDialogComponent";
import { useRouter } from "next/router";
import { useDialog } from "../providers/DialogProvider";

// picks up a nested color value using dot notation
// => `theme.colors.gray[50]`

export default function Home() {
  const router = useRouter();
  const { setOpenSearch } =  useDialog()

  const handleAction = (type, resource) => {
    type === "feature" ? scrollToBottom() : router.push(`/${type}/${resource}`);
  };

  const scrollToBottom = () => {
    setOpenSearch(false)
    // scroll to bottom of page
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    
  }

  return (
    <>
      <SearchDialogComponent handleAction={handleAction} />
      <DialogComponent handleAction={handleAction} />
      <HeroSection handleAction={handleAction} />
      <PreferencesSection handleAction={handleAction} />
      <TableSection handleAction={handleAction}  />
    </>
  );
}
