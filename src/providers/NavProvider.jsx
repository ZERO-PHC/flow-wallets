import { createContext, useContext, useEffect, useState } from "react";
import SearchNav from '../components/SearchNavComponent';
import NavComponent from '../components/NavComponent';
import { handleAction } from "../utils/generalUtils";

export const NavContext = createContext({});

export const useNav = () => useContext(NavContext);

export default function NavProvider({ children }) {

    

    return (
        <>
            <NavContext.Provider value={{ handleNavAction, Open, OpenSearch, setOpenSearch }}>
                {children}
            </NavContext.Provider>
            {/* {OpenSearch && <SearchNav />}
            {Open && <NavComponent />} */}
        </>
    )
}


