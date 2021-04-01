import React from 'react';
import styled from 'styled-components';

const SingleJobCard = () => {
    const a = 3;
    return (
        <StyledCard>
            <h2>posiadala</h2>
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
