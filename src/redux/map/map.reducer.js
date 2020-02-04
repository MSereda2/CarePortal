// import MapTypes from "./map.types";

// const INITIAL_STATE = {
//   adress: '',
//   city: '',
//   area: '',
//   state: '',
//   mapPosition: {
//     lat: null,
//     lng: null
//   },
//   markerPosition: {
//     lat: null,
//     lng: null
//   },
// }








































import MapTypes from './map.types'
const INITIAL_STATE = {
  bootstrapURLKeys: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`,
  defaultCenter: { lat: 45.039268, lng: 38.987221 },
  defaultZoom: 13,
  latitude: null,
  longitude: null,
  userAdress: null
};

const mapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MapTypes.GET_COORDINATES:
      const getCoordinates = position => {
        state.latitude = position.coords.latitude;
        state.longitude = position.coords.longitude;
      };
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoordinates);
        console.log(state.latitude)
      } else {
        alert(`doesn't work`);
      }
      return state;
    default:
      return state;
  }
};
export default mapReducer;
