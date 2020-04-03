import React from 'react';
import style from './btnMain.module.scss';


const BtnMain = ({reset,pristine,submitting}) => {

    return(
        <button  disabled={pristine || submitting} className={`${style.btnMain}`}>
            <span>Создать Пост</span>
        </button>
    )
}

export default BtnMain;