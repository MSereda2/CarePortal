import React from 'react';
import style from './btnMain.module.scss';


const BtnMain = (props) => {

    return(
        <button onClick={() => {props.createTaskShowModal()}} className={`${style.btnMain}`}>
            <span>Создать Пост</span>
        </button>
    )
}

export default BtnMain;