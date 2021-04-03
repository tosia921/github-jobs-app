import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const JobsDetails = () => {
    // accesing id of the job from the url using useParams react router hook.
    const { id } = useParams();
    // using useSelector to acces data from the store(global state)
    const JobsListArray = useSelector((state) => state.jobs.jobsList.data);
    // iterating throught the array of all jobs to find he one that will match our id and assigning its value to the new variable.
    const CurrentJob = JobsListArray.find((job) => job.id === id);

    console.log({ CurrentJob });

    return <div>{CurrentJob.description}</div>;
};

export default JobsDetails;
