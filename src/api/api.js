import * as axios from 'axios';

// Sensetive data
const MAP_API_KEY ='AIzaSyC-IiT7wOM_QB-4nOft1xvrtM6K39NLrWY';


export const reverseGeocode = (lat, lng) => {
   return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${MAP_API_KEY}`)
}
