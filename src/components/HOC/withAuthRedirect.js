import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {getIsAuth} from '../../redux/reducers/login/login_selectors'

export const withAuthRedirect = (Component) => {

    let RedirectComponent = (props) => {
        if(!props.isAuth) {return <Redirect to='/signin' />}
        
        return(<Component {...props} />)
    }

    return connect(mapStateToPropsForRedirect, {})(RedirectComponent)
}

const mapStateToPropsForRedirect = (state) => ({
    isAuth: getIsAuth(state)
})   