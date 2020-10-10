import React from 'react';
import PropTypes from 'prop-types';
import IconArrow from '../images/icon-arrow.svg';

const Header = ({ handleChange, submitHandler }) => {
    return (
        <header className="header">
            <h1 className="header-title">IP Address Tracker</h1>
            <form method="POST" className="form-element" onSubmit={submitHandler}>
                <input type="text" name="ipAddress" className="input-element" onChange={handleChange} placeholder="Search for any IP Address or domain" required />
                <button type="submit" id="submit" className="submit-button" onClick={submitHandler}>
                    <img src={IconArrow} alt=">" />
                </button>
            </form>
        </header>
    )
}

Header.propTypes = {
    handleChange: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired
};

export default Header;
