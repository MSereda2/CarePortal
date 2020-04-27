import React from 'react';
import style from './circleImg.module.scss';

let CircleImg = (props) => (
    <div className={style.profile}>
        <img src={props.img} alt="circleImg"/>
    </div>
)

export default CircleImg;