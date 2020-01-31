import MapTypes from "./map.types";

export const getCoordinates = () => ({ type: MapTypes.GET_COORDINATES });
export const gotCoordinates = payload => ({
  type: MapTypes.GOT_COORDINATES,
  payload
});
