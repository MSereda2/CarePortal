import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

export const withAuthRedirect = (Component) => {

    let RedirectComponent = (props) => {
        if(!props.isAuth) {return <Redirect to='/signin' />}
        console.log(props.isAuth)
        return(<Component {...props} />)
    }

    return connect(mapStateToProps, {})(RedirectComponent)
}

const mapStateToProps = (state) => ({
    isAuth: state.login.isAuth
})