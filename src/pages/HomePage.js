import React from 'react';
// Components
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import JobList from '../components/JobList';

const HomePage = () => (
    <div className="App">
        <Header />
        <SearchBar />
        <JobList />
    </div>
);

export default HomePage;
