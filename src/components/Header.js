import React, { useEffect } from 'react';
import styled from 'styled-components';
// Optimized background Images
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import HeaderBackgroundDesktop from '../assets/desktop/bg-pattern-header.svg';
import HeaderBackgroundMobile from '../assets/mobile/bg-pattern-header.svg';
// Theme Switch Component
import ColorThemeSwitch from './ColorThemeSwitch';
// redux
import { fetchJobList } from '../redux/jobs/jobsSlice';

const Header = () => {
    const dispatch = useDispatch();

    // decided fetch all jobs when app first renders/mounts inside Header component, since it never rerenders again throught lifecycle of the app.
    useEffect(() => {
        const PageLoadParams = {
            description: 'all',
            full_time: 'true',
            markdown: 'true',
        };
        dispatch(fetchJobList(PageLoadParams));
    }, []);

    return (
        <StyledHeader>
            <nav>
                <Link to="/">
                    <h1>devjobs</h1>
                </Link>

                <ColorThemeSwitch className="dark-mode" />
            </nav>
        </StyledHeader>
    );
};

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
        justify-content: space-between;
        align-items: center;
        @media only screen and (max-width: 768px) {
            padding: 4.4rem 7.9rem 0 7.9rem;
        }
        @media only screen and (max-width: 375px) {
            padding: 3.2rem 4.8rem 0 4.8rem;
        }
        h1 {
            color: var(--color-logo);
        }
    }
`;
