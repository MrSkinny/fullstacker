import React from 'react';
import { browserHistory, Router, Route } from 'react-router';
import App from './components/App';
import CheeseDetail from './components/CheeseDetail';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/cheeses/:cheeseName" component={CheeseDetail} />
        </Route>
    </Router>
);
