import React from 'react';

import GoogleMapReact from 'google-map-react';

const Map = (props) => {
    let Map = () => (
        <GoogleMapReact
            bootstrapURLKeys={props.defult.bootstrapURLKeys}
            defaultCenter={props.defult.defaultCenter}
            defaultZoom={props.defult.defaultZoom}>
            {/* Markers */}
        </GoogleMapReact>
    )

    return(
      <Map />
    )
}

export default Map;