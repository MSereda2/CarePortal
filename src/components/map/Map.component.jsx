import React, { useState } from "react";
import { connect } from "react-redux";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";


// REDUX ACTIONS
import { getCoordinates } from "../../redux/map/map.actions";


const WrappedMap = props => {
  const myMap = () => (
      <GoogleMap
      defaultZoom={props.defaultZoom} 
      defaultCenter={{lat: props.defaultCenter.lat, lng: props.defaultCenter.lng}} >
            <Marker key={25} position={{lat: props.latitude, lng: props.longitude}} />
            <button onClick={props.getLocation}>click</button>
    </GoogleMap>
  )
  const WrappedMap = withScriptjs(withGoogleMap(myMap))


  return(
    <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
      loadingElement={<div style={{height: '100%'}}></div>}
      containerElement={<div style={{height: '100%'}}></div>}
      mapElement={<div style={{height: '100%'}}></div>}>
       
    </WrappedMap>
  )
}

const mapStateToProps = state => ({
  key: state.map.bootstrapURLKeys,
  defaultCenter: state.map.defaultCenter,
  defaultZoom: state.map.defaultZoom,
  latitude: state.map.latitude,
  longitude: state.map.longitude

});
const mapDispatchToProps = dispatch => ({
  getLocation: () => dispatch(getCoordinates())
});

export default connect(mapStateToProps, mapDispatchToProps)(WrappedMap);