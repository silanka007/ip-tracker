import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import CustomMarker from './customMarker';


const MapSection = ({location: {lat, lng, city, region, country}}) => {
	useEffect(() => {
		console.log(CustomMarker());
	});
	return (
		<Map center={[lat, lng]} zoom={13} className="map-section">
			<TileLayer
				attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[lat, lng]} icon={CustomMarker(lat, lng)}>
				<Popup>
					{city}, <br />{region} {country}.
				</Popup>
			</Marker>
		</Map>
	);
};

MapSection.propTypes = {
    location: PropTypes.object.isRequired
}


export default MapSection;
