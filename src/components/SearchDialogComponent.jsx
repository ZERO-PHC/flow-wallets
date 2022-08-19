import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// box chakra ui 
import { Box, CloseButton, Divider, Input } from '@chakra-ui/react'
import { useDialog } from "../providers/DialogProvider";
import { wallets } from '../data/wallets'
import { features } from '../data/features'
import { guides } from '../data/guides'
import ElementComponent from './ElementComponent';

const elements = [...wallets, ...features, ...guides]

export default function SearchDialogComponent({ handleAction }) {
  const { OpenSearch, setOpenSearch, handleDialogAction } = useDialog()
  const [Value, setValue] = useState();
  const [Elements, setElements] = useState(elements);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
      // console.log("sy", window.scrollY)
    }), [scroll];
  });

  const handleChange = (e) => {
    setValue(e.target.value);
    // getMatchedWallets(e.target.value);
    getMatchedElements(e.target.value);
  }

  const getMatchedElements = (value) => {
    const matchedElements = elements.filter(element => element.name.toLowerCase().includes(value.toLowerCase()))
    setElements(matchedElements)
  }

  


  if (OpenSearch)
    return (
      <>
        <Dialog onClick={() => setOpenSearch(false)}>
          <Box position={"absolute"} top="10" right={10}>
            <CloseButton onClick={() => handleDialogAction("search")} color={"black"} />
          </Box>
          
        </Dialog>
        <Box mt={"7rem"} left={"25%"} top={scroll } zIndex={98} position={"absolute"} background={"white"} h={"37rem"} w="50%" borderRadius={"lg"} border="1px solid #eaeaea" >
          <Input placeholder="Search" value={Value} onChange={handleChange} />
          <div style={{ margin: "1rem" }}></div>
          <Divider />
          <Box>
            {Value && Elements.map((element, i) => <ElementComponent key={i} element={element} handleAction={handleAction} />)}
          </Box>
        </Box>
        

      
      </>
    )

}


const Dialog = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  position: absolute;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  z-index: 10;
  animation: fadeIn 0.5s ease-in-out;
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-direction: normal;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
