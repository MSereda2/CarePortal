import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { ReactiveBase, SingleList } from '@appbaseio/reactivesearch';
// COMPONENTS
import Header from "./components/header/Header.component";
import TaskPage from "./components/pages/taskPage/TaskPage";


function App(props) {
  return (
    <div className="container">
      <ReactiveBase
          app="earthquake"
          credentials="dshr057Nz:e18bbbbe-5d55-4234-a17e-4d64fb2222c7"
          mapKey="AIzaSyC-IiT7wOM_QB-4nOft1xvrtM6K39NLrWY">

        <Header headerState={props.header} />
        <TaskPage />
      </ReactiveBase>
      
    </div>
  );
}

const mapStateToProps = state => ({
  header: state.header,
  taskPage: state.taskPage,
});
export default connect(mapStateToProps, null)(App);
