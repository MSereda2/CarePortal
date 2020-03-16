// Packgages
import React, { Component } from "react";
import style from "./App.css";
import {connect} from 'react-redux';
import { Route, BrowserRouter } from "react-router-dom";


// Components
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Advanced from './pages/Advanced/Advanced';
import SignIn from './components/SignIn/SignIn';
import { auth } from './firebase/firebase.utils';

// Actions
import {setUserAC} from './redux/reducers/login/login_actions';

class App extends Component {

  constructor(props) {
    super(props);
  
  }

  unsubscribeFromAuth = null;

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.props.setUserAC(user)
    })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <BrowserRouter>
        <div className={style.container}>
          <Nav {...this.props} />
          <div className={style.mainWindow}>
              <Route path="/main" render={() => <Main />} />
              <Route path="/advanced" render={() => <Advanced />} />
              <Route path="/signin" render={() => <SignIn />} />
          </div>
        </div >
      </BrowserRouter>
      
    )   
  }
  
}

const mapStateToProps = (state) => ({
  nav: state.nav,
  profileImg: state.login.profileImg
})

export default connect(mapStateToProps, {setUserAC})(App);
