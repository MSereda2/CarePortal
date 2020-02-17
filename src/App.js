import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { ReactiveBase } from '@appbaseio/reactivesearch';
// COMPONENTS
import Header from "./components/header/Header.component";
import TaskPage from "./components/pages/taskPage/TaskPage";


function App(props) {
  return (
    <div className="container">
      <ReactiveBase
          app="yelp-app"
          credentials="hkXdk3vcA:a32683f3-c8ad-45db-8c86-2ac2c0f45e0c"
          type="yelp-app"
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
