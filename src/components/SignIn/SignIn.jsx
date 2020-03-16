import React from 'react';
import style from './signIn.module.css';

import {signInWithGoogle} from '../../firebase/firebase.utils.js';
import FormInput from '../common/formInput/FormInput';

const SingIn = (props) => (
    <div className={style.singIn}>
        <div className={style.left_column}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex, corporis saepe explicabo quia dolore nesciunt sint veniam! Possimus accusantium quasi minima laboriosam explicabo eum. Ullam qui adipisci voluptatibus nostrum!
        </div>
        <div className={style.right_column}>
            <h2 className={style.singup_heading}>Войти</h2>
            <form action="">
                <FormInput />
                <FormInput />
                
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