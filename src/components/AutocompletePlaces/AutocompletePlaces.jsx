import React from 'react';
import PlacesAutocomplete, {  geocodeByAddress,  getLatLng, } from 'react-places-autocomplete';
import style from './autoCompletePlaces.module.scss';



const AutoCompletePlaces = ({input, meta, ...props}) => {
    
    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const coordinates = await getLatLng(results[0]);
    }

    const renderFunc = ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <>
        <input {...input} {...getInputProps({placeholder: 'type adrfess'})} {...props} />

        <div>
            {loading ? <div>...loading</div> : null}

            {suggestions.map((suggestion,index) => {
             
             const style = {
                  backgroundColor: suggestion.active ? '#d7385e' : '#fff'
              }

              return  <div key={index} {...getSuggestionItemProps(suggestions, {style} )}>{suggestion.description}</div>
            })}
        </div>
        </>
    )


    return(
        <div>
            <PlacesAutocomplete {...input} onSelect={handleSelect}>
                { renderFunc}
            </PlacesAutocomplete>
        </div>
    )
}

export default AutoCompletePlaces;