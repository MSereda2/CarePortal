import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

// COMPONENTS
import Nav from "./components/nav/nav.component";
import TaskContainer from "./components/taskContainer/TaskContainer.component";
import MyMap from "./components/map/Map.component";
import SideBar from "./components/sidebar/SideNav";

function App(props) {
  return (
    <div className="container">
      <Nav nav={props.nav} profileImg={props.user.profileImg} />
      <SideBar />
      <TaskContainer task={props.task.taskContainer} nav={props.nav} />
      <MyMap />
    </div>
  );
}
const mapStateToProps = state => ({
  user: state.user,
  nav: state.nav,
  task: state.task
});
export default connect(mapStateToProps)(App);
