import React from 'react';
import { browserHistory, Router, Route } from 'react-router';
import App from './components/App';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App} />
    </Router>
);
