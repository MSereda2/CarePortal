import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

export const withSubmitForm = (Componet) => {

    let RedirectComponent = (props) => {
        if(props.submitSucceeded) {return <Redirect to='/' /> } 

        return <Componet {...props} />
    }

    return connect(mapStateToSubmitForm, {})(RedirectComponent)
}

const mapStateToSubmitForm = state => ({
    isSubmit: state.form.createTask
})