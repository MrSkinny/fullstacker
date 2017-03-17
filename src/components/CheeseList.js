import React, { PropTypes } from 'react';

const propTypes = {
    cheeses: PropTypes.arrayOf(PropTypes.string).isRequired
};

const CheeseList = ({ cheeses }) => {
    return (
        <ul>
            {cheeses.map(c => <li key={c}>{c}</li>)}
        </ul>
    );
};

CheeseList.propTypes = propTypes;

export default CheeseList;
