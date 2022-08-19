import React from 'react'
import styled from 'styled-components'
// box chakra ui 
import { Box, CloseButton } from '@chakra-ui/react'
import { useDialog } from '../providers/DialogProvider'


export default function DialogComponent() {
  const { Open, handleDialogAction } = useDialog()

  if (Open)
    return (
      <Dialog>
        <Box background={"white"} h={"10rem"} w="8rem" borderRadius={"lg"} border="1px solid #eaeaea" >
          <CloseButton onClick={() => handleDialogAction("feature")} color={"black"} />
        </Box>
      </Dialog>
    )
}


const Dialog = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  padding: 20%;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  z-index: 98;
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
