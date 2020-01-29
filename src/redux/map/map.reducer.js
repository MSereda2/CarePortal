import MapTypes from "./map.types";
const INITIAL_STATE = {
  bootstrapURLKeys: { key: process.env.REACT_APP_GOOGLE_KEY },
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
      } else {
        alert(`doesn't work`);
      }
      return state;

    default:
      return state;
  }
};
export default mapReducer;
