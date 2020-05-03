import React, {FC} from 'react';
import style from './circleImg.module.scss';

type propTypes = {
    img: string
}

let CircleImg: FC<propTypes> = ({img}) => (
    <div className={style.profile}>
        <img src={img} alt="circleImg"/>
    </div>
)

export default CircleImg;