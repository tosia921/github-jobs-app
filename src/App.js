import React from 'react';
// compnents
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobList from './components/JobList';

function App() {
    return (
        <div className="App">
            <Header />
            <SearchBar />
            <JobList />
        </div>
    );
}

export default App;
