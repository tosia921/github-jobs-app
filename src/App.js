import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Pages
import HomePage from './pages/HomePage';
import JobsDetails from './pages/JobsDetails';
// Components
import Header from './components/Header';
// Redux
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/jobs/:id" exact>
                        <JobsDetails />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
