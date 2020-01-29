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