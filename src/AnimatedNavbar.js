import React, { Component } from 'react';

import ProductsDropdown from './ProductsDropdown';
import DevelopersDropdown from './DevelopersDropdown';
import CompanyDropdown from './CompanyDropdown';
import Navbar from './Navbar';
import NavbarItem from './NavbarItem';
import DropdownContainer from './DropdownContainer';

const navbarConfig = [
    {title: 'Products', dropdown: ProductsDropdown},
    {title: 'Developers', dropdown: DevelopersDropdown},
    {title: 'Company', dropdown: CompanyDropdown},
];

class AnimatedNavbar extends Component {
    state = {
        activeIndicies: [],
    };

    onMouseEnter = i => {
        if (this.state.activeIndicies[this.state.activeIndicies.length - 1] !== i) {
            const activeIndicies = this.state.activeIndicies;
            activeIndicies.push(i);
            console.log()
            this.setState({activeIndicies: activeIndicies});
            // return this.setState(prevState => {
            //     console.log(prevState.activeIndicies);
            //     return {activeIndicies: prevState.activeIndicies.concat(i)}
            // }) 
        }
    }

    onMouseLeave = () => {
        this.setState({activeIndicies: []});
    }

    render() {
        let CurrentDropdown;
        const currentIndex = this.state.activeIndicies[
            this.state.activeIndicies.length - 1
        ];

        if (typeof currentIndex === "number") {
            CurrentDropdown = navbarConfig[currentIndex].dropdown;
        }
        
        return (
            <Navbar onMouseLeave={this.onMouseLeave}>
            {navbarConfig.map((n, index) => (
                <NavbarItem
                title={n.title}
                index={index}
                onMouseEnter={() => this.onMouseEnter(index)}
                key={index}>
                {currentIndex === index && (
                    <DropdownContainer>
                        <CurrentDropdown />
                    </DropdownContainer>
                )}
                </NavbarItem>
            ))}
            </Navbar>
        );
    }
}

export default AnimatedNavbar;