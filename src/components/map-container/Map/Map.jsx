import React from 'react';
import { GoogleMap, Marker} from '@react-google-maps/api';
import style from './map.module.scss'

// Components
import MapInfoWindow from '../map-info-window/map-info-window'
import MapMarkerLocation from '../map-marker-location/map-marker-location';
import MapSearch from '../map-search/map-search';



let Map = (props) => {

    let taskCoord = () => ( props.task.map(task => (
            <Marker 
              className={style.label}
              key={task.id}
              onClick={() => {props.showModal(task.id)}}
              position={{lat: task.coordinates.lat, lng: task.coordinates.lng}}
              icon={{ url: require('../../../assets/img/map_icon_text_bordered.svg'), labelOrigin: {x: 30, y: 20}, }}
              label={{ text: task.cost, fontSize: '14px', color: 'black', ontWeight: '700'}} />)));
    
    const center = () => {
      if(props.searchRuquest) {
        return {lat: props.searchRuquest.lat, lng: props.searchRuquest.lng}
      } else if(props.userLocation) {
        return {lat: props.userLocation.lat, lng: props.userLocation.lng}
      } else if(!props.userLocation) {
        return {lat: 12, lng: 12}
      }
    }

    return(
            <GoogleMap
                options={{mapTypeControl: false, streetViewControl: false}}
                id='example-map'
                onDragStart={() => props.isRemoved()}
                mapContainerStyle={{
                height: "89vh",
                width: "100%"
                }}
                zoom={16}
                center={center()}>
                     {!props.isLocationRemoved && 
                     <>
                     <MapInfoWindow userLocation={props.userLocation} streetName={props.streetName} />
                     <MapMarkerLocation userLocation={props.userLocation} />
                     </>}
                    
                    <MapSearch getSerchRequest={props.getSerchRequest} />
                    {taskCoord()}   
            </GoogleMap>
    )
    
}

export default Map
