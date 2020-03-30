// Packages
import {NavLink} from 'react-router-dom';
import React from 'react';

// Style
import style from './authForm.module.scss';

// Firebase
import {createUserProfileDocument,signInWithGoogle, auth} from '../../api/firebase/firebase.utils.js';


// Component
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const AuthForm = (props) => {

    const onSubmit = async (formData) => {

        const {name, secondName, email, password, passwordConfirm, number} = formData;

        if(password !== passwordConfirm) {
            alert('password does not match')
            return
        }

       try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password)

            createUserProfileDocument(user, {name, secondName, number})
       } catch(error) {
            console.error(error)
       }

    }

    const onSignIn = async (formData) => {
        const {email, password} = formData;
        console.log(formData)

        try {
            await auth.signInWithEmailAndPassword(email, password)
        } catch(error) {
            alert(error)
        }
    }

    return(
        <div className={style.authContainer}>
        <div className={style.left_column}>
            <img src={props.formImg} alt=""/>
            <NavLink className={style.nav_link} to={`${props.signUp ? '/signin' : '/signup'}`}>{props.textForm}</NavLink>
        </div>
        <div className={style.right_column}>
            {props.signUp
             ? <SignUpForm onSubmit={onSubmit} textAuth={props.textAuth} />

             : <SignInForm onSubmit={onSignIn} textAuth={props.textAuth} />
}
            
            
            {props.showSocial && <div className={style.socialLogin}>
                <span>Войти с помощью</span>
                <button onClick={signInWithGoogle}><i className='fa fa-google'></i></button>
                <button onClick={signInWithGoogle}><i className='fa fa-vk'/></button>
            </div>}
            
        </div>

    </div>
    )
                                                                                                                                                                        
    
}

export default AuthForm;