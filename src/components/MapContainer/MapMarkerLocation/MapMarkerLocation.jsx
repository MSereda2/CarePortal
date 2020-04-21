import React from 'react';
import { Marker} from '@react-google-maps/api';


const MapMarkerLocation = (props) => (
    <Marker
    icon={{url: require('../../../assets/img/map.svg'), scaledSize: {width: 50, height: 50}}}
    position={{lat: props.userLocation.lat ? props.userLocation.lat : 45.039268,
     lng: props.userLocation.lng ? props.userLocation.lng : 38.987221}} />
)

export default MapMarkerLocation;