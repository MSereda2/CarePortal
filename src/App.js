import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

// COMPONENTS
import Header from "./components/header/Header.component";
import TaskPage from "./components/taskPage/TaskPage.component";
import SideBar from "./components/sidebar/SideNav";

function App(props) {
  return (
    <div className="container">
      <Header />
      <SideBar />
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
