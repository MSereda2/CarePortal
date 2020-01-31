import { all, call, put, takeLatest } from "redux-saga/effects";

import { gotCoordinates } from "./map.actions";
import MapTypes from "./map.types";

const getCoordinates = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      location => resolve(location),
      error => reject(error)
    );
  });

export function* getUserLocation() {
  if (navigator.geolocation) {
    const location = yield call(getCoordinates);
    yield put(
      gotCoordinates({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      })
    );
  } else {
    alert(`There was a problem getting location`);
  }
}

export function* onGetUserLocation() {
  yield takeLatest(MapTypes.GET_COORDINATES, getUserLocation);
}
export function* mapSagas() {
  yield all([call(onGetUserLocation)]);
}
