const initialState = {
    bootstrapURLKeys: {key: process.env.REACT_APP_GOOGLE_KEY},
    defaultCenter: {lat: 45.039268, lng: 38.987221},
    defaultZoom: 13,
    latitude: null,
    longitude: null,
    userAdress: null
}

const Map = (state = initialState, action) => {
    switch(action.type) {
        
        case "GET_COORDINATES":
            let getCoordinates = (position) => {
                state.latitude = position.coords.latitude
                state.longitude = position.coords.longitude
                console.log(state.longitude)
            }   
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(getCoordinates)
             } else {
                 alert(`doesn't work`)
             }
            return state;

        default: return state;

    }
    return state;

}
export default Map;