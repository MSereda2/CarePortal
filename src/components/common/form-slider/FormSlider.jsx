import React from 'react';
import style from './formSlider.module.scss';

const FormSlider = ({input, meta, element, ...props}) => {

    const [minutes, setMinutes] = React.useState('');
    let days = '';
    let hours = '';

    let timeInput = (e) => {
        let zone = e.target.value;
        if(zone < 100) {
            let minutesValue = 
           setMinutes(zone);
        }
        
    }


    return(
        <div className={style.slideContainer}>
            <h4 className={style.heading}>Время на выполнения задания</h4>
            <div className={style.inputsTime}>
                <div className={style.timeInput}>
                     <label className={style.timeInput__label} for="days">days</label>
                     <input name="days" type="text"/>
                </div>
                <div className={style.timeInput}>
                     <label className={style.timeInput__label} for="hours">hours</label>
                     <input name="hours" type="text"/>
                </div>
                <div className={style.timeInput}>
                     <label  className={style.timeInput__label} for="minutes">minutes</label>
                     <input value={minutes} name="minutes" type="text"/>
                </div>
            </div>
            <input onChange={timeInput} className={style.slider} type="range" id="myRange" />
            <ul className={style.data} id="myRange">
                <li className={style.dataItem}>15min</li>
                <li className={style.dataItem}>30min</li>
                <li className={style.dataItem}>60min</li>
                <li className={style.dataItem}>90min</li>
                <li className={style.dataItem}>3h</li>
                <li className={style.dataItem}>5h</li>
                <li className={style.dataItem}>10h</li>
                <li className={style.dataItem}>18h</li>
                <li className={style.dataItem}>1d</li>
                <li className={style.dataItem}>2d</li>  
            </ul>
        </div>
    )
    
}

export default FormSlider;