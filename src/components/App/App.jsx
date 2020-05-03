// Packgages
import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import { compose } from 'redux';

// Style
import style from "./App.scss";

// Components
import Nav from "../nav/nav.component";
import AuthContainer from "../auth-form/AuthContainer/AuthContainer";
import Main from "../pages/Main/Main";
import Advanced from "../pages/Advanced/Advanced";
import CreateTask from "../create-task/CreateTask";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

// Thunk Creator
import { initializeThunk } from '../../redux/reducers/app/app_thunk';
import { unsubscribeFromAuth, } from "../../redux/reducers/login/login_thunk";

// Selectors
import { getNav } from "../../redux/reducers/nav/nav_selectors";
import { getProfileImg, getIsAuth, } from "../../redux/reducers/login/login_selectors";
import {getIsInitilized} from '../../redux/reducers/app/app_selectors';

// Hoc
import { SpinnerContainer, SpinnerOverlay } from '../hoc/withSpiner/with-spinner.styles';

class App extends Component {
  componentDidMount = () => {
    this.props.initializeThunk()
  };

  componentWillUnmount = () => {
    this.props.unsubscribeFromAuth();
  };

  render() {
    if (!this.props.isInitilized) {
      return (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      )
    }
    return (
      <div className={style.container}>
        <Nav isAuth={this.props.isAuth} />
        <div className={style.mainWindow}>
          <Route exact path="/" render={() => <Main />} />
          <Route path="/advanced" render={() => <Advanced />} />
          <Route path="/signin"
            render={() =>
              !this.props.isAuth ? (
                <AuthContainer signInForm />
              ) : (
                  <Redirect to="/" />
                )
            } />
          <Route path="/signup"
            render={() =>
              !this.props.isAuth ? (
                <AuthContainer signUpForm />
              ) : (
                  <Redirect to="/" />
                )
            } />
          <Route path="/createTask" render={() => <CreateTask />} />
          <Route path="/profile" render={() => <ProfilePage />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isInitilized: getIsInitilized(state),
  isAuth: getIsAuth(state),
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    initializeThunk,
    unsubscribeFromAuth,
  }),

)(App)
