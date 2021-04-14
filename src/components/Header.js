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
            description: '',
            full_time: '',
            markdown: 'true',
        };
        dispatch(fetchJobList(PageLoadParams));
    }, [dispatch]);

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
    @media only screen and (max-width: 768px) {
        background-image: url(${HeaderBackgroundMobile});
        height: 136px;
        background-size: 100% 100%;
    }

    nav {
        padding: 4.4rem 16rem 0 16rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media only screen and (max-width: 1440px) {
            padding: 4.4rem 4rem 0 4rem;
        }
        @media only screen and (max-width: 768px) {
            padding: 4.4rem 2.5rem 0 2.5rem;
        }
        @media only screen and (max-width: 375px) {
            padding: 3.2rem 2.5rem 0 2.5rem;
        }
        h1 {
            color: var(--color-logo);
        }
    }
`;
