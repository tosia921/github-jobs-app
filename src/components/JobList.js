import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// Components
import SingleJobCard from './SingleJobCard';
import CustomButton from './CustomButton';
// Redux actions
import { addNextJobs } from '../redux/jobs/jobsSlice';

const JobList = () => {
    // using useSelector to acces data from the store(global state)
    const JobsList = useSelector((state) => state.jobs);
    const JobsToDisplay = useSelector((state) => state.jobs.visibleJobs);

    const dispatch = useDispatch();

    // adding extra 12 jobs when clicking LOAD MORE button.
    const handleLoadMore = () => {
        dispatch(addNextJobs());
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
                    JobsList.jobsList.data
                        .slice(0, JobsToDisplay)
                        .map((job) => <SingleJobCard key={job.id} job={job} />)
                )}
            </JobListContainer>
            {JobsList.jobsList.data.length > 0 &&
                (JobsToDisplay < JobsList.jobsList.data.length ? (
                    <CustomButton className="load-more-button" onClick={handleLoadMore}>
                        Load More
                    </CustomButton>
                ) : (
                    <CustomButton className="load-more-button" disabled>
                        All Jobs Loaded
                    </CustomButton>
                ))}
        </PageContainer>
    );
};

export default JobList;

const PageContainer = styled.section`
    height: fit-content;
    position: relative;
    margin-bottom: 17rem;
    .load-more-button {
        position: absolute;
        left: 50%;
        bottom: -10rem;
        transform: translateX(-50%);
    }
`;

const JobListContainer = styled.div`
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
        grid-template-columns: repeat(2, minmax(300px, 1fr));
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
