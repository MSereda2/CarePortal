// Packgages
import React, { Component } from "react";
import {connect} from 'react-redux';
import { Route, BrowserRouter, Redirect } from "react-router-dom";

// Style
import style from "./App.css";

// Components
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Advanced from './pages/Advanced/Advanced';
import AuthForm from './components/AuthForm/AuthForm';

// Firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// Actions
import {setUserAC} from './redux/reducers/login/login_actions';

// Assets
import singIn from './assets/signin-image.jpg';
import signup from './assets/signup-image.jpg';


class App extends Component {

  constructor(props) {
    super(props);
  
  }

  unsubscribeFromAuth = null;

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     
      if(userAuth) {
         const userRef = await createUserProfileDocument(userAuth);
        

         userRef.onSnapshot(snapShot => {
          console.log(snapShot)
              this.props.setUserAC(snapShot.id, snapShot.data())
         })
      } else {
        this.props.setUserAC(userAuth)
      }
        
    })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromAuth()
  }

  render() {
   

    return (
        <div className={style.container}>
          <Nav {...this.props} />
          <div className={style.mainWindow}>
              <Route exact path="/" render={() => <Main />} />
              <Route path="/advanced" render={() => <Advanced />} />
              <Route path="/signin" render={() => { return !this.props.isAuth ? <AuthForm
                                                   textAuth={'Войти'}
                                                   textForm={'Создать акаунт'}
                                                   formImg={singIn}
                                                   showSocial={true}
                                                   />
                                                      : <Redirect to='/' />}} />
              <Route path="/signup" render={() => { return !this.props.isAuth ? <AuthForm
                                                     signUp={true}
                                                     textAuth={'Создать акаунт'}
                                                     textForm={'Уже есть акаунт?'}
                                                     formImg={signup}
                                                     showSocial={false}
                                                     signUpD={this.props.signUp}
                                                     /> : <Redirect to='/' />}} />
          </div>
        </div >      
    )   
  }
  
}

const mapStateToProps = (state) => ({
  nav: state.nav,
  profileImg: state.login.profileImg,
  isAuth: state.login.userId,
  signUp: state.signUp
})

export default connect(mapStateToProps, {setUserAC})(App);

// textAuth={'Войти'}
// textForm={'Создать акаунт'}
// formImg={singIn}
// showSocial={true} />