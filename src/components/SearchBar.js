import React from 'react';
import styled from 'styled-components';
// Icons
import searchIcon from '../assets/desktop/icon-search.svg';
import locationIcon from '../assets/desktop/icon-location.svg';

const SearchBar = () => {
    const a = 3;
    return (
        <SearchBarContainer>
            <SearchForm>
                <div className="input-group input-search">
                    <img src={searchIcon} alt="search icon" />
                    <input
                        type="text"
                        placeholder={
                            window.innerWidth > 1110 ? 'Filter by title, companies, expertise...' : 'Filter by Title'
                        }
                    />
                </div>
                <div className="input-group input-location">
                    <img src={locationIcon} alt="location icon" />
                    <input type="text" placeholder="Filter by location..." />
                </div>
                <div className="input-group input-fulltime-search">
                    <label htmlFor="fulltime" className="label-checkbox">
                        <input type="checkbox" id="fulltime" name="fulltime" />
                        Full Time Only
                    </label>
                    <button type="submit">Search</button>
                </div>
            </SearchForm>
        </SearchBarContainer>
    );
};

export default SearchBar;

const SearchBarContainer = styled.section`
    height: 8rem;
    background-color: var(--White);
    margin: -4rem 16rem 4rem 16rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 768px) {
        margin: -4rem 7.9rem 0 7.9rem;
    }
    @media only screen and (max-width: 375px) {
        margin: -4rem 4.8rem 0 4.8rem;
    }
`;

const SearchForm = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0;
    padding-left: 3.2rem;
    .input-group {
        height: 100%;
        display: flex;
        align-items: center;
        &:not(:first-child) {
            padding-left: 2.2rem;
        }
        &:not(:last-child) {
            border-right: 1px solid #979797;
        }

        input {
            height: 97%;
            width: 100%;
            border: none;
            font-size: 1.6rem;

            &:active,
            &:focus {
                outline-style: none;
            }
        }

        #fulltime {
            height: 2.4rem;
            width: 2.4rem;
            margin-right: 1.7rem;
        }

        label {
            width: 100%;
        }
    }

    .input-search {
        width: 40%;
    }

    .input-location {
        width: 30%;
    }
    .input-fulltime-search {
        width: 30%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .label-checkbox {
            display: flex;
            align-items: center;
            font-size: 1.6rem;
            font-weight: 700;
        }
    }

    img {
        height: 2.4rem;
        margin-right: 5px;
    }
`;
