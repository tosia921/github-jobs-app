import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import CustomButton from '../components/CustomButton';

const JobsDetails = () => {
    // accesing id of the job from the url using useParams react router hook.
    const { id } = useParams();
    // using useSelector to acces data from the store(global state)
    const JobsListArray = useSelector((state) => state.jobs.jobsList.data);
    // iterating throught the array of all jobs to find he one that will match our id and assigning its value to the new variable.
    const CurrentJob = JobsListArray.find((job) => job.id === id);

    console.log({ CurrentJob });

    return (
        <PageContent>
            <SectionCompany>
                <div className="company-logo">
                    {CurrentJob.company_logo ? <img src={CurrentJob.company_logo} alt="Company Logo" /> : 'No Logo'}
                </div>
                <main>
                    <div className="name-and-site">
                        <h1>{CurrentJob.company}</h1>
                        <p>{CurrentJob.company_url}</p>
                    </div>
                    <CustomButton Secondary isLink goTo={CurrentJob.company_url}>
                        Company Site
                    </CustomButton>
                </main>
            </SectionCompany>
            <SectionDescription>
                <ReactMarkdown source={CurrentJob.description} />
            </SectionDescription>
        </PageContent>
    );
};

export default JobsDetails;

const PageContent = styled.main`
    background-color: var(--bg-color-body);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SectionCompany = styled.section`
    width: 73rem;
    height: 14rem;
    background-color: var(--bg-color-card);
    border-radius: 10px;
    border-top-left-radius: 0;
    margin-bottom: 3.2rem;
    margin-top: -4rem;
    display: flex;
    overflow: hidden;

    .company-logo {
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            max-height: 14rem;
            max-width: 14rem;
        }
    }

    main {
        display: flex;
        width: calc(100% - 14rem);
        height: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 0 3rem;

        .name-and-site {
            display: flex;
            flex-direction: column;
            h1 {
                font-size: 2.4rem;
                color: var(--color-text-titles);
                margin-bottom: 1.8rem;
            }
            p {
                color: var(--color-text-small);
                font-size: 1.6rem;
            }
        }
    }
`;

const SectionDescription = styled.section`
    width: 73rem;
    height: fit-content;
    background-color: var(--bg-color-card);
    border-radius: 10px;
    padding: 4.5rem 5rem 6rem 5rem;
    color: var(--color-text-p-tags);

    strong {
        color: var(--color-text-titles);
        margin: 3rem 0;
    }

    p strong {
        margin-bottom: 2rem;
        font-size: 1.6rem;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 3rem 0;
    }

    li {
        padding-left: 1em;
        text-indent: -0.7em;
    }

    li::before {
        content: '• ';
        color: var(--color-primary); /* or whatever color you prefer */
    }
    p {
        margin-bottom: 3rem;
    }

    a {
        font-size: 1.6rem;
        color: var(--color-primary);
        font-weight: 700;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: 2rem;
        font-weight: 700;
    }

    em strong {
        font-size: 1.6rem;
    }
`;
