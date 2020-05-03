import React from 'react';
import {InfoWindow} from '@react-google-maps/api';
import style from './map-info-window.module.scss';


const MapInfoWindow = (props) => (
    props.userLocation.lat && props.userLocation.lat 
        ?  <InfoWindow  position={{lat: props.userLocation.lat + 0.00060, lng: props.userLocation.lng }}>
                <h2 className={style.infoWindow}>Ваш адрес {props.streetName}</h2>
    </InfoWindow> : null 
)

export default MapInfoWindow;