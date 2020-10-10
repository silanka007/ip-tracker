import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ handleChange, submitHandler }) => {
    return (
        <header className="header">
            <h1 className="header-title">IP Address Tracker</h1>
            <form method="POST" className="form-element" onSubmit={submitHandler}>
                <input type="text" name="ipAddress" className="input-element" onChange={handleChange} required />
                <input type="submit" value=">" id="submit" className="submit-button" onClick={submitHandler} />
            </form>
        </header>
    )
}

Header.propTypes = {
    handleChange: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired
};

export default Header;
