import {  geocodeByAddress,  getLatLng, } from 'react-places-autocomplete';
import uniqId from 'uniqid';
// Firebase
import {createTaskDocument,firestore,
  convertCollectionSnapShottoMap,} from '../../../api/firebase/firebase.utils';

import {getTask} from './task_actions';

export const CreateTaskThunkCreator = (FormData, userData) => {

  return async (dispatch ) => {
    let results = await geocodeByAddress(FormData.coordinates);
    let coordinates = await getLatLng(results[0]);
    createTaskDocument(FormData, coordinates, userData, uniqId());
    return createTaskDocument;
  }
}

export const GetTaskThunkCreator = () => {

  return async (dispatch) => {
    const collectionRef = firestore.collection("tasks");
    collectionRef.onSnapshot(async (snapShot) => {
      const dataTask = await convertCollectionSnapShottoMap(snapShot);
      dispatch(getTask(dataTask));
    });
  }
}