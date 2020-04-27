import React from 'react';
import {connect} from 'react-redux';


import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';


const WithSpiner = (Component) => {

  let WithSpiner = (props) => {
    if(props.isFetching) {
      return( 
        <SpinnerOverlay>
          <SpinnerContainer />
       </SpinnerOverlay>)

    } else {
      return (<Component {...props} />)
    }
  }

  return WithSpiner;
}


export default WithSpiner;