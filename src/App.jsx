// Packgages
import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import {compose} from 'redux';

// Style
import style from "./App.scss";

// Components
import Nav from "./components/Nav/Nav";
import AuthContainer from "./components/AuthForm/AuthContainer/AuthContainer";
import Main from "./components/pages/Main/Main";
import Advanced from "./components/pages/Advanced/Advanced";
import CreateTask from "./components/CreateTask/CreateTask";

import {initializeThunk} from './redux/reducers/app/app_thunk';

// Login Thunk
import {
  unsubscribeFromAuth,
} from "./redux/reducers/login/login_thunk";

import { getNav } from "./redux/reducers/nav/nav_selectors";
import {
  getProfileImg,
  getIsAuth,
} from "./redux/reducers/login/login_selectors";
import WithSpiner from './components/HOC/withSpiner/withSpiner'

import { SpinnerContainer, SpinnerOverlay } from './components/HOC/withSpiner/with-spinner.styles';


class App extends Component {
  componentDidMount = () => {
    this.props.initializeThunk()
  };

  componentWillUnmount = () => {
    this.props.unsubscribeFromAuth();
  };

  render() {
    if(!this.props.isInitilized) {
      return (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      )
    }
    return (
      <div className={style.container}>
        <Nav {...this.props} />
        <div className={style.mainWindow}>
          <Route exact path="/" render={() => <Main />} />
          <Route path="/advanced" render={() => <Advanced />} />
          <Route
            path="/signin"
            render={() =>
              !this.props.isAuth ? (
                <AuthContainer signInForm />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/signup"
            render={() =>
              !this.props.isAuth ? (
                <AuthContainer signUpForm />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route path="/createTask" render={() => <CreateTask />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isInitilized: state.app.INITIALIZED,
  nav: getNav(state),
  profileImg: getProfileImg(state),
  isAuth: getIsAuth(state),
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    initializeThunk,
    unsubscribeFromAuth,
  }),

)(App)
