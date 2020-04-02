import React from 'react';
import style from './formInput.module.scss';

export const FormsControl = ({input, meta, element, ...props}) => {


    const hasError = meta ? meta.touched && meta.error : null ;

    // let createFormElement = () => {
    //     switch(element) {
    //         case element === "input":
    //           return  <input {...props} {...input} />
    //         case element === "textarea":
    //           return  <textarea />
    //         default: return null;
    //     }
    // }

    return(
        <div className={` ${props.styleTask ? style.margin_bottom_small : 'null'} ${style.form_group}
         ${hasError && style.error}`}>
            <label ><i className={props.icon}></i></label>
            
            {element === 'input' ? <input {...input} {...props} />
            : element === 'textarea' ? <textarea {...input} {...props} /> : null }

            {hasError && <span >{meta.error}</span>}
            
        </div>
    )
    
}
