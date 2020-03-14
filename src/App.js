// Packgages
import React, { Component } from "react";
import style from "./App.css";
import {connect} from 'react-redux';
import { Route, BrowserRouter } from "react-router-dom";


// Components
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Advanced from './pages/Advanced/Advanced';
import SignUp from './components/SignUp/SignUp';
import { auth } from './firebase/firebase.utils'

class App extends Component {

  constructor(props) {
    super(props);
  
  }

  render() {
    return (
      <BrowserRouter>
        <div className={style.container}>
          <Nav {...this.props} />
          <div className={style.mainWindow}>
              <Route path="/main" render={() => <Main />} />
              <Route path="/advanced" render={() => <Advanced />} />
              <Route path="/signup" render={() => <SignUp />} />
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

export default connect(mapStateToProps, {})(App);
