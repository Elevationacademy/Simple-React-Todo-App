import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

import App from './views/App';
import Details from './views/Details';
import List from './views/List';

export default class Routes extends Component {
    render() {
        return (
            <Router history={ browserHistory }>
                <Route path="/" component={ App }>
                    <IndexRoute component={ List }/>
                    <Route path='/todo/:id' component={ Details }/>
                    <Redirect path='*' to="/"/>
                </Route>
            </Router>
        );
    }
}


