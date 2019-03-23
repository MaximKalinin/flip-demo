import styled from 'styled-components';
import React, { Component } from 'react';

const NavBarItemTitle = styled.button`
    background: transparent;
    border: 0;
    font-weight: bold;
    font-size: 18px;
    padding: 1.5rem 1.5rem 1.2rem 1.5rem;
    color: white;
    font-family: inherit;
    display: flex;
    justify-content: center;
    transition: opacity 250ms;
    cursor: pointer;
    position: relative;
    z-index: 2;
    &:hover,
    &:focus {
        opacity: 0.7;
        outline: none;
    }
`;

const NavbarItemEl = styled.li`
    position: relative;
    margin-left: 0.5rem;
    &:first-of-type {
        margin-left: 0;
    }
`;

const DropdownSlot = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    perspective: 1000px;
`;

class NavbarItem extends Component {
    // onMouseEnter = () => {
    //     this.props.onMouseEnter(this.props.index);
    // }

    render() {
        const { title, children, onMouseEnter } = this.props;
        return (
            <NavbarItemEl onMouseEnter={onMouseEnter} onFocus={onMouseEnter}>
                <NavBarItemTitle>{title}</NavBarItemTitle>
                <DropdownSlot>{children}</DropdownSlot>
            </NavbarItemEl>
        );
    }
}

export default NavbarItem;