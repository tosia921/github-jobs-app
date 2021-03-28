import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
    const a = 3;
    return (
        <SearchBarContainer>
            <h1>search bar</h1>
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
    @media only screen and (max-width: 768px) {
        margin: -4rem 7.9rem 0 7.9rem;
    }
    @media only screen and (max-width: 375px) {
        margin: -4rem 4.8rem 0 4.8rem;
    }
`;
