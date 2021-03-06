import styled from 'styled-components';
import React from 'react';

import * as common from './common';

const ProductsDropdownEl = styled.div`
    width: 29rem;
`;

const Logo = styled.div`
    width: 38px;
    height: 38px;
    margin-right: 16px;
    border-radius: 100%;
    opacity: 0.6;
    background-color: ${({color}) => (`var(--${color})`)};
`;

const SubProductsList = styled.ul`
    li {
        display: flex;
        margin-bottom: 1rem;
    }
    h3 {
        margin-right: 1rem;
        width: 3.2rem;
        display: block;
    }
    a {
        color: var(--dark-grey);
    }
`;

const ProductsSection = styled.ul`
    li {
        display: flex;
    }
`;

const WorksWithStripe = styled.div`
    border-top: 2px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: var(--spacer);
    padding-top: var(--spacer);
    h3 {
        margin-bottom: 0;
    }
`;

const ProductsDropdown = () => (
    <ProductsDropdownEl>
        <common.DropdownSection>
            <ProductsSection>
                <li>
                    <div>
                        <Logo color="blue" />
                    </div>
                    <div>
                        <common.Heading color="blue">Payments</common.Heading>
                        <p>A complete payments platform</p>
                    </div>
                </li>
                <li>
                    <div>
                        <Logo color="green" />
                    </div>
                    <div>
                        <common.Heading color="green">Billing</common.Heading>
                        <p>Build and scale your recurring business model</p>
                    </div>
                </li>
                <li>
                    <div>
                        <Logo color="teal" />
                    </div>
                    <div>
                        <common.Heading color="teal">Connect</common.Heading>
                        <p style={{marginBottom: 0}}>
                            Everything platforms need to get sellers paid
                        </p>
                    </div>
                </li>
            </ProductsSection>
        </common.DropdownSection>
        <common.DropdownSection>
            <SubProductsList>
                <li>
                    <common.Heading>Sigma</common.Heading>
                    <div>Your business data at your fingertips.</div>
                </li>
                <li>
                    <common.Heading>Atlas</common.Heading>
                    <div>The best way to start an internet business.</div>
                </li>
                <li>
                    <common.Heading>Radar</common.Heading>
                    <div>Fight fraud with machine learning.</div>
                </li>
            </SubProductsList>
            <WorksWithStripe>
                <common.Heading noMarginBottom>
                    <a href="/">
                        <common.Icon/> Works with Stripe
                    </a>
                </common.Heading>
            </WorksWithStripe>
        </common.DropdownSection>
    </ProductsDropdownEl>
);

export default ProductsDropdown;