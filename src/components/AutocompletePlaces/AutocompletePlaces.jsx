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
        <input {...input} {...getInputProps({placeholder: 'Введите адрес',})} {...props} />

        <div className={style.container}>
            {loading ? <div>...loading</div> : null}

            {suggestions.map((suggestion,index) => {
             

              return  <div className={style.item} key={index} {...getSuggestionItemProps(suggestions,
                 {className: style.item} )}>{suggestion.description}</div>
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