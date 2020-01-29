<<<<<<< HEAD
import React from 'react';
import GoogleMapReact from 'google-map-react';
import actions from '../../redux/actions/actionsMap';



const MyMap = (props) => {
    const OnGetLocation = () => {
        props.dispatch(actions.getCoordinateAction());
    }
   
    let MyMapWrapper = () => (
            <GoogleMapReact
            bootstrapURLKeys={props.defult.bootstrapURLKeys}
            defaultCenter={props.defult.defaultCenter}
            defaultZoom={props.defult.defaultZoom}>
                {<div>
                    <button onClick={OnGetLocation}>click me</button>
                    <p>{console.log(props.defult.latitude)}</p>
                    <p>{props.defult.longitude}</p>
                </div>}
            </GoogleMapReact>
    )
     return <MyMapWrapper />
  
}



export default MyMap;



// const getLocation = () => {
//     if(navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(getCoordinates)
//     } else {
//         alert(`doesn't work`)
//     }
// }

// const getCoordinates = (position) => {
//     console.log(position);
// }
=======
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
>>>>>>> 972eb718bab7fb3a54735b143349272c4161643b
