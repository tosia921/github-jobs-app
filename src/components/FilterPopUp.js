import React from 'react';
import styled from 'styled-components';

import { motion, AnimatePresence } from 'framer-motion';
import locationIcon from '../assets/desktop/icon-location.svg';
import CustomButton from './CustomButton';

// framer motion animation's

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};
const PopUpContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delay: 0.2 },
    },
};

const FilterPopUp = ({ handleFulltime, handleSubmitMobile, setLocation, showPopUp }) => (
    <AnimatePresence exitBeforeEnter>
        {showPopUp && (
            <Backdrop variants={backdrop} initial="hidden" animate="visible">
                <PopUpWindow variants={PopUpContainer} initial="hidden" animate="visible" exit="hidden">
                    <div className="input-group-mobile input-location-mobile">
                        <img src={locationIcon} alt="location icon" />
                        <input
                            type="text"
                            placeholder="Filter by location..."
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div className="input-group-mobile input-fulltime-search-mobile">
                        <label htmlFor="fulltime" className="label-checkbox-mobile">
                            <input type="checkbox" name="fulltime" onClick={handleFulltime} />
                            Full Time Only
                        </label>
                        <CustomButton type="submit" onClick={handleSubmitMobile}>
                            Search
                        </CustomButton>
                    </div>
                </PopUpWindow>
            </Backdrop>
        )}
    </AnimatePresence>
);

export default FilterPopUp;

// Styles

const PopUpWindow = styled(motion.section)`
    width: 90%;
    height: 22rem;
    background-color: var(--bg-color-card);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 768px) {
        display: none;
    }
    .input-group-mobile {
        height: 30%;
        width: 100%;
        z-index: 1000;
        padding: 2.5rem;
        &:not(:last-child) {
            border-bottom: 1px solid #6e8098;
        }
    }
    .input-location-mobile {
        display: flex;
        align-items: center;

        input {
            width: 100%;
            font-size: 1.6rem;
            color: var(--color-text-titles);
            border: none;
            background-color: var(--bg-color-card);
            &:focus {
                outline: none;
            }
        }
    }
    .input-fulltime-search-mobile {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex-grow: 1;
        color: var(--color-text-titles);
        font-size: 1.6rem;
        font-weight: 700;
        .label-checkbox-mobile {
            display: flex;
            align-items: center;
            input {
                height: 2.4rem;
                width: 2.4rem;
                margin-right: 1.7rem;
                background-color: var(--input-background-color);
            }
        }
    }
`;
const Backdrop = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 600;
    @media only screen and (min-width: 768px) {
        display: none;
    }
`;
