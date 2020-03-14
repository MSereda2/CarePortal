import React from 'react';
import style from './signUp.module.css';

import {signInWithGoogle} from '../../firebase/firebase.utils.js';

const SingUp = (props) => (
    <div className={style.singUp}>
        <div className={style.left_column}>
            <h2 className={style.singUp_heading}>Регестрация</h2>
            <form action="">
                <input type="text" placeholder='Ваше имя'/>
                <input type="text" placeholder='Ваша почта'/>
                <input type="password" placeholder='Пароль'/>
                <input type="password" placeholder='Повторите пароль'/>
                <input type="checkbox"/>
                <span>I agree all statements in Terms of service</span>
                <button>Регестрация</button>

            </form>
            <button onClick={signInWithGoogle}>Регестрация с google</button>
        </div>

    </div>
)

export default SingUp;