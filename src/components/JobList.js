import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// Components
import SingleJobCard from './SingleJobCard';

const JobList = () => {
    // using useSelector to acces data from the store(global state)
    const JobsList = useSelector((state) => state.jobs);
    // in return mapping throught all joblist.data array and passing down data to SingleJobCard component to render each job on the screen
    return (
        <JobListContainer>
            {JobsList.jobsList.status === 'idle' && <h2 className="h2-searchactions">Search For Jobs</h2>}
            {JobsList.jobsList.status === 'success' && JobsList.jobsList.data.length === 0 && (
                <h2 className="h2-searchactions">No Jobs Match Your Search, Try Again.</h2>
            )}
            {JobsList.jobsList.status === 'loading' ? (
                <Loader
                    className="center-spinner"
                    type="TailSpin"
                    color="#5964E0"
                    height={150}
                    width={150}
                    timeout={3000} // 3 secs
                />
            ) : (
                JobsList.jobsList.data.map((job) => <SingleJobCard key={job.id} job={job} />)
            )}
        </JobListContainer>
    );
};

export default JobList;

const JobListContainer = styled.section`
    height: 50rem;
    background-color: var(--bg-color);
    display: grid;
    position: relative;
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
    .center-spinner,
    .h2-searchactions {
        position: absolute;
        top: 200px;
        left: 50%;
        transform: translate(-50%, 0);
    }
`;
