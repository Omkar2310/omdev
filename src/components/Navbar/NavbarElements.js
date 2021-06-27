import styled from "styled-components"
import { Link } from "gatsby"
export const Nav = styled.nav`
  background: ${({ active }) => (active ? "#000" : "#000")};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "#fff" : "transparent")};
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  color: black;
  max-width: 1000px;
  background: black;
`

export const NavLogo = styled(Link)`
  color: teal;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;

  @media screen and (max-width: 960px) {
    color: teal;
  }
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    background: black;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.2s ease;
    background: white;
  }
`

export const NavItem = styled.li`
  height: 80px;
  color: blanchedalmond;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const NavLinks = styled(Link)`
  color: darksalmon;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: "Permanent Marker", cursive;

  @media screen and (max-width: 960px) {
    text-align: center;
    width: 100%;
    display: table;
    padding: 2rem;

    &::hover {
      color: #ff4040;
      transition: all 0.3s ease;
    }
  }
`
