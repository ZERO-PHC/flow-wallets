import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDialog } from "../DialogProvider";
import { wallets } from "../../data/wallets";
import { categories } from "../../data/categories";
import { resolveWallets, handleFeatureSelection, handleTabsChange } from "../../utils/tableUtils";
import { handleAction } from "../../utils/generalUtils";
import { handleSelection } from "../../utils/preferencesUtils";

export const TableContext = createContext({});
export const useTable = () => useContext(TableContext);

export default function TableProvider({ children }) {
  const router = useRouter();
  const { setOpenSearch } = useDialog();
  const [WalletPreference, setWalletPreference] = useState("");
  const [Wallets, setWallets] = useState(wallets);
  const [SelectedFeatures, setSelectedFeatures] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);


  useEffect(() => {
    const newWallets = resolveWallets(WalletPreference, tabIndex, SelectedFeatures);
    setWallets(newWallets);
  }, [WalletPreference, SelectedFeatures, tabIndex]);


  const value = {
    categories,
    handleAction,
    handleTabsChange,
    handleSelection,
    Wallets,
    WalletPreference,
    handleFeatureSelection,
    tabIndex,
    setTabIndex,
    setOpenSearch,
    setWalletPreference,
    SelectedFeatures,
    setSelectedFeatures
  };


  return (
    <>
      <TableContext.Provider value={value}>
        {children}
      </TableContext.Provider>
    </>
  )
}


