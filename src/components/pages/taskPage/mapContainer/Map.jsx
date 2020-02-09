import React from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Autocomplete from 'react-google-autocomplete';
import Geocode from "react-geocode";

class Map extends React.Component{

    constructor( props ){
    super( props );
    this.state = {
        latitude: null,
        longitude: null,
        userAdress: null
    }
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this)
    }

    map = () => (
        <GoogleMap defaultZoom={10} defaultCenter={{lat: 12, lng: 13}}>
          <button onClick={this.getLocation}>click</button> 
          {console.log(this.latitude)}
        </GoogleMap>)

        getLocation() {
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

       
   
      
    render() {
        const WrappedMap = withScriptjs(withGoogleMap(this.map));

        return(
            <WrappedMap  
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `89vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}/>
        )
    }

}

export default Map;