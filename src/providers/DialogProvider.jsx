import { createContext, useContext, useEffect, useState } from "react";
import SearchDialog from '../components/SearchDialogComponent';
import DialogComponent from '../components/DialogComponent';

export const DialogContext = createContext({});

export const useDialog = () => useContext(DialogContext);

export default function DialogProvider({ children }) {
    const [Open, setOpen] = useState(false)
    const [OpenSearch, setOpenSearch] = useState(false)


    const handleDialogAction = (type) => {
        console.log("handleDialogAction")
        type === "search" ? setOpenSearch(!OpenSearch) : setOpen(!Open)
    }

    return (
        <>
            <DialogContext.Provider value={{ handleDialogAction, Open, OpenSearch, setOpenSearch }}>
                {children}
            </DialogContext.Provider>
            {/* {OpenSearch && <SearchDialog />}
            {Open && <DialogComponent />} */}
        </>
    )
}


