import React from 'react';
import { GoogleMap, LoadScript} from '@react-google-maps/api';




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
                
            </GoogleMap>
        </LoadScript>
    )
    
}

export default Map