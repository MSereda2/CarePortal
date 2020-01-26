
// export default WrapperMap;
import React, { useState, useRef} from 'react';
import useSwr from 'swr';
import GoogleMapReact from 'google-map-react';
import useSupercluster from 'use-supercluster'
import style from './map.module.css';

const fetcher = (...args) => fetch(...args).then(response => response.json());
const Marker = ({children}) => children;


const Map = () => {

  // 1) map setup
  const mapRef = useRef();
  const [zoom, setZoom] = useState(10);
  const [bounds, setBounds] = useState(null);

  // 2) load and format data
  const url = "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
  const { data, error } = useSwr(url, fetcher);
  const crimes = data && !error ? data : [];
  const points = crimes.map(crime => ({
    type: "Feature",
    properties: { cluster: false, crimeId: crime.id, category: crime.category },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(crime.location.longitude),
        parseFloat(crime.location.latitude)
      ]
    }
  }));

  // 3) get clusters
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 }
  });

  // 4) render map
  return (
      <div className={style.map}>
        <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultCenter={{lat: 45.039268, lng: 38.987221}}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({map}) => {
          mapRef.current = map;
        }}
        onChange={({zoom, bounds}) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
          ]);
        }}>
          {clusters.map(cluster => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const {cluster: isCluster, point_count: point_count} =  cluster.properties;

            if(isCluster) {
              return(
                <Marker
                key={cluster.id}
                lat={latitude} lng={longitude}>
                  <div 
                  className={style.cluster_marker}
                  style={{
                    width: `${10 + (point_count / points.length) *20}px`,
                    height: `${10 + (point_count / points.length) *20}px`
                    }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({lat: latitude, lng: longitude});
                  }}> 
                  {point_count}
                  </div>
                </Marker> 
              ) 
            }
            return (
              <Marker key={cluster.properties.id} lat={latitude} lng={longitude}>
                <button className={style.crime_marker}>
                  <img src="https://cdn1.iconfinder.com/data/icons/japan-travel-solid-konnichiwa/512/Ninja-512.png" alt="marker"/>
                </button>
              </Marker>
            )
          })}
        </GoogleMapReact>
    </div>
  )
  
 
}

export default Map;