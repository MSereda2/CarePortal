import React from 'react';
import { GoogleMap, Marker, Autocomplete} from '@react-google-maps/api';
import style from './map.module.scss'

// Components
import MapInfoWindow from '../MapInfoWindow/MapInfoWindow';
import MapMarkerLocation from '../MapMarkerLocation/MapMarkerLocation';
import MapSearch from '../MapSearch/MapSearch';



let Map = (props) => {

    let taskCoord = () => (
        props.task.map(task => (
            <Marker
              className={style.label}
              key={task.id}
              onClick={() => {props.showModal(task.id)}}
              position={{lat: task.coordinates.lat, lng: task.coordinates.lng}}
              icon={{
                  url: require('../../../assets/map_icon_text_bordered.svg'),
                  labelOrigin: {x: 30, y: 20},

                }}
              label={{
                  text: task.cost, 
                  fontSize: '14px', color: 'black',
                  fontWeight: '700'
                }}
              />
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