
import React from 'react';
import { ReactiveGoogleMap } from '@appbaseio/reactivemaps';


let Map = () => (

<ReactiveGoogleMap
	componentId="map"
	dataField="location"
	react={{
		"and": "places"
	}}
	renderData={(result) => ({
		label: result.mag
	})}
/>




)
export default Map;






















    // userLocation = () => {
    //     if(this.state.latitude !== 55.755825) {
    //         return <Marker icon position={{lat: this.state.latitude, lng: this.state.longitude}} />
    //     } else {
    //         console.log(this.state.latitude)
    //     }
    // }

    // componentDidMount = () => {
    //     if(navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(this.getCoordinates)
    //     } else {
    //         alert('woooo')
    //     }
    // }

    // getCoordinates = (position) => {
    //     this.setState({
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude
    //     })
    // }