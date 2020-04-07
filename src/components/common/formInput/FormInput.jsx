import React from 'react';
import style from './formInput.module.scss';
import AutoCompletePlaces from '../../AutocompletePlaces/AutocompletePlaces';

export const FormsControl = ({input, meta, element, ...props}) => {


    const hasError = meta ? meta.touched && meta.error : null ;


    return(
    <div className={` ${props.styleform ? style.margin_bottom_small : 'null'} ${style.form_group}
         ${hasError && style.error} `}>
            <label ><i className={props.icon}></i></label>
            
            {element === 'input' ? <input  {...input} {...props} />
            : element === 'textarea' ? <textarea  {...input} {...props} />
            : element === 'autocomplete' ? <AutoCompletePlaces input={input} meta={meta} {...props} /> : null }

            {hasError && <span >{meta.error}</span>}
            
        </div>
    )
    
}
