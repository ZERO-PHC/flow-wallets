import { wallets } from "../../data/wallets";

///////// Table Utils //////////

export const resolveWallets = (WalletPreference, tab, SelectedFeatures) => {
  const tabName = resolveTabName(tab);
  const isPref = WalletPreference !== "";
  const walletsRes = getWallets(WalletPreference, tabName, isPref);

  return SelectedFeatures.length > 0 ? getFeatWallets(walletsRes) : walletsRes;
};

const resolveTabName = (tab) => {
  switch (tab) {
    case 0:
      return "all";
    case 1:
      return "security";
    case 2:
      return "anon";
    case 3:
      return "ease";
    default:
      return "";
  }
};

const getWallets = (walletPref, tab, isPref) => {
  if (!isPref) {
    return wallets.filter((wallet) => wallet.categories.includes(tab));
  } else {
    return wallets.filter((wallet) =>
      resolveCustodialPref(walletPref, wallet, tab)
    );
  }
};

const  getFeatWallets = (wallets) => {
  return wallets.filter((wallet) => {
    return wallet.features.some((feature) =>
      SelectedFeatures.includes(feature)
    );
  });
}

const resolveCustodialPref = (walletPref, wallet) => {
  switch (walletPref) {
    case "custodial":
      return isCustodial(wallet);
    case "non-custodial":
      return isNotCustodial(wallet);
    default:
      return false;
  }
};

const isCustodial = (wallet) =>
  wallet.categories.includes(tab) && wallet.custodial ? true : false;

const isNotCustodial = () =>
  wallet.categories.includes(tab) && !wallet.custodial ? true : false;


export const handleFeatureSelection = (feature) => {
    console.log("feature", feature);
    if (SelectedFeatures.includes(feature)) {
      // removes the feature from the selected features array
      setSelectedFeatures(SelectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...SelectedFeatures, feature]);
    }
  };  

/////// General Utils ///////

export const handleAction = (type, resource) => {
  type === "feature" ? scrollToBottom() : router.push(`/${type}/${resource}`);
};

const scrollToBottom = () => {
    setOpenSearch(false);
    // scroll to bottom of page
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  

/////////// Preferences Utils //////////////

export const handleSelection = (e, resource, walletPref, setWalletPreference) => {
  // stop propagation to prevent dialog from closing
  e.stopPropagation();
  resource === "custodial"
    ? walletPref === "custodial"
      ? setWalletPreference("")
      : setWalletPreference("custodial")
    : walletPref === "non-custodial"
    ? setWalletPreference("")
    : setWalletPreference("non-custodial");
};


