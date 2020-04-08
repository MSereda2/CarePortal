import React from 'react';
import {  Marker} from '@react-google-maps/api';


const MapMarkerLocation = (props) => (
    <Marker
    icon={require('../../../assets/user_location.png')}
    position={{lat: props.userLocation.lat ? props.userLocation.lat : 45.039268,
     lng: props.userLocation.lng ? props.userLocation.lng : 38.987221}} />
)

export default MapMarkerLocation;