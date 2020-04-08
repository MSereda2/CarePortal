import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import style from './autoCompletePlaces.module.scss';



const AutoCompletePlaces = ({input, meta, ...props}) => {
    
    const handleSelect =  (address) => {
        console.log(input.value)
    }

    return(
        <div>
            <PlacesAutocomplete onSelect={handleSelect} onChange={input.onChange} value={input.value}  >
                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                    <>
                    <input {...input} {...getInputProps({placeholder: 'Введите адрес',})} {...props} />
            
                    <div className={style.container}>
                        {loading ? <div>...loading</div> : null}
            
                        {suggestions.map((suggestion,index) => {
                         
            
                          return  <div key={index} {...getSuggestionItemProps(suggestions,
                             {className: suggestion.active ? style.activeitem : style.item} )}>{suggestion.description}</div>
                        })}
                    </div>
                    </>
                )}
            </PlacesAutocomplete>
        </div>
    )
}

export default AutoCompletePlaces;