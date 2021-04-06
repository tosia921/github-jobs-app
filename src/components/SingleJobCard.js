import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SingleJobCard = ({ job }) => {
    // destructuring values from job object
    const { type, title, company, location } = job;
    return (
        <StyledCard>
            <div className="company-logo">
                {job.company_logo ? <img src={job.company_logo} alt="Company Logo" /> : 'No Logo'}
            </div>
            <div className="time-type">
                <p>5 days ago</p>
                <span>&#8226;</span>
                <p>{type}</p>
            </div>
            <StyledTitleLink to={`jobs/${job.id}`}>{title}</StyledTitleLink>
            <p className="company-name">{company}</p>
            <p className="location">{location}</p>
        </StyledCard>
    );
};

export default SingleJobCard;

const StyledCard = styled.article`
    height: 100%;
    width: 100%;
    background-color: var(--bg-color-card);
    flex-direction: column;
    position: relative;
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
    padding: 5rem 3.2rem 3.2rem 4.4rem;
    display: flex;

    h2 {
    }

    p {
        color: var(--color-text-small);
    }
    .time-type {
        display: flex;
        span {
            font-size: 2rem;
            color: var(--color-text-small);
            margin: 0 1rem;
        }
    }
    .company-name {
        flex-grow: 1;
    }
    .location {
        color: var(--color-primary);
        font-weight: 700;
    }
    .company-logo {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        overflow: hidden;
        position: absolute;
        top: -25px;
        left: 30px;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        background-color: white;
    }
`;

const StyledTitleLink = styled(Link)`
    color: var(--color-text-titles);
    font-size: 2rem;
    margin: 1.6rem 0;
    text-decoration: none;
    &:hover {
        color: var(--color-primary);
    }
`;
