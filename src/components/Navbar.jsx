import styled from "styled-components"

const Navbar = () => {
  return (
    <Nav>
      <div>
        logo
      </div>
      <div>
        tabs
      </div>
      <div>
        SearchBar
      </div>
    </Nav>
  )
}

export default Navbar;

const Nav = styled.nav`
display: flex;
justify-content: space-between;
box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    background-color: #fff;
    width: 100%;
    height: 8vh;
align-items: center;
    margin: 0;
    padding: 0;
    display: flex;
    img{
        width: 450px;
    }
    
`