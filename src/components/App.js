import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import CheeseList from './CheeseList';
import { fetchCheeses } from '../actions';

class App extends Component {
    state = {
        filteredCheeses: null,
        inputField: ''
    };

    componentDidMount() {
        this.props.a_fetchCheeses();
    }

    handleChange = e => {
        if (e.target.value === '') return this.setState({ filteredCheeses: null, inputField: e.target.value });

        const filteredCheeses = this.props.cheeses.filter(c => c.match(new RegExp(e.target.value, 'i')))
        this.setState({
            inputField: e.target.value,
            filteredCheeses
        });
    };

    render() {
        return (
            <div className="App">
                <label htmlFor="searchTerm">Filter:</label>
                <input id="searchTerm" onChange={this.handleChange} type="text" value={this.state.inputField} />
                <CheeseList cheeses={this.state.filteredCheeses || this.props.cheeses} />
            </div>
        );
    }
}

export default connect(
    ({ cheeses }) => ({ cheeses }),
    { a_fetchCheeses: fetchCheeses }
)(App);
