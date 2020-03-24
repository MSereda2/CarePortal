import React from 'react';
import style from './btnMain.module.css';


const BtnMain = (props) => {

    return(
        <button className={`${style.btnMain}`}>
            <span>Создать Пост</span>
        </button>
    )
}

export default BtnMain;