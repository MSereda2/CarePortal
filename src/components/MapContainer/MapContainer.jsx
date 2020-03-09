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
              <div className={style.map}>
                <GoogleMap
                id='example-map'
              >
                
              </GoogleMap>
              </div>
           
          </LoadScript>
             
        );
    }
}

export default MapContainer;