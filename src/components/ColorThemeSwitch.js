import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// icons
import sun from '../assets/desktop/icon-sun.svg';
import moon from '../assets/desktop/icon-moon.svg';

const ColorThemeSwitch = () => {
    const [theme, setTheme] = useState('light');
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);
    return (
        <ThemeSwitchWrapper>
            <img src={sun} alt="sun" />
            <label htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onChange={() => setTheme(nextTheme)} />
                <div className="slider round" />
            </label>
            <img src={moon} alt="moon" />
        </ThemeSwitchWrapper>
    );
};

export default ColorThemeSwitch;

const ThemeSwitchWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 24px;
    position: relative;
    width: 112px;

    label {
        display: inline-block;
        height: 24px;
        position: relative;
        width: 48px;
        margin: 0 1rem 0 1rem;

        input {
            display: none;
        }
        .slider {
            background-color: #ffffff;
            bottom: 0;
            cursor: pointer;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            transition: 0.4s;
        }

        .slider:before {
            background-color: #5964e0;
            bottom: 5px;
            content: '';
            height: 14px;
            left: 5px;
            position: absolute;
            transition: 0.4s;
            width: 14px;
            &:hover {
                background-color: #939bf4;
            }
        }
        input:checked + .slider:before {
            transform: translateX(24px);
        }
        .slider:hover:before {
            background-color: #939bf4;
        }
        .slider.round {
            border-radius: 34px;
        }

        .slider.round:before {
            border-radius: 50%;
        }
    }
`;
