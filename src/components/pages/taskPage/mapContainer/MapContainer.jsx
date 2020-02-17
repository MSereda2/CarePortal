import React from 'react';
import {connect} from 'react-redux';
import Map from '../mapContainer/Map';



let mapStateToProps = (state) => ({
    userLocation: state.taskPage.map.userLocation,
    taskOnMap: state.taskPage.taskContainer.taskOnMap,
})

let mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(Map);