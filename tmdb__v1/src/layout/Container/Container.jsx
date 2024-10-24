import React from 'react';
import PropTypes from "prop-types";
import './Container.scss'
const Container = ({children}) => {
    return (
        <div className="g-container">
            {children}
        </div>
    );
};
Container.propTypes = {
    children: PropTypes.any,
}
export default Container;
