import store from "../../redux/reduxStore";
import MapTypes from "./map.types";
const INITIAL_STATE = {
  bootstrapURLKeys: "AIzaSyC-IiT7wOM_QB-4nOft1xvrtM6K39NLrWY",
  defaultCenter: { lat: 45.039268, lng: 38.987221 },
  defaultZoom: 13,
  latitude: null,
  longitude: null,
  userAdress: null
};

const mapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MapTypes.GOT_COORDINATES:
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude
      };

    default:
      return state;
  }
};
export default mapReducer;
