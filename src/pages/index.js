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
  const [WalletPreference, setWalletPreference] = useState(null);

  const handleAction = (type, resource) => {
    type === "feature" ? scrollToBottom() : router.push(`/${type}/${resource}`);
  };
  const handleSelection = (e, resource) => {
    // stop propagation to prevent dialog from closing
    e.stopPropagation();
    resource === "custodial" ? setWalletPreference("custodial") : setWalletPreference("non-custodial");
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
      <PreferencesSection handleAction={handleAction} handleSelection={handleSelection} walletPref={WalletPreference} />
      <TableSection handleAction={handleAction}  />
    </>
  );
}
