import React from 'react';
import style from './signIn.module.css';

import singIn from '../../assets/signin-image.jpg'

import {signInWithGoogle} from '../../firebase/firebase.utils.js';
import FormInput from '../common/formInput/FormInput';
import FormCheckBox from '../common/formCheckBox/FormCheckBox';

const SingIn = (props) => (
    <div className={style.singIn}>
        <div className={style.left_column}>
            <img src={singIn} alt=""/>
        </div>
        <div className={style.right_column}>
            <h2 className={style.singup_heading}>Войти</h2>
            <form action="">
                <FormInput />
                <FormInput />
                <FormCheckBox />
                
                <button>Войти</button>
            </form>
            <div>
                <button onClick={signInWithGoogle}>g</button>
                <button onClick={signInWithGoogle}>vk</button>
                <button onClick={signInWithGoogle}>f</button>
            </div>
        </div>

    </div>
)

export default SingIn;