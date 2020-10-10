import L from 'leaflet';
import IconLocation from '../images/icon-location.svg';


const CustomMarker = (lat, lng) => {
    return (
        L.icon({
            iconUrl: IconLocation,
            iconSize: [20, 35],
            iconAnchor: [lat, lng],
            popupAnchor: [0, 0],
        })
    )
}

export default CustomMarker;