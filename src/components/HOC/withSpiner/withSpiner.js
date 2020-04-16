import React from 'react';
import {connect} from 'react-redux';


import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// const WithSpiner = WrappedComponent => ({isLoading, ...otherProps}) => {
//   return isLoading ? (
//     <SpinnerOverlay>
//       <SpinnerContainer />
//     </SpinnerOverlay>) : (
//       <WrappedComponent {...otherProps} />
//     )
// }

const WithSpiner = (Component) => {

  let WithSpiner = (props) => {
    if(props.INITIALIZED) {
      return <Component {...props} />
    } else {
      return( 
      <SpinnerOverlay>
        <SpinnerContainer />
     </SpinnerOverlay>)
    }
  }

  return connect(mapStateToProps, {})(WithSpiner);
}

const mapStateToProps = state => ({
  INITIALIZED: state.app.INITIALIZED
})

export default WithSpiner;