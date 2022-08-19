export const handleSelection = (e, id, walletPref, setWalletPreference) => {
    // stop propagation to prevent dialog from closing
    e.stopPropagation();
    const prefRes = resolveWalletPref(id, walletPref);

    setWalletPreference(prefRes);
   
  };

  export const resolveWalletPref = (id, walletPref) => {

    walletPref === id ? walletPref = '' : walletPref = id;
     
    return walletPref;
  };
  