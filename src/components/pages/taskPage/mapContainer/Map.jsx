import React from 'react';
import {connect} from 'react-redux';

import { GoogleMap, withGoogleMap, withScriptjs, Marker } from "react-google-maps";

import {getUserLocation} from '../../../../redux/taskPage/taskPage.actions'

const MyMap = (props) => (
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat: 12, lng: 12}}>
           <button onClick={props.getLocation}>click to get location</button>
            <h1>{props.userLocation.latitude}</h1>
            <h1>{props.userLocation.longitude}</h1>
    </GoogleMap>
)

const WrapperMap = withScriptjs(withGoogleMap(MyMap));

let mapStateToProps = (state) => ({
    userLocation: state.taskPage.map.userLocation,
})

let mapDispatchToProps = (dispatch) => ({
    getLocation: () => dispatch(getUserLocation()),
})

export default connect(mapStateToProps, mapDispatchToProps)(WrapperMap) ;
