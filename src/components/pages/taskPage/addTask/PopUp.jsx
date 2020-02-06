import React from 'react';
import PopUp from "reactjs-popup";
import CreateTask from "./createTask/CreateTask";
import style from "./popUp.module.css";

const Popup = props => (
    <PopUp
    trigger={
      <button className={style.create_post}>
        Create Task
        <i className="fa fa-plus"></i>
      </button>
    }
    modal
    closeOnDocumentClick
    contentStyle={{ padding: 0, width: `70%` }}>

    {close => <CreateTask close={close} />}
    
  </PopUp>
)

export default Popup;