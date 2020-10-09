import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">IP Address Tracker</h1>
            <form className="form-element">
                <input type="text" name="ipAddress" className="input-element" required />
                <input type="submit" value=">" id="submit" className="submit-button" />
            </form>
        </header>
    )
}

export default Header;