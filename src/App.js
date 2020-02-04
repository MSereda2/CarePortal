import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

// COMPONENTS
import Nav from "./components/nav/nav.component";
import TaskContainer from "./components/taskContainer/TaskContainer.component";
import MyMap from "./components/map/MapGetLocation";
import SideBar from "./components/sidebar/SideNav";

function App(props) {
  return (
    <div className="container">
      <Nav nav={props.nav} profileImg={props.user.profileImg} />
      <SideBar />
      <TaskContainer task={props.task} />
      <MyMap google={props.google}
        center={{lat: 45.039268, lng: 38.987221}}
        height='100%'
        zoom={16} />
    </div>
  );
}
const mapStateToProps = state => ({
  user: state.user,
  nav: state.nav,
  task: state.task,
  map: state.map
});
export default connect(mapStateToProps)(App);
