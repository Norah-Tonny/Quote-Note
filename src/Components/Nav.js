import { Link } from "react-router-dom";
import styled from "styled-components";


const NavContainer = styled.div`
background:#2D31FA;
height:10vh;

`

const NavItems = styled.ul`
display:flex;
gap:2em;`

const NavList = styled.li`
list-style-type:none;
font-size:2rem;
font-weight:bold;
justify-content:space-between;
`
const NavLeft = styled.div``
const NavRight=styled.div``

const Nav = () => {
    return (
        <NavContainer>
            <NavRight>
                <NavList><NavItems><Link to='/'>Quote Note</Link></NavItems></NavList>
            </NavRight>
            <NavLeft>

            <NavItems>
            <NavList> <Link to='/'>Home</Link></NavList>
                <NavList> <Link to='/login'>LoginForm</Link></NavList>
                <NavList> <Link to='/quotes'>AddQuotes</Link></NavList>
                <NavList> <Link to='/PostedQuote'>PostedQuotes</Link></NavList>
            </NavItems>
            </NavLeft>
        </NavContainer>
    )
}
export default Nav;