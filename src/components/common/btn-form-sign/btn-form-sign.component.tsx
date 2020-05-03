import React, {FC} from 'react';
import style from './btn-form-sign.module.scss';

type propsType = {
    btnText: string
}

const BtnFormSign: FC<propsType> = ({btnText}) => (
    <div className={style.btnFormContainer}>
        <button className={style.btnForm}>{btnText}</button>
    </div>
)

export default BtnFormSign;