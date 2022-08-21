import styled from "styled-components";
import Logo from "./Logo";
import ToggleColorMode from "./ToggleColorMode";
import { useColorMode } from "@chakra-ui/react";
import InputSearch from "./InputSearch";

const Navbar = () => {
  const { colorMode } = useColorMode();
  return (
    <Nav colorMode={colorMode}>
      <Logo/>
      <SearchSection>
        <InputSearch placeholder={"Search"} size={"md"} />
      </SearchSection>

      <ToggleColorMode />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.colorMode === "dark" ? "#302F32" : "white"};
  padding: 0rem 3rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  display: flex;
`;

const SearchSection = styled.div`
  display: flex;
  align-items: center;
`;
