import styled from 'styled-components';
import React from 'react';

const NavbarEl = styled.div`
    margin: auto;
`;

const NavbarList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
`;

const Navbar = (props) => {
    const { children, onMouseLeave } = props;
    return (
        <NavbarEl onMouseLeave={onMouseLeave}>
            <NavbarList>{children}</NavbarList>
        </NavbarEl>
    );
};

export default Navbar;