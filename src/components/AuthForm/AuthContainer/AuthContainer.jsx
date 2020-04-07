import React from 'react';
import {connect} from 'react-redux';

// Assets
import signInImg from '../../../assets/signin-image.jpg';
import signUpImg from '../../../assets/signup-image.jpg';
import AuthForm from '../AuthForm/AuthForm';

// Thunk login
import {signUpThunk, signInThunk} from '../../../redux/reducers/login/login_thunk';



const AuthContainer = (props) => {

    const signUp = async (formData) => {
        props.signUpThunk(formData);
    }

    const signIn = async (formData) => {
        props.signInThunk(formData);

    }

   

    return(
        <>
        {props.signUpForm

         ? <AuthForm signUp={signUp} signUpForm={true} textAuth={'Создать акаунт'}
           textForm={'Уже есть акаунт?'} formImg={signUpImg} showSocial={false}  /> 

         : <AuthForm textAuth={'Войти'} signIn={signIn} textForm={'Создать акаунт'}
           formImg={signInImg} showSocial={true}  />
         }
        </>
    )
   
}

export default connect(null, {signInThunk, signUpThunk})(AuthContainer);
