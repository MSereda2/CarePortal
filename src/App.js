import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

// COMPONENTS
import Header from "./components/header/Header.component";
import SideBar from "./components/sidebar/SideNav";
import TaskPage from "./components/pages/taskPage/TaskPage";


function App(props) {
  return (
    <div className="container">
      <Header header={props.header} />
      <SideBar sideBar={props.sideBar} />
      <TaskPage />
    </div>
  );
}
const mapStateToProps = state => ({
  header: state.header,
  sideBar: state.sideBar,
  taskPage: state.taskPage,
});
export default connect(mapStateToProps)(App);
