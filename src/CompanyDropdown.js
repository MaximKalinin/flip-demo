import styled from 'styled-components';
import React from 'react';

import * as common from './common';

const CompanyDropdownEl = styled.div`
    width: 23rem;
`;

const CompanyDropdown = () => (
    <CompanyDropdownEl>
        <common.DropdownSection>
            <ul>
                <common.HeadingLink>
                    <a href="/">
                        <common.Icon/> About Stripe
                    </a>
                </common.HeadingLink>
                <common.HeadingLink>
                    <a href="/">
                        <common.Icon/> Customers
                    </a>
                </common.HeadingLink>
                <common.HeadingLink>
                    <a href="/">
                        <common.Icon/> Jobs
                    </a>
                </common.HeadingLink>
                <common.HeadingLink noMarginBottom>
                    <a href="/">
                        <common.Icon/> Environment
                    </a>
                </common.HeadingLink>
            </ul>
        </common.DropdownSection>
        <common.DropdownSection>
            <div>
                <common.HeadingLink>
                    <a href="/">
                        <common.Icon/> From the Blog
                    </a>
                </common.HeadingLink>
                <common.LinkList marginLeft="25px">
                    <li>
                        <a href="/">Stripe Atlas &rsaquo;</a>
                    </li>
                    <li>
                        <a href="/">Stripe Home &rsaquo;</a>
                    </li>
                    <li>
                        <a href="/">Improved Fraud Detection &rsaquo;</a>
                    </li>
                </common.LinkList>
            </div>
        </common.DropdownSection>
    </CompanyDropdownEl>
);

export default CompanyDropdown;