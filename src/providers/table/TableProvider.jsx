import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDialog } from "../DialogProvider";
import { wallets } from "../../data/wallets";
import { categories } from "../../data/categories";
import { getAllWallets, getSecurityWallets, getAnonWallets, getEaseWallets, handleAction, handleSelection, handleFeatureSelection, resolveWallets } from "./utils";

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
      const newWallets = resolveWallets(WalletPreference, tabIndex,  SelectedFeatures);
      setWallets(newWallets);
      }, [WalletPreference, SelectedFeatures, tabIndex]);

     
       const handleTabsChange = (index) => {
        setTabIndex(index);
      };

      const value = {
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
            <TableContext.Provider value={value}>
                {children}
            </TableContext.Provider>
        </>
    )
}


