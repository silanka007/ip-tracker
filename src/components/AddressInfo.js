import React from 'react';
import PropTypes from 'prop-types';

const AddressInfo = ({ipData}) => {
    const {ip, location, isp} = ipData;
    return (
        <section className="address-info">
            <div className='info-data'>
                <h2 className="info-name">IP ADDRESS</h2>
                <p className="info-value">{ ip ? ip : "loading..." }</p>
            </div>
            <div className='info-data'>
                <h2 className="info-name">LOCATION</h2>
                <p className="info-value">{ location ? `${location.city},${location.country} ${location.postalCode}` : "loading..." }</p>
            </div>
            <div className='info-data'>
                <h2 className="info-name">TIMEZONE</h2>
                <p className="info-value">UTC  {location ? location.timezone : "loading..."}</p>
            </div>
            <div className='info-data'>
                <h2 className="info-name">ISP</h2>
                <p className="info-value">{isp ? isp : "loading..."}</p>
            </div>
        </section>
    )
}

AddressInfo.propTypes = {
    ipData: PropTypes.object
}

export default AddressInfo;