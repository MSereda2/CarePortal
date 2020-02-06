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
      <Header headerState={props.header} />
      <SideBar />
      <TaskPage />
    </div>
  );
}

const mapStateToProps = state => ({
  header: state.header,
  taskPage: state.taskPage,
});
export default connect(mapStateToProps, null)(App);
