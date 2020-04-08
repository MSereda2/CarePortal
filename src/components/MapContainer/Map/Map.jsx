import React from 'react';
import { GoogleMap, Marker, Autocomplete} from '@react-google-maps/api';

// Components
import MapInfoWindow from '../MapInfoWindow/MapInfoWindow';
import MapMarkerLocation from '../MapMarkerLocation/MapMarkerLocation';
import MapSearch from '../MapSearch/MapSearch';



let Map = (props) => {

    let taskCoord = () => (
        props.task.map(task => (
            <Marker key={task.id} onClick={() => {props.showModal(task.id)}} position={{lat: task.coordinates.lat, lng: task.coordinates.lng}} />
        ))
    )

    return(
            <GoogleMap
                options={{mapTypeControl: false, streetViewControl: false}}
                id='example-map'
                mapContainerStyle={{
                height: "89vh",
                width: "100%"
                }}
                zoom={16}
                center={{
                    lat:props.userLocation.lat ? props.userLocation.lat : 45.039268,
                    lng:props.userLocation.lng ? props.userLocation.lng : 38.987221
            }}>
                    <MapInfoWindow userLocation={props.userLocation} streetName={props.streetName} />
                    <MapMarkerLocation userLocation={props.userLocation} />
                    <MapSearch />
                    {taskCoord()}   
            </GoogleMap>
    )
    
}

export default Map