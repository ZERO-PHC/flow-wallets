import styled from "styled-components"
import { Button } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import { useDialog } from "../providers/DialogProvider"
import Logo from "./Logo";
import NavbarButton from "./NavbarButton";
import ToggleColorMode from "./ToggleColorMode";
import { useColorMode } from '@chakra-ui/react'
import InputSearch from "./InputSearch";

const Navbar = () => {
  const {colorMode} = useColorMode()
  return (
    <Nav>
      <Logo />
     
      <SearchSection>
        <InputSearch  placeholder={'Search'} size={'md'}/>
      </SearchSection>

      <ToggleColorMode />

    </Nav>
  )
}

export default Navbar;

const Nav = styled.nav`
position: fixed;
width: 100%;
z-index: 99;
display: flex;
justify-content: space-between;
padding: 0rem 3rem;  
box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    display: flex;
`

const ButtonsSection = styled.div`
  display: flex;
  gap: 1.2rem;
`

const Separator = styled.div`
  width: 1px;
  height: 40px;
  background-color: ${props => props.colorMode === 'light' ? 'black' : 'white'};
`

const SearchSection = styled.div`
  display: flex;
  align-items: center;
`