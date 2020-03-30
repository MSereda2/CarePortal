import React from 'react';
import style from './btnMain.module.scss';


const BtnMain = (props) => {

    return(
        <button onClick={() => {return props.createTaskShowModal ? props.createTaskShowModal() : null}} className={`${style.btnMain}`}>
            <span>Создать Пост</span>
        </button>
    )
}

export default BtnMain;