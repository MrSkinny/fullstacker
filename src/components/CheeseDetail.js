import React, { PropTypes } from 'react';

const propTypes = {};

/**
 * Takes url param cheeseName and returns titleized cheese name
 * e.g. bath-blue--c3277ds8787d  --->  Bath Blue
 * @param {String} cheeseName
 * @returns {String}
 */
const makeLabel = cheeseName => {
    const justName = cheeseName.slice(0, cheeseName.indexOf('--'));
    return justName.split('-').map(c => c[0].toUpperCase() + c.slice(1)).join(' ');
};

const CheeseDetail = ({ params }) => {
    return (
        <div>CheeseDetail with {makeLabel(params.cheeseName)}</div>
    );
};

CheeseDetail.propTypes = propTypes;

export default CheeseDetail;
