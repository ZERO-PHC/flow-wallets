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
  