import store from '../../redux/reduxStore'
import MapTypes from "./map.types";
const INITIAL_STATE = {
  bootstrapURLKeys: 'AIzaSyC-IiT7wOM_QB-4nOft1xvrtM6K39NLrWY',
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
        store.subscribe(() => {
            
        })
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
