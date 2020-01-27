import React from 'react';

import GoogleMapReact from 'google-map-react';

const Map = () => {

    return(
        <GoogleMapReact
            bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_KEY}}
            defaultCenter={{lat: 45.039268, lng: 38.987221}}
            defaultZoom={10}>
            {/* Markers */}
        </GoogleMapReact>
    )
}

export default Map;