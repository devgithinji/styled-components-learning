import React from 'react';
import styled from "styled-components";
import Title from "./Title";

const Navbar = ({children}) => {
    return (
        <NavbarWrapper>
            <Title title="company name"/>
            {children}
        </NavbarWrapper>
    );
};

const NavbarWrapper = styled.nav`
  background: ${({theme: {primaryColor}}) => primaryColor};
  ${({theme: {primaryColor, secondaryColor}}) => `color:${secondaryColor}`};
  padding: 1rem;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
`

export default Navbar;