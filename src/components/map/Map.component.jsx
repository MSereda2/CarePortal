import React, { useState } from "react";
import { connect } from "react-redux";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";


// REDUX ACTIONS
import { getCoordinates } from "../../redux/map/map.actions";

const MyMap = props => {

  return(
    <GoogleMap
       defaultZoom={props.defaultZoom} 
        defaultCenter={{lat: props.defaultCenter.lat, lng: props.defaultCenter.lng}} >

    </GoogleMap>
  )
 
};

const WrappedMap = withScriptjs(withGoogleMap(MyMap))

const mapStateToProps = state => ({
  defaultCenter: state.map.defaultCenter,
  defaultZoom: state.map.defaultZoom,
  latitude: state.map.latitude,
  longitude: state.map.longitude

});
const mapDispatchToProps = dispatch => ({
  getLocation: () => dispatch(getCoordinates())
});

export default connect(mapStateToProps, mapDispatchToProps)(WrappedMap);