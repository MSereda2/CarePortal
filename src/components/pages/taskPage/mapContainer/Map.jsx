import React, {useState, useEffect} from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker, InfoBox } from "react-google-maps";
import Autocomplete from 'react-google-autocomplete';
import Geocode from "react-geocode";
import PopUp from "reactjs-popup";
import { Button } from '@material-ui/core';
import TaskOnMap from './taskOnMap/TaskOnMap'



let Map = (props) => {

    const [selectedTask, setTask] = useState(null);
    const [coordinates, setCoord] = useState({lat: props.userLocation.latitude, lng: props.userLocation.longitude});
    
        let userLocation = () => {
        if(coordinates.lat !== 55.755825) {
            return <Marker position={{lat: coordinates.lat, lng: coordinates.lng}} />  
        } else {
           console.log(coordinates.latitude)
        }}

        let getCoordinates = (position) => {
            setCoord({
                lat: position.coords.latitude,
                lng: position.coords.longitude
        })}

        useEffect(() => {

            if(navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(getCoordinates)
            } else {
                alert('woooo')
            }
        }, [])


        return()
}


export default Map ;


































// let Map = (props) => {

//     const [selectedTask, setTask] = useState(null);
//     const [coordinates, setCoord] = useState({lat: props.userLocation.latitude, lng: props.userLocation.longitude});

//     let userLocation = () => {
//         if(coordinates.lat !== 55.755825) {
//             return <Marker position={{lat: coordinates.lat, lng: coordinates.lng}} />  
//         } else {
//            console.log(coordinates.latitude)
//         }
//     }

//     let getCoordinates = (position) => {
//         setCoord({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//     })}

//     useEffect(() => {

//         if(navigator.geolocation) {
//                 navigator.geolocation.getCurrentPosition(getCoordinates)
//         } else {
//             alert('woooo')
//         }
//     }, [])


//     const AsyncMap = withScriptjs(
//          withGoogleMap(() => ( 
//            <GoogleMap
//               defaultZoom={16}
//               defaultCenter={{ lat: coordinates.lat, lng: coordinates.lng }}>

//                 {userLocation()}

//                 {props.taskOnMap.map(task => (<Marker id={task.id} onClick={() => setTask(task)}  position={{lat: task.coordinates.lat, lng: task.coordinates.lng}}></Marker>))}        

//                 {selectedTask && (
//                     <InfoWindow position={{lat: selectedTask.coordinates.lat,lng: selectedTask.coordinates.lng}}>
//                         <PopUp trigger={ } modal>
//                             <span> modal</span>
//                         </PopUp>
//                     </InfoWindow>
//                 )}
//            </GoogleMap>)),
//     );
    

//     let map = <AsyncMap googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0&libraries=places&key=${process.env.REACT_APP_GOOGLE_KEY}`} loadingElement={ <div style={{ height: `100%` }} />} containerElement={ <div style={{ height: '89vh' }} />} mapElement={<div style={{ height: `100%` }} />}/>
    
//     return(map)
// }


// export default Map;


















// class Map extends React.Component{

//         constructor( props ){
//             super( props );
//             this.state = {
//                 latitude: this.props.userLocation.latitude,
//                 longitude: this.props.userLocation.longitude,
//                 selectedTask: null
//             };
//         }
      
//         userLocation = () => {
//             if(this.state.latitude !== 55.755825) {
//                 return <Marker icon position={{lat: this.state.latitude, lng: this.state.longitude}} />
//             } else {
//                 console.log(this.state.latitude)
//             }
//         }
    
//         componentDidMount = () => {
//             if(navigator.geolocation) {
//                 navigator.geolocation.getCurrentPosition(this.getCoordinates)
//             } else {
//                 alert('woooo')
//             }
//         }
    
//         getCoordinates = (position) => {
//             this.setState({
//                 latitude: position.coords.latitude,
//                 longitude: position.coords.longitude
//             })
//         }
    
//          render(){
    
//             const AsyncMap = withScriptjs(
//                withGoogleMap(
//                 props => ( 
//                  <GoogleMap
//                  defaultZoom={16}
//                  defaultCenter={{ lat: this.state.latitude, lng: this.state.longitude }}>
//                      {this.userLocation()}
    
//                      {props.taskOnMap.map(task => (<Marker id={task.id} onClick={() => setTask(task)}  position={{lat: task.coordinates.lat, lng: task.coordinates.lng}}></Marker>))}        

//                  {selectedTask && (
//                      <InfoWindow position={{lat: selectedTask.coordinates.lat,lng: selectedTask.coordinates.lng}}>
//                         <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ratione fugit harum sed facere sunt, eum dolores ea quas. Odio, laboriosam! Repellat unde accusantium eos quasi harum tempore natus doloribus?</div>
//                      </InfoWindow>
//                  )}
    
                    
//                  </GoogleMap>)),
//                 );
    
//             let map =   
//                 <AsyncMap
//                 googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0&libraries=places"
//                 loadingElement={
//                 <div style={{ height: `100%` }} />
//                 }
//                 containerElement={
//                 <div style={{ height: '89vh' }} />
//                 }
//                 mapElement={
//                 <div style={{ height: `100%` }} />
//                 }/>
         
    
    
    
//               return( map )
//              }
//             }        
            
//     export default Map