import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Box, CloseButton, Container } from '@chakra-ui/react'
import { useDialog } from "../providers/DialogProvider";

import ElementComponent from './ElementComponent';


export default function SearchDialogComponent({ handleAction }) {
  const { OpenSearch, setOpenSearch, handleDialogAction, Elements, Value, scroll } = useDialog()

  if (OpenSearch)
    return (
      <>
        <Dialog onClick={() => setOpenSearch(false)}>
          <Box position={"absolute"} top="10" right={10}>
            <CloseButton onClick={() => handleDialogAction("search")} color={"black"} />
          </Box>

        </Dialog>
        <Container p={3} mt={"7rem"} left={"25%"} top={scroll } justifyContent="flex-start" zIndex={98} position={"absolute"} h={"70vh"} w="50%" overflowY={'scroll'} borderRadius={"lg"} border="1px solid #eaeaea" >
          <Box>
            { Elements.map((element, i) => <ElementComponent key={i} element={element} handleAction={handleAction} />)}
          </Box>
        </Container>
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
