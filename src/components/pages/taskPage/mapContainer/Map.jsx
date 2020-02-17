
import React from 'react';
import { ReactiveGoogleMap } from '@appbaseio/reactivemaps';


let Map = () => (
  <ReactiveGoogleMap
  dataField="location"
  componentId="maps"
  defaultZoom={10}
  defaultCenter={{ lat: 14.55436, lng: -85.76 }}
  historicalData={true}
  setMarkerCluster={true}
  showMapStyles={true}
  showSearchAsMove={true}
  defaultMapStyle="Light Monochrome"
  autoCenter={true}
  size={100}
  react={{
    and: [
      "currencyReactor",
      "ratingsReactor",
      "cuisineReactor",
      "deliveringNowReactor",
      "bookingReactor",
      "deliveryReactor",
      "tableBookinReactor",
      "nameReactor",
      "RangeSliderSensor"
    ]
  }}
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