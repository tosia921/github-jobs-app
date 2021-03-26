import React from 'react';
import useWindowSize from './custom-hooks/useWindowSize';

function App() {
    const [height, width] = useWindowSize();

    return (
        <div className="App">
            <h1>tomek</h1>
            height: {height}, width: {width}
        </div>
    );
}

export default App;
