import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

const Cheese = ({ name, id }) => {
    const cheeseLink = name.toLowerCase().replace(' ', '-');
    return (
        <li><Link to={`/cheeses/${cheeseLink}--${id}`}>{name}</Link></li>
    );
};

Cheese.propTypes = propTypes;

export default Cheese;
