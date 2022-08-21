/////// Table Utils //////////

import { wallets } from "../data/wallets";


export const resolveWallets = (WalletPreference, tab, SelectedFeatures) => {
  const tabName = resolveTabName(tab);
  const isPref = WalletPreference !== "";
  const walletsRes = getWallets(WalletPreference, tabName, isPref);

  return SelectedFeatures.length > 0 ? getFeatWallets(walletsRes, SelectedFeatures) : walletsRes;
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

const  getFeatWallets = (wallets, SelectedFeatures) => {
  return wallets.filter((wallet) => {
    return wallet.features.some((feature) =>
      SelectedFeatures.includes(feature)
    );
  });
}

const resolveCustodialPref = (walletPref, wallet, tab) => {
  switch (walletPref) {
    case "custodial":
      return isCustodial(wallet,tab);
    case "non-custodial":
      return isNotCustodial(wallet,tab);
    default:
      return false;
  }
};

const isCustodial = (wallet,tab) =>
  wallet.categories.includes(tab) && wallet.custodial ? true : false;

const isNotCustodial = (wallet,tab) =>
  wallet.categories.includes(tab) && !wallet.custodial ? true : false;


export const handleFeatureSelection = (feature, SelectedFeatures, setSelectedFeatures) => {
    if (SelectedFeatures.includes(feature)) {
      setSelectedFeatures(SelectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...SelectedFeatures, feature]);
    }
  };

 export const handleTabsChange = (index, setTabIndex) => {
    setTabIndex(index);
  };
