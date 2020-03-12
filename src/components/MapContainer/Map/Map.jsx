import React from 'react';
import { GoogleMap, LoadScript} from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { InfoWindow } from '@react-google-maps/api';
import user_location from '../../../assets/user_location.png';




let Map = (props) => {
    return(
        <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyC-IiT7wOM_QB-4nOft1xvrtM6K39NLrWY"
        language="ru">
            <GoogleMap
                id='example-map'
                mapContainerStyle={{
                height: "89vh",
                width: "100%"
                }}
                zoom={16}
                center={{
                    lat: props.userLocation.lat,
                    lng: props.userLocation.lng
                }}>
                    <Marker
                     icon={require('../../../assets/user_location.png')}
                     position={{lat: props.userLocation.lat, lng: props.userLocation.lng}}
                     onLoad={() => (
                         <InfoWindow position={{lat: props.userLocation.lat, lng: props.userLocation.lng}}>
                             <div style={{height: '100px', width: '100px'}}>your location</div>
                         </InfoWindow>
                     )}/>

            </GoogleMap>
        </LoadScript>
    )
    
}

export default Map