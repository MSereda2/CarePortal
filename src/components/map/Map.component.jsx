import React, { useState } from "react";
import { connect } from "react-redux";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";


// REDUX ACTIONS
import { getCoordinates } from "../../redux/map/map.actions";
import { useEffect } from "react";


const WrappedMap = props => {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [adress, setAdress] = useState(null);

  const myMap = () => {
    let getLocation = () => {
      let getCordinates = (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    }
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCordinates)
      } else {
        alert('doesnt worl')
      }
     
    }

    return(
      <GoogleMap
        defaultZoom={props.defaultZoom} 
        defaultCenter={{lat: 45.039268, lng: 38.987221}} >
        {latitude === null && longitude === null ? getLocation()  : null}
        <Marker label={adress} key={25} position={{lat: latitude, lng: longitude}} /> 

      </GoogleMap>
    )
  }

  
  const WrappedMap = withScriptjs(withGoogleMap(myMap))

  return(
    <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
      loadingElement={<div style={{height: '100%'}}></div>}
      containerElement={<div style={{height: '100%'}}></div>}
      mapElement={<div style={{height: '100%'}}></div>} />
  )
}




const mapStateToProps = state => ({
  defaultZoom: state.map.defaultZoom,
});

export default connect(mapStateToProps,null)(WrappedMap);