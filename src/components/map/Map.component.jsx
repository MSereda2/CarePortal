import React from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";
import { getCoordinates } from "../../redux/map/map.actions";

const MyMap = props => {
  console.log("Nice ", props.state);
  return (
    <GoogleMapReact
      //   bootstrapURLKeys={"AIzaSyB8W9IB-mRvjpjMa5AxJ0Ea3Hy8biThLvI"}
      defaultCenter={props.defaultCenter}
      defaultZoom={props.defaultZoom}
    >
      {
        <div>
          <button onClick={() => props.getLocation()}>click me</button>
          <h1>{props.value}</h1>
        </div>
      }
    </GoogleMapReact>
  );
};

const mapStateToProps = state => ({
  state,
  defaultCenter: state.map.defaultCenter,
  defaultZoom: state.map.defaultZoom
});
const mapDispatchToProps = dispatch => ({
  getLocation: () => dispatch(getCoordinates())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyMap);
