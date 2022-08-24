import { createContext, useContext, useEffect, useState } from "react";
import SearchDialog from '../components/SearchDialogComponent';
import DialogComponent from '../components/DialogComponent';
import { wallets } from '../data/wallets'
import { features } from '../data/features'
import { guides } from '../data/guides'
const elements = [...wallets, ...features, ...guides]

export const DialogContext = createContext({});

export const useDialog = () => useContext(DialogContext);

export default function DialogProvider({ children }) {
    const [Open, setOpen] = useState(false)
    const [OpenSearch, setOpenSearch] = useState(false)
    const [Value, setValue] = useState();
    const [Elements, setElements] = useState(elements);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        setScroll(window.scrollY);
      }), [scroll];
    });
  
    const handleChange = (e) => {
      setValue(e.target.value);
      // getMatchedWallets(e.target.value);
      getMatchedElements(e.target.value);
    }
  
    const getMatchedElements = (value) => {
      const matchedElements = elements.filter(element => {

      return  element.name.toLowerCase().includes(value.toLowerCase())
        // element.name.toLowerCase().includes(value.toLowerCase()) ||
        // element.text.map(text => text.paragraph.toLowerCase().includes(value.toLowerCase()))
      })
      setElements(matchedElements)
    }


    const handleDialogAction = (type) => {
        type === "search" ? setOpenSearch(!OpenSearch) : setOpen(!Open)
    }

    const value = { handleDialogAction, Open, OpenSearch, setOpenSearch, Value, setValue, Elements, setElements, scroll, setScroll , handleChange};

    return (
        <>
            <DialogContext.Provider value={value}>
                {children}
            </DialogContext.Provider>
            {/* {OpenSearch && <SearchDialog />}
            {Open && <DialogComponent />} */}
        </>
    )
}


