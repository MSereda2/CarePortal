import React from 'react';
import style from './circleImg.module.css';

let CircleImg = (props) => (
    <div className={style.profile}>
        <img src={props.img} alt="circleImg"/>
    </div>
)

export default CircleImg;