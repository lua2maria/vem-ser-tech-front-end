import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import GerenciamentoGames from './GerenciamentoGames';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/gerenciamento" component={GerenciamentoGames} />
                </Switch>
            </div>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

