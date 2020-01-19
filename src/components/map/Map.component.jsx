import React, { useState } from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import * as parksData from './data.json';
import style from './map.module.css';
import MapStyles from './map.style';

const MapFunction = () => {
  const [selectedPark, setSelectedPark] = useState(null);

  return(
    <GoogleMap defaultZoom={10} defaultCenter={{lat: 45.421532, lng: -75.697189}} defaultOptions={{styles: MapStyles}}>

      {parksData.features.map(park => (
        <Marker
         key={park.properties.PARK_ID}
         position={{lat: park.geometry.coordinates[1], lng: park.geometry.coordinates[0]}}
         onClick={() => {setSelectedPark(park)}} />
      ))}

      {selectedPark && (
        <InfoWindow
         position={{lat: selectedPark.geometry.coordinates[1], lng: selectedPark.geometry.coordinates[0]}}
         onCloseClick={() => {
          setSelectedPark(null);
        }}>
          <div>
            <h3>{selectedPark.properties.NAME}</h3>
            <p className={style.test}>{selectedPark.properties.DESCRIPTIO}</p>
          </div>
        </InfoWindow>
      )}
       
    </GoogleMap>
  )
}

const WrapperMap = withScriptjs(withGoogleMap(MapFunction));

export default WrapperMap;