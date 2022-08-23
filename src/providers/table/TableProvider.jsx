import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDialog } from "../DialogProvider";
import { wallets } from "../../data/wallets";
import { categories } from "../../data/categories";
import { resolveWallets } from "../../utils/tableUtils";
import { features } from '../../data/features';

export const TableContext = createContext({});
export const useTable = () => useContext(TableContext);

export default function TableProvider({ children }) {
  const [WalletPreference, setWalletPreference] = useState("");
  const [Wallets, setWallets] = useState(wallets);
  const [Features, setFeatures] = useState(features);


  const [SelectedFeatures, setSelectedFeatures] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  


  useEffect(() => {
    const newWallets = resolveWallets(WalletPreference, tabIndex, SelectedFeatures);
    setWallets(newWallets);
  }, [WalletPreference, SelectedFeatures, tabIndex]);


  const value = {
    categories,
    Wallets,
    WalletPreference,
    tabIndex,
    setTabIndex,
    setWalletPreference,
    SelectedFeatures,
    setSelectedFeatures,
    Features
  };


  return (
    <>
      <TableContext.Provider value={value}>
        {children}
      </TableContext.Provider>
    </>
  )
}


