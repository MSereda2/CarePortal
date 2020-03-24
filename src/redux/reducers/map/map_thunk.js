// API functions
import {reverseGeocode} from '../../../api/api';

// Actions
import {getUser,getLocationName} from '../map/map_actions';


export const SetUserLocationCreator = (userlocation) => {

    return async (dispatch) => {

        let getCoordinates = async (position) => {
            const {latitude, longitude} = position.coords;
            dispatch(getUser(latitude, longitude));

            const response = await reverseGeocode(latitude, longitude);
            dispatch(getLocationName(response.data.results[0].address_components[1].long_name + ' '+ response.data.results[0].address_components[0].long_name))
        }

        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates)
        } else {
            alert(`Geolocation isn't supported in your browser`)
        }
       
    }
}