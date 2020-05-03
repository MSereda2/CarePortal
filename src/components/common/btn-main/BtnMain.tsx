import style from './btnMain.module.scss';
import React, {FC} from 'react';


type propsType = {
    onChangeInfo: () => void,
    text: string
}

const BtnMain:FC<propsType> = ({onChangeInfo, text}) => {

    return(
        <>
        <button onClick={onChangeInfo} className={`${style.btnMain}`}>
            <span>{text}</span>
        </button>
        </> 

    )
}

export default BtnMain;