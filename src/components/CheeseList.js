import React, { PropTypes } from 'react';
import Cheese from './Cheese';

const propTypes = {
    cheeses: PropTypes.arrayOf(PropTypes.object).isRequired
};

const CheeseList = ({ cheeses }) => {
    return (
        <ul>
            {cheeses.map(c => <Cheese key={c.id} id={c.id} name={c.name} />)}
        </ul>
    );
};

CheeseList.propTypes = propTypes;

export default CheeseList;
