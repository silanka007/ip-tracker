import React from 'react';
import PropTypes from 'prop-types';

const AddressInfo = ({ipData}) => {
    const {ip, location, isp} = ipData;
    return (
        <section className="address-info">
            <div className='info-data'>
                <p className="info-name">IP ADDRESS</p>
                <p className="info-value">{ ip ? ip : "loading..." }</p>
            </div>
            <div className='info-data'>
                <p className="info-name">LOCATION</p>
                <p className="info-value">{ location ? `${location.city},${location.country} ${location.postalCode}` : "loading..." }</p>
            </div>
            <div className='info-data'>
                <p className="info-name">TIMEZONE</p>
                <p className="info-value">UTC  {location ? location.timezone : "loading..."}</p>
            </div>
            <div className='info-data'>
                <p className="info-name">ISP</p>
                <p className="info-value">{isp ? isp : "loading..."}</p>
            </div>
        </section>
    )
}

AddressInfo.propTypes = {
    ipData: PropTypes.object
}

export default AddressInfo;