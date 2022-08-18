import React, { useState, useRef, useEffect } from "react";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import PreferencesSection from "../sections/PreferencesSection";
import TableSection from "../sections/TableSection";
import DialogComponent from "../components/DialogComponent";
import Footer from "../components/Footer";
import SearchDialogComponent from "../components/SearchDialogComponent";
import { useRouter } from "next/router";
import { useDialog } from "../providers/DialogProvider";
import { wallets } from "../data/wallets";
import { categories } from "../data/categories";

export default function Home() {
  const router = useRouter();
  const { setOpenSearch } = useDialog();
  const [WalletPreference, setWalletPreference] = useState("");
  const [Wallets, setWallets] = useState(wallets);
  const [SelectedFeatures, setSelectedFeatures] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    switch (tabIndex) {
      case 0:
        setWallets(getAllWallets());
        break;
      case 1:
        setWallets(getSecurityWallets());
        break;
      case 2:
        setWallets(getAnonWallets());
        break;
      case 3:
        setWallets(getEaseWallets());
        break;

      default:
        break;
    }
  }, [WalletPreference, SelectedFeatures, tabIndex]);


  const handleTabsChange = (index) => {
    setTabIndex(index);
    console.log("index", index);
  };

  function getFeatWallets(wallets) {
    return wallets.filter((wallet) => {
      return wallet.features.some((feature) =>
        SelectedFeatures.includes(feature)
      );
    });
  }

  const resolveCustodialPref = (wallet, tab) => {
    switch (WalletPreference) {
      case "custodial":
        return wallet.categories.includes(tab) && wallet.custodial ? true : false;
      case "non-custodial":
        return wallet.categories.includes(tab) && !wallet.custodial ? true : false;
      default:
        return false;
    }
  };

  const getWallets = (isPreference, tab) => {
    if (!isPreference) {
      return wallets.filter((wallet) => wallet.categories.includes(tab));
    } else {
      return wallets.filter((wallet) => resolveCustodialPref(wallet, tab));
    }
  };


  const getAllWallets = () => {
    const allWallets = getWallets(WalletPreference !== "", "all");

    if (SelectedFeatures.length > 0) {
      return getFeatWallets(allWallets);
    } else {
      return allWallets;
    }  };


  const getSecurityWallets = () => {
    const securityWallets = getWallets(WalletPreference !== "", "security");

    if (SelectedFeatures.length > 0) {
      return getFeatWallets(securityWallets);
    } else {
      return securityWallets;
    }
  };

  const getAnonWallets = () => {
    const anonWallets = getWallets(WalletPreference !== "", "anon");

    if (SelectedFeatures.length > 0) {
      return getFeatWallets(anonWallets);
    } else {
      return anonWallets;
    }
  };

  const getEaseWallets = () => {
    const easeWallets = getWallets(WalletPreference !== "", "ease");

    if (SelectedFeatures.length > 0) {
      return getFeatWallets(easeWallets);
    } else {
      return easeWallets;
    }
  };

  const handleAction = (type, resource) => {
    type === "feature" ? scrollToBottom() : router.push(`/${type}/${resource}`);
  };

  const handleSelection = (e, resource) => {
    // stop propagation to prevent dialog from closing
    e.stopPropagation();
    resource === "custodial"
      ? WalletPreference === "custodial"
        ? setWalletPreference("")
        : setWalletPreference("custodial")
      : WalletPreference === "non-custodial"
      ? setWalletPreference("")
      : setWalletPreference("non-custodial");
  };

  const handleFeatureSelection = (feature) => {
    console.log("feature", feature);
    if (SelectedFeatures.includes(feature)) {
      // removes the feature from the selected features array
      setSelectedFeatures(SelectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...SelectedFeatures, feature]);
    }
  };

  const scrollToBottom = () => {
    setOpenSearch(false);
    // scroll to bottom of page
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const tableProps = {
    categories,
    tabIndex,
    setTabIndex,
    handleAction,
    handleTabsChange,
    handleSelection,
    tabIndex,
    setTabIndex,
    handleAction,
    Wallets,
    WalletPreference,
    handleFeatureSelection,
  };

  return (
    <>
      <SearchDialogComponent handleAction={handleAction} />
      <DialogComponent handleAction={handleAction} />
      <HeroSection handleAction={handleAction} />
      <PreferencesSection
        handleAction={handleAction}
        handleSelection={handleSelection}
        walletPref={WalletPreference}
      />
      <TableSection {...tableProps} />
      <Footer />
    </>
  );
}
