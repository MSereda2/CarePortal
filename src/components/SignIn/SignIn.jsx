import React from 'react';
import style from './signIn.module.css';


import {signInWithGoogle} from '../../firebase/firebase.utils.js';
import FormInput from '../common/formInput/FormInput';
import BtnForm from '../common/btnForm/btnForm';

const SingIn = (props) => (
    <div className={style.singIn}>
        <div className={style.left_column}>
            <img src={props.formImg} alt=""/>
            <p>{props.textForm}</p>
        </div>
        <div className={style.right_column}>
            <form action="">
                <h2 className={style.singup_heading}>{props.textAuth}</h2>
                {props.signUp ?
                    <>
                    <FormInput icon={'fa fa-user'} placeholder='Твой имя' />
                    <FormInput icon={'fa fa-envelope'} placeholder='Твой почта' />
                    <FormInput icon={'fa fa-key'} placeholder='Пароль'/>
                    <FormInput icon={'fa fa-key'} placeholder='Потверждения пароля'/>
                    <BtnForm />
                    </>
                : <><FormInput icon={'fa fa-user'} placeholder='твой имя' />
                    <FormInput icon={'fa fa-key'} placeholder='твой пароль'/></>
                }
                            
            </form>
            {props.showSocial && <div className={style.socialLogin}>
                <span>Войти с помощью</span>
                <button onClick={signInWithGoogle}><i className='fa fa-google'></i></button>
                <button onClick={signInWithGoogle}><i className='fa fa-vk'/></button>
            </div>}
            
        </div>

    </div>
)

export default SingIn;