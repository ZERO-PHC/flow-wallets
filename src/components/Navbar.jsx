import styled from "styled-components"
import { Button } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import { useDialog } from "../providers/DialogProvider"

const Navbar = () => {
  const { handleDialogAction } = useDialog()
  return (
    <Nav>
      <div>
        logo
      </div>
      <div>

        <Button onClick={ () =>  handleDialogAction("search")} >Search..</Button>
      </div>
      <div>
        <Switch id='email-alerts' />
      </div>
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
background-color: #fff;
width: 100%;
height: 8vh;
align-items: center;
    margin: 0;
    display: flex;
    img{
        width: 450px;
    }
    
`