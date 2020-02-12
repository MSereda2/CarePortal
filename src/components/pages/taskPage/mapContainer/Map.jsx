import React, {useState, useEffect} from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Autocomplete from 'react-google-autocomplete';
import Geocode from "react-geocode";



let Map = (props) => {

    const [selectedTask, setTask] = useState(null);
    const [coordinates, setCoord] = useState({lat: props.userLocation.latitude, lng: props.userLocation.longitude});

   

    let userLocation = () => {
        if(coordinates.lat !== 55.755825) {
            return <Marker position={{lat: coordinates.lat, lng: coordinates.lng}} />
        } else {
           console.log(coordinates.latitude)
        }
    }

    


    useEffect(() => {

        if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(getCoordinates)
        } else {
            alert('woooo')
        }
    }, [])

    
    let getCoordinates = (position) => {
        setCoord({
            lat: position.coords.latitude,
            lng: position.coords.longitude
    })}

    
    return(
        <GoogleMap defaultZoom={10} defaultCenter={{lat: coordinates.lat, lng: coordinates.lng}}>
            {userLocation()}

            {props.taskOnMap.map(task => (  
                <Marker key={task.id} position={{lat: task.coordinates.lat, lng: task.coordinates.lng}} onClick={() => setTask(task)}/>
            ))}

            {selectedTask && (
                <InfoWindow position={{lat: selectedTask.coordinates.lat, lng: selectedTask.coordinates.lng}}>
                    <div>{selectedTask.name}</div>
                </InfoWindow>
            )}
        </GoogleMap>
    )
}

const WrapperMap = withScriptjs(withGoogleMap(Map));

export default WrapperMap;


















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
    
//                      {this.props.taskOnMap.map(task => (
//                          <Marker
//                           position={{lat: task.coordinates.lat, lng: task.coordinates.lng}}
//                          />
//                      ))}
    
                    
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