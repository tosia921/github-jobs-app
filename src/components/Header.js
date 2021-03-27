import React from 'react';
import styled from 'styled-components';
// Optimized background Images
import HeaderBackgroundDesktop from '../assets/desktop/bg-pattern-header.svg';
import HeaderBackgroundMobile from '../assets/mobile/bg-pattern-header.svg';

const Header = () => (
    <StyledHeader>
        <nav>
            <h1>Devjobs</h1>
            <div>dark mode</div>
        </nav>
    </StyledHeader>
);

export default Header;

const StyledHeader = styled.header`
    width: 100vw;
    height: 16rem;
    background-repeat: no-repeat;
    background-image: url(${HeaderBackgroundDesktop});
    @media only screen and (min-width: 1440px) {
        background-size: 100% 99%;
    }
    @media only screen and (max-width: 375px) {
        background-image: url(${HeaderBackgroundMobile});
        height: 136px;
        background-size: 100% 100%;
    }

    nav {
        padding: 4.4rem 16rem 0 16rem;
        display: flex;
    }
`;
