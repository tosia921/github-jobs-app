import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import CustomButton from '../components/CustomButton';
import BackgroundDetailFooter from '../assets/desktop/bg-pattern-detail-footer.svg';
import UseCalcDateDIff from '../components/useCalcDateDiff';

const JobsDetails = () => {
    // accesing id of the job from the url using useParams react router hook.
    const { id } = useParams();
    // using useSelector to acces data from the store(global state)
    const JobsListArray = useSelector((state) => state.jobs.jobsList.data);
    // iterating throught the array of all jobs to find he one that will match our id and assigning its value to the new variable.
    const CurrentJob = JobsListArray.find((job) => job.id === id);

    // in the code below we pull out array of matching url string's out of how_to_apply markdown field. the one we want is under index[0]
    const HowToApplyString = CurrentJob.how_to_apply;
    // matching ulr's inside string
    const HowToApplyUrlsArray = HowToApplyString.match(
        /(http|https|ftp|ftps):\/\/[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,3}(\/\S*)?/
    );
    let HowToApplyUrl = '';
    // in case there was no url's in a string, HowToApplyString.match will return null so we check...
    if (HowToApplyUrlsArray) {
        HowToApplyUrl = HowToApplyUrlsArray[0];
    } else {
        HowToApplyUrl = CurrentJob.company_url;
    }

    // Custom hook returning number of days that passed since job was posted.
    const DaysPassed = UseCalcDateDIff(CurrentJob.created_at);

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
                <div className="job-overview">
                    <div className="content">
                        <div className="type-time">
                            <p>{DaysPassed}</p>
                            <span>&#8226;</span>
                            <p>{CurrentJob.type}</p>
                        </div>
                        <h2>{CurrentJob.title}</h2>
                        <p className="location">{CurrentJob.location}</p>
                    </div>
                    <CustomButton isLink goTo={HowToApplyUrl}>
                        Apply Now
                    </CustomButton>
                </div>
                <ReactMarkdown source={CurrentJob.description} />
            </SectionDescription>
            <HowToApply>
                <h2>How to Apply</h2>
                <div className="how-to-apply-content">
                    <ReactMarkdown source={CurrentJob.how_to_apply} />
                </div>
            </HowToApply>
            <JobDetailsFooter>
                <div className="footer-content">
                    <h2>{CurrentJob.title}</h2>
                    <CustomButton isLink goTo={HowToApplyUrl}>
                        Apply Now
                    </CustomButton>
                </div>
            </JobDetailsFooter>
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
    padding: 4.5rem 5rem 1rem 5rem;
    color: var(--color-text-p-tags);
    margin-bottom: 3.3rem;

    .job-overview {
        margin-bottom: 5.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .content {
            h2 {
                color: var(--color-text-titles);
                margin-bottom: 2rem;
            }
            .type-time {
                display: flex;
                margin-bottom: 1rem;
                p {
                    margin-bottom: 0;
                }
                span {
                    margin: 0 1rem;
                    font-size: 1.5rem;
                    color: var(--color-text-small);
                }
            }
            .location {
                color: var(--color-primary);
                font-weight: 700;
            }
        }
        button a {
            color: #ffffff;
            padding: 16px 25px;
        }
    }

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

const HowToApply = styled.section`
    width: 73rem;
    height: 260px;
    border-radius: 10px;
    margin-bottom: 7.5rem;
    padding: 4rem 8rem 4rem 5rem;
    background-repeat: no-repeat;
    background-image: url(${BackgroundDetailFooter});
    h2 {
        font-size: 2rem;
        color: #ffffff;
    }
    .how-to-apply-content {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: white;
    }
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
        color: #ffffff;
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

const JobDetailsFooter = styled.footer`
    width: 100vw;
    height: 9.6rem;
    background-color: var(--bg-color-card);
    display: flex;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .footer-content {
        width: 73rem;
        height: 100%;
        display: flex;
        align-items: center;
        button {
            margin-left: auto;
            a {
                color: #ffffff;
                padding: 16px 25px;
            }
        }
    }
    h2 {
        color: var(--color-text-titles);
    }
`;
