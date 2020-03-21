// Packages
import {NavLink} from 'react-router-dom';
import React from 'react';

// Style
import style from './authForm.module.css';

// Firebase
import {signInWithGoogle} from '../../firebase/firebase.utils.js';

// Components 
import FormInput from '../common/formInput/FormInput';
import BtnForm from '../common/btnForm/btnForm';

const AuthForm = (props) => (
    <div className={style.authContainer}>
        <div className={style.left_column}>
            <img src={props.formImg} alt=""/>
            <NavLink className={style.nav_link} to={`${props.signUp ? '/signin' : '/signup'}`}>{props.textForm}</NavLink>
        </div>
        <div className={style.right_column}>
            <form>
                <h2 className={style.auth_heading}>{props.textAuth}</h2>
                {props.signUp
                 ?
                    <>
                        <FormInput icon={'fa fa-user'} placeholder='Твой имя' />
                        <FormInput icon={'fa fa-envelope'} placeholder='Твой почта' />
                        <FormInput icon={'fa fa-key'} placeholder='Пароль'/>
                        <FormInput icon={'fa fa-key'} placeholder='Потверждения пароля'/>
                        <BtnForm btnText='Зарегистривоться' />
                    </>
                :   <>
                        <FormInput icon={'fa fa-user'} placeholder='твой имя' />
                        <FormInput icon={'fa fa-key'} placeholder='твой пароль'/>
                        <BtnForm btnText='Войти' />

                    </>
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

export default AuthForm;