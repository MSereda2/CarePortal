import React from 'react';
import style from './mapContainer.module.css';

import { GoogleMap, LoadScript } from '@react-google-maps/api'

class MapContainer extends React.Component {

    render() {
        return (
            <LoadScript
            id="script-loader"
            googleMapsApiKey="AIzaSyC-IiT7wOM_QB-4nOft1xvrtM6K39NLrWY"
            >
              
                <GoogleMap
                  id='example-map'
                  mapContainerStyle={{
                    height: "89vh",
                    width: "100%"
                  }}
                  zoom={7}
                  center={{
                    lat: -3.745,
                    lng: -38.523
                  }}
              >
                
              </GoogleMap>
              
           
          </LoadScript>
             
        );
    }
}

export default MapContainer;