import React, {useState, useEffect} from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker, InfoBox } from "react-google-maps";
import Autocomplete from 'react-google-autocomplete';
import Geocode from "react-geocode";
import PopUp from "reactjs-popup";


class Map extends React.Component {

        constructor( props ){
            super( props );
            this.state = {
                latitude: this.props.userLocation.latitude,
                longitude: this.props.userLocation.longitude,
                selectedTask: null
            };
        }
      
        userLocation = () => {
            if(this.state.latitude !== 55.755825) {
                return <Marker icon position={{lat: this.state.latitude, lng: this.state.longitude}} />
            } else {
                console.log(this.state.latitude)
            }
        }
    
        componentDidMount = () => {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.getCoordinates)
            } else {
                alert('woooo')
            }
        }
    
        getCoordinates = (position) => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        }
    
        render(){
    
            const AsyncMap = withScriptjs(
               withGoogleMap(
                props => ( 
                 <GoogleMap
                 defaultZoom={16}
                 defaultCenter={{ lat: this.state.latitude, lng: this.state.longitude }}>
                     {this.userLocation()}
    
                     {this.props.taskOnMap.map(task => (<Marker id={task.id} position={{lat: task.coordinates.lat, lng: task.coordinates.lng}}></Marker>))}        
    
                    
                 </GoogleMap>)),
                );
    
            let map = <AsyncMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0&libraries=places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: '89vh' }} />}
                mapElement={<div style={{ height: `100%` }} />
            }/>
         
    
    
    
              return( map )
        }
}        
            
    export default Map