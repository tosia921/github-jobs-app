import React from 'react';
// compnents
import { Provider } from 'react-redux';
import HomePage from './pages/HomePage';

// Redux
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <HomePage />
        </Provider>
    );
}

export default App;
