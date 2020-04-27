import React from 'react';
import style from './formSlider.module.scss';

const FormSlider = ({input, meta, element, ...props}) => {

    return(
        <div className={style.slideContainer}>
            <input {...input} {...props}  className={style.slider} id="myRange" />
            <p className={style.timeRange}>Время : {!input.value ? 0 : input.value} мин</p>
        </div>
    )
    
}

export default FormSlider;