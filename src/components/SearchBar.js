import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
// Components
import CustomButton from './CustomButton';
// Icons
import searchIcon from '../assets/desktop/icon-search.svg';
import locationIcon from '../assets/desktop/icon-location.svg';
// Redux AsyncThunk and action's
import { fetchJobList, setDefaultJobs } from '../redux/jobs/jobsSlice';

const SearchBar = () => {
    // defining state for each input field
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [fulltime, setFulltime] = useState('off');
    // here we check if fulltime checkbox is checked or not, had to do it this way because github api requried to set full_time param to either 'on' or 'off'
    const isFulltimeOn = fulltime === 'on' ? 'off' : 'on';
    // changing state value of the fulltime checkbox based on variables defined above
    const handleFulltime = () => {
        setFulltime(isFulltimeOn);
    };

    const dispatch = useDispatch();

    // // fetching all jobs when app first renders/mounts.
    // useEffect(() => {
    //     const PageLoadParams = {
    //         description: 'all',
    //         location,
    //         full_time: fulltime,
    //         markdown: 'true',
    //     };
    //     dispatch(fetchJobList(PageLoadParams));
    // }, []);

    // handling Form submit(job search button)
    const handleSubmit = (e) => {
        // preventing default behaviour of the form to not refresh the page
        e.preventDefault();
        // setting params object to input values
        const params = {
            description,
            location,
            full_time: fulltime,
        };
        // dispatching fetchJobList action to get the data back
        dispatch(fetchJobList(params));
        dispatch(setDefaultJobs());
    };

    return (
        <SearchBarContainer>
            <SearchForm>
                <div className="input-group input-search">
                    <img src={searchIcon} alt="search icon" />
                    <input
                        type="text"
                        placeholder={
                            window.innerWidth > 1110 ? 'Filter by title, companies, expertise...' : 'Filter by Title'
                        }
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="input-group input-location">
                    <img src={locationIcon} alt="location icon" />
                    <input
                        type="text"
                        placeholder="Filter by location..."
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="input-group input-fulltime-search">
                    <label htmlFor="fulltime" className="label-checkbox">
                        <input type="checkbox" id="fulltime" name="fulltime" onClick={handleFulltime} />
                        {window.innerWidth > 1150 ? 'Full Time Only' : 'Full Time'}
                    </label>
                    <CustomButton type="submit" onClick={handleSubmit}>
                        Search
                    </CustomButton>
                </div>
            </SearchForm>
        </SearchBarContainer>
    );
};

export default SearchBar;

const SearchBarContainer = styled.section`
    height: 8rem;
    background-color: #ffffff;
    margin: -4rem 16rem 4rem 16rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    align-items: center;
    @media only screen and (min-width: 1440px) {
        margin: -4rem 16rem 0 16rem;
    }
    @media only screen and (max-width: 1439px) {
        margin: -4rem 4rem 0 4rem;
    }
    @media only screen and (max-width: 768px) {
        margin: -4rem 2.4rem 0 2.4rem;
    }
`;

const SearchForm = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0;
    padding-left: 3.2rem;
    .input-group {
        height: 100%;
        display: flex;
        align-items: center;
        &:not(:first-child) {
            padding-left: 2.2rem;
        }
        &:not(:last-child) {
            border-right: 1px solid #979797;
        }

        input {
            height: 97%;
            width: 100%;
            border: none;
            font-size: 1.6rem;

            &:active,
            &:focus {
                outline-style: none;
            }
        }

        #fulltime {
            height: 2.4rem;
            width: 2.4rem;
            margin-right: 1.7rem;
            @media only screen and (max-width: 1110px) {
                margin-right: 1rem;
            }
        }

        label {
            width: 100%;
        }
    }

    .input-search {
        width: 40%;
    }

    .input-location {
        width: 30%;
    }
    .input-fulltime-search {
        width: 30%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 1.5rem;

        .label-checkbox {
            display: flex;
            align-items: center;
            font-size: 1.6rem;
            font-weight: 700;
        }
    }

    img {
        height: 2.4rem;
        margin-right: 5px;
    }
`;
