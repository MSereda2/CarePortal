import React from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";

// REDUX ACTIONS
import { getCoordinates } from "../../redux/map/map.actions";

const MyMap = props => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{key: 'AIzaSyC-IiT7wOM_QB-4nOft1xvrtM6K39NLrWY'}}
      defaultCenter={props.defaultCenter}
      defaultZoom={props.defaultZoom}
    >
      {
        <div>
                    <h1>{`${props.latitude}/${props.longitude}`}</h1>

          <button onClick={() => props.getLocation()}>click me</button>
        </div>
      }
    </GoogleMapReact>
  );
};

const mapStateToProps = state => ({
  
  defaultCenter: state.map.defaultCenter,
  defaultZoom: state.map.defaultZoom,
  latitude: state.map.latitude,
  longitude: state.map.longitude

});
const mapDispatchToProps = dispatch => ({
  getLocation: () => dispatch(getCoordinates())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyMap);
