import React from 'react';

const AddressInfo = () => {
    return (
        <section className="address-info">
            <div className='info-data'>
                <h2 className="info-name">IP ADDRESS</h2>
                <p className="info-value">192.232.353.433</p>
            </div>
            <div className='info-data'>
                <h2 className="info-name">LOCATION</h2>
                <p className="info-value">Brooklyn, NY 10001</p>
            </div>
            <div className='info-data'>
                <h2 className="info-name">TIMEZONE</h2>
                <p className="info-value">UTC  -05:00</p>
            </div>
            <div className='info-data'>
                <h2 className="info-name">ISP</h2>
                <p className="info-value">SpaceX Starlink</p>
            </div>
        </section>
    )
}
export default AddressInfo;