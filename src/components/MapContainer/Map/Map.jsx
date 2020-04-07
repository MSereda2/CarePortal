import React from 'react';
import { GoogleMap, Marker} from '@react-google-maps/api';


let Map = (props) => {

    let taskCoord = () => (
        props.task.map(task => (
            <Marker key={task.id} onClick={() => {props.showModal(task.id)}} position={{lat: task.coordinates.lat, lng: task.coordinates.lng}} />
        ))
    )

    return(
            <GoogleMap
                id='example-map'
                mapContainerStyle={{
                height: "89vh",
                width: "100%"
                }}
                zoom={16}
                center={{
                    lat:props.userLocation.lat ,
                    lng:props.userLocation.lng 
                }}>
                    <Marker
                     icon={require('../../../assets/user_location.png')}
                     position={{lat: props.userLocation.lat, lng: props.userLocation.lng}} >
                     </Marker>
                     {/* <InfoWindow position={{lat: parseInt(props.userLocation.lat) + 0.0005, lng: parseInt(props.userLocation.lng) }}>
                            <h2>{props.streetName}</h2>
                     </InfoWindow> */}
                     
                    {taskCoord()}   

            </GoogleMap>
    )
    
}

export default Map