import React, { useState } from "react";
import { connect } from "react-redux";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";


// REDUX ACTIONS
import { getCoordinates } from "../../redux/map/map.actions";
import { useEffect } from "react";


const WrappedMap = props => {

  const [latitude, setLatitude] = useState(props.latitude);
  const [longitude, setLongitude] = useState(props.longitude);

  let getLocation = () => {
    props.getLocation(location)
  }

   let getCordinates = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude)
  }

  useEffect(() =>  getLocation());


  const myMap = () => (
    <GoogleMap
      defaultZoom={props.defaultZoom} 
      defaultCenter={{lat: latitude, lng: longitude}} >
            <Marker label={'Это верное место?'} key={25} position={{lat: latitude, lng: longitude}} />
    </GoogleMap>
  )
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