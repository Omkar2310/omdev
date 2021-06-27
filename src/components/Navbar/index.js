import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
} from "./NavbarElements"
const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo to="/">Logo</NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="#about">About Me </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="#project">Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/Skills">Skills</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="#contact">Contact Me</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
