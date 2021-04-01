import React from 'react';
import styled from 'styled-components';

const SingleJobCard = ({ job }) => {
    const { type, title, company, location } = job;
    return (
        <StyledCard>
            <h2>{job.created_at}</h2>
            <h2>{type}</h2>
            <h2>{title}</h2>
            <h2>{company}</h2>
            <h2>{location}</h2>
        </StyledCard>
    );
};

export default SingleJobCard;

const StyledCard = styled.article`
    height: 100%;
    width: 100%;
    background-color: var(--bg-color-card);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        color: var(--color-text-titles);
    }
`;
