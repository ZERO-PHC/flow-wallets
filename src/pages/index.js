import React, { useState, useRef, useEffect } from "react";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import PreferencesSection from "../sections/PreferencesSection";
import TableSection from "../sections/TableSection";
import DialogComponent from "../components/DialogComponent";
import SearchDialogComponent from "../components/SearchDialogComponent";
import { useRouter } from "next/router";
import { useDialog } from "../providers/DialogProvider";
import { wallets } from '../data/wallets'
import { categories } from '../data/categories'

// picks up a nested color value using dot notation
// => `theme.colors.gray[50]`

export default function Home() {
  const router = useRouter();
  const { setOpenSearch } =  useDialog()
  const [WalletPreference, setWalletPreference] = useState("");
  const [Wallets, setWallets] = useState(wallets);
  
  useEffect(() => {
    console.log("change")
    if(WalletPreference !== ""){
    setWallets(getPreffererdWallets())
    }
  }, [WalletPreference])
  

  // const prefferedWallets = wallets.filter(wallet => WalletPreference === "custodial" ? wallet.custodial : !wallet.custodial)
  // console.log("prefferedWallets", prefferedWallets)

  const getPreffererdWallets = () => {
      return  wallets.filter(wallet => WalletPreference === "custodial" ? wallet.custodial : !wallet.custodial)
  }

  const [tabIndex, setTabIndex] = useState(0)

  const handleTabsChange = (index) => {
      setTabIndex(index)
      console.log("index", index)

      switch (index) {
          case 0:
              setWallets(getPreffererdWallets())
              break;
          case 1:
              setWallets(getSecurityWallets())
              break;
          case 2:
              setWallets(getAnonWallets())
              break;
          case 3:
              setWallets(getEaseWallets())
              break;

          default:
              break;
      }

  }

  const getSecurityWallets = () => {
      return  prefferedWallets.filter(wallet => wallet.category === "security")
  }
  const getAnonWallets = () => {
      return prefferedWallets.filter(wallet => wallet.category === 'anon')
  }
  const getEaseWallets = () => {
      return prefferedWallets.filter(wallet => wallet.category === 'ease')
  }


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

  const tableProps = {
        categories,
        tabIndex,
        setTabIndex,
        handleAction,
        handleTabsChange,
        handleSelection,
        categories,
        tabIndex,
        setTabIndex,
        handleAction,
        Wallets,
        WalletPreference
    }

  return (
    <>
      <SearchDialogComponent handleAction={handleAction} />
      <DialogComponent handleAction={handleAction} />
      <HeroSection handleAction={handleAction} />
      <PreferencesSection handleAction={handleAction} handleSelection={handleSelection} walletPref={WalletPreference} />
      <TableSection {...tableProps} />
    </>
  );
}
