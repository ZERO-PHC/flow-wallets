import styled from "styled-components"
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
      <ButtonsSection>
        <NavbarButton title="Preferences"/>
        <Separator colorMode={colorMode}/>
        <NavbarButton title="Features"/>
        <Separator colorMode={colorMode}/>
        <NavbarButton title="Wallets"/>
      </ButtonsSection>
      <SearchSection>
        <ToggleColorMode />
        <InputSearch placeholder={'Search'} size={'md'}/>
      </SearchSection>
    </Nav>
  )
}

export default Navbar;

const Nav = styled.nav`
position: fixed;
z-index: 99;
display: flex;
justify-content: space-between;
padding: 0rem 3rem;  
box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    width: 100%;
    height: 8vh;
    align-items: center;
    margin: 0;
    padding: 0 2rem;
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