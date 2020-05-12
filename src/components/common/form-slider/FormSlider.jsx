import React from 'react';
import style from './formSlider.module.scss';
import 'rc-slider/assets/index.css';
import Slider, {Range} from 'rc-slider';


const FormSlider = ({input, meta, element, ...props}) => {

    const marks = {
        0: <strong>0°C</strong>,
        10: '15мин',
        20: '30мин',
        30: '60мин',
        40: '90мин',
        50: '3ч',
        60: '5ч',
        70: '10ч',
        80: '18ч',
        90: '1 день',
        100: {
          label: <strong>2 дня</strong>,
        },
    }

    const [value,setValue] = React.useState({
        min: 0,
        max: 100,
    })
    const [inputValue,setInputValue] = React.useState(null)

    const onSliderChange = (value) => {
       setInputValue(value);
    }


    return(
        <div className={style.slideContainer}>
            <h4 className={style.heading}>Время на выполнения задания</h4>
            <div className={style.inputsTime}>
                <div className={style.timeInput}>
                     <label className={style.timeInput__label} htmlFor="days">days</label>
                     <input name="days" type="text"/>
                </div>
                <div className={style.timeInput}>
                     <label className={style.timeInput__label} htmlFor="hours">hours</label>
                     <input  name="hours" type="text"/>
                </div>
                <div className={style.timeInput}>
                     <label  className={style.timeInput__label} htmlFor="minutes">minutes</label>
                     <input value={inputValue} name="minutes" type="text"/>
                </div>
            </div>
            <Slider
            marks={marks}
            min={value.min} max={value.max}
            onChange={onSliderChange}
        />
        </div>
    )
    
}

export default FormSlider;