// Packages
import {NavLink} from 'react-router-dom';
import React from 'react';

// Style
import style from './authForm.module.scss';

// Firebase
import {signInWithGoogle} from '../../../api/firebase/firebase.utils';


// Component
import SignUpForm from './SignForm/SignUpForm';
import SignInForm from './SignForm/SignInForm';

const AuthForm = (props) => {

    return(
        <div className={style.authContainer}>
        <div className={style.left_column}>
            <img src={props.formImg} alt=""/>
            <NavLink className={style.nav_link} to={`${props.signUpForm ? '/signin' : '/signup'}`}>{props.textForm}</NavLink>
        </div>
        <div className={style.right_column}>
            {props.signUpForm 
                ? <SignUpForm onSubmit={props.signUp} textAuth={props.textAuth} />
                : <SignInForm onSubmit={props.signIn} textAuth={props.textAuth} />}   
            {props.showSocial && <div className={style.socialLogin}>
                <span>Войти с помощью</span>
                <button onClick={signInWithGoogle}><i className='fa fa-google'></i></button>
                <button onClick={signInWithGoogle}><i className='fa fa-vk'/></button>
            </div>
            }
            
        </div>

    </div>
    )
                                                                                                            
}

export default AuthForm;