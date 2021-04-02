import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// Components
import SingleJobCard from './SingleJobCard';
import CustomButton from './CustomButton';

const JobList = () => {
    // using useSelector to acces data from the store(global state)
    const JobsList = useSelector((state) => state.jobs);
    // in return mapping throught all joblist.data array and passing down data to SingleJobCard component to render each job on the screen

    // setting state variable visibleJobs to hold number of jobs we want do display, initialy 12.
    const [visibleJobs, setVisibleJobs] = useState(12);

    // adding extra 12 jobs when clicking LOAD MORE button.
    const handleLoadMore = () => {
        setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 12);
    };
    return (
        <PageContainer>
            <JobListContainer>
                {JobsList.jobsList.status === 'idle' && <h2 className="h2-searchactions">Search For Jobs</h2>}
                {JobsList.jobsList.status === 'error' && (
                    <h2 className="h2-searchactions">{JobsList.jobsList.error}</h2>
                )}
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
                    JobsList.jobsList.data.slice(0, visibleJobs).map((job) => <SingleJobCard key={job.id} job={job} />)
                )}
            </JobListContainer>
            <CustomButton className="load-more-button" onClick={handleLoadMore}>
                Load More
            </CustomButton>
        </PageContainer>
    );
};

export default JobList;

const PageContainer = styled.section`
    height: fit-content;
    margin-bottom: 5rem;
    position: relative;
    .load-more-button {
        margin-top: 3rem;
        margin-bottom: 3rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const JobListContainer = styled.div`
    height: fit-content;
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
