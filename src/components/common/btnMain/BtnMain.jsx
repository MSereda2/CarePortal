import style from './btnMain.module.scss';
import React from 'react';


const BtnMain = (props) => {

    return(
        <>
        <button className={`${style.btnMain}`}>
            <span>Создать Пост</span>
        </button>
        </> 

    )
}

export default BtnMain;