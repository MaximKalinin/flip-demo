import styled from 'styled-components';
import React from 'react';

import * as common from './common';

const DevelopersDropdownEl = styled.div`
    width: 25rem;
`;

const Flex = styled.div`
    display: flex;
    > div:first-of-type {
        margin-right: 48px;
    }
`;

const DevelopersDropdown = () => (
    <DevelopersDropdownEl>
    <common.DropdownSection>
        <common.Heading>Documentation</common.Heading>
        <p>Start integrating Stripe&rsquo;s products and tools</p>
        <Flex>
            <div>
                <h4>Get Started</h4>
                <common.LinkList>
                    <li>
                        <a href="/">Elements</a>
                    </li>
                    <li>
                        <a href="/">Checkout</a>
                    </li>
                    <li>
                        <a href="/">Mobile Apps</a>
                    </li>
                </common.LinkList>
            </div>
            <div>
                <common.LinkList>
                    <li>
                        <a href="/">Popular Topics</a>
                    </li>
                    <li>
                        <a href="/">Apple Pay</a>
                    </li>
                    <li>
                        <a href="/">Testing</a>
                    </li>
                    <li>
                        <a href="/">Launch Checklist</a>
                    </li>
                </common.LinkList>
            </div>
        </Flex>
    </common.DropdownSection>
    <common.DropdownSection>
        <ul>
            <common.HeadingLink>
                <a href="/">
                    <common.Icon/> Full API Reference
                </a>
            </common.HeadingLink>
            <common.HeadingLink>
                <a href="/">
                    <common.Icon/> API Status
                </a>
            </common.HeadingLink>
            <common.HeadingLink>
                <a href="/">
                    <common.Icon/> Open Source
                </a>
            </common.HeadingLink>
        </ul>
    </common.DropdownSection>
    </DevelopersDropdownEl>
);

export default DevelopersDropdown;