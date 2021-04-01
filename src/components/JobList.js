import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
// Components
import SingleJobCard from './SingleJobCard';

const JobList = () => {
    const cards = [10, 0, 9, 8, 6, 5, 4, 2, 2, 1, 7, 5, 3];

    return (
        <JobListContainer>
            {cards.map((card) => (
                <SingleJobCard key={card.indexOf} />
            ))}
        </JobListContainer>
    );
};

export default JobList;

const JobListContainer = styled.section`
    height: 50rem;
    padding: 0 16rem;
    background-color: var(--bg-color);
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    grid-auto-rows: 253px;
    gap: 2rem;

    @media only screen and (max-width: 1440px) {
        grid-template-columns: repeat(3, minmax(200px, 1fr));
    }
    @media only screen and (max-width: 1050px) {
        grid-template-columns: repeat(2, minmax(200px, 1fr));
    }
    @media only screen and (max-width: 768px) {
        padding: 0 7.9rem;
        grid-template-columns: repeat(1, minmax(200px, 1fr));
    }
    @media only screen and (max-width: 375px) {
        padding: 0 4.8rem;
    }
`;
