import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './auth/Login';
import AddEvent from './events/AddEvent';

const App = () => (
    <Router>
        <div className="container">
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/add-event" component={AddEvent} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
