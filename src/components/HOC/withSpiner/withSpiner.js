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
    if(props.isFetching) {
      console.log('2')
      return( 
        <SpinnerOverlay>
          <SpinnerContainer />
       </SpinnerOverlay>)

    } else {
      return (<Component {...props} />)
    }
  }

  return WithSpiner;
  // return connect(mapStateToProps, {})(WithSpiner);
}

// const mapStateToProps = state => ({
//   INITIALIZED: state.app.INITIALIZED
// })

export default WithSpiner;