// Packages
import {NavLink} from 'react-router-dom';
import React from 'react';

// Style
import style from './authForm.module.css';

// Firebase
import {createUserProfileDocument,signInWithGoogle, auth} from '../../firebase/firebase.utils.js';


// Component
import Form from './Form';
const AuthForm = (props) => {

    const onSubmit = async (formData) => {

        const {name, email, password, passwordConfirm,} = formData;

        if(password !== passwordConfirm) {
            alert('password does not match')
            return
        }

       try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password)

            createUserProfileDocument(user, {name})
       } catch(error) {
            console.error(error)
       }

    }


    return(
        <div className={style.authContainer}>
        <div className={style.left_column}>
            <img src={props.formImg} alt=""/>
            <NavLink className={style.nav_link} to={`${props.signUp ? '/signin' : '/signup'}`}>{props.textForm}</NavLink>
        </div>
        <div className={style.right_column}>
            <Form onSubmit={onSubmit} textAuth={props.textAuth} signUp={props.signUp} />
            
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