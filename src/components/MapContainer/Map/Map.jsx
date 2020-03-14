import React from 'react';
import { GoogleMap, LoadScript} from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { InfoWindow } from '@react-google-maps/api';




let Map = (props) => {

    let taskCoord = () => (
        props.task.map(task => (
            <Marker key={task.id} onClick={() => {props.showModal(task.id)}} position={{lat: task.coordinates.lat, lng: task.coordinates.lng}} />
        ))
    )

    console.log(taskCoord())

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
                     position={{lat: props.userLocation.lat, lng: props.userLocation.lng}}/>
                     
                    {taskCoord()}   

            </GoogleMap>
        </LoadScript>
    )
    
}

export default Map