import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

export const withAuthRedirect = (Component) => {

    let RedirectComponent = (props) => {
        if(!props.isAuth) {return <Redirect to='/signin' />}
        
        return(<Component {...props} />)
    }

    return connect(mapStateToPropsForRedirect, {})(RedirectComponent)
}

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.login.userId
})