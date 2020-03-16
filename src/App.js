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

import singIn from './assets/signin-image.jpg';
import signup from './assets/signup-image.jpg';


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
              <Route path="/signin" render={() => <SignIn
                                                     textAuth={'Войти'}
                                                     textForm={'Создать акаунт'}
                                                     formImg={singIn}
                                                     showSocial={true} />}
                                                      />
              <Route path="/signup" render={() => <SignIn
                                                     signUp={true}
                                                     textAuth={'Создать акаунт'}
                                                     textForm={'Уже есть акаунт?'}
                                                     formImg={signup}
                                                     showSocial={false}
                                                     />} />
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
