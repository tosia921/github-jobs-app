import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// Components
import SingleJobCard from './SingleJobCard';

const JobList = () => {
    // using useSelector to acces data from the store(global state)
    const JobsList = useSelector((state) => state.jobs);
    // in return mapping throught all joblist.data array and passing down data to SingleJobCard component to render each job on the screen
    return (
        <JobListContainer>
            {JobsList.jobsList.data.map((job) => (
                <SingleJobCard key={job.id} job={job} />
            ))}
        </JobListContainer>
    );
};

export default JobList;

const JobListContainer = styled.section`
    height: 50rem;
    background-color: var(--bg-color);
    display: grid;
    grid-auto-rows: 253px;
    grid-gap: 5rem 2rem;
    @media only screen and (min-width: 1440px) {
        margin: 6rem 16rem 4rem 16rem;
        grid-template-columns: repeat(3, minmax(350px, 1fr));
    }
    @media only screen and (max-width: 1439px) {
        margin: 6rem 4rem 4rem 4rem;
        grid-template-columns: repeat(2, minmax(339px, 1fr));
    }
    @media only screen and (max-width: 768px) {
        margin: 6rem 2.4rem 4rem 2.4rem;
        grid-template-columns: repeat(1, minmax(320px, 1fr));
    }
`;
